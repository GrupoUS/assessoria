
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { DiagnosticInfo } from '@/types/blogService';
import { mapPostsToModel } from '@/utils/blogUtils';
import { toast } from '@/components/ui/use-toast';

/**
 * Fetch posts from Supabase with enhanced error reporting
 */
export const fetchPosts = async (): Promise<BlogPost[]> => {
  console.log('blogService: Executando consulta no Supabase para obter posts');
  
  // Verificar se o cliente Supabase está disponível
  if (!supabase) {
    console.error('blogService: Cliente Supabase não está disponível');
    throw new Error('Cliente Supabase não está disponível');
  }
  
  try {
    console.log('blogService: Executando consulta: SELECT * FROM blog_posts ORDER BY date DESC');
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });
    
    console.log('blogService: Resposta completa da consulta:', { posts, error });
    
    if (error) {
      console.error('blogService: Erro ao buscar posts:', error);
      
      // Verificar se o erro é relacionado a RLS
      if (error.message.includes('permission denied') || error.code === '42501') {
        console.error('blogService: Erro de permissão - Políticas RLS estão provavelmente bloqueando o acesso');
        toast({
          title: "Erro de permissão",
          description: `Acesso negado à tabela blog_posts. Verifique as políticas RLS no Supabase.`,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro na consulta",
          description: `Não foi possível buscar os posts: ${error.message}`,
          variant: "destructive"
        });
      }
      
      throw error;
    }
    
    if (!posts || posts.length === 0) {
      console.log('blogService: Nenhum post encontrado na tabela blog_posts');
      
      // Testar se é um problema de RLS ou tabela vazia
      const { count } = await supabase
        .from('blog_posts')
        .select('*', { count: 'exact', head: true });
        
      if (count === undefined) {
        console.log('blogService: Não foi possível contar registros - provável problema de RLS');
      } else {
        console.log(`blogService: Tabela contém ${count} registros. ${count > 0 ? 'Provável problema de RLS' : 'Tabela vazia'}`);
      }
      
      return [];
    }
    
    console.log(`blogService: Encontrados ${posts.length} posts no banco de dados`);
    
    // Log específico sobre URLs de imagens
    posts.forEach((post, index) => {
      console.log(`blogService: Post ${index + 1} - Título: "${post.title}"`);
      console.log(`blogService: Post ${index + 1} - imageurl: "${post.imageurl}"`);
      console.log(`blogService: Post ${index + 1} - imageurl válida: ${!!post.imageurl && post.imageurl.trim() !== ''}`);
    });
    
    return mapPostsToModel(posts);
  } catch (err) {
    console.error('blogService: Exceção ao buscar posts:', err);
    throw err;
  }
};

/**
 * Registra informações de diagnóstico sobre uma consulta
 */
export const generateDiagnosticInfo = (
  startTime: Date,
  posts: BlogPost[],
  error?: any
): DiagnosticInfo => {
  const endTime = new Date();
  
  return {
    queryStart: startTime.toISOString(),
    queryEnd: endTime.toISOString(),
    queryDuration: endTime.getTime() - startTime.getTime(),
    postsCount: posts.length,
    postsSlugs: posts.map(p => p.slug),
    rlsStatus: posts.length === 0 ? 'Possível bloqueio RLS' : 'RLS permitindo acesso',
    error: error ? String(error) : null
  };
};
