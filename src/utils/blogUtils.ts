
import { BlogPost } from '@/types/blog';

/**
 * Maps database posts to BlogPost model with better handling of nulls and empty values
 */
export const mapPostsToModel = (posts: any[]): BlogPost[] => {
  console.log('blogUtils: Iniciando mapeamento de posts para o modelo BlogPost');
  
  const mappedPosts = posts.map(post => {
    // Tratamento seguro para slug
    let safeSlug = '';
    if (post.slug) {
      safeSlug = sanitizeSlug(post.slug);
    } else {
      // Se não tiver slug, gerar um a partir do título
      safeSlug = post.title 
        ? sanitizeSlug(post.title)
        : 'post-sem-titulo';
    }
    
    // Validação de campos obrigatórios ou valores padrão
    const mappedPost: BlogPost = {
      slug: safeSlug,
      title: post.title || 'Sem título',
      excerpt: post.excerpt || 'Sem descrição disponível',
      content: post.content || '',
      category: post.category || 'Geral',
      date: post.date || new Date().toLocaleDateString('pt-BR'),
      imageUrl: post.imageurl || ''
    };
    
    console.log(`blogUtils: Post mapeado: Título=${mappedPost.title}, Slug=${mappedPost.slug}`);
    return mappedPost;
  });
  
  console.log('blogUtils: Mapeamento finalizado. Total de posts mapeados:', mappedPosts.length);
  return mappedPosts;
};

/**
 * Sanitiza um slug para uso em consultas
 */
export const sanitizeSlug = (inputSlug: string): string => {
  let cleanSlug = inputSlug.trim().toLowerCase();
  // Remover caracteres especiais e espaços extras
  cleanSlug = cleanSlug.replace(/[^\w\-]+/g, '-');
  cleanSlug = cleanSlug.replace(/\-{2,}/g, '-');
  cleanSlug = cleanSlug.replace(/^\-+|\-+$/g, '');
  
  return cleanSlug || 'post-sem-slug'; // Fallback para um slug padrão se a sanitização resultar em string vazia
};
