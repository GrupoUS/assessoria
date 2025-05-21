
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BlogPostContentProps {
  content: string;
  publicationDate: string;
  author?: string;
}

const BlogPostContent = ({ 
  content, 
  publicationDate = "", 
  author = "Maurício Magalhães" 
}: BlogPostContentProps) => {
  // Helper function to format content with proper HTML rendering
  const formatContent = (content: string): { __html: string } => {
    if (!content) return { __html: '' };
    
    // We'll use dangerouslySetInnerHTML to properly render HTML content
    return { __html: content };
  };

  return (
    <div className="container mx-auto px-6 mt-16">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white dark:bg-navy-dark shadow-md rounded-lg p-8 md:p-10">
          <header className="mb-8">
            {publicationDate && (
              <time dateTime={new Date(publicationDate).toISOString()} className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">
                {publicationDate}
              </time>
            )}
            {author && (
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Por <span className="font-medium">{author}</span>
                </span>
              </div>
            )}
          </header>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={formatContent(content)} />
          </div>
          
          <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-navy-medium dark:text-navy-light hover:text-gold dark:hover:text-gold-light transition-colors"
              >
                <ArrowLeft size={16} />
                Voltar para o Blog
              </Link>
              
              <div className="flex space-x-4">
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                  aria-label="Compartilhar no Twitter"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Compartilhar no Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                  aria-label="Compartilhar no LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPostContent;
