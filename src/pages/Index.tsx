
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/landing/HeroSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import MissedOpportunitiesSection from '@/components/landing/MissedOpportunitiesSection';
import AuthoritySection from '@/components/landing/AuthoritySection';
import Testimonials from '@/components/Testimonials';
import ProcessSteps from '@/components/ProcessSteps';
import FaqSection from '@/components/FaqSection';
import FinalCTASection from '@/components/landing/FinalCTASection';
import Footer from '@/components/landing/Footer';
import MobileCTA from '@/components/landing/MobileCTA';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Navbar from '@/components/Navbar';
import SEOHead from '@/components/shared/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-darkest text-darkBlue dark:text-white transition-colors duration-300">
      <SEOHead 
        title="Maurício Magalhães | Consultoria Financeira e Investimentos Personalizados"
        description="Assessoria de investimentos especializada para quem possui mais de R$300 mil. Planejamento patrimonial, blindagem e gestão de patrimônio com resultados comprovados."
        keywords="assessor de investimentos, consultor financeiro independente, planejamento patrimonial, gestão de patrimônio, blindagem patrimonial, investimentos para médicos, investimentos para empresários"
        location="Goiânia, GO"
      />
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AuthoritySection />
      <MissedOpportunitiesSection />
      <WhyChooseUs />
      <Testimonials />
      <ProcessSteps />
      
      {/* Seção de ferramentas e recursos */}
      <section className="bg-gray-50 dark:bg-navy-dark py-12 md:py-16 transition-colors duration-300" id="resources">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 dark:text-white">
            Ferramentas e Recursos Educacionais
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Conheça minhas ferramentas gratuitas e conteúdo educacional para ajudar em suas decisões financeiras.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-navy-medium p-8 rounded-lg shadow-md border border-gray-100 dark:border-navy-dark transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Calculadora de Juros Compostos</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Descubra o poder dos juros compostos e veja como seus investimentos podem crescer ao longo do tempo com minha calculadora interativa.
              </p>
              <Link 
                to="/calculadora-juros-compostos" 
                className="btn-primary inline-block"
              >
                Acessar Calculadora
              </Link>
            </div>
            
            <div className="bg-white dark:bg-navy-medium p-8 rounded-lg shadow-md border border-gray-100 dark:border-navy-dark transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-3 dark:text-white">Blog de Educação Financeira</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Artigos, guias e conteúdos exclusivos sobre investimentos, planejamento financeiro e proteção patrimonial.
              </p>
              <Link 
                to="/blog" 
                className="btn-primary inline-block"
              >
                Acessar Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <FaqSection />
      <FinalCTASection />
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
