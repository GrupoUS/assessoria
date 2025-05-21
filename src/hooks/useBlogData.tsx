import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { toast } from '@/components/ui/use-toast';

export const useBlogData = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null);
  const [diagnosticInfo, setDiagnosticData] = useState<any>(null);

  // Função para forçar um novo carregamento dos dados
  const refreshData = async () => {
    console.log('useBlogData: Forçando atualização dos dados do blog');
    setIsLoading(true);
    await fetchBlogData();
  };

  const fetchBlogData = async () => {
    try {
      setIsLoading(true);
      console.log('useBlogData: Iniciando busca de posts do blog');
      console.log('useBlogData: Cliente Supabase inicializado:', !!supabase);
      
      const startTime = new Date();
      console.log(`useBlogData: Horário de início da consulta: ${startTime.toISOString()}`);
      
      const posts = await fetchPosts();
      const endTime = new Date();
      console.log(`useBlogData: Horário de término da consulta: ${endTime.toISOString()}`);
      console.log(`useBlogData: Tempo da consulta: ${endTime.getTime() - startTime.getTime()}ms`);
      console.log(`useBlogData: Total de posts obtidos: ${posts.length}`);
      
      const diagnostics = {
        queryStart: startTime.toISOString(),
        queryEnd: endTime.toISOString(),
        queryDuration: endTime.getTime() - startTime.getTime(),
        postsCount: posts.length,
        postsIds: posts.map(p => p.id)
      };
      setDiagnosticData(diagnostics);
      
      if (posts.length > 0) {
        distributePosts(posts);
      } else {
        handleNoPosts();
      }
      
      setLastFetchTime(new Date());
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    fetchBlogData();
  }, []);

  // Fetch posts from Supabase
  const fetchPosts = async (): Promise<BlogPost[]> => {
    console.log('useBlogData: Executando consulta no Supabase para obter posts');
    
    // Verificar se o cliente Supabase está disponível
    if (!supabase) {
      console.error('useBlogData: Cliente Supabase não está disponível');
      throw new Error('Cliente Supabase não está disponível');
    }
    
    try {
      const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      console.log('useBlogData: Resposta completa da consulta:', { posts, error });
      
      if (error) {
        console.error('useBlogData: Erro ao buscar posts:', error);
        toast({
          title: "Erro na consulta",
          description: `Não foi possível buscar os posts: ${error.message}`,
          variant: "destructive"
        });
        throw error;
      }
      
      if (!posts || posts.length === 0) {
        console.log('useBlogData: Nenhum post encontrado na tabela blog_posts');
        return [];
      }
      
      console.log(`useBlogData: Encontrados ${posts.length} posts no banco de dados`, posts);
      return mapPostsToModel(posts);
    } catch (err) {
      console.error('useBlogData: Exceção ao buscar posts:', err);
      throw err;
    }
  };

  // Map database posts to BlogPost model with better handling of nulls and empty values
  const mapPostsToModel = (posts: any[]): BlogPost[] => {
    console.log('useBlogData: Iniciando mapeamento de posts para o modelo BlogPost');
    
    const mappedPosts = posts.map(post => {
      console.log('useBlogData: Processando post bruto:', post);
      
      // Tratamento seguro para slug
      let safeSlug = '';
      if (post.slug) {
        safeSlug = post.slug.trim().toLowerCase();
        // Remover caracteres especiais e espaços extras
        safeSlug = safeSlug.replace(/[^\w\-]+/g, '-');
        safeSlug = safeSlug.replace(/\-{2,}/g, '-');
        safeSlug = safeSlug.replace(/^\-+|\-+$/g, '');
      } else {
        // Se não tiver slug, gerar um a partir do título
        safeSlug = post.title 
          ? post.title.toLowerCase().replace(/[^\w\-]+/g, '-') 
          : `post-${post.id}`;
      }
      
      if (!safeSlug) {
        console.warn(`useBlogData: Post sem slug válido encontrado:`, post.title);
        safeSlug = `post-${post.id}`;
      }
      
      // Validação de campos obrigatórios ou valores padrão
      const mappedPost: BlogPost = {
        id: post.id || '',
        title: post.title || 'Sem título',
        slug: safeSlug,
        excerpt: post.excerpt || 'Sem descrição disponível',
        content: post.content || '',
        category: post.category || 'Geral',
        date: post.date || new Date(post.created_at).toLocaleDateString('pt-BR'),
        imageUrl: post.imageurl || '',
        created_at: post.created_at || new Date().toISOString(),
        updated_at: post.updated_at || new Date().toISOString()
      };
      
      console.log(`useBlogData: Post mapeado: ID=${mappedPost.id}, Título=${mappedPost.title}, Slug=${mappedPost.slug}`);
      return mappedPost;
    });
    
    console.log('useBlogData: Mapeamento finalizado. Total de posts mapeados:', mappedPosts.length);
    return mappedPosts;
  };

  // Distribute posts into featured and recent categories
  const distributePosts = (posts: BlogPost[]) => {
    console.log('useBlogData: Distribuindo posts entre destacados e recentes');
    
    // Define featured posts (first 3)
    const featured = posts.slice(0, 3);
    setFeaturedPosts(featured);
    console.log('useBlogData: Posts destacados:', featured.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
    
    // Define recent posts (next 3 after featured)
    const recent = posts.slice(3, 6);
    setRecentPosts(recent);
    console.log('useBlogData: Posts recentes:', recent.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
    
    // Extract unique categories
    const uniqueCategories = [...new Set(posts.map(post => post.category).filter(Boolean))];
    setCategories(uniqueCategories);
    console.log('useBlogData: Categorias disponíveis:', uniqueCategories);
  };

  // Handle case when no posts are found
  const handleNoPosts = () => {
    console.log('useBlogData: Nenhum post encontrado no Supabase');
    setFeaturedPosts([]);
    setRecentPosts([]);
    setCategories([]);
    
    toast({
      title: "Informação",
      description: "Nenhum artigo encontrado. Novos posts serão adicionados em breve.",
    });
  };

  // Handle error cases
  const handleError = (error: any) => {
    console.error('useBlogData: Erro ao buscar dados do blog:', error);
    toast({
      title: "Erro",
      description: "Erro ao carregar artigos do blog. Tente novamente mais tarde.",
      variant: "destructive"
    });
    
    // Set empty arrays on error
    setFeaturedPosts([]);
    setRecentPosts([]);
    setCategories([]);
  };

  return {
    featuredPosts,
    recentPosts,
    categories,
    isLoading,
    lastFetchTime,
    refreshData,
    diagnosticInfo
  };
};
