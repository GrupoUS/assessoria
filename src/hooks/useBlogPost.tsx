
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { toast } from '@/components/ui/use-toast';
import { sanitizeSlug } from '@/utils/blogUtils';

const isDev = process.env.NODE_ENV === 'development';

export const useBlogPost = (slug: string | undefined) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [diagnosticInfo, setDiagnosticInfo] = useState<any>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) {
        setError('Slug não fornecido');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        if (isDev) {
          console.log(`useBlogPost: Buscando post com slug: "${slug}"`);
        }
        
        const startTime = new Date();
        const safeSlug = sanitizeSlug(slug);
        
        if (isDev) {
          console.log(`useBlogPost: Executando consulta para slug '${safeSlug}'`);
        }
        
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .ilike('slug', safeSlug)
          .single();
        
        const endTime = new Date();
        
        if (isDev) {
          const diagnostics = {
            queryStart: startTime.toISOString(),
            queryEnd: endTime.toISOString(),
            queryDuration: endTime.getTime() - startTime.getTime(),
            slugQueried: safeSlug,
            resultFound: !!data,
            error: error ? error.message : null,
            rlsStatus: error && error.message.includes('permission denied') ? 'Bloqueado por RLS' : 'RLS funcionando normalmente'
          };
          setDiagnosticInfo(diagnostics);
          console.log('useBlogPost: Resposta da consulta:', { found: !!data, error: error?.message });
        }
        
        if (error) {
          if (isDev) {
            console.error(`Erro ao buscar post: ${error.message}`);
          }
          setError(`Erro ao buscar post: ${error.message}`);
          setPost(null);
          return;
        }
        
        if (!data) {
          setError(`Post não encontrado com slug: ${slug}`);
          setPost(null);
          return;
        }
        
        if (isDev) {
          console.log(`useBlogPost: Post encontrado com slug: ${data.slug}`);
          console.log(`useBlogPost: URL da imagem do post: "${data.imageurl}"`);
        }
        
        const mappedPost: BlogPost = {
          slug: data.slug || sanitizeSlug(data.title || 'post-sem-titulo'),
          title: data.title || 'Sem título',
          excerpt: data.excerpt || 'Sem descrição disponível',
          content: data.content || '',
          category: data.category || 'Geral',
          date: data.date || new Date().toLocaleDateString('pt-BR'),
          imageUrl: data.imageurl || ''
        };
        
        setPost(mappedPost);

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : String(err);
        console.error(`Erro ao buscar post: ${errorMessage}`);
        setError(`Ocorreu um erro ao buscar o post: ${errorMessage}`);
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, isLoading, error, diagnosticInfo };
};
