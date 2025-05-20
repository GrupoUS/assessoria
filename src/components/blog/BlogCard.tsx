
import React from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1553729459-efe14ef6055d";
          }}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gold font-medium px-2 py-1 bg-gold/10 rounded-full">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-darkBlue font-medium hover:text-gold transition-colors flex items-center mt-auto"
        >
          Ler mais
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
