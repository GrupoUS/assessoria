
import { BlogPost } from '@/types/blog';

/**
 * Maps database posts to BlogPost model with better handling of nulls and empty values
 */
export const mapPostsToModel = (posts: any[]): BlogPost[] => {
  console.log('blogUtils: Iniciando mapeamento de posts para o modelo BlogPost');
  
  const mappedPosts = posts.map(post => {
    console.log('blogUtils: Processando post bruto:', post);
    
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
      console.warn(`blogUtils: Post sem slug válido encontrado:`, post.title);
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
    
    console.log(`blogUtils: Post mapeado: ID=${mappedPost.id}, Título=${mappedPost.title}, Slug=${mappedPost.slug}`);
    return mappedPost;
  });
  
  console.log('blogUtils: Mapeamento finalizado. Total de posts mapeados:', mappedPosts.length);
  return mappedPosts;
};

/**
 * Sanitiza um slug para uso em consultas
 */
export const sanitizeSlug = (inputSlug: string): string => {
  console.log(`blogUtils: Sanitizando slug: "${inputSlug}"`);
  
  let cleanSlug = inputSlug.trim().toLowerCase();
  // Remover caracteres especiais e espaços extras
  cleanSlug = cleanSlug.replace(/[^\w\-]+/g, '-');
  cleanSlug = cleanSlug.replace(/\-{2,}/g, '-');
  cleanSlug = cleanSlug.replace(/^\-+|\-+$/g, '');
  
  console.log(`blogUtils: Slug sanitizado: "${cleanSlug}"`);
  return cleanSlug || inputSlug; // Fallback para o slug original se a sanitização resultar em string vazia
};
