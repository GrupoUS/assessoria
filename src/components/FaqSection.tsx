
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Qual o valor mínimo para investir com assessoria no BTG Pactual?",
      answer: "O valor mínimo recomendado para acessar a assessoria personalizada é a partir de R$ 100 mil. Esse patamar garante que você terá acesso a soluções exclusivas, atendimento consultivo e estratégias avançadas de proteção e crescimento patrimonial, adequadas ao perfil de investidores de alta renda."
    },
    {
      question: "Preciso transferir meus investimentos para o BTG para ser atendido?",
      answer: "Sim, você pode fazer a portabilidade dos investimentos de forma rápida e intuitiva do seu atual banco para o BTG. Porém, Não é obrigatório transferir seus investimentos imediatamente. Você pode iniciar o relacionamento, receber o diagnóstico financeiro e conhecer as propostas sem compromisso. Caso opte por migrar seus ativos, todo o processo é acompanhado por nossa equipe, com suporte completo para garantir uma transição segura e eficiente."
    },
    {
      question: "Como funciona o processo de assessoria personalizada?",
      answer: "O processo começa com uma conversa para entender seu momento financeiro, objetivos e perfil de risco. Em seguida, realizamos um diagnóstico detalhado do seu patrimônio e sugerimos um plano de ação sob medida, incluindo recomendações de alocação, proteção patrimonial, planejamento sucessório e estratégias de diversificação. O acompanhamento é contínuo, com revisões periódicas e ajustes conforme mudanças no cenário ou em seus objetivos."
    },
    {
      question: "Quais produtos e investimentos estão disponíveis para mim?",
      answer: "Você terá acesso à prateleira completa do BTG Pactual: a melhor e maior plataforma de renda fixa do mercado, fundos exclusivos, previdência privada, ações, fundos internacionais, alternativas (como fundos imobiliários, multimercados e investimentos no exterior) e soluções customizadas para diversificação global e proteção contra riscos de mercado."
    },
    {
      question: "A assessoria tem algum custo?",
      answer: "A consultoria e o diagnóstico financeiro são gratuitos e sem compromisso. Caso decida avançar, os custos variam conforme os produtos escolhidos e o volume investido, podendo envolver taxas de administração, performance ou corretagem. Todas as condições são apresentadas de forma transparente, para que você tome decisões com total clareza."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Perguntas Frequentes</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-medium text-lg py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
