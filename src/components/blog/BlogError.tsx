
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

interface BlogErrorProps {
  message: string | null;
}

const BlogError = ({ message }: BlogErrorProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest">
      <Navbar />
      <div className="container mx-auto px-6 pt-32 pb-16 flex flex-col items-center justify-center text-center">
        <div className="max-w-lg w-full bg-white dark:bg-navy-dark shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-navy-dark dark:text-white mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-navy-medium dark:text-gray-300 mb-8">
            {message || 'O artigo que você está procurando não existe ou foi removido.'}
          </p>
          <Link 
            to="/blog" 
            className="px-6 py-3 bg-gold text-white font-medium rounded-md hover:bg-gold-dark transition-colors inline-block"
          >
            Voltar para o Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogError;
