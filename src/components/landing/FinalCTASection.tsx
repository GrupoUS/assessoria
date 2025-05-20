
import React from 'react';

const FinalCTASection = () => {
  return (
    <section id="cta" className="py-16 bg-navy-darkest text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Pronto para transformar suas finanças?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Agende agora mesmo uma consulta gratuita e descubra como posso te ajudar a alcançar seus objetivos financeiros.
        </p>
        <a 
          href="https://wa.me/64999886688"
          className="bg-[#588157] hover:bg-[#4e7048] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center inline-block"
        >
          Quero proteger e multiplicar meu patrimônio
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
