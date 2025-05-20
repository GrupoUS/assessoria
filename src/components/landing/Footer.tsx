
import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
