
import React from 'react';

const MobileCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-navy-darkest p-4 shadow-lg border-t border-gray-200 dark:border-navy-light/20 z-50 transition-colors duration-300">
      <a 
        href="https://wa.me/64999886688" 
        className="bg-[#588157] hover:bg-[#4e7048] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center block"
      >
        Quero proteger e multiplicar meu patrimônio
      </a>
    </div>
  );
};

export default MobileCTA;
