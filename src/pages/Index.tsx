
import React from 'react';
import { Shield, ChartBar, Medal, CalendarDays } from 'lucide-react';
import LeadForm from '@/components/LeadForm';
import FaqSection from '@/components/FaqSection';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-darkBlue">
      {/* Hero Section */}
      <section className="relative bg-darkBlue text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center"></div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Blindagem Patrimonial e Aposentadoria Tranquila para Investidores de Alto Patrimônio
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Consultoria financeira exclusiva para quem possui mais de R$300 mil e valoriza segurança, crescimento e legado. Soluções personalizadas para proteger e multiplicar seu patrimônio - hoje e no futuro.
            </p>
            <div className="hidden md:block">
              <a href="#cta" className="btn-primary inline-block">
                Quero minha consultoria gratuita
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <LeadForm />
          </div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Seu Patrimônio Está Realmente Protegido?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-50 rounded-full p-4 mb-6">
                <ChartBar className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Inflação corrói seu patrimônio a cada dia</h3>
              <p className="text-gray-600">Seus investimentos estão realmente acompanhando ou superando a inflação real?</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-orange-50 rounded-full p-4 mb-6">
                <Shield className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Crises inesperadas comprometem anos de esforço</h3>
              <p className="text-gray-600">Em menos de 20 anos, enfrentamos 5 grandes crises mundiais. Seu patrimônio está preparado para a próxima?</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 rounded-full p-4 mb-6">
                <CalendarDays className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Falta de tempo para gerenciar investimentos</h3>
              <p className="text-gray-600">Decisões financeiras importantes exigem dedicação e conhecimento atualizado. Você realmente tem esse tempo?</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-50 rounded-full p-4 mb-6">
                <Medal className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Preocupação com o futuro e sucessão</h3>
              <p className="text-gray-600">Seus investimentos estão estruturados para garantir segurança para sua família e facilitar a sucessão patrimonial?</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Você trabalhou duro para construir sua reserva financeira. Mas a inflação e a volatilidade do mercado ameaçam seu capital todos os dias. Será que seus investimentos estão crescendo de verdade — ou apenas perdendo valor silenciosamente?
            </p>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Soluções de Alta Performance para Blindar e Crescer Seu Patrimônio
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Ofereço uma consultoria gratuita e personalizada, focada em estratégias avançadas de proteção patrimonial e crescimento sustentável, unindo tradição e inovação em finanças.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-darkBlue text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <Shield className="h-6 w-6 mr-4 text-gold-light" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Segurança em primeiro lugar</h3>
                  <p className="text-gray-300">
                    Derivativos e operações estruturadas para proteger contra volatilidade e crises, garantindo que seu patrimônio permaneça protegido em qualquer cenário de mercado.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-darkBlue text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <Medal className="h-6 w-6 mr-4 text-gold-light" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Crescimento com estratégia</h3>
                  <p className="text-gray-300">
                    Planejamento de longo prazo e sucessório, pensando nas próximas gerações e garantindo uma transição patrimonial sem conflitos e com mínima incidência tributária.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-darkBlue text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <ChartBar className="h-6 w-6 mr-4 text-gold-light" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Inteligência financeira de ponta</h3>
                  <p className="text-gray-300">
                    Uso de IA e análise de dados para identificar oportunidades e riscos antes dos demais, proporcionando decisões mais assertivas no mercado.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-darkBlue text-white p-8 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <CalendarDays className="h-6 w-6 mr-4 text-gold-light" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Diagnóstico completo</h3>
                  <p className="text-gray-300">
                    Análise 360º do seu patrimônio, com recomendações sob medida para cada objetivo financeiro, seja proteção, crescimento ou transmissão de riqueza.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#cta" className="btn-primary inline-block">
              Quero meu diagnóstico gratuito
            </a>
          </div>
        </div>
      </section>
      
      {/* Authority Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="relative">
                <div className="rounded-full overflow-hidden border-4 border-white shadow-lg w-64 h-64 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
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
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Process Steps */}
      <ProcessSteps />
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* Final CTA */}
      <section id="cta" className="bg-darkBlue text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não Deixe Seu Patrimônio Vulnerável
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
              Cada decisão adiada é um risco assumido. O tempo e a inflação não esperam. As vagas para novos clientes qualificados são limitadas para garantir atendimento personalizado.
            </p>
            <p className="text-gold text-lg mb-8 font-medium">
              Restam apenas 7 vagas para consultorias gratuitas neste mês
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <LeadForm buttonText="Quero blindar meu patrimônio agora" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2023 Maurício Magalhães - Todos os direitos reservados</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-white transition-colors">Política de privacidade</a>
              <span>|</span>
              <a href="#" className="text-sm hover:text-white transition-colors">Termos de uso</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-center text-gray-500">
            <p>Investimentos envolvem riscos. Performance passada não garante resultados futuros.</p>
          </div>
        </div>
      </footer>
      
      {/* Fixed CTA for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200">
        <a href="#cta" className="btn-primary block text-center">
          Quero minha consultoria gratuita
        </a>
      </div>
    </div>
  );
};

export default Index;
