import React from 'react';
import StructuredData from '@/components/shared/StructuredData';

const FaqSection = () => {
  // FAQ data for structured data
  const faqData = {
    questions: [
      {
        question: "Quais são os benefícios de um planejamento financeiro?",
        answer: "Um planejamento financeiro ajuda a organizar suas finanças, definir metas claras, otimizar investimentos e garantir um futuro financeiro mais seguro e estável."
      },
      {
        question: "Como a consultoria financeira pode me ajudar?",
        answer: "A consultoria financeira oferece orientação personalizada para suas necessidades, auxiliando na tomada de decisões informadas sobre investimentos, aposentadoria, seguros e gestão de dívidas."
      },
      {
        question: "Qual é a importância de diversificar meus investimentos?",
        answer: "Diversificar seus investimentos reduz o risco, distribuindo seu capital em diferentes classes de ativos, setores e regiões geográficas, aumentando as chances de obter retornos consistentes."
      },
      {
        question: "Como posso começar a investir com pouco dinheiro?",
        answer: "Você pode começar a investir com pouco dinheiro através de fundos de investimento, ETFs, títulos do Tesouro Direto e plataformas de investimento online que oferecem opções acessíveis."
      },
      {
        question: "Quais são os principais erros a evitar ao investir?",
        answer: "Evite investir sem conhecimento, seguir dicas sem análise, concentrar seus investimentos em um único ativo, ignorar os custos e taxas, e não revisar seu portfólio regularmente."
      }
    ]
  };
  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-navy-dark transition-colors duration-300">
      <StructuredData type="FAQPage" data={faqData} />
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-darkBlue dark:text-white mb-8">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-darkBlue dark:text-gray-200 mb-2">
              Quais são os benefícios de um planejamento financeiro?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Um planejamento financeiro ajuda a organizar suas finanças, definir metas claras, otimizar investimentos e garantir um futuro financeiro mais seguro e estável.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-darkBlue dark:text-gray-200 mb-2">
              Como a consultoria financeira pode me ajudar?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A consultoria financeira oferece orientação personalizada para suas necessidades, auxiliando na tomada de decisões informadas sobre investimentos, aposentadoria, seguros e gestão de dívidas.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-darkBlue dark:text-gray-200 mb-2">
              Qual é a importância de diversificar meus investimentos?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Diversificar seus investimentos reduz o risco, distribuindo seu capital em diferentes classes de ativos, setores e regiões geográficas, aumentando as chances de obter retornos consistentes.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-darkBlue dark:text-gray-200 mb-2">
              Como posso começar a investir com pouco dinheiro?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Você pode começar a investir com pouco dinheiro através de fundos de investimento, ETFs, títulos do Tesouro Direto e plataformas de investimento online que oferecem opções acessíveis.
            </p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-darkBlue dark:text-gray-200 mb-2">
              Quais são os principais erros a evitar ao investir?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Evite investir sem conhecimento, seguir dicas sem análise, concentrar seus investimentos em um único ativo, ignorar os custos e taxas, e não revisar seu portfólio regularmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
