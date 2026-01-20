import { memo } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  const isOnReality = location.pathname === '/reality';
  
  const createLink = (hash: string) => {
    if (isOnReality) {
      return `/${hash}`;
    }
    return hash;
  };

  return (
    <footer className="bg-foreground text-background py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-primary">Finance s Albertem</h3>
            <p className="text-background/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Albert Gurdžjan - váš osobní finanční poradce pod záštitou 4fin Better Together a.s. 
              Komplexní analýza a optimalizace rodinných financí.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="https://www.facebook.com/albi.gurdzjan/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 active:scale-95 transition-all">
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a href="https://www.instagram.com/albert_gurdzjan_finance/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 active:scale-95 transition-all">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/albert-gurdzjan/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 active:scale-95 transition-all">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
              <a href="https://linktr.ee/albertgurdzjan" target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 active:scale-95 transition-all">
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-6">Moje služby</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">Pojištění</a></li>
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">Investice</a></li>
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">Hypotéky</a></li>
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">Finanční plánování</a></li>
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">Spoření</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-6">Rychlé odkazy</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href={createLink("#about")} className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">O mně</a></li>
              <li><a href={createLink("#testimonials")} className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">Reference</a></li>
              <li><a href={createLink("#contact")} className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">Kontakt</a></li>
              <li><a href="https://www.4fin.cz/ochrana-osobnich-udaju" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary transition-colors text-sm md:text-base">Ochrana údajů</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-6">Kontakt</h4>
            <div className="space-y-3 md:space-y-4">
              <a href="tel:+420728271275" className="flex items-center space-x-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-background/80 text-sm md:text-base">+420 728 271 275</span>
              </a>
              <a href="mailto:albert.gurdzjan@4fin.cz" className="flex items-center space-x-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-background/80 text-sm md:text-base break-all">albert.gurdzjan@4fin.cz</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm md:text-base">
                  Chrastavská 231/32A<br />
                  460 01 Liberec
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-background/60 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Finance s Albertem | 4fin Better Together a.s.
            </p>
            <div className="flex space-x-4 md:space-x-6">
              <button 
                onClick={() => {
                  const event = new CustomEvent('openCookieSettings');
                  window.dispatchEvent(event);
                }}
                className="text-background/60 hover:text-primary transition-colors text-xs md:text-sm cursor-pointer"
              >
                Cookies
              </button>
              <a href="/sitemap.xml" className="text-background/60 hover:text-primary transition-colors text-xs md:text-sm">
                Mapa stránek
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
