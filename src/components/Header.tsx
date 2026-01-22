import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo4fin from "@/assets/4fin-logo.png";
import prihlasitIcon from "@/assets/prihlasit-icon.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Pokud jsme na hlavní stránce, scrollujeme
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // Pokud jsme na jiné stránce, přejdeme na hlavní stránku s hashem
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${isScrolled ? 'py-1 md:py-2' : 'py-2 md:py-4'}`}>
      <div className={`container mx-auto px-3 md:px-4 transition-all duration-300 ${isScrolled ? 'py-1 md:py-2' : 'py-2 md:py-4'}`}>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img src={logo4fin} alt="4fin logo" className={`transition-all duration-300 ${isScrolled ? 'w-[60px] h-[28px] md:w-[85px] md:h-[40px]' : 'w-[75px] h-[35px] md:w-[113px] md:h-[53px]'}`} decoding="async" loading="eager" width="113" height="53" style={{
            objectFit: 'contain'
          }} />
            <div className={`font-bold text-primary transition-all duration-300 ${isScrolled ? 'text-sm md:text-lg' : 'text-base md:text-xl'}`}>
              Finance s Albertem
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors duration-300">O mně</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors duration-300">
              Služby
            </button>
            <button onClick={() => scrollToSection('cooperation')} className="text-foreground hover:text-primary transition-colors duration-300">
              Spolupráce
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors duration-300">
              Reference
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-foreground hover:text-primary transition-colors duration-300">
              FAQ
            </button>
            <Link to="/reality" className="text-foreground hover:text-primary transition-colors duration-300">
              Reality
            </Link>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors duration-300">
              Kontakt
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="cta" onClick={() => scrollToSection('contact')} className="animate-scale-in">
              Nezávazná konzultace
            </Button>
            <a href="https://crm.4fin.cz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300" title="Přihlásit se do CRM">
              <img src={prihlasitIcon} alt="Přihlásit se do CRM" className="w-5 h-5" decoding="async" loading="lazy" width="20" height="20" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-primary/10 active:bg-primary/20 transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <nav className="md:hidden mt-3 py-4 border-t border-border animate-fade-in max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300 py-3 px-4 rounded-lg text-lg">
                O mně
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300 py-3 px-4 rounded-lg text-lg">
                Služby
              </button>
              <button onClick={() => scrollToSection('cooperation')} className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300 py-3 px-4 rounded-lg text-lg">
                Spolupráce
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300 py-3 px-4 rounded-lg text-lg">
                Reference
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300 py-3 px-4 rounded-lg text-lg">
                FAQ
              </button>
              <Link to="/reality" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300 py-3 px-4 rounded-lg text-lg">
                Reality
              </Link>
              <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-300 py-3 px-4 rounded-lg text-lg">
                Kontakt
              </button>
              <div className="pt-3 px-4 flex items-center gap-3">
                <Button variant="cta" onClick={() => scrollToSection('contact')} className="flex-1" size="lg">
                  Nezávazná konzultace
                </Button>
                <a href="https://crm.4fin.cz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-300" title="Přihlásit se do CRM">
                  <img src={prihlasitIcon} alt="CRM" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;