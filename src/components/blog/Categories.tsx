
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  categories: string[];
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Categorias</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <Link 
            key={index} 
            to={`/blog/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gold hover:text-white transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
