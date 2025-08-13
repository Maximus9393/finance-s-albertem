import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo4fin from "@/assets/4fin-logo.png";
import prihlasitIcon from "@/assets/prihlasit-icon.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logo4fin} alt="4fin logo" className={`transition-all duration-300 ${isScrolled ? 'w-[85px] h-[40px]' : 'w-[113px] h-[53px]'}`} decoding="async" loading="eager" width="113" height="53" style={{ objectFit: 'contain' }} />
            <div className={`font-bold text-primary transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-xl'}`}>
              Finance s Albertem
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors duration-300">O mě</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors duration-300">
              Služby
            </button>
            <button onClick={() => scrollToSection('cooperation')} className="text-foreground hover:text-primary transition-colors duration-300">
              Spolupráce
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors duration-300">
              Reference
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors duration-300">
              Kontakt
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="cta" onClick={() => scrollToSection('contact')} className="animate-scale-in">
              Nezávazná konzultace
            </Button>
            <a 
              href="https://crm.4fin.cz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
              title="Přihlásit se do CRM"
            >
              <img 
                src={prihlasitIcon} 
                alt="Přihlásit se do CRM" 
                className="w-5 h-5"
                decoding="async"
                loading="lazy"
                width="20"
                height="20"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden flex flex-col space-y-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="w-6 h-0.5 bg-foreground transition-all"></span>
            <span className="w-6 h-0.5 bg-foreground transition-all"></span>
            <span className="w-6 h-0.5 bg-foreground transition-all"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <nav className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors duration-300">
                O nás
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors duration-300">
                Služby
              </button>
              <button onClick={() => scrollToSection('cooperation')} className="text-left text-foreground hover:text-primary transition-colors duration-300">
                Spolupráce
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground hover:text-primary transition-colors duration-300">
                Reference
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors duration-300">
                Kontakt
              </button>
              <Button variant="cta" onClick={() => scrollToSection('contact')} className="w-full">
                Nezávazná konzultace
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;