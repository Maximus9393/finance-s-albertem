import { Shield, TrendingUp, Home, Calculator, PiggyBank, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Shield,
      title: "Pojištění",
      description: "Komplexní ochrana vás a vaší rodiny",
      features: ["Životní pojištění", "Majetkové pojištění", "Pojištění odpovědnosti", "Cestovní pojištění"],
      gradient: "from-blue-500/10 to-blue-600/10"
    },
    {
      icon: TrendingUp,
      title: "Investice",
      description: "Růst vašeho kapitálu do budoucnosti",
      features: ["Dlouhodobé investování", "Pravidelné investování", "Penzijní připojištění", "Investiční poradenství"],
      gradient: "from-green-500/10 to-green-600/10"
    },
    {
      icon: Home,
      title: "Hypotéky",
      description: "Cesta k vašemu vlastnímu bydlení",
      features: ["Hypoteční kalkulace", "Refinancování", "Pomoc s vyřízením", "Výhodné úrokové sazby"],
      gradient: "from-purple-500/10 to-purple-600/10"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Co pro vás <span className="text-primary">mohu udělat</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jako člen týmu 4fin s.r.o. poskytuju kompletní spektrum finančních služeb. 
            Od komplexní analýzy současného stavu až po optimalizaci a nové produkty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group animate-scale-in border border-border/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                onClick={scrollToContact}
              >
                Zjistit více
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card/50 rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300">
            <Calculator className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">Finanční plánování</h4>
            <p className="text-muted-foreground text-sm">Strategické plánování vašich financí pro dosažení životních cílů.</p>
          </div>
          
          <div className="bg-card/50 rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300">
            <PiggyBank className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">Spoření</h4>
            <p className="text-muted-foreground text-sm">Efektivní spořicí produkty pro různé životní situace.</p>
          </div>
          
          <div className="bg-card/50 rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300">
            <FileText className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">Daňové poradenství</h4>
            <p className="text-muted-foreground text-sm">Optimalizace daňových povinností a využití úlev.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;