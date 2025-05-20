import React from 'react';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Benefícios de uma Consultoria Financeira Personalizada
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Planejamento Financeiro Estratégico</h3>
            <p className="text-gray-700">
              Desenvolvimento de um plano financeiro personalizado alinhado com seus objetivos de vida,
              considerando investimentos, seguros e planejamento sucessório.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Otimização de Investimentos</h3>
            <p className="text-gray-700">
              Análise e otimização da sua carteira de investimentos para maximizar retornos e minimizar riscos,
              aproveitando as melhores oportunidades do mercado.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Proteção Patrimonial</h3>
            <p className="text-gray-700">
              Implementação de estratégias para proteger seu patrimônio contra imprevistos,
              assegurando a segurança financeira da sua família.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Redução de Impostos</h3>
            <p className="text-gray-700">
              Identificação de oportunidades para reduzir legalmente a carga tributária sobre seus investimentos
              e rendimentos, aumentando sua rentabilidade líquida.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Planejamento de Aposentadoria</h3>
            <p className="text-gray-700">
              Construção de um plano de aposentadoria sólido e sustentável,
              garantindo uma renda confortável para o futuro.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-3">Educação Financeira Contínua</h3>
            <p className="text-gray-700">
              Acesso a conteúdos e orientações para aprimorar seus conhecimentos financeiros,
              permitindo que você tome decisões mais informadas e conscientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
