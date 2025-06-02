
import React from 'react';
import { AlarmClock, CalendarClock, PiggyBank } from "lucide-react";

const MissedOpportunitiesSection = () => {
  const opportunities = [
    {
      title: "Desvalorização do Patrimônio",
      description: "A inflação corrói o poder de compra do seu dinheiro. Sem investimentos estratégicos, seu patrimônio perde valor ao longo do tempo.",
      icon: AlarmClock
    },
    {
      title: "Rendimentos Abaixo da Média",
      description: "Contas poupança e investimentos conservadores podem não acompanhar o ritmo do mercado, resultando em ganhos limitados.",
      icon: CalendarClock
    },
    {
      title: "Falta de Planejamento Financeiro",
      description: "A ausência de um plano financeiro sólido impede o alcance de metas de longo prazo, como a aposentadoria confortável e a independência financeira.",
      icon: PiggyBank
    }
  ];

  return (
    <section className="bg-white dark:bg-navy-dark section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 dark:text-white">
          O Que Você Perde ao Não Investir
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Descubra as oportunidades perdidas e os riscos de não investir seu dinheiro de forma inteligente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {opportunities.map((opportunity, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow-md border border-gray-100 dark:border-navy-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <opportunity.icon className="h-6 w-6 text-red-500" />
                <h3 className="ml-3 text-xl font-bold text-navy-dark dark:text-white">{opportunity.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{opportunity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissedOpportunitiesSection;
