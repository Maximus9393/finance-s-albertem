import { CheckCircle, Users, Shield, TrendingUp } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import logo4fin from "@/assets/4fin-logo.png";
const About = () => {
  return <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Proč si vybrat <span className="text-primary">Alberta Gurdžjana</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Jako poradce společnosti 4fin s.r.o. nabízím transparentní, srozumitelné a profesionální poradenství. Specializuji se nejen na rodinné finance včetně komplexní analýzy, ale i na firemní klientelu, pojištění firem, flotily a provozní úvěry. </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Lidský přístup</h3>
            <p className="text-muted-foreground">
              Každý klient je pro mě jedinečný. Věnuji čas porozumění vašim potřebám.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Důvěryhodnost</h3>
            <p className="text-muted-foreground">Na první místo stavím důvěru mezi Vámi a mnou. Proto trvám při spolupráci na vzájemné důvěře.</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Růst a výsledky</h3>
            <p className="text-muted-foreground">
              Pomáhám vám dosáhnout finančních cílů a budovat stabilní budoucnost.
            </p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Komplexní řešení</h3>
            <p className="text-muted-foreground">Od analýzy po nastavení produktu a následný pravidelný servis. Od toho jsem tu pro Vás!</p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-subtle rounded-2xl p-8 md:p-12 shadow-card text-white">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Můj přístup</h3>
              <Accordion type="single" collapsible={false} defaultValue="item-1" className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    1. Představení konzultanta a společnosti 4fin
                  </AccordionTrigger>
                  <AccordionContent>
                    Než začnu analyzovat vaše finance, vysvětlím vám způsob mojí práce a hodnoty, které pro vztah s klientem uznávám. Jedině po vzájemné důvěře můžu řešit finanční otázky.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    2. Podrobná finanční analýza
                  </AccordionTrigger>
                  <AccordionContent>
                    Zanalyžuju pro vás a připravím profesionální finanční analýzu, abych zoptimalizoval a nastavil vaše finance podle vašich potřeb.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    3. Navržení a vysvětlení řešení
                  </AccordionTrigger>
                  <AccordionContent>
                    Na základě analýzy potřeb vám vypracuji, představím a vysvětlím komplexní optimalizaci vašich financí.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    4. Administrace smluv spojená s finančními produkty
                  </AccordionTrigger>
                  <AccordionContent>
                    Zajistím vám kompletní administrativu vašich finančních produktů.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    5. Uspořádání a archivace veškerých dokumentů
                  </AccordionTrigger>
                  <AccordionContent>
                    Uspořádám vám všechny smlouvy a související dokumenty do přehledného šanonu, abyste je vždy měli po ruce.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    6. Nepřetržitá následná péče
                  </AccordionTrigger>
                  <AccordionContent>
                    Postarám se o vás a neustále budu monitorovat růst vašeho majetku podle stanovených cílů a přání. Servisní schůzku doporučuji vždy po 12 měsících.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex items-center justify-center h-full">
              <div className="inline-block p-12 bg-primary/5 rounded-full">
                <img src="/4FIN_H_Bold_Negativ.png" alt="4fin s.r.o. logo" className="w-[170px] h-[80px] mx-auto" style={{
                objectFit: 'contain'
              }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;