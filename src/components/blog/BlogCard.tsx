
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps { 
  title: string; 
  excerpt: string; 
  date: string; 
  category: string; 
  imageUrl: string; 
  slug: string; 
  id: string;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  category, 
  imageUrl, 
  slug,
  id
}: BlogCardProps) => {
  const fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f";
  
  // Garantir que o slug seja válido e normalizado
  const safeSlug = sanitizeSlug(slug || id);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
    console.warn(`BlogCard: Imagem não carregada para o post "${title}". Usando fallback.`);
  };
  
  // Verifica se o post tem dados válidos
  if (!title) {
    console.warn(`BlogCard: Card com id "${id}" tem título vazio ou inválido.`);
  }
  
  if (!safeSlug) {
    console.warn(`BlogCard: Card com título "${title}" tem slug vazio ou inválido.`);
  }
  
  // Função para sanitizar slugs
  function sanitizeSlug(inputSlug: string): string {
    if (!inputSlug) return `post-${id}`;
    
    console.log(`BlogCard: Sanitizando slug original: "${inputSlug}" para post "${title}"`);
    
    let cleanSlug = inputSlug.trim().toLowerCase();
    cleanSlug = cleanSlug.replace(/[^\w\-]+/g, '-');
    cleanSlug = cleanSlug.replace(/\-{2,}/g, '-');
    cleanSlug = cleanSlug.replace(/^\-+|\-+$/g, '');
    
    const finalSlug = cleanSlug || `post-${id}`;
    console.log(`BlogCard: Slug sanitizado: "${finalSlug}" para post "${title}"`);
    
    return finalSlug;
  }
  
  return (
    <Link 
      to={`/blog/${safeSlug}`} 
      className="block h-full" 
      data-testid={`blog-card-${id}`}
      onClick={() => console.log(`BlogCard: Clique no card do post "${title}" com slug "${safeSlug}"`)}
    >
      <div className="bg-white dark:bg-navy-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-1 h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl || fallbackImage} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            onError={handleImageError}
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex flex-col gap-2 mb-3">
            <span className="inline-block px-3 py-1 bg-gold/10 dark:bg-gold/20 text-gold dark:text-gold-light rounded-full text-sm font-medium">
              {category || 'Geral'}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {date || 'Data não disponível'}
            </span>
          </div>
          <h3 className="font-bold text-xl mb-2 line-clamp-2 dark:text-white transition-colors">{title || 'Sem título'}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1 transition-colors">{excerpt || 'Sem descrição disponível'}</p>
          <div className="mt-auto">
            <div className="text-darkBlue dark:text-navy-light font-medium hover:text-gold dark:hover:text-gold-light transition-colors">
              Ler mais
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
