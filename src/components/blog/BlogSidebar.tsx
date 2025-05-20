
import React from 'react';
import Categories from './Categories';

interface BlogSidebarProps {
  categories: string[];
}

const BlogSidebar = ({ categories }: BlogSidebarProps) => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow mb-8 transition-colors duration-300">
        <h3 className="text-xl font-bold mb-4 dark:text-white">Newsletter</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Receba conteúdo exclusivo sobre investimentos e planejamento financeiro.
        </p>
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Seu melhor email" 
            className="w-full p-3 border rounded-md dark:bg-navy-medium dark:border-navy-light dark:text-white"
          />
          <button 
            type="submit"
            className="w-full btn-primary"
          >
            Inscrever-se
          </button>
        </form>
      </div>
      
      <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow transition-colors duration-300">
        <Categories categories={categories} />
        
        <div>
          <h3 className="text-xl font-bold mb-4 dark:text-white">E-books Gratuitos</h3>
          <div className="space-y-4">
            <a 
              href="#" 
              className="block p-4 border border-gray-200 dark:border-navy-medium rounded-lg hover:border-gold dark:hover:border-gold-light hover:bg-gray-50 dark:hover:bg-navy-medium transition-colors"
            >
              <h4 className="font-bold mb-1 dark:text-white">Guia Completo de Investimentos</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Download gratuito (PDF)</p>
            </a>
            <a 
              href="#" 
              className="block p-4 border border-gray-200 dark:border-navy-medium rounded-lg hover:border-gold dark:hover:border-gold-light hover:bg-gray-50 dark:hover:bg-navy-medium transition-colors"
            >
              <h4 className="font-bold mb-1 dark:text-white">Checklist de Planejamento Financeiro</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Download gratuito (PDF)</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
