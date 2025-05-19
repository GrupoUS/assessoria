
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const Testimonial = ({ quote, name, title }: TestimonialProps) => {
  return (
    <Card className="bg-white border-none shadow-lg">
      <CardContent className="p-6">
        <div className="text-gold mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>
        <p className="text-gray-700 mb-4 text-lg italic">{quote}</p>
        <div className="border-t border-gray-100 pt-4">
          <p className="font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Consegui proteger meu patrimônio mesmo em períodos de crise. Hoje tenho tranquilidade para pensar na aposentadoria.",
      name: "Carlos M.",
      title: "45 anos, Médico"
    },
    {
      quote: "A consultoria foi além do esperado: planejamento sucessório completo e atendimento realmente personalizado.",
      name: "Ana P.",
      title: "52 anos, Empresária"
    },
    {
      quote: "A expertise do Maurício fez toda diferença para garantir o futuro da minha família.",
      name: "Rodrigo S.",
      title: "58 anos, Executivo"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">O Que Dizem Nossos Clientes</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Histórias reais de clientes que transformaram sua saúde financeira.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
