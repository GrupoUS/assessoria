
import React from 'react';

const MobileCTA = () => {
  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Scroll to the form section
    const element = document.getElementById('cta');
    element?.scrollIntoView({ behavior: 'smooth' });
    
    // Focus on the first input after scrolling
    setTimeout(() => {
      const firstInput = document.querySelector('#cta input');
      if (firstInput instanceof HTMLElement) {
        firstInput.focus();
      }
    }, 800);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-navy-darkest p-4 shadow-lg border-t border-gray-200 dark:border-navy-light/20 z-50 transition-colors duration-300">
      <a 
        href="#cta" 
        className="bg-[#588157] hover:bg-[#4e7048] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center block"
        onClick={handleCTAClick}
      >
        Quero minha consultoria gratuita
      </a>
    </div>
  );
};

export default MobileCTA;
