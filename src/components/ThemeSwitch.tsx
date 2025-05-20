
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/components/ui/use-toast';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { toast } = useToast();
  
  useEffect(() => {
    // Verificar preferência do usuário no localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    // Verificar preferência do sistema se não houver tema salvo
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      return;
    }
    
    setTheme(savedTheme);
  }, []);
  
  useEffect(() => {
    // Aplicar classe ao documento
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Salvar preferência no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Notificar usuário sobre a mudança de tema
    toast({
      title: newTheme === 'dark' ? "Modo escuro ativado" : "Modo claro ativado",
      duration: 1500,
    });
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
