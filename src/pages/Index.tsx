
import React from 'react';
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-darkBlue">
      <HeroSection />
      <BenefitsSection />
      <MissedOpportunitiesSection />
      <AuthoritySection />
      <Testimonials />
      <ProcessSteps />
      <FaqSection />
      <FinalCTASection />
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Index;
