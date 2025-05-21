
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BlogPostContentProps {
  content: string;
}

const BlogPostContent = ({ content }: BlogPostContentProps) => {
  // Helper function to format content with proper HTML rendering
  const formatContent = (content: string): { __html: string } => {
    if (!content) return { __html: '' };
    
    // We'll use dangerouslySetInnerHTML to properly render HTML content
    return { __html: content };
  };

  return (
    <div className="container mx-auto px-6 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-navy-dark shadow-md rounded-lg p-8 md:p-10">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={formatContent(content)} />
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-navy-medium dark:text-navy-light hover:text-gold dark:hover:text-gold-light transition-colors"
            >
              <ArrowLeft size={16} />
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
