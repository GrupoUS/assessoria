import React from 'react';
import { CalendarDays, ChartBar, HandshakeIcon, Medal } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const ProcessStep = ({ icon, title, description, step }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="bg-light-blue bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-blue-100">
        {icon}
      </div>
      <div className="h-8 w-8 rounded-full bg-darkBlue flex items-center justify-center text-white font-bold mb-3 text-sm">
        {step}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ProcessSteps = () => {
  const steps = [
    {
      icon: <CalendarDays className="h-8 w-8 text-darkBlue" />,
      title: "Contato Inicial",
      description: "Entendimento dos seus objetivos e necessidades específicas para uma abordagem personalizada.",
      step: 1
    },
    {
      icon: <ChartBar className="h-8 w-8 text-darkBlue" />,
      title: "Diagnóstico Personalizado",
      description: "Análise profunda do seu patrimônio e perfil com recomendações sob medida.",
      step: 2
    },
    {
      icon: <Medal className="h-8 w-8 text-darkBlue" />,
      title: "Plano de Ação",
      description: "Desenvolvimento e implementação de estratégias específicas para seus objetivos.",
      step: 3
    },
    {
      icon: <HandshakeIcon className="h-8 w-8 text-darkBlue" />,
      title: "Acompanhamento Contínuo",
      description: "Revisões periódicas e ajustes conforme o cenário econômico e suas necessidades.",
      step: 4
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Como Funciona a Consultoria</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Um processo estruturado e transparente para garantir os melhores resultados para o seu patrimônio.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
