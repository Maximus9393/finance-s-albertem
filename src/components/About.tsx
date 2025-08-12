import { CheckCircle, Users, Shield, TrendingUp } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
const About = () => {
  return <section id="about" className="py-20 bg-background">
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
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Můj přístup</h3>
              <Accordion type="single" collapsible={false} defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Představení konzultanta a společnosti 4fin
                  </AccordionTrigger>
                  <AccordionContent>
                    Než začneme analyzovat vaše finance, vysvětlíme vám způsob naší práce a hodnoty, které pro vztah s klientem uznáváme. Jedině po vzájemné důvěře můžeme řešit finanční otázky.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Podrobná finanční analýza
                  </AccordionTrigger>
                  <AccordionContent>
                    Zanalyzujeme pro vás a připravíme profesionální finanční analýzu, abychom zoptimalizovali a nastavili vaše finance podle vašich potřeb.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Navržení a vysvětlení řešení
                  </AccordionTrigger>
                  <AccordionContent>
                    Na základě analýzy potřeb vám vypracujeme, představíme a vysvětlíme komplexní optimalizaci vašich financí.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Administrace smluv spojená s finančními produkty
                  </AccordionTrigger>
                  <AccordionContent>
                    Zajistíme vám kompletní administrativu vašich finančních produktů.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Uspořádání a archivace veškerých dokumentů
                  </AccordionTrigger>
                  <AccordionContent>
                    Uspořádáme vám všechny smlouvy a související dokumenty do přehledného šanonu, abyste je vždy měli po ruce.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Nepřetržitá následná péče
                  </AccordionTrigger>
                  <AccordionContent>
                    Postaráme se o vás a neustále budeme monitorovat růst vašeho majetku podle stanovených cílů a přání. Servisní schůzku doporučujeme vždy po 12 měsících.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-center">
              <div className="inline-block p-8 bg-primary/5 rounded-full">
                <div className="text-4xl font-bold text-primary mb-2">4fin s.r.o.</div>
                <div className="text-muted-foreground">profesionální agentura</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;