
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
        canonicalUrl="https://mauriciosmagalhaes.com/guia-completo-investimentos"
      />
      <Navbar />
      
      <div className="pt-16">
        <div className="w-full px-4 py-6">
          {/* Compact header section */}
          <header className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-navy-dark dark:text-white mb-2">
              Guia Completo de Investimentos
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Um guia completo para iniciantes que desejam começar a investir com segurança em 2025.
            </p>
          </header>
          
          {/* Full-width iframe container */}
          <div className="w-full mb-6">
            <iframe 
              src="https://gamma.app/embed/7pqle0ggo56j1w7" 
              style={{
                width: '100%',
                height: '80vh',
                border: 'none',
                display: 'block'
              }}
              allow="fullscreen" 
              title="Guia Completo para Iniciantes: Como Começar a Investir com Segurança em 2025"
              className="rounded-md shadow-lg"
            />
          </div>
          
          {/* Call-to-action section below iframe */}
          <div className="text-center max-w-4xl mx-auto px-4">
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
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
  );
};

export default GuiaCompletoInvestimentos;
