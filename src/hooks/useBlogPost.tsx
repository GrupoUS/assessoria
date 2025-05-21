
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { toast } from '@/components/ui/use-toast';
import { sanitizeSlug } from '@/utils/blogUtils';

// Helper to determine if we're in development mode
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
        
        // Reduzir logs em produção
        if (isDev) {
          console.log(`useBlogPost: Buscando post com slug: "${slug}"`);
          console.log('useBlogPost: Cliente Supabase inicializado:', !!supabase);
        }
        
        const startTime = new Date();
        
        // Sanitizar o slug para a consulta
        const safeSlug = sanitizeSlug(slug);
        
        // Consultar post por slug
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
            rlsStatus: error && error.message.includes('permission denied') ? 'Bloqueado por RLS' : 'Sem bloqueio RLS detectado'
          };
          setDiagnosticInfo(diagnostics);
          console.log('useBlogPost: Resposta da consulta:', { found: !!data, error: error?.message });
        }
        
        if (error) {
          console.error(`Erro ao buscar post: ${error.message}`);
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
          console.log(`useBlogPost: Post encontrado com ID: ${data.id}`);
        }
        
        // Mapear o post para o modelo
        const mappedPost: BlogPost = {
          id: data.id || '',
          title: data.title || 'Sem título',
          slug: data.slug || `post-${data.id}`,
          excerpt: data.excerpt || 'Sem descrição disponível',
          content: data.content || '',
          category: data.category || 'Geral',
          date: data.date || new Date(data.created_at).toLocaleDateString('pt-BR'),
          imageUrl: data.imageurl || '',
          created_at: data.created_at || new Date().toISOString(),
          updated_at: data.updated_at || new Date().toISOString()
        };
        
        setPost(mappedPost);

      } catch (err) {
        console.error(`Erro ao buscar post: ${err instanceof Error ? err.message : String(err)}`);
        setError(`Ocorreu um erro ao buscar o post: ${err instanceof Error ? err.message : String(err)}`);
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, isLoading, error, diagnosticInfo };
};
