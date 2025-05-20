
import React from 'react';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogLoading from '@/components/blog/BlogLoading';
import { useBlogData } from '@/hooks/useBlogData';
import Navbar from '@/components/Navbar';

const Blog = () => {
  const { featuredPosts, recentPosts, categories, isLoading } = useBlogData();

  if (isLoading) {
    return <BlogLoading />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest transition-colors duration-300">
      <Navbar />
      {/* Header do blog com título e descrição */}
      <div className="bg-darkBlue text-white py-16 md:py-24 mt-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog de Educação Financeira</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
            Conteúdo exclusivo sobre investimentos, planejamento financeiro e proteção patrimonial para investidores qualificados.
          </p>
        </div>
      </div>

      {/* Conteúdo principal do blog */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* Área principal com os posts */}
          <div className="lg:w-2/3">
            <FeaturedPosts posts={featuredPosts} />
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-dark dark:text-white border-b border-gray-200 dark:border-navy-medium pb-2 transition-colors">Artigos Recentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map((post, index) => (
                  <div key={post.id || index} className="hover-card-effect">
                    <BlogCard {...post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar com categorias e outros widgets */}
          <BlogSidebar categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
