
import React from 'react';
import { ChartBar, Shield, CalendarDays, Medal } from 'lucide-react';

const MissedOpportunitiesSection = () => {
  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Scroll to the form section
    const element = document.getElementById('cta');
    element?.scrollIntoView({ behavior: 'smooth' });
    
    // Focus on the first input after scrolling
    setTimeout(() => {
      const firstInput = document.querySelector('#cta input');
      if (firstInput instanceof HTMLElement) {
        firstInput.focus();
      }
    }, 800);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          O Que Você Perde ao Não Investir
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Investir não é apenas sobre ganhar mais, mas sobre não perder oportunidades e garantir sua liberdade financeira.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-darkBlue text-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start mb-4">
              <ChartBar className="h-6 w-6 mr-4 text-gold-light" />
              <div>
                <h3 className="font-bold text-xl mb-2">Deixar de conquistar mais</h3>
                <p className="text-gray-300">
                  Dinheiro parado perde valor ao longo do tempo. Não investir significa abrir mão de ver seu patrimônio crescer e de realizar sonhos que estão ao seu alcance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-darkBlue text-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start mb-4">
              <Medal className="h-6 w-6 mr-4 text-gold-light" />
              <div>
                <h3 className="font-bold text-xl mb-2">Perder oportunidades únicas</h3>
                <p className="text-gray-300">
                  O mercado está sempre mudando. Quem investe de forma planejada aproveita os melhores momentos e oportunidades - quem não investe, fica para trás.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-darkBlue text-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start mb-4">
              <Shield className="h-6 w-6 mr-4 text-gold-light" />
              <div>
                <h3 className="font-bold text-xl mb-2">Ficar refém de imprevistos</h3>
                <p className="text-gray-300">
                  Sem uma estratégia de proteção, imprevistos podem comprometer o que você levou anos para construir. Blindar seu patrimônio é garantir que nada tire você do seu caminho.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-darkBlue text-white p-8 rounded-lg shadow-lg">
            <div className="flex items-start mb-4">
              <CalendarDays className="h-6 w-6 mr-4 text-gold-light" />
              <div>
                <h3 className="font-bold text-xl mb-2">Aposentadoria menos confortável</h3>
                <p className="text-gray-300">
                  Não investir é adiar ou até limitar a qualidade da sua aposentadoria, tornando-a dependente apenas de fontes tradicionais e menos rentáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg italic text-darkBlue mb-8">"O futuro que você deseja começa com as decisões que toma agora."</p>
          <a href="#cta" className="btn-primary inline-block" onClick={handleCTAClick}>
            Quero meu diagnóstico gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissedOpportunitiesSection;
