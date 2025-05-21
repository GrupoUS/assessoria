
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost as BlogPostType } from '@/types/blog';
import Navbar from '@/components/Navbar';
import BlogLoading from '@/components/blog/BlogLoading';
import BlogError from '@/components/blog/BlogError';
import { ArrowLeft } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        
        if (!slug) {
          console.error('Erro: Slug não fornecido');
          toast({
            title: "Erro",
            description: "Não foi possível encontrar o artigo solicitado",
            variant: "destructive"
          });
          setError('Slug não fornecido');
          setIsLoading(false);
          return;
        }

        console.log('Buscando post com slug:', slug);
        
        const { data, error: queryError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (queryError) {
          console.error('Erro Supabase:', queryError);
          toast({
            title: "Erro de banco de dados",
            description: "Erro ao carregar o artigo. Por favor, tente novamente mais tarde.",
            variant: "destructive"
          });
          setError('Erro ao carregar o artigo. Por favor, tente novamente mais tarde.');
          return;
        }

        if (!data) {
          console.log('Post não encontrado com slug:', slug);
          toast({
            title: "Artigo não encontrado",
            description: "O artigo que você está procurando não existe ou foi removido.",
            variant: "destructive"
          });
          setError('Post não encontrado');
        } else {
          console.log('Post encontrado:', data);
          // Map the data to our BlogPost type
          const post: BlogPostType = {
            id: data.id,
            title: data.title,
            slug: data.slug,
            excerpt: data.excerpt || '',
            content: data.content || '',
            category: data.category || 'Geral',
            date: data.date || new Date(data.created_at).toLocaleDateString('pt-BR'),
            imageUrl: data.imageurl || '',
            created_at: data.created_at,
            updated_at: data.updated_at
          };
          
          setPost(post);
        }
      } catch (err) {
        console.error('Erro ao buscar post:', err);
        toast({
          title: "Erro inesperado",
          description: "Houve um erro ao buscar o artigo. Por favor, tente novamente.",
          variant: "destructive"
        });
        setError('Erro ao buscar o post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Helper function to format content with proper HTML rendering
  const formatContent = (content: string): { __html: string } => {
    if (!content) return { __html: '' };
    
    // We'll use dangerouslySetInnerHTML to properly render HTML content
    return { __html: content };
  };

  if (isLoading) {
    return <BlogLoading />;
  }

  if (error || !post) {
    return <BlogError message={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest transition-colors duration-300">
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Hero section with image and title */}
        <div className="relative">
          <div className="h-64 md:h-96 w-full overflow-hidden">
            <img 
              src={post.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f"} 
              alt={post.title}
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6">
            <div className="relative -mt-32 z-10 text-white">
              <span className="inline-block px-4 py-1 bg-gold/90 text-white rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-shadow-lg">
                {post.title}
              </h1>
              <div className="text-sm md:text-base text-gray-200">
                {post.date}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-6 mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-navy-dark shadow-md rounded-lg p-8 md:p-10">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={formatContent(post.content)} />
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
      </div>
    </div>
  );
};

export default BlogPost;
