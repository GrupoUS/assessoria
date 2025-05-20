
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
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200">
      <a href="#cta" className="btn-primary block text-center" onClick={handleCTAClick}>
        Quero minha consultoria gratuita
      </a>
    </div>
  );
};

export default MobileCTA;
