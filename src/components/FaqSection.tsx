
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "A consultoria inicial é realmente gratuita?",
      answer: "Sim, trata-se de um diagnóstico completo, sem custo e sem compromisso. Queremos que você conheça nosso trabalho sem qualquer risco ou obrigação."
    },
    {
      question: "Preciso transferir meus investimentos para começar?",
      answer: "Não. Você pode conhecer todas as nossas recomendações detalhadas antes de tomar qualquer decisão. Nosso objetivo é gerar valor antes mesmo de uma eventual parceria formal."
    },
    {
      question: "Como meus dados são protegidos?",
      answer: "Seguimos rigorosos padrões de segurança e privacidade. Todas as suas informações são criptografadas e nunca serão compartilhadas com terceiros. Sua privacidade financeira é nossa prioridade absoluta."
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
