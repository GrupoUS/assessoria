
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-playfair font-bold text-darkBlue">
              Maurício Magalhães
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle()}>
                    Início
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/calculadora-juros-compostos" className={navigationMenuTriggerStyle()}>
                    Calculadora
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog" className={navigationMenuTriggerStyle()}>
                    Blog
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#testimonials" className={navigationMenuTriggerStyle()}>
                    Depoimentos
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#process" className={navigationMenuTriggerStyle()}>
                    Processo
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#faq" className={navigationMenuTriggerStyle()}>
                    FAQ
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#cta" className="btn-primary ml-2" onClick={handleCTAClick}>
                    Agendar Consulta
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 py-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/calculadora-juros-compostos" 
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculadora
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#process" 
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Processo
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#cta" 
                className="btn-primary text-center"
                onClick={handleCTAClick}
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
