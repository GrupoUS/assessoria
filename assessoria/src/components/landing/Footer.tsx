
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Maurício Magalhães</h3>
            <p className="text-sm mb-4">
              Consultoria financeira personalizada para proteção e crescimento patrimonial.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mauriciosmagalhaes/" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><a href="https://wa.me/5564999886688" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Consultoria</a></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/calculadora-juros-compostos" className="hover:text-white transition-colors">Calculadora</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-white transition-colors">Artigos Educacionais</Link></li>
              <li><Link to="/calculadora-juros-compostos" className="hover:text-white transition-colors">Calculadoras</Link></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href="mailto:mauriciomagalhaes@live.com" className="hover:text-white transition-colors">mauriciomagalhaes@live.com</a></li>
              <li><a href="https://wa.me/5564999886688" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 (64) 99988-6688</a></li>
              <li><span className="block">Goiânia, GO</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Maurício Magalhães - Todos os direitos reservados</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-white transition-colors">Política de privacidade</a>
              <span>|</span>
              <a href="#" className="text-sm hover:text-white transition-colors">Termos de uso</a>
            </div>
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
