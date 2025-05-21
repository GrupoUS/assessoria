
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import BlogLoading from '@/components/blog/BlogLoading';
import BlogError from '@/components/blog/BlogError';
import { useBlogPost } from '@/hooks/useBlogPost';
import BlogPostHero from '@/components/blog/BlogPostHero';
import BlogPostContent from '@/components/blog/BlogPostContent';
import SEOHead from '@/components/shared/SEOHead';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, isLoading, error } = useBlogPost(slug);

  if (isLoading) {
    return <BlogLoading />;
  }

  if (error || !post) {
    return <BlogError message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest transition-colors duration-300">
      <SEOHead 
        title={`${post.title} | Blog de Educação Financeira`}
        description={post.excerpt}
        ogImage={post.imageUrl}
        ogType="article"
      />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <BlogPostHero 
          imageUrl={post.imageUrl}
          category={post.category}
          title={post.title}
          date={post.date}
        />
        
        <BlogPostContent content={post.content} />
      </div>
    </div>
  );
};

export default BlogPost;
