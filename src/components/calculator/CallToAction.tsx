
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <div className="mt-16 p-8 bg-navy-dark dark:bg-navy-darkest rounded-lg text-white text-center transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Pronto para dar o próximo passo?</h2>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
        Cálculos são apenas o começo. Receba uma estratégia personalizada para maximizar seus investimentos com segurança.
      </p>
      <a 
        href="https://wa.me/5564999886688"
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block"
      >
        <Button className="bg-[#588157] hover:bg-[#4e7048] py-3 px-6">
          Quero proteger e multiplicar meu patrimônio
        </Button>
      </a>
    </div>
  );
};

export default CallToAction;
