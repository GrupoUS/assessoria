
import React from 'react';
import LeadForm from '@/components/LeadForm';

const FinalCTASection = () => {
  return (
    <section id="cta" className="bg-darkBlue text-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transforme seu patrimônio em liberdade e conquistas
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Você trabalhou duro para chegar até aqui. Agora, é hora de fazer o seu dinheiro trabalhar por você, multiplicando oportunidades e garantindo tranquilidade para você e sua família.
          </p>
          <p className="text-gold text-lg mb-8 font-medium">
            Restam apenas 7 vagas para consultorias gratuitas neste mês
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <LeadForm buttonText="Quero construir meu futuro com segurança" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
