import React from 'react';

const FinalCTASection = () => {
  return (
    <section id="cta" className="py-16 bg-dark-blue text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Pronto para transformar suas finanças?
        </h2>
        <p className="text-lg mb-8">
          Agende agora mesmo uma consulta gratuita e descubra como podemos te ajudar a alcançar seus objetivos financeiros.
        </p>
        <a href="#" className="btn-primary inline-block">
          Agendar Consulta Gratuita
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
