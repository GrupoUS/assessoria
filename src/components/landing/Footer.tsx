
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
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
              <li><a href="#" className="hover:text-white transition-colors">E-books Gratuitos</a></li>
              <li><Link to="/calculadora-juros-compostos" className="hover:text-white transition-colors">Calculadoras</Link></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href="mailto:contato@mauriciomagalhaes.com.br" className="hover:text-white transition-colors">contato@mauriciomagalhaes.com.br</a></li>
              <li><a href="https://wa.me/5564999886688" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+55 (64) 99988-6688</a></li>
              <li><span className="block">Goiânia, GO</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
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
        </div>
        
        <div className="mt-6 text-xs text-center text-gray-500">
          <p>Investimentos envolvem riscos. Performance passada não garante resultados futuros.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
