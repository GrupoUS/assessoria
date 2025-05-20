
import React from 'react';
import { Link } from 'react-router-dom';

// Componente de card para os artigos do blog
const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  category, 
  imageUrl, 
  slug 
}: { 
  title: string; 
  excerpt: string; 
  date: string; 
  category: string; 
  imageUrl: string; 
  slug: string; 
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gold font-medium">{category}</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="font-bold text-xl mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-darkBlue font-medium hover:text-gold transition-colors"
        >
          Ler mais →
        </Link>
      </div>
    </div>
  );
};

// Componente de seção de posts em destaque
const FeaturedPosts = ({ posts }: { posts: any[] }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Artigos em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

// Componente de categorias
const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Categorias</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <Link 
            key={index} 
            to={`/blog/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gold hover:text-white transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Blog = () => {
  // Dados de exemplo para os artigos do blog
  const featuredPosts = [
    {
      title: "Como criar uma estratégia de investimentos para o longo prazo",
      excerpt: "Descubra os princípios fundamentais para construir uma carteira de investimentos robusta que resista às oscilações do mercado e gere resultados consistentes.",
      date: "10 Mai 2023",
      category: "Investimentos",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      slug: "estrategia-investimentos-longo-prazo"
    },
    {
      title: "Blindagem patrimonial: protegendo suas conquistas financeiras",
      excerpt: "Entenda como estruturar seu patrimônio para protegê-lo de riscos legais, tributários e sucessórios, garantindo a segurança financeira da sua família.",
      date: "05 Mai 2023",
      category: "Proteção Patrimonial",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
      slug: "blindagem-patrimonial-protecao"
    },
    {
      title: "Os mitos sobre aposentadoria que podem comprometer seu futuro",
      excerpt: "Conheça os equívocos mais comuns sobre planejamento de aposentadoria e descubra estratégias eficazes para garantir sua independência financeira.",
      date: "28 Abr 2023",
      category: "Aposentadoria",
      imageUrl: "https://images.unsplash.com/photo-1532375810709-75b1da00537c",
      slug: "mitos-aposentadoria"
    }
  ];

  const recentPosts = [
    {
      title: "Diversificação: além do básico para investidores experientes",
      excerpt: "Estratégias avançadas de diversificação que vão além das recomendações convencionais, otimizando o equilíbrio entre risco e retorno.",
      date: "25 Abr 2023",
      category: "Investimentos",
      imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105",
      slug: "diversificacao-avancada"
    },
    {
      title: "Planejamento sucessório: garantindo a continuidade do seu legado",
      excerpt: "Como estruturar a transferência de patrimônio de forma eficiente, minimizando conflitos familiares e cargas tributárias.",
      date: "20 Abr 2023",
      category: "Sucessão",
      imageUrl: "https://images.unsplash.com/photo-1575467678930-c7acd65d6470",
      slug: "planejamento-sucessorio"
    },
    {
      title: "Finanças comportamentais: como suas emoções afetam seus investimentos",
      excerpt: "Entenda os vieses cognitivos que influenciam suas decisões financeiras e aprenda a tomar decisões mais racionais.",
      date: "15 Abr 2023",
      category: "Psicologia Financeira",
      imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
      slug: "financas-comportamentais"
    }
  ];

  const categories = [
    "Investimentos", 
    "Proteção Patrimonial", 
    "Aposentadoria", 
    "Sucessão", 
    "Tributação", 
    "Psicologia Financeira", 
    "Mercado Financeiro"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header do blog com título e descrição */}
      <div className="bg-darkBlue text-white py-16 md:py-24">
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
              <h2 className="text-2xl font-bold mb-6">Artigos Recentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {recentPosts.map((post, index) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar com categorias e outros widgets */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow mb-8">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Receba conteúdo exclusivo sobre investimentos e planejamento financeiro.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="w-full p-3 border rounded-md"
                />
                <button 
                  type="submit"
                  className="w-full btn-primary"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <Categories categories={categories} />
              
              <div>
                <h3 className="text-xl font-bold mb-4">E-books Gratuitos</h3>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="block p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-bold mb-1">Guia Completo de Investimentos</h4>
                    <p className="text-sm text-gray-600">Download gratuito (PDF)</p>
                  </a>
                  <a 
                    href="#" 
                    className="block p-4 border border-gray-200 rounded-lg hover:border-gold hover:bg-gray-50 transition-colors"
                  >
                    <h4 className="font-bold mb-1">Checklist de Planejamento Financeiro</h4>
                    <p className="text-sm text-gray-600">Download gratuito (PDF)</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
