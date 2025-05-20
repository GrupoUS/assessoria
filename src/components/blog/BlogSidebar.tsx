
import React from 'react';
import Categories from './Categories';

interface BlogSidebarProps {
  categories: string[];
}

const BlogSidebar = ({ categories }: BlogSidebarProps) => {
  return (
    <div className="lg:w-1/3">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-bold mb-4">Newsletter</h3>
        <p className="text-gray-600 mb-4">
          Receba conteúdo exclusivo sobre investimentos e planejamento financeiro.
        </p>
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Seu melhor email" 
            className="w-full p-3 border rounded-md"
          />
          <button 
            type="submit"
            className="w-full btn-primary"
          >
            Inscrever-se
          </button>
        </form>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <Categories categories={categories} />
        
        <div>
          <h3 className="text-xl font-bold mb-4">E-books Gratuitos</h3>
          <div className="space-y-4">
            <a 
              href="#" 
              className="block p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-gray-50 transition-colors"
            >
              <h4 className="font-bold mb-1">Guia Completo de Investimentos</h4>
              <p className="text-sm text-gray-600">Download gratuito (PDF)</p>
            </a>
            <a 
              href="#" 
              className="block p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-gray-50 transition-colors"
            >
              <h4 className="font-bold mb-1">Checklist de Planejamento Financeiro</h4>
              <p className="text-sm text-gray-600">Download gratuito (PDF)</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
