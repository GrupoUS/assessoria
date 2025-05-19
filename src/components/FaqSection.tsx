
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
    },
    {
      question: "Como é feita a proteção do meu patrimônio contra riscos e crises?",
      answer: "Utilizamos estratégias avançadas como derivativos, operações estruturadas, diversificação internacional e análise macroeconômica para blindar seu patrimônio contra volatilidade, inflação e eventos inesperados. O objetivo é garantir segurança e perenidade do capital, minimizando riscos desnecessários sem abrir mão de oportunidades de crescimento."
    },
    {
      question: "Quem são os profissionais que me atenderão?",
      answer: "Você será atendido pelo Maurício Magalhães assessor certificado pela (ANCORD, CFP® e outros), com ampla experiência no mercado financeiro e acesso direto ao time de especialistas do BTG Pactual. O atendimento é personalizado, consultivo e focado em construir uma relação de longo prazo baseada em confiança, resultados e discrição."
    },
    {
      question: "Como acompanho meus investimentos e desempenho?",
      answer: "Você terá acesso à plataforma digital do BTG Pactual, no computador e aplicativo no celular, onde pode acompanhar em tempo real a evolução dos seus investimentos, consultar relatórios, extratos, projeções e receber alertas personalizados. Além disso, seu assessor realiza reuniões periódicas para revisar estratégias e esclarecer dúvidas."
    },
    {
      question: "Meus dados e informações são realmente protegidos?",
      answer: "Sim. O BTG Pactual adota rigorosos padrões de segurança, privacidade e compliance, com tecnologia de ponta para proteger seus dados e garantir total sigilo bancário. Todas as informações são tratadas com confidencialidade e em conformidade com a legislação vigente."
    },
    {
      question: "O que diferencia a assessoria do BTG Pactual das demais instituições?",
      answer: "Além de acesso a produtos exclusivos e soluções globais, o BTG Pactual oferece atendimento consultivo, independência na recomendação de produtos, uso de inteligência artificial para análise e monitoramento, e uma equipe altamente qualificada. O foco está em resultados consistentes, proteção patrimonial e construção de um relacionamento de confiança com o cliente."
    },
    {
      question: "É possível investir no exterior com a assessoria do BTG?",
      answer: "Sim. Você pode acessar ativos internacionais, fundos globais, ETFs e estratégias de diversificação em moeda forte, protegendo parte do patrimônio contra riscos locais e variações cambiais. A assessoria orienta sobre as melhores opções e cuida de toda a parte operacional e tributária."
    },
    {
      question: "Posso resgatar meus investimentos a qualquer momento?",
      answer: "A liquidez depende do produto escolhido. Muitos investimentos permitem resgates rápidos, enquanto outros têm prazos definidos para potencializar retornos ou benefícios fiscais. Seu assessor sempre recomenda soluções alinhadas à sua necessidade de liquidez e explica claramente os prazos e condições de cada aplicação."
    },
    {
      question: "Como é definido meu perfil de investidor?",
      answer: "Logo no início do relacionamento, realizamos um questionário de suitability para identificar seu perfil de risco, objetivos e horizonte de investimento. Isso garante que todas as recomendações estejam alinhadas à sua realidade, expectativas e tolerância a riscos."
    },
    {
      question: "O atendimento é presencial ou digital?",
      answer: "Você pode escolher a modalidade que preferir. O atendimento pode ser 100% digital, presencial no nosso escritório da Kaza Capital localizado em Goiânia-Goiás, conforme sua conveniência. O assessor está disponível por diversos canais para reuniões, esclarecimentos e acompanhamento contínuo."
    },
    {
      question: "Posso contar com uma equipe multidisciplinar cuidando dos meus investimentos?",
      answer: "Sim. Dependendo do volume investido e da complexidade do seu patrimônio, você pode ser atendido por uma equipe multidisciplinar, incluindo especialistas em planejamento sucessório, tributário, internacional e gestão de grandes fortunas, garantindo uma visão completa e integrada do seu portfólio."
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
