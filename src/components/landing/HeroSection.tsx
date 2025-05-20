
import React from 'react';
import { ChartBar } from 'lucide-react';
import SimpleCompoundCalculator from '@/components/SimpleCompoundCalculator';

const HeroSection = () => {
  return (
    <section className="relative bg-navy-darkest text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transforme seu patrimônio em liberdade, conquistas e tranquilidade para sua família.
          </h1>
          <p className="text-xl mb-8 text-navy-lightest">
            Com uma estratégia de investimentos inteligente e blindagem patrimonial, você garante não só o crescimento do seu capital, mas também a segurança para realizar seus maiores sonhos - hoje e no futuro.
          </p>
          <div className="hidden md:block">
            <a 
              href="https://wa.me/5564999886688" 
              className="btn-primary inline-block"
            >
              Quero proteger e multiplicar meu patrimônio
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <SimpleCompoundCalculator />
          <div className="mt-6 p-4 bg-navy-dark rounded-lg text-center">
            <p className="text-lg font-medium text-navy-lightest italic">
              "O que o seu EU do futuro vai te falar quando você conseguir acumular esse patrimônio?"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
