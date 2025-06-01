
import React from 'react';
import { Link } from 'react-router-dom';
import { sanitizeSlug } from '@/utils/blogUtils';

interface BlogCardProps { 
  title: string; 
  excerpt: string; 
  date: string; 
  category: string; 
  imageUrl: string; 
  slug: string;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  category, 
  imageUrl, 
  slug
}: BlogCardProps) => {
  const fallbackImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f";
  
  // Garantir que o slug seja válido e normalizado
  const safeSlug = sanitizeSlug(slug || title);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.error(`BlogCard: Falha ao carregar imagem para o post "${title}"`);
    console.error(`BlogCard: URL original da imagem: "${imageUrl}"`);
    console.error(`BlogCard: Usando imagem de fallback: "${fallbackImage}"`);
    target.src = fallbackImage;
  };
  
  const handleImageLoad = () => {
    console.log(`BlogCard: Imagem carregada com sucesso para o post "${title}" - URL: "${imageUrl}"`);
  };
  
  // Log da URL da imagem para debugging
  React.useEffect(() => {
    if (imageUrl) {
      console.log(`BlogCard: Post "${title}" - URL da imagem no banco: "${imageUrl}"`);
      // Testar se a URL é acessível
      const img = new Image();
      img.onload = () => {
        console.log(`BlogCard: URL da imagem é válida para "${title}"`);
      };
      img.onerror = () => {
        console.error(`BlogCard: URL da imagem é inválida ou inacessível para "${title}": "${imageUrl}"`);
      };
      img.src = imageUrl;
    } else {
      console.warn(`BlogCard: Post "${title}" não tem URL de imagem definida`);
    }
  }, [imageUrl, title]);
  
  // Verifica se o post tem dados válidos
  if (!title) {
    console.warn(`BlogCard: Card com slug "${slug}" tem título vazio ou inválido.`);
  }
  
  if (!safeSlug) {
    console.warn(`BlogCard: Card com título "${title}" tem slug vazio ou inválido.`);
  }
  
  // Determinar qual imagem usar - priorizar imageUrl do banco se válido
  const imageToUse = imageUrl && imageUrl.trim() !== '' ? imageUrl : fallbackImage;
  
  return (
    <Link 
      to={`/blog/${safeSlug}`} 
      className="block h-full" 
      data-testid={`blog-card-${safeSlug}`}
      onClick={() => console.log(`BlogCard: Clique no card do post "${title}" com slug "${safeSlug}"`)}
    >
      <div className="bg-white dark:bg-navy-dark rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-1 h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <img 
            src={imageToUse} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            onError={handleImageError}
            onLoad={handleImageLoad}
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
