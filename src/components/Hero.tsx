import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import albertPhoto from "@/assets/albert-photo.jpg";
import CountUp from "@/components/CountUp";
import { useState } from "react";
const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const quotes = ["Peníze umí plavat. Naučím je plavat k vám.", "Ve financích jsem doma – pojďte dál.", "Umím zkrotit i rozjetý rozpočet.", "Vaše finance? Moje hobby i profese.", "Jistoty, zisky a klidný spánek – v balíčku na míru.", "Chytré peníze patří chytrým lidem. Jste mezi nimi?", "Investice nejsou nuda. Ukažu vám proč.", "Ztráty nechávám konkurenci.", "Když jde o peníze, mám plán A… i plán Z.", "Vaše cíle, moje strategie.", "Mluvím plynule jazykem hypoték, pojistek i investic.", "Finanční proud znám zpaměti – přidáte se na palubu?", "Vaše budoucnost? Lepší, než si myslíte.", "Nebojte se snít. Já vám to spočítám.", "Společně uděláme z vašich financí silný příběh.", "Úroky mohou růst, ale vaše starosti klesnou.", "Miluju čísla – a ony milují přesnost.", "Finance jsou hra. Já znám pravidla.", "Každá koruna má svůj cíl. Pomůžu jí ho najít.", "Váš majetek – moje zodpovědnost.", "Když se čísla usmějí, je to správná cesta.", "Bezpečí a růst – dvě věci, které umím spojit.", "Vaše peníze nemusí spát – naučím je pracovat.", "V investicích nečekám na zázrak. Tvořím ho.", "Strategie, která se vyplatí – doslova.", "Rozumím riziku, ale sázím na jistotu.", "Vím, kam peníze tečou – a dokážu je tam nasměrovat.", "Každý finanční plán je jako otisk prstu – jedinečný.", "Vy plánujete život, já naplánuju finance.", "Když je rozpočet v kondici, zvládne všechno."];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Vaše finance{" "}
              <span className="text-primary">s Albertem</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">Albert Gurdžjan - váš osobní finanční poradce. Komplexní analýza a optimalizace rodinných financí pod záštitou společnosti 4fin s.r.o.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" onClick={scrollToContact} className="animate-scale-in">
                Nezávazná konzultace zdarma
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Naše služby
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <CountUp end={200} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Spokojených klientů</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <CountUp end={5} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground">Let zkušeností</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <CountUp end={3} suffix="M+" />
                </div>
                <div className="text-sm text-muted-foreground">korun ve správě</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl blur-3xl animate-pulse"></div>
            <div className="flip-card relative max-w-md mx-auto group">
              {/* Hover hint */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm animate-bounce opacity-90 group-hover:opacity-0 transition-opacity duration-300 z-10">
                <span className="bg-card text-card-foreground px-4 py-2 rounded-full shadow-elegant border border-border/20">
                  <span className="hidden sm:inline">✨ Najeď myší pro citát</span>
                  <span className="sm:hidden">✨ Klikni na fotku pro citát</span>
                </span>
              </div>
              <div className="flip-card-inner">
                 <div className="flip-card-front relative">
                   {/* Loading placeholder */}
                   {!imageLoaded && <div className="absolute inset-0 bg-muted rounded-2xl animate-pulse flex items-center justify-center">
                       <div className="w-16 h-16 bg-primary/20 rounded-full animate-ping"></div>
                     </div>}
                   
                    <img src={albertPhoto} alt="Albert Gurdžjan - certifikovaný finanční poradce s 5+ lety zkušeností" className={`rounded-2xl shadow-elegant w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} loading="eager" decoding="async" width="400" height="500" onLoad={() => setImageLoaded(true)} onError={() => setImageLoaded(true)} />
                  </div>
                <div className="flip-card-back">
                  <div className="bg-gradient-primary rounded-2xl shadow-elegant w-full h-full flex items-center justify-center p-8">
                    <blockquote className="text-white text-center">
                       <p className="text-xl md:text-2xl font-medium italic leading-relaxed">
                         „{randomQuote}"
                       </p>
                      <footer className="mt-6 text-lg opacity-90">— Albert Gurdžjan</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;