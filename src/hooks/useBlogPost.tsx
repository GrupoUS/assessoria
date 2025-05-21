
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { toast } from '@/components/ui/use-toast';

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
        
        console.log(`useBlogPost: Buscando post com slug: "${slug}"`);
        console.log('useBlogPost: Cliente Supabase inicializado:', !!supabase);
        
        const startTime = new Date();
        console.log(`useBlogPost: Horário de início da consulta: ${startTime.toISOString()}`);
        
        // Sanitizar o slug para a consulta
        const safeSlug = sanitizeSlug(slug);
        console.log(`useBlogPost: Slug sanitizado para consulta: "${safeSlug}"`);
        
        // Consultar post por slug
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .ilike('slug', safeSlug)
          .single();
        
        const endTime = new Date();
        console.log(`useBlogPost: Horário de término da consulta: ${endTime.toISOString()}`);
        console.log(`useBlogPost: Tempo da consulta: ${endTime.getTime() - startTime.getTime()}ms`);
        
        const diagnostics = {
          queryStart: startTime.toISOString(),
          queryEnd: endTime.toISOString(),
          queryDuration: endTime.getTime() - startTime.getTime(),
          slugQueried: safeSlug,
          resultFound: !!data,
          error: error ? error.message : null
        };
        setDiagnosticInfo(diagnostics);
        
        // Registrar resposta completa
        console.log('useBlogPost: Resposta completa da consulta:', { data, error });
        
        if (error) {
          console.error(`useBlogPost: Erro ao buscar post com slug "${slug}":`, error.message);
          setError(`Erro ao buscar post: ${error.message}`);
          setPost(null);
          return;
        }
        
        if (!data) {
          console.error(`useBlogPost: Post com slug "${slug}" não encontrado`);
          setError(`Post não encontrado: Nenhum post corresponde ao slug "${slug}"`);
          setPost(null);
          return;
        }
        
        console.log(`useBlogPost: Post encontrado:`, data);
        
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
        
        console.log(`useBlogPost: Post mapeado para o modelo:`, mappedPost);
        setPost(mappedPost);

      } catch (err) {
        console.error(`useBlogPost: Exceção ao buscar post com slug "${slug}":`, err);
        setError(`Ocorreu um erro ao buscar o post: ${err instanceof Error ? err.message : String(err)}`);
        setPost(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Função para sanitizar o slug
  const sanitizeSlug = (inputSlug: string): string => {
    console.log(`useBlogPost: Sanitizando slug: "${inputSlug}"`);
    
    let cleanSlug = inputSlug.trim().toLowerCase();
    // Remover caracteres especiais e espaços extras
    cleanSlug = cleanSlug.replace(/[^\w\-]+/g, '-');
    cleanSlug = cleanSlug.replace(/\-{2,}/g, '-');
    cleanSlug = cleanSlug.replace(/^\-+|\-+$/g, '');
    
    console.log(`useBlogPost: Slug sanitizado: "${cleanSlug}"`);
    return cleanSlug || inputSlug; // Fallback para o slug original se a sanitização resultar em string vazia
  };

  return { post, isLoading, error, diagnosticInfo };
};
