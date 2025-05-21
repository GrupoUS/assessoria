
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
        
        const posts = await fetchPosts();
        if (posts.length > 0) {
          distributePosts(posts);
        } else {
          handleNoPosts();
        }
      } catch (error) {
        handleError(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogData();
  }, []);

  // Fetch posts from Supabase
  const fetchPosts = async (): Promise<BlogPost[]> => {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Erro ao buscar posts:', error);
      throw error;
    }
    
    if (!posts || posts.length === 0) {
      return [];
    }
    
    console.log(`Encontrados ${posts.length} posts no banco de dados`);
    return mapPostsToModel(posts);
  };

  // Map database posts to BlogPost model
  const mapPostsToModel = (posts: any[]): BlogPost[] => {
    return posts.map(post => {
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
        imageUrl: post.imageurl || '',
        created_at: post.created_at,
        updated_at: post.updated_at
      };
    });
  };

  // Distribute posts into featured and recent categories
  const distributePosts = (posts: BlogPost[]) => {
    console.log('Posts processados:', posts.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
    
    // Define featured posts (first 3)
    setFeaturedPosts(posts.slice(0, 3));
    
    // Define recent posts (next 3 after featured)
    setRecentPosts(posts.slice(3, 6));
    
    // Extract unique categories
    const uniqueCategories = [...new Set(posts.map(post => post.category).filter(Boolean))];
    setCategories(uniqueCategories);
  };

  // Handle case when no posts are found
  const handleNoPosts = () => {
    console.log('Nenhum post encontrado no Supabase');
    setFeaturedPosts([]);
    setRecentPosts([]);
    setCategories([]);
    
    toast({
      title: "Aviso",
      description: "Nenhum artigo encontrado. Adicione posts no painel administrativo.",
    });
  };

  // Handle error cases
  const handleError = (error: any) => {
    console.error('Erro ao buscar dados do blog:', error);
    toast({
      title: "Erro",
      description: "Erro ao buscar dados do blog.",
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
    isLoading
  };
};
