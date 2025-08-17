import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
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
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Finance s Albertem</h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Albert Gurdžjan - váš osobní finanční poradce pod záštitou 4fin s.r.o. 
              Komplexní analýza a optimalizace rodinných financí.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/albi.gurdzjan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.instagram.com/albert_gurdzjan_finance/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/albert-gurdzjan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a href="https://linktr.ee/albertgurdzjan" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                <ExternalLink className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Naše služby</h4>
            <ul className="space-y-3">
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors">Pojištění</a></li>
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors">Investice</a></li>
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors">Hypotéky</a></li>
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors">Finanční plánování</a></li>
              <li><a href={createLink("#services")} className="text-background/80 hover:text-primary transition-colors">Spoření</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Rychlé odkazy</h4>
            <ul className="space-y-3">
              <li><a href={createLink("#about")} className="text-background/80 hover:text-primary transition-colors">O nás</a></li>
              <li><a href={createLink("#testimonials")} className="text-background/80 hover:text-primary transition-colors">Reference</a></li>
              <li><a href={createLink("#contact")} className="text-background/80 hover:text-primary transition-colors">Kontakt</a></li>
              <li><a href="https://www.4fin.cz/ochrana-osobnich-udaju" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary transition-colors">Zásady ochrany osobních údajů</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-background/80">+420 728 271 275</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/80">albert.gurdzjan@4fin.cz</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/80">
                  Chrastavská 231/32A<br />
                  460 01 Liberec
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Finance s Albertem | 4fin s.r.o. Všechna práva vyhrazena.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => {
                  const event = new CustomEvent('openCookieSettings');
                  window.dispatchEvent(event);
                }}
                className="text-background/60 hover:text-primary transition-colors text-sm cursor-pointer"
              >
                Cookies
              </button>
              <a href="#" className="text-background/60 hover:text-primary transition-colors text-sm">
                Mapa stránek
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;