
import React from 'react';

const FinalCTASection = () => {
  return (
    <section id="cta" className="py-16 bg-navy-darkest text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Pronto para transformar suas finanças?
        </h2>
        <p className="text-lg mb-8">
          Agende agora mesmo uma consulta gratuita e descubra como posso te ajudar a alcançar seus objetivos financeiros.
        </p>
        <a href="#cta" className="btn-primary inline-block" onClick={() => {
          // Scroll to the lead form
          const element = document.getElementById('cta');
          element?.scrollIntoView({ behavior: 'smooth' });
          
          // Focus on the first input after scrolling
          setTimeout(() => {
            const firstInput = document.querySelector('#cta input');
            if (firstInput instanceof HTMLElement) {
              firstInput.focus();
            }
          }, 800);
        }}>
          Agendar Consulta Gratuita
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
