
import React, { useEffect } from 'react';
import BlogCard from '@/components/blog/BlogCard';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogLoading from '@/components/blog/BlogLoading';
import { useBlogData } from '@/hooks/useBlogData';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { RefreshCcw } from 'lucide-react';
import SupabaseDiagnostic from '@/components/blog/SupabaseDiagnostic';

const Blog = () => {
  const { featuredPosts, recentPosts, categories, isLoading, lastFetchTime, refreshData } = useBlogData();
  
  useEffect(() => {
    console.log("Blog: Componente Blog montado");
    console.log("Blog: Posts em destaque:", featuredPosts.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
    console.log("Blog: Posts recentes:", recentPosts.map(p => ({ id: p.id, title: p.title, slug: p.slug })));
  }, [featuredPosts, recentPosts]);

  const handleRefresh = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Blog: Solicitando atualização manual dos dados");
    await refreshData();
  };

  if (isLoading) {
    return <BlogLoading />;
  }

  const hasNoPosts = featuredPosts.length === 0 && recentPosts.length === 0;
  const formattedLastUpdate = lastFetchTime ? new Date(lastFetchTime).toLocaleTimeString() : '';

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
        {/* Componente de diagnóstico Supabase */}
        <SupabaseDiagnostic />
        
        {/* Barra de informações e atualização */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-500">
            {lastFetchTime && `Última atualização: ${formattedLastUpdate}`}
          </span>
          <button 
            onClick={handleRefresh} 
            className="flex items-center gap-2 text-sm text-navy-medium hover:text-gold px-3 py-1 border border-navy-light rounded-md transition-colors"
          >
            <RefreshCcw size={14} />
            Atualizar
          </button>
        </div>
        
        {hasNoPosts ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4 text-navy-dark dark:text-white">
              Nenhum artigo encontrado
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Não há artigos disponíveis no momento. Novos conteúdos serão publicados em breve ou verifique sua conexão com o banco de dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="px-6 py-3 bg-gold text-white font-medium rounded-md hover:bg-gold-dark transition-colors">
                Voltar para a Página Inicial
              </Link>
              <button 
                onClick={handleRefresh}
                className="px-6 py-3 bg-navy-medium text-white font-medium rounded-md hover:bg-navy-dark transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse lg:flex-row gap-12">
            {/* Área principal com os posts */}
            <div className="lg:w-2/3">
              {featuredPosts.length > 0 && <FeaturedPosts posts={featuredPosts} />}
              
              {recentPosts.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-navy-dark dark:text-white border-b border-gray-200 dark:border-navy-medium pb-2 transition-colors">
                    Artigos Recentes
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recentPosts.map((post, index) => (
                      <div key={post.id || index} className="hover-card-effect">
                        <BlogCard {...post} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar com categorias e outros widgets */}
            <BlogSidebar categories={categories} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
