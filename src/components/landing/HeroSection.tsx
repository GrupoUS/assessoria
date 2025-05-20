
import React from 'react';
import { ChartBar } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const HeroSection = () => {
  return (
    <section className="relative bg-darkBlue text-white">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center"></div>
      <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transforme seu patrimônio em liberdade, conquistas e tranquilidade para sua família.
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Com uma estratégia de investimentos inteligente e blindagem patrimonial, você garante não só o crescimento do seu capital, mas também a segurança para realizar seus maiores sonhos - hoje e no futuro.
          </p>
          <div className="hidden md:block">
            <a href="#cta" className="btn-primary inline-block">
              Quero minha consultoria gratuita
            </a>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
