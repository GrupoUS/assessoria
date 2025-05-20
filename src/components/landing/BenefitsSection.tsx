
import React from 'react';
import { ChartBar, Shield, CalendarDays, Medal } from 'lucide-react';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
      <div className="bg-blue-50 rounded-full p-4 mb-6">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <ChartBar className="h-8 w-8 text-blue-600" />,
      title: "Seu dinheiro trabalhando por você",
      description: "Ao investir de forma estratégica, seu patrimônio cresce de maneira consistente, permitindo que você realize projetos pessoais."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Tranquilidade para focar no que importa",
      description: "Com uma blindagem patrimonial eficiente, você dorme tranquilo sabendo que seu capital está protegido contra imprevistos."
    },
    {
      icon: <CalendarDays className="h-8 w-8 text-purple-600" />,
      title: "Liberdade para escolher o seu futuro",
      description: "Investir é dar a si mesmo a liberdade de fazer escolhas: trabalhar por prazer, empreender ou viver com mais qualidade."
    },
    {
      icon: <Medal className="h-8 w-8 text-gold" />,
      title: "Construção de legado",
      description: "Uma boa estratégia de proteção e sucessão garante que as próximas gerações também possam usufruir do seu patrimônio."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Benefícios de Investir e Blindar o Patrimônio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Você trabalhou duro para construir sua reserva financeira. É hora de fazer seu patrimônio crescer e trabalhar por você, garantindo segurança para realizar seus maiores sonhos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
