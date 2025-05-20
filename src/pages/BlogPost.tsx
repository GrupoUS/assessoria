
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost as BlogPostType } from '@/types/blog';
import BlogLoading from '@/components/blog/BlogLoading';
import BlogError from '@/components/blog/BlogError';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';

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
          // Ensure imageUrl is correctly mapped from imageurl in the database
          const postWithImageUrl: BlogPostType = {
            ...data,
            imageUrl: data.imageurl || ''
          };
          setPost(postWithImageUrl);
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
    return <BlogLoading />;
  }

  if (error || !post) {
    return <BlogError message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
    </div>
  );
};

export default BlogPost;
