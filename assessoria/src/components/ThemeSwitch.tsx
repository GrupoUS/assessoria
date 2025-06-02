
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Switch } from './ui/switch';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Default to dark
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check user preference in localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    // If no saved theme, use dark as default
    if (!savedTheme) {
      setTheme('dark');
      return;
    }
    
    setTheme(savedTheme);
  }, []);
  
  useEffect(() => {
    // Apply class to document
    document.documentElement.classList.toggle('dark', theme === 'dark');
    
    // Save preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setIsTransitioning(true);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Small delay to allow transition effects to complete
    setTimeout(() => {
      setTheme(newTheme);
      
      // Reset transitioning state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
      
      // Notify user about theme change
      toast({
        title: newTheme === 'dark' ? "Modo escuro ativado" : "Modo claro ativado",
        description: newTheme === 'dark' 
          ? "O tema escuro foi aplicado em todo o site" 
          : "O tema claro foi aplicado em todo o site",
        duration: 1500,
      });
    }, 50);

    console.log(`Theme changing to: ${newTheme}`);
  };
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className={`rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-navy-medium transition-all duration-300 ${isTransitioning ? 'scale-90' : 'scale-100'}`}
      aria-label="Alternar tema"
      disabled={isTransitioning}
    >
      <div className={`transition-all duration-300 ${isTransitioning ? 'rotate-180' : 'rotate-0'}`}>
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-navy-dark dark:text-white" />
        ) : (
          <Sun className="h-5 w-5 text-navy-dark dark:text-white" />
        )}
      </div>
    </Button>
  );
};

export default ThemeSwitch;
