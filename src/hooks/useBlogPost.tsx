
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';

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
        
        // Normalize the slug for case-insensitive comparison
        const normalizedSlug = slug.trim().toLowerCase();
        
        // First try with normalized slug
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
          
          // Try with exact match as fallback
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
            
          if (!exactData) {
            console.log('Post não encontrado com slug (tentativa exata):', slug);
            
            // Log available slugs for debugging
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
          
          // Use o resultado da busca exata
          console.log('Post encontrado com correspondência exata:', exactData);
          
          const post: BlogPost = {
            id: exactData.id,
            title: exactData.title,
            slug: exactData.slug,
            excerpt: exactData.excerpt || '',
            content: exactData.content || '',
            category: exactData.category || 'Geral',
            date: exactData.date || new Date(exactData.created_at).toLocaleDateString('pt-BR'),
            imageUrl: exactData.imageurl || '',
            created_at: exactData.created_at,
            updated_at: exactData.updated_at
          };
          
          setPost(post);
          return;
        }
        
        console.log('Post encontrado:', data);
        // Map the data to our BlogPost type
        const post: BlogPost = {
          id: data.id,
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt || '',
          content: data.content || '',
          category: data.category || 'Geral',
          date: data.date || new Date(data.created_at).toLocaleDateString('pt-BR'),
          imageUrl: data.imageurl || '',
          created_at: data.created_at,
          updated_at: data.updated_at
        };
        
        setPost(post);
      } catch (err) {
        console.error('Erro ao buscar post:', err);
        setError('Erro ao buscar o artigo. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, isLoading, error };
};
