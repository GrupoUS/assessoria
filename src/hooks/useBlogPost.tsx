
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { toast } from '@/components/ui/use-toast';

export const useBlogPost = (slug: string | undefined) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        if (!slug) {
          console.error('Erro: Slug não fornecido');
          setError('URL inválida - artigo não especificado');
          return;
        }

        console.log('Buscando post com slug:', slug);
        
        // Sanitização do slug para evitar problemas
        const normalizedSlug = sanitizeSlug(slug);
        console.log('Slug normalizado para busca:', normalizedSlug);
        
        // Primeiro tenta com o método ilike para busca insensível a case
        const { data, error: queryError } = await supabase
          .from('blog_posts')
          .select('*')
          .ilike('slug', normalizedSlug)
          .maybeSingle();

        if (queryError) {
          console.error('Erro Supabase:', queryError);
          setError('Erro ao carregar o artigo. Por favor, tente novamente mais tarde.');
          return;
        }

        if (!data) {
          console.log('Post não encontrado com slug normalizado:', normalizedSlug);
          
          // Tenta busca exata como fallback
          const { data: exactData, error: exactError } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('slug', slug)
            .maybeSingle();
            
          if (exactError) {
            console.error('Erro na busca exata:', exactError);
            setError('Erro ao carregar o artigo.');
            return;
          }
          
          // Tenta busca usando like com % para ser mais flexível
          if (!exactData) {
            console.log('Post não encontrado com slug (tentativa exata):', slug);
            
            const { data: likeData, error: likeError } = await supabase
              .from('blog_posts')
              .select('*')
              .like('slug', `%${normalizedSlug}%`)
              .maybeSingle();
              
            if (likeError) {
              console.error('Erro na busca com like:', likeError);
              setError('Erro ao carregar o artigo.');
              return;
            }
            
            if (!likeData) {
              // Log para debug dos slugs disponíveis
              const { data: allPosts } = await supabase
                .from('blog_posts')
                .select('slug, title')
                .limit(10);
                
              if (allPosts && allPosts.length > 0) {
                console.log('Slugs disponíveis no banco:', allPosts.map(p => ({ slug: p.slug, title: p.title })));
              } else {
                console.log('Nenhum post disponível no banco de dados.');
              }
              
              setError('Artigo não encontrado. Este artigo pode ter sido removido ou não existe.');
              return;
            }
            
            console.log('Post encontrado com busca parcial:', likeData);
            setPost(mapToPostModel(likeData));
            return;
          }
          
          // Usa o resultado da busca exata
          console.log('Post encontrado com correspondência exata:', exactData);
          setPost(mapToPostModel(exactData));
          return;
        }
        
        console.log('Post encontrado:', data);
        setPost(mapToPostModel(data));
      } catch (err) {
        console.error('Erro ao buscar post:', err);
        setError('Erro ao buscar o artigo. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Função para sanitizar slugs
  const sanitizeSlug = (rawSlug: string): string => {
    let cleanSlug = rawSlug.trim().toLowerCase();
    
    // Remover caracteres especiais e substituir espaços por hífens
    cleanSlug = cleanSlug.replace(/[^\w\-]+/g, '-');
    
    // Remover hífens duplicados
    cleanSlug = cleanSlug.replace(/\-{2,}/g, '-');
    
    // Remover hífens no início e fim
    cleanSlug = cleanSlug.replace(/^\-+|\-+$/g, '');
    
    return cleanSlug;
  };

  // Função para mapear dados do Supabase para o modelo BlogPost
  const mapToPostModel = (data: any): BlogPost => {
    return {
      id: data.id || '',
      title: data.title || 'Sem título',
      slug: data.slug || '',
      excerpt: data.excerpt || '',
      content: data.content || 'Conteúdo não disponível',
      category: data.category || 'Geral',
      date: data.date || new Date(data.created_at).toLocaleDateString('pt-BR'),
      imageUrl: data.imageurl || '',
      created_at: data.created_at || new Date().toISOString(),
      updated_at: data.updated_at || new Date().toISOString()
    };
  };

  return { post, isLoading, error };
};
