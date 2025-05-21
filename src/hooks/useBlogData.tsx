
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { toast } from '@/components/ui/use-toast';

export const useBlogData = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoading(true);
        
        console.log('Iniciando busca de posts do blog');
        
        // Buscar todos os posts
        const { data: posts, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          console.error('Erro ao buscar posts:', error);
          toast({
            title: "Erro",
            description: "Não foi possível carregar os artigos do blog",
            variant: "destructive"
          });
          throw error;
        }
        
        if (posts && posts.length > 0) {
          console.log(`Encontrados ${posts.length} posts no banco de dados`);
          
          // Map the posts to our BlogPost type, ensuring proper field mapping
          const typedPosts: BlogPost[] = posts.map(post => {
            // Ensure slug is sanitized (remove spaces, etc.)
            const safeSlug = post.slug ? post.slug.trim().toLowerCase() : '';
            
            if (!safeSlug) {
              console.warn(`Post sem slug válido encontrado:`, post.title);
            }
            
            return {
              id: post.id,
              title: post.title,
              slug: safeSlug,
              excerpt: post.excerpt || '',
              content: post.content || '',
              category: post.category || 'Geral',
              date: post.date || new Date(post.created_at).toLocaleDateString('pt-BR'),
              imageUrl: post.imageurl || '', // Map from imageurl (lowercase in DB) to imageUrl (camelCase in our type)
              created_at: post.created_at,
              updated_at: post.updated_at
            };
          });
          
          console.log('Posts processados:', typedPosts.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
          
          // Definir posts em destaque (3 primeiros)
          setFeaturedPosts(typedPosts.slice(0, 3));
          
          // Definir posts recentes (próximos 3 depois dos em destaque)
          setRecentPosts(typedPosts.slice(3, 6));
          
          // Extrair categorias únicas de todos os posts
          const uniqueCategories = [...new Set(typedPosts.map(post => post.category).filter(Boolean))];
          setCategories(uniqueCategories);
        } else {
          console.log('Nenhum post encontrado no Supabase');
          setFeaturedPosts([]);
          setRecentPosts([]);
          setCategories([]);
          
          toast({
            title: "Aviso",
            description: "Nenhum artigo encontrado. Adicione posts no painel administrativo.",
          });
        }
      } catch (error) {
        console.error('Erro ao buscar dados do blog:', error);
        toast({
          title: "Erro",
          description: "Erro ao buscar dados do blog.",
        });
        
        // Em caso de erro, definir arrays vazios
        setFeaturedPosts([]);
        setRecentPosts([]);
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogData();
  }, []);

  return {
    featuredPosts,
    recentPosts,
    categories,
    isLoading
  };
};
