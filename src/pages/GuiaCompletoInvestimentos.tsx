
import React from 'react';
import Navbar from '@/components/Navbar';
import SEOHead from '@/components/shared/SEOHead';

const GuiaCompletoInvestimentos = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-darkest transition-colors duration-300">
      <SEOHead
        title="Guia Completo de Investimentos | Maurício Magalhães"
        description="Guia completo para iniciantes: como começar a investir com segurança em 2025. Aprenda os fundamentos dos investimentos com Maurício Magalhães."
        keywords="guia investimentos, como investir, investimentos para iniciantes, investir com segurança, educação financeira"
        canonicalUrl="https://www.mauriciomagalhaes.com.br/guia-completo-investimentos"
      />
      <Navbar />
      
      <div className="pt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <header className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-navy-dark dark:text-white mb-4">
                Guia Completo de Investimentos
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Um guia completo para iniciantes que desejam começar a investir com segurança em 2025. 
                Aprenda os fundamentos essenciais dos investimentos de forma prática e didática.
              </p>
            </header>
            
            <div className="bg-white dark:bg-navy-dark rounded-lg shadow-lg p-6 md:p-8">
              <div className="flex justify-center">
                <iframe 
                  src="https://gamma.app/embed/7pqle0ggo56j1w7" 
                  style={{
                    width: '700px',
                    maxWidth: '100%',
                    height: '450px',
                    border: 'none',
                    display: 'block',
                    margin: '0 auto'
                  }}
                  allow="fullscreen" 
                  title="Guia Completo para Iniciantes: Como Começar a Investir com Segurança em 2025"
                  className="rounded-md"
                />
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Este guia aborda os conceitos fundamentais que todo investidor iniciante precisa conhecer 
                  para tomar decisões financeiras mais seguras e assertivas.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/5564999886688" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Quero Proteger e Multiplicar Meu Patrimônio
                  </a>
                  <a 
                    href="/blog" 
                    className="px-6 py-3 border border-navy-medium text-navy-medium dark:border-navy-light dark:text-navy-light hover:bg-navy-medium hover:text-white dark:hover:bg-navy-light dark:hover:text-navy-dark rounded-md transition-colors font-medium text-center"
                  >
                    Ver Mais Conteúdos
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

export default GuiaCompletoInvestimentos;
