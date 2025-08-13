import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import albertPhoto from "@/assets/albert-photo.jpg";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Vaše finance{" "}
              <span className="text-primary">s Albertem</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Albert Gurdžjan - váš osobní finanční poradce. Komplexní analýza a optimalizace 
              rodinných financí pod záštitou 4fin s.r.o.
            </p>

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
                <div className="text-3xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Spokojených klientů</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Let zkušeností</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3M+</div>
                <div className="text-sm text-muted-foreground">korun ve správě</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl blur-3xl"></div>
            <img 
              src={albertPhoto} 
              alt="Albert Gurdžjan - certifikovaný finanční poradce s 5+ lety zkušeností" 
              className="relative rounded-2xl shadow-elegant w-full h-auto object-cover max-w-md mx-auto" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="400"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;