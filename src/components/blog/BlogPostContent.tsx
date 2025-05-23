
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
  // Enhanced function to format content with proper HTML rendering and handling of escape sequences
  const formatContent = (content: string): { __html: string } => {
    if (!content) return { __html: '' };
    
    try {
      // Pre-process the content to handle escape sequences and unwanted characters
      let processedContent = content
        // Replace literal \n with proper line breaks (if needed)
        .replace(/\\n/g, '\n')
        // Replace multiple newlines with proper paragraph breaks
        .replace(/\n{2,}/g, '</p><p>')
        // Replace single newlines with line breaks
        .replace(/\n/g, '<br />')
        // Remove stray backslashes that aren't part of HTML entities
        .replace(/\\(?![a-zA-Z#0-9]+;)/g, '')
        // Fix any malformed HTML that might have been introduced
        .replace(/<\/p><p><\/p><p>/g, '</p><p>')
        .replace(/<p><\/p>/g, '<p>&nbsp;</p>');

      // If the content doesn't start with a block element, wrap it in a paragraph
      if (!processedContent.trim().startsWith('<')) {
        processedContent = `<p>${processedContent}</p>`;
      }
      
      return { __html: processedContent };
    } catch (error) {
      console.error("Error processing content:", error);
      return { __html: content || '' }; // Fallback to original content if processing fails
    }
  };

  // Helper function to safely format date for datetime attribute
  const formatDateTimeAttribute = (dateString: string): string => {
    if (!dateString) return '';
    
    try {
      // Try to parse the date string
      const date = new Date(dateString);
      
      // Check if date is valid before calling toISOString()
      if (!isNaN(date.getTime())) {
        return date.toISOString();
      }
      
      return '';
    } catch (error) {
      console.error("Error formatting date:", error);
      return '';
    }
  };

  return (
    <div className="container mx-auto px-6 mt-16">
      <div className="max-w-4xl mx-auto">
        <article className="bg-white dark:bg-navy-dark shadow-md rounded-lg p-8 md:p-10">
          <header className="mb-8">
            {publicationDate && (
              <time 
                dateTime={formatDateTimeAttribute(publicationDate)} 
                className="text-sm text-gray-500 dark:text-gray-400 mb-2 block"
              >
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
          
          <div className="prose prose-lg dark:prose-invert max-w-none blog-content
                          prose-headings:font-playfair prose-headings:font-bold prose-headings:text-navy-dark dark:prose-headings:text-white
                          prose-h1:text-5xl prose-h1:md:text-6xl prose-h1:mb-10 prose-h1:mt-0 prose-h1:leading-tight
                          prose-h2:text-4xl prose-h2:md:text-5xl prose-h2:mb-8 prose-h2:mt-14 prose-h2:leading-tight
                          prose-h3:text-3xl prose-h3:md:text-4xl prose-h3:mb-6 prose-h3:mt-12 prose-h3:leading-tight
                          prose-h4:text-2xl prose-h4:md:text-3xl prose-h4:mb-5 prose-h4:mt-10 prose-h4:leading-tight
                          prose-h5:text-xl prose-h5:md:text-2xl prose-h5:mb-4 prose-h5:mt-8 prose-h5:leading-tight
                          prose-h6:text-lg prose-h6:md:text-xl prose-h6:mb-4 prose-h6:mt-6 prose-h6:leading-tight
                          prose-p:mb-4 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
                          prose-li:mb-2 prose-strong:text-navy-dark dark:prose-strong:text-white prose-strong:font-semibold">
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
