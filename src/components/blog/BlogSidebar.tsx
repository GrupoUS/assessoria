
import React from 'react';
import Categories from './Categories';

interface BlogSidebarProps {
  categories: string[];
}

const BlogSidebar = ({ categories }: BlogSidebarProps) => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow-md mb-8 transition-colors duration-300 hover:shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-navy-dark dark:text-white">Newsletter</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Receba conteúdo exclusivo sobre investimentos e planejamento financeiro.
        </p>
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Seu melhor email" 
            className="w-full p-3 border rounded-md bg-white dark:bg-navy-medium border-gray-200 dark:border-navy-light dark:text-white focus:ring-2 focus:ring-gold dark:focus:ring-gold-light focus:border-transparent transition-all"
          />
          <button 
            type="submit"
            className="w-full bg-[#588157] hover:bg-[#4e7048] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center"
          >
            Inscrever-se
          </button>
        </form>
      </div>
      
      <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow-md transition-colors duration-300 hover:shadow-lg">
        <Categories categories={categories} />
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-navy-dark dark:text-white">E-books Gratuitos</h3>
          <div className="space-y-4">
            <a 
              href="#" 
              className="block p-4 border border-gray-200 dark:border-navy-medium rounded-lg hover:border-gold dark:hover:border-gold-light hover:bg-gray-50 dark:hover:bg-navy-medium transition-colors"
            >
              <h4 className="font-bold mb-1 text-navy-dark dark:text-white">Guia Completo de Investimentos</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Download gratuito (PDF)</p>
            </a>
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
