
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                  <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-light-blue to-dark-blue p-6 no-underline outline-none focus:shadow-md"
                            href="#benefits"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Consultoria Financeira
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Planejamento patrimonial personalizado para seu perfil e objetivos.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link to="/calculadora-juros-compostos" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Calculadora de Juros
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Simule o crescimento dos seus investimentos
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            Blog Educativo
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Artigos sobre investimentos e finanças
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
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
                  <a href="#cta" className="btn-primary ml-2">
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
              <a 
                href="#benefits" 
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefícios
              </a>
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
                href="#cta" 
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
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
