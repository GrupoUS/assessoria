
import React from 'react';

const AuthoritySection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-10 md:mb-0">
            <div className="relative">
              <div className="rounded-full overflow-hidden border-4 border-white shadow-lg w-64 h-64 mx-auto mb-4">
                <img 
                  src="/lovable-uploads/0662397f-6421-4900-8df9-b48038aff791.png" 
                  alt="Maurício Magalhães - Assessor de Investimentos" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-4 right-4 md:bottom-0 md:right-0 bg-gold text-white text-xs py-1 px-3 rounded-full font-bold">
                CERTIFICADO ANCORD
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quem Está ao Seu Lado
            </h2>
            <p className="text-xl mb-6 text-gray-700">
              <strong>Maurício Magalhães</strong> - assessor de investimentos certificado (ANCORD), ex-Head de Renda Variável na Kaza Capital e especialista em blindagem patrimonial. Com perfil analítico e racional, atua com rigor técnico e foco total na segurança e no crescimento do seu patrimônio.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-gold rounded-full p-1.5 mr-3 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Mais de 15 anos de experiência no mercado financeiro</span>
              </li>
              <li className="flex items-start">
                <span className="bg-gold rounded-full p-1.5 mr-3 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Certificação ANCORD e histórico comprovado de resultados</span>
              </li>
              <li className="flex items-start">
                <span className="bg-gold rounded-full p-1.5 mr-3 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Atendimento exclusivo para um número limitado de clientes</span>
              </li>
              <li className="flex items-start">
                <span className="bg-gold rounded-full p-1.5 mr-3 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Uso de inteligência artificial para decisões mais ágeis e assertivas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
