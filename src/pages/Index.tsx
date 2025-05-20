
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-darkBlue">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <MissedOpportunitiesSection />
      <WhyChooseUs />
      <AuthoritySection />
      <Testimonials />
      <ProcessSteps />
      
      {/* Seção de ferramentas e recursos */}
      <section className="bg-gray-50 py-12 md:py-16" id="resources">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Ferramentas e Recursos Educacionais
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça nossas ferramentas gratuitas e conteúdo educacional para ajudar em suas decisões financeiras.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-3">Calculadora de Juros Compostos</h3>
              <p className="text-gray-600 mb-6">
                Descubra o poder dos juros compostos e veja como seus investimentos podem crescer ao longo do tempo com nossa calculadora interativa.
              </p>
              <Link 
                to="/calculadora-juros-compostos" 
                className="btn-primary inline-block"
              >
                Acessar Calculadora
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-3">Blog de Educação Financeira</h3>
              <p className="text-gray-600 mb-6">
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
