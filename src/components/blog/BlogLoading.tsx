
import React from 'react';

const BlogLoading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-gold border-navy-medium rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-navy-medium">Carregando artigos...</p>
      </div>
    </div>
  );
};

export default BlogLoading;
