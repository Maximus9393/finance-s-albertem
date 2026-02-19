import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import albertPhotoWebp from "@/assets/albert-photo-448w.webp";
import albertPhotoJpg from "@/assets/albert-photo.jpg";
import CountUp from "@/components/CountUp";
import { useState, useMemo, memo } from "react";

const quotes = [
  "Peníze umí plavat. Naučím je plavat k vám.",
  "Ve financích jsem doma – pojďte dál.",
  "Umím zkrotit i rozjetý rozpočet.",
  "Vaše finance? Moje hobby i profese.",
  "Jistoty, zisky a klidný spánek – v balíčku na míru.",
  "Chytré peníze patří chytrým lidem. Jste mezi nimi?",
  "Investice nejsou nuda. Ukažu vám proč.",
  "Ztráty nechávám konkurenci.",
  "Když jde o peníze, mám plán A… i plán Z.",
  "Vaše cíle, moje strategie.",
  "Mluvím plynule jazykem hypoték, pojistek i investic.",
  "Finanční proud znám zpaměti – přidáte se na palubu?",
  "Vaše budoucnost? Lepší, než si myslíte.",
  "Nebojte se snít. Já vám to spočítám.",
  "Společně uděláme z vašich financí silný příběh.",
  "Úroky mohou růst, ale vaše starosti klesnou.",
  "Miluju čísla – a ony milují přesnost.",
  "Finance jsou hra. Já znám pravidla.",
  "Každá koruna má svůj cíl. Pomůžu jí ho najít.",
  "Váš majetek – moje zodpovědnost.",
  "Když se čísla usmějí, je to správná cesta.",
  "Bezpečí a růst – dvě věci, které umím spojit.",
  "Vaše peníze nemusí spát – naučím je pracovat.",
  "V investicích nečekám na zázrak. Tvořím ho.",
  "Strategie, která se vyplatí – doslova.",
  "Rozumím riziku, ale sázím na jistotu.",
  "Vím, kam peníze tečou – a dokážu je tam nasměrovat.",
  "Každý finanční plán je jako otisk prstu – jedinečný.",
  "Vy plánujete život, já naplánuju finance.",
  "Když je rozpočet v kondici, zvládne všechno."
];

const Hero = memo(() => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Memoize random quote to prevent re-calculation on re-renders
  const randomQuote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], []);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-5 md:space-y-8 animate-fade-in order-2 lg:order-1 will-change-transform">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-center lg:text-left">
              Vaše finance{" "}
              <span className="text-primary">s Albertem</span>
            </h1>
            
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed text-center lg:text-left">
              Albert Gurdžjan - váš osobní finanční poradce. Komplexní analýza a optimalizace rodinných financí pod záštitou společnosti 4fin Better Together a.s.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button variant="hero" size="lg" onClick={scrollToContact} className="animate-scale-in w-full sm:w-auto text-base">
                Nezávazná konzultace zdarma
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({
                behavior: 'smooth'
              })} className="w-full sm:w-auto text-base">
                Moje služby
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 pt-4 md:pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <CountUp end={150} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Spokojených klientů</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <CountUp end={5} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Let zkušeností</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <CountUp end={3} suffix="M+" />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">korun ve správě</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in order-1 lg:order-2 mb-6 lg:mb-0 will-change-transform">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl blur-3xl animate-pulse"></div>
            <div className="flip-card relative max-w-[280px] sm:max-w-xs md:max-w-md mx-auto group">
              {/* Hover hint */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm animate-bounce opacity-90 group-hover:opacity-0 transition-opacity duration-300 z-10">
                <span className="bg-card text-card-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-elegant border border-border/20 whitespace-nowrap">
                  <span className="hidden sm:inline">✨ Najeď myší pro citát</span>
                  <span className="inline sm:hidden">✨ Klikni pro citát</span>
                </span>
              </div>
              <div className="flip-card-inner">
                <div className="flip-card-front relative">
                  {/* Loading placeholder */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-muted rounded-2xl animate-pulse flex items-center justify-center">
                      <div className="w-12 md:w-16 h-12 md:h-16 bg-primary/20 rounded-full animate-ping"></div>
                    </div>
                  )}
                  
                  <picture>
                    <source 
                      srcSet={albertPhotoWebp} 
                      type="image/webp"
                    />
                    <img 
                      src={albertPhotoJpg} 
                      alt="Albert Gurdžjan - certifikovaný finanční poradce s 5+ lety zkušeností" 
                      className={`rounded-2xl shadow-elegant w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                      loading="eager"
                      decoding="async"
                      width="448"
                      height="614"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageLoaded(true)}
                    />
                  </picture>
                </div>
                <div className="flip-card-back">
                  <div className="bg-gradient-primary rounded-2xl shadow-elegant w-full h-full flex items-center justify-center p-4 md:p-8">
                    <blockquote className="text-white text-center">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium italic leading-relaxed">
                        „{randomQuote}"
                      </p>
                      <footer className="mt-3 md:mt-6 text-sm md:text-lg opacity-90">— Albert Gurdžjan</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
