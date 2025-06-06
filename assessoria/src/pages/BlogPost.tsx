
import React, { useEffect } from 'react';
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

  useEffect(() => {
    // Log essencial apenas para depuração
    if (error) {
      console.error('BlogPost: Erro ao carregar post:', error);
    }
  }, [error]);

  if (isLoading) {
    return <BlogLoading />;
  }

  if (error || !post) {
    return <BlogError message={error} />;
  }

  // Criar dados estruturados para o artigo (Schema.org)
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://mauriciosmagalhaes.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": post.imageUrl,
    "author": {
      "@type": "Person",
      "name": "Maurício Magalhães"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Maurício Magalhães Consultoria Financeira",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mauriciosmagalhaes.com/logo.png" 
      }
    },
    "datePublished": post.date,
    "dateModified": post.date // Agora usando date para ambas as datas
  };

  // Formatar a data para exibição (já vem formatada do banco)
  const formattedDate = post.date;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest transition-colors duration-300">
      <SEOHead 
        title={`${post.title} | Blog de Educação Financeira`}
        description={post.excerpt}
        keywords={`${post.category}, educação financeira, investimentos, ${post.title.toLowerCase()}, consultoria financeira`}
        ogImage={post.imageUrl}
        ogType="article"
        structuredData={articleStructuredData}
        canonicalUrl={`https://mauriciosmagalhaes.com/blog/${post.slug}`}
      />
      <Navbar />
      
      <div className="pt-24 pb-16">
        <BlogPostHero 
          imageUrl={post.imageUrl}
          category={post.category}
          title={post.title}
          date={formattedDate}
        />
        
        <BlogPostContent 
          content={post.content} 
          publicationDate={formattedDate}
        />
      </div>
    </div>
  );
};

export default BlogPost;
