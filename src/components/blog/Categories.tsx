
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  categories: string[];
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Categorias</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <Link 
            key={index} 
            to={`/blog/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-4 py-2 bg-gray-100 dark:bg-navy-medium text-navy-dark dark:text-white rounded-full hover:bg-gold hover:text-white dark:hover:bg-gold-light dark:hover:text-navy-dark transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
