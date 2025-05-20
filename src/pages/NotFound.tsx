
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-bold mb-6 text-navy-darkest dark:text-white">404</h1>
          <p className="text-xl text-navy-dark dark:text-navy-light mb-8">
            Oops! Página não encontrada
          </p>
          <Link to="/">
            <Button className="flex items-center gap-2 mx-auto">
              <ArrowLeft size={18} />
              Voltar para a página inicial
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
