
import React from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

interface BlogSidebarProps {
  categories: string[];
}

const BlogSidebar = ({ categories }: BlogSidebarProps) => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow-md transition-colors duration-300 hover:shadow-lg">
        <Categories categories={categories} />
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-navy-dark dark:text-white">E-books Gratuitos</h3>
          <div className="space-y-4">
            <Link 
              to="/guia-completo-investimentos"
              className="block p-4 border border-gray-200 dark:border-navy-medium rounded-lg hover:border-gold dark:hover:border-gold-light hover:bg-gray-50 dark:hover:bg-navy-medium transition-colors hover-card-effect"
            >
              <h4 className="font-bold mb-1 text-navy-dark dark:text-white">Guia Completo de Investimentos</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Acesso gratuito ao guia interativo</p>
            </Link>
            <a 
              href="#" 
              className="block p-4 border border-gray-200 dark:border-navy-medium rounded-lg hover:border-gold dark:hover:border-gold-light hover:bg-gray-50 dark:hover:bg-navy-medium transition-colors"
            >
              <h4 className="font-bold mb-1 text-navy-dark dark:text-white">Checklist de Planejamento Financeiro</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Download gratuito (PDF)</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
