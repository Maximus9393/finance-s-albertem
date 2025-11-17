import { Shield, TrendingUp, Home, Calculator, PiggyBank, FileText, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Services = () => {
  const navigate = useNavigate();
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const navigateToReality = () => {
    navigate('/reality');
  };
  const services = [{
    icon: CreditCard,
    title: "Úvěry",
    description: "Rychlé řešení pro vaše potřeby",
    features: ["Spotřebitelské úvěry", "Úvěr s dotacemi", "Refinancování", "Výhodné podmínky", "Poradenství při výběru úvěru"],
    gradient: "from-orange-500/10 to-orange-600/10"
  }, {
    icon: Shield,
    title: "Pojištění",
    description: "Komplexní ochrana vás a vaší rodiny",
    features: ["Životní pojištění", "Pojištění vozidel", "Majetkové pojištění", "Pojištění odpovědnosti", "Cestovní pojištění"],
    gradient: "from-blue-500/10 to-blue-600/10"
  }, {
    icon: TrendingUp,
    title: "Investice",
    description: "Růst vašeho kapitálu do budoucnosti",
    features: ["Jednorázové investování", "Pravidelné investování", "Renta k důchodu", "Investice pro náročné", "Správa majetku a portfolia"],
    gradient: "from-green-500/10 to-green-600/10"
  }, {
    icon: Home,
    title: "Hypotéky",
    description: "Cesta k vašemu vlastnímu bydlení",
    features: ["Hypoteční kalkulace", "Refinancování", "Pomoc s vyřízením", "Výhodné úrokové sazby", "Poradenství při výběru hypotéky"],
    gradient: "from-purple-500/10 to-purple-600/10"
  }];
  return <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Co pro vás <span className="text-primary">mohu udělat</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jako člen týmu 4fin Better Together a.s. poskytuju kompletní spektrum finančních služeb. 
            Od komplexní analýzy současného stavu až po optimalizaci a nové produkty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => <div key={index} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 group animate-scale-in border border-border/50 text-white h-full flex flex-col" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/90 mb-4 leading-relaxed text-sm flex-grow">{service.description}</p>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white text-sm leading-relaxed">{feature}</span>
                  </li>)}
              </ul>
              
              <Button variant="secondary" className="w-full bg-pink-800 text-white border-pink-800 hover:bg-pink-900 hover:text-white transition-all duration-300 mt-auto" onClick={scrollToContact}>
                Zjistit více
              </Button>
            </div>)}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card/50 rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300">
            <Calculator className="w-8 h-8 text-white mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Finanční plánování</h4>
            <p className="text-white/90 text-sm">Strategické plánování vašich financí pro dosažení životních cílů.</p>
          </div>
          
          <div className="bg-card/50 rounded-xl p-6 border border-border/30 hover:border-primary/30 hover:scale-105 hover:shadow-lg hover:bg-card/60 transition-all duration-300 cursor-pointer" onClick={navigateToReality}>
            <Home className="w-8 h-8 text-white mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Reality</h4>
            <p className="text-white/90 text-sm">Ve spolupráci s renomovanými realitními makléři jsme Vám schopni zajistit profesionální servis při prodeji nebo pronájmu Vaší nemovitosti.</p>
          </div>
          
          <div className="bg-card/50 rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300">
            <FileText className="w-8 h-8 text-white mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">Daňové poradenství</h4>
            <p className="text-white/90 text-sm">Optimalizace daňových povinností a využití úlev.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;