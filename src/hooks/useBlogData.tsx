
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';

// Default data for fallback
const defaultFeaturedPosts: BlogPost[] = [
  {
    id: "1",
    title: "Como criar uma estratégia de investimentos para o longo prazo",
    excerpt: "Descubra os princípios fundamentais para construir uma carteira de investimentos robusta que resista às oscilações do mercado e gere resultados consistentes.",
    date: "10 Mai 2023",
    category: "Investimentos",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    slug: "estrategia-investimentos-longo-prazo",
    content: "",
    created_at: "",
    updated_at: ""
  },
  {
    id: "2",
    title: "Blindagem patrimonial: protegendo suas conquistas financeiras",
    excerpt: "Entenda como estruturar seu patrimônio para protegê-lo de riscos legais, tributários e sucessórios, garantindo a segurança financeira da sua família.",
    date: "05 Mai 2023",
    category: "Proteção Patrimonial",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    slug: "blindagem-patrimonial-protecao",
    content: "",
    created_at: "",
    updated_at: ""
  },
  {
    id: "3",
    title: "Os mitos sobre aposentadoria que podem comprometer seu futuro",
    excerpt: "Conheça os equívocos mais comuns sobre planejamento de aposentadoria e descubra estratégias eficazes para garantir sua independência financeira.",
    date: "28 Abr 2023",
    category: "Aposentadoria",
    imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c",
    slug: "mitos-aposentadoria",
    content: "",
    created_at: "",
    updated_at: ""
  }
];

const defaultRecentPosts: BlogPost[] = [
  {
    id: "4",
    title: "Diversificação: além do básico para investidores experientes",
    excerpt: "Estratégias avançadas de diversificação que vão além das recomendações convencionais, otimizando o equilíbrio entre risco e retorno.",
    date: "25 Abr 2023",
    category: "Investimentos",
    imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105",
    slug: "diversificacao-avancada",
    content: "",
    created_at: "",
    updated_at: ""
  },
  {
    id: "5",
    title: "Planejamento sucessório: garantindo a continuidade do seu legado",
    excerpt: "Como estruturar a transferência de patrimônio de forma eficiente, minimizando conflitos familiares e cargas tributárias.",
    date: "20 Abr 2023",
    category: "Sucessão",
    imageUrl: "https://images.unsplash.com/photo-1575467678930-c7acd65d6470",
    slug: "planejamento-sucessorio",
    content: "",
    created_at: "",
    updated_at: ""
  },
  {
    id: "6",
    title: "Finanças comportamentais: como suas emoções afetam seus investimentos",
    excerpt: "Entenda os vieses cognitivos que influenciam suas decisões financeiras e aprenda a tomar decisões mais racionais.",
    date: "15 Abr 2023",
    category: "Psicologia Financeira",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
    slug: "financas-comportamentais",
    content: "",
    created_at: "",
    updated_at: ""
  }
];

const defaultCategories = [
  "Investimentos", 
  "Proteção Patrimonial", 
  "Aposentadoria", 
  "Sucessão", 
  "Tributação", 
  "Psicologia Financeira", 
  "Mercado Financeiro"
];

export const useBlogData = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setIsLoading(true);
        
        // Buscar todos os posts
        const { data: posts, error } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        if (posts && posts.length > 0) {
          // Definir posts em destaque (3 primeiros)
          const typedPosts = posts as unknown as BlogPost[];
          setFeaturedPosts(typedPosts.slice(0, 3));
          
          // Definir posts recentes (próximos 3 depois dos em destaque)
          setRecentPosts(typedPosts.slice(3, 6));
          
          // Extrair categorias únicas de todos os posts
          const uniqueCategories = [...new Set(typedPosts.map(post => post.category).filter(Boolean))];
          setCategories(uniqueCategories);
        } else {
          // Se não houver posts no banco, usar os dados de exemplo
          setFeaturedPosts(defaultFeaturedPosts);
          setRecentPosts(defaultRecentPosts);
          setCategories(defaultCategories);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do blog:', error);
        
        // Em caso de erro, usar os dados de exemplo
        setFeaturedPosts(defaultFeaturedPosts);
        setRecentPosts(defaultRecentPosts);
        setCategories(defaultCategories);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBlogData();
  }, []);

  return {
    featuredPosts,
    recentPosts,
    categories,
    isLoading
  };
};
