
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost as BlogPostType } from '@/types/blog';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          setPost(data as BlogPostType);
        } else {
          setError('Artigo não encontrado');
        }
      } catch (err: any) {
        console.error('Erro ao buscar artigo:', err);
        setError(err.message || 'Ocorreu um erro ao carregar o artigo');
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-gold border-navy-medium rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-navy-medium">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-navy-dark mb-4">Artigo não encontrado</h1>
        <p className="text-navy-medium mb-8">{error || 'O artigo que você está procurando não existe ou foi removido.'}</p>
        <Link to="/blog" className="btn-primary">
          Voltar para o Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header do artigo */}
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

      {/* Imagem em destaque */}
      {post.imageUrl && (
        <div className="relative h-96 overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Conteúdo do artigo */}
      <article className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
