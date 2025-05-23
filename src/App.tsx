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
import GuiaCompletoInvestimentos from "./pages/GuiaCompletoInvestimentos";
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
      
      if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
        console.log("ThemeInitializer: Applied light theme from localStorage");
      } else {
        // Default to dark if no preference or if saved theme is dark
        document.documentElement.classList.add('dark');
        if (!savedTheme) {
          localStorage.setItem('theme', 'dark');
          console.log("ThemeInitializer: Applied default dark theme");
        } else {
          console.log("ThemeInitializer: Applied dark theme from localStorage");
        }
      }
    };
    
    applyTheme();
    
    // Listen for system preference changes - only apply if user has no explicit preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) { 
        // This should now only happen on first visit before theme is set
        document.documentElement.classList.add('dark'); // Always default to dark
        localStorage.setItem('theme', 'dark');
        console.log("ThemeInitializer: System preference changed, defaulting to dark mode");
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
            <Route path="/guia-completo-investimentos" element={<GuiaCompletoInvestimentos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
