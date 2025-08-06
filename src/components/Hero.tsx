import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Vaše finance.{" "}
              <span className="text-primary">Naše starost.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Poskytujeme komplexní finanční poradenství s lidským přístupem. 
              Pomáháme vám dosáhnout finančních cílů bezpečně a transparentně.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="animate-scale-in"
              >
                Nezávazná konzultace zdarma
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Naše služby
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Spokojených klientů</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Let zkušeností</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Podpora</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="Finanční poradenství s lidským přístupem"
              className="relative rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;