import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo4fin from "@/assets/4fin-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo4fin} alt="4fin logo" className="h-12" decoding="async" />
            <div className="text-xl font-bold text-primary">
              Finance s Albertem
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              O nás
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Služby
            </button>
            <button 
              onClick={() => scrollToSection('cooperation')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Spolupráce
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Reference
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Kontakt
            </button>
          </nav>

          <div className="hidden md:block">
            <Button 
              variant="cta" 
              onClick={() => scrollToSection('contact')}
              className="animate-scale-in"
            >
              Nezávazná konzultace
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-foreground transition-all"></span>
            <span className="w-6 h-0.5 bg-foreground transition-all"></span>
            <span className="w-6 h-0.5 bg-foreground transition-all"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                O nás
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Služby
              </button>
              <button 
                onClick={() => scrollToSection('cooperation')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Spolupráce
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Reference
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Kontakt
              </button>
              <Button 
                variant="cta" 
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                Nezávazná konzultace
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;