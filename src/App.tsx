
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CompoundCalculator from "./pages/CompoundCalculator";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Componente para lidar com a mudança de rota e manter o scroll no topo
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Componente para aplicar o tema correto
const ThemeInitializer = () => {
  useEffect(() => {
    // Apply theme on initial page load
    const applyTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        console.log("ThemeInitializer: Applied dark theme from localStorage");
      } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        console.log("ThemeInitializer: Applied light theme from localStorage");
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          console.log("ThemeInitializer: Applied dark theme from system preference");
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          console.log("ThemeInitializer: Applied light theme from system preference");
        }
      }
    };
    
    applyTheme();
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) { // Only if user hasn't explicitly set a preference
        if (e.matches) {
          document.documentElement.classList.add('dark');
          console.log("ThemeInitializer: System switched to dark mode");
        } else {
          document.documentElement.classList.remove('dark');
          console.log("ThemeInitializer: System switched to light mode");
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return null;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeInitializer />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/calculadora-juros-compostos" element={<CompoundCalculator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
