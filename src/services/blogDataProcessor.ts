
import { BlogPost } from '@/types/blog';
import { toast } from '@/components/ui/use-toast';

/**
 * Distribute posts into featured and recent categories
 */
export const distributePosts = (posts: BlogPost[]): {
  featuredPosts: BlogPost[];
  recentPosts: BlogPost[];
  categories: string[];
} => {
  console.log('blogDataProcessor: Distribuindo posts entre destacados e recentes');
  
  // Define featured posts (first 3)
  const featured = posts.slice(0, 3);
  console.log('blogDataProcessor: Posts destacados:', featured.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
  
  // Define recent posts (next 3 after featured)
  const recent = posts.slice(3, 6);
  console.log('blogDataProcessor: Posts recentes:', recent.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
  
  // Extract unique categories
  const uniqueCategories = [...new Set(posts.map(post => post.category).filter(Boolean))];
  console.log('blogDataProcessor: Categorias disponíveis:', uniqueCategories);
  
  return {
    featuredPosts: featured,
    recentPosts: recent,
    categories: uniqueCategories
  };
};

/**
 * Handle case when no posts are found
 */
export const handleNoPosts = (): void => {
  console.log('blogDataProcessor: Nenhum post encontrado no Supabase');
  
  toast({
    title: "Informação",
    description: "Nenhum artigo encontrado. Isso pode ser devido à política RLS do Supabase. Verifique as configurações.",
    variant: "default" // Usando variant "default" ao invés de "warning"
  });
};

/**
 * Handle error cases with better RLS detection
 */
export const handleError = (error: any): void => {
  console.error('blogDataProcessor: Erro ao buscar dados do blog:', error);
  
  // Verificar se o erro pode ser relacionado a RLS
  const errorMsg = error instanceof Error ? error.message : String(error);
  const isRLSError = errorMsg.toLowerCase().includes('permission') || 
                    errorMsg.includes('42501') ||
                    errorMsg.toLowerCase().includes('policy');
  
  toast({
    title: "Erro",
    description: isRLSError 
      ? "Erro de permissão ao acessar o blog. Verifique as políticas RLS no Supabase."
      : "Erro ao carregar artigos do blog. Tente novamente mais tarde.",
    variant: "destructive"
  });
};
