
import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-darkBlue mb-8">
          O que meus clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 italic mb-4">
              "Maurício me ajudou a organizar minhas finanças e a planejar meus investimentos.
              Agora me sinto muito mais seguro em relação ao meu futuro financeiro."
            </p>
            <div className="flex items-center">
              <div className="ml-3">
                <div className="text-sm font-medium text-darkBlue">João Silva</div>
                <div className="text-sm text-gray-500">Empresário</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 italic mb-4">
              "Graças à consultoria de Maurício, consegui otimizar meus investimentos e alcançar
              meus objetivos financeiros mais rapidamente do que esperava."
            </p>
            <div className="flex items-center">
              <div className="ml-3">
                <div className="text-sm font-medium text-darkBlue">Maria Oliveira</div>
                <div className="text-sm text-gray-500">Autônoma</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 italic mb-4">
              "O atendimento de Maurício é excelente, sempre disponível para tirar minhas dúvidas
              e me orientar nas melhores decisões financeiras."
            </p>
            <div className="flex items-center">
              <div className="ml-3">
                <div className="text-sm font-medium text-darkBlue">Carlos Pereira</div>
                <div className="text-sm text-gray-500">Servidor Público</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
