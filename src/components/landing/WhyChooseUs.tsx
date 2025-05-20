
import React from 'react';
import { Shield, TrendingUp, Award, Clock } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white dark:bg-navy-dark p-6 rounded-lg shadow border border-gray-100 dark:border-navy-medium hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="mb-4 text-gold dark:text-gold-light">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Independência e Transparência",
      description: "Sou um consultor independente, focado exclusivamente em seus interesses, sem comissões ocultas ou conflitos de interesse."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Expertise Comprovada",
      description: "Profissional com mais de 15 anos de experiência no mercado financeiro e histórico de resultados consistentes."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Estratégia Personalizada",
      description: "Cada cliente recebe um plano totalmente personalizado, baseado em seus objetivos específicos e tolerância a riscos."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Acompanhamento Contínuo",
      description: "Monitoramento constante dos investimentos e ajustes periódicos para maximizar resultados e adaptar a mudanças."
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-navy-darkest py-16 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Por Que Escolher Minha Consultoria</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Uma abordagem diferenciada para proteger e multiplicar seu patrimônio com segurança e eficiência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
