
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogErrorProps {
  message: string | null;
}

const BlogError = ({ message }: BlogErrorProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-navy-dark mb-4">Artigo não encontrado</h1>
      <p className="text-navy-medium mb-8">{message || 'O artigo que você está procurando não existe ou foi removido.'}</p>
      <Link to="/blog" className="px-6 py-3 bg-gold text-white font-medium rounded-md hover:bg-gold-dark transition-colors">
        Voltar para o Blog
      </Link>
    </div>
  );
};

export default BlogError;
