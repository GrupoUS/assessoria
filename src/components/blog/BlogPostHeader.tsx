
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <div className="bg-darkBlue text-white py-16">
      <div className="container mx-auto px-6">
        <Link to="/blog" className="inline-flex items-center text-gold hover:text-white mb-6 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Voltar para o Blog
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center text-gray-300">
          <span className="mr-4">{post.date}</span>
          <span className="text-gold">{post.category}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;
