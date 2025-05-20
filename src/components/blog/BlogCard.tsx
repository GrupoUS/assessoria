
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
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gold font-medium">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-darkBlue font-medium hover:text-gold transition-colors"
        >
          Ler mais →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
