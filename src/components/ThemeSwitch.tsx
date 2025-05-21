
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { toast } = useToast();
  
  useEffect(() => {
    // Check user preference in localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    // Check system preference if no saved theme
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
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
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Notify user about theme change
    toast({
      title: newTheme === 'dark' ? "Modo escuro ativado" : "Modo claro ativado",
      description: newTheme === 'dark' 
        ? "O tema escuro foi aplicado em todo o site" 
        : "O tema claro foi aplicado em todo o site",
      duration: 1500,
    });

    console.log(`Theme changed to: ${newTheme}`);
  };
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-navy-medium transition-colors"
      aria-label="Alternar tema"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-navy-dark dark:text-white" />
      ) : (
        <Sun className="h-5 w-5 text-navy-dark dark:text-white" />
      )}
    </Button>
  );
};

export default ThemeSwitch;
