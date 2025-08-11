import { CheckCircle, Users, Shield, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Proč si vybrat <span className="text-primary">Alberta Gurdžjana</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jako člen týmu 4fin s.r.o. nabízím transparentní a srozumitelné finanční poradenství. 
            Specializuji se na rodinné finance a komplexní analýzu vašich potřeb.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Lidský přístup</h3>
            <p className="text-muted-foreground">
              Každý klient je pro nás jedinečný. Věnujeme čas porozumění vašim potřebám.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Důvěryhodnost</h3>
            <p className="text-muted-foreground">
              Transparentnost a bezpečnost jsou základem naší práce. Vaše důvěra je naší prioritou.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Růst a výsledky</h3>
            <p className="text-muted-foreground">
              Pomáháme vám dosáhnout finančních cílů a budovat stabilní budoucnost.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Komplexní řešení</h3>
            <p className="text-muted-foreground">
              Od pojištění po investice - poskytujeme kompletní finanční poradenství.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-subtle rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Můj přístup</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Jako finanční poradce 4fin s.r.o. se specializuji na komplexní analýzu rodinných financí. 
                Zjistím, jaké produkty již máte, a navrhnu optimalizaci pro vaši konkrétní situaci.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Komplexní analýza současného stavu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Individuální řešení pro každou rodinu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span className="text-foreground">Podpora profesionální agentury 4fin s.r.o.</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block p-8 bg-primary/5 rounded-full">
                <div className="text-4xl font-bold text-primary mb-2">4fin</div>
                <div className="text-muted-foreground">profesionální agentura</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;