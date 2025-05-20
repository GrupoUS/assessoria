
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeSwitch from './ThemeSwitch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fechar o menu mobile quando a rota muda
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white dark:bg-navy-darkest shadow-md py-3' 
        : 'bg-white dark:bg-navy-darkest bg-opacity-90 dark:bg-opacity-90 py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-navy-darkest dark:text-white transition-colors">
          <span className="text-navy-medium dark:text-navy-light">Maurício</span> Magalhães
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-navy-dark dark:text-white hover:text-navy-medium dark:hover:text-navy-light transition-colors">
            Início
          </Link>
          <Link to="/blog" className="text-navy-dark dark:text-white hover:text-navy-medium dark:hover:text-navy-light transition-colors">
            Blog
          </Link>
          <Link to="/calculadora-juros-compostos" className="text-navy-dark dark:text-white hover:text-navy-medium dark:hover:text-navy-light transition-colors">
            Calculadora
          </Link>
          <a href="https://wa.me/5564999886688" className="bg-[#588157] hover:bg-[#4e7048] text-white font-medium py-2 px-4 rounded-md transition-all duration-300">
            Agendar Reunião
          </a>
          <ThemeSwitch />
        </div>

        {/* Menu mobile button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitch />
          <button onClick={toggleMenu} className="text-navy-dark dark:text-white p-2 transition-colors">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-navy-dark shadow-xl absolute top-full left-0 right-0 p-4 transition-colors">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-navy-dark dark:text-white hover:text-navy-medium dark:hover:text-navy-light transition-colors p-2">
              Início
            </Link>
            <Link to="/blog" className="text-navy-dark dark:text-white hover:text-navy-medium dark:hover:text-navy-light transition-colors p-2">
              Blog
            </Link>
            <Link to="/calculadora-juros-compostos" className="text-navy-dark dark:text-white hover:text-navy-medium dark:hover:text-navy-light transition-colors p-2">
              Calculadora
            </Link>
            <a href="https://wa.me/5564999886688" className="bg-[#588157] hover:bg-[#4e7048] text-white font-medium py-3 px-4 rounded-md transition-all duration-300 text-center">
              Agendar Reunião
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
