import { memo } from "react";
import { CheckCircle, Users, Shield, TrendingUp } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const About = memo(() => {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Proč si vybrat <span className="text-primary">Alberta Gurdžjana</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Jako poradce společnosti 4fin Better Together a.s. nabízím transparentní, srozumitelné a profesionální poradenství. Specializuji se nejen na rodinné finance včetně komplexní analýzy, ale i na firemní klientelu, pojištění firem, flotily a provozní úvěry.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-3 md:p-0 will-change-transform">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-3 md:mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-foreground">Lidský přístup</h3>
            <p className="text-muted-foreground text-xs md:text-base">
              Každý klient je pro mě jedinečný. Věnuji čas porozumění vašim potřebám.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-3 md:p-0 will-change-transform">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-3 md:mb-6 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-foreground">Důvěryhodnost</h3>
            <p className="text-muted-foreground text-xs md:text-base">Na první místo stavím důvěru mezi Vámi a mnou.</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-3 md:p-0 will-change-transform">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-3 md:mb-6 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-foreground">Růst a výsledky</h3>
            <p className="text-muted-foreground text-xs md:text-base">
              Pomáhám vám dosáhnout finančních cílů a budovat stabilní budoucnost.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-3 md:p-0 will-change-transform">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-3 md:mb-6 group-hover:bg-primary/20 transition-colors">
              <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-foreground">Komplexní řešení</h3>
            <p className="text-muted-foreground text-xs md:text-base">Od analýzy po nastavení produktu a následný pravidelný servis.</p>
          </div>
        </div>

        <div className="mt-12 md:mt-20 bg-gradient-subtle rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12 shadow-card text-white">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6">Můj přístup</h3>
              <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm md:text-base">
                    1. Představení konzultanta a společnosti 4fin
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm">
                    Než začnu analyzovat vaše finance, vysvětlím vám způsob mojí práce a hodnoty, které pro vztah s klientem uznávám. Jedině po vzájemné důvěře můžu řešit finanční otázky.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm md:text-base">
                    2. Podrobná finanční analýza
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm">
                    Zanalyžuju pro vás a připravím profesionální finanční analýzu, abych zoptimalizoval a nastavil vaše finance podle vašich potřeb.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm md:text-base">
                    3. Navržení a vysvětlení řešení
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm">
                    Na základě analýzy potřeb vám vypracuji, představím a vysvětlím komplexní optimalizaci vašich financí.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm md:text-base">
                    4. Administrace smluv spojená s finančními produkty
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm">
                    Zajistím vám kompletní administrativu vašich finančních produktů.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-sm md:text-base">
                    5. Uspořádání a archivace veškerých dokumentů
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm">
                    Uspořádám vám všechny smlouvy a související dokumenty do přehledného šanonu, abyste je vždy měli po ruce.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-sm md:text-base">
                    6. Nepřetržitá následná péče
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm">
                    Postarám se o vás a neustále budu monitorovat růst vašeho majetku podle stanovených cílů a přání. Servisní schůzku doporučuji vždy po 12 měsících.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex items-center justify-center h-full mt-4 md:mt-0">
              <div className="inline-block p-6 md:p-12 bg-primary/5 rounded-full">
                <img 
                  src="/4FIN_H_Bold_Negativ.png" 
                  alt="4fin Better Together a.s. logo" 
                  className="w-[120px] md:w-[170px] h-auto mx-auto" 
                  loading="lazy"
                  decoding="async"
                  width="170"
                  height="45"
                  sizes="170px"
                  style={{
                    objectFit: 'contain'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
