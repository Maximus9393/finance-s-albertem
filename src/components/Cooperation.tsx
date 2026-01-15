import { Button } from "@/components/ui/button";
const Cooperation = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="cooperation" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Spolupráce – <span className="text-primary">finanční poradce</span> nebo leadař
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2">Zajímá vás podnikání v oblasti finančního poradenství? Nebo chcete jen doporučovat klienty jako leadař? Ozvěte se a probereme, jak můžeme spolupracovat.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          <article className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card animate-scale-in">
            <h3 className="text-xl md:text-2xl font-semibold text-card-foreground mb-2 md:mb-3">Finanční poradce</h3>
            <p className="text-card-foreground/80 mb-4 md:mb-6 text-sm md:text-base">
              Budujte vlastní klientské portfolio, poskytujte komplexní finanční řešení a získávejte odpovídající odměnu i kariérní růst.
            </p>
            <ul className="space-y-2 text-card-foreground/90 text-sm md:text-base">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-card-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Mentoring a zázemí silné značky 4fin</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-card-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Široké produktové portfolio (pojištění, investice, hypotéky…)</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-card-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Transparentní a férový provizní systém</span>
              </li>
            </ul>
          </article>

          <article className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card animate-scale-in">
            <h3 className="text-xl md:text-2xl font-semibold text-card-foreground mb-2 md:mb-3">Leadař (doporučitel)</h3>
            <p className="text-card-foreground/80 mb-4 md:mb-6 text-sm md:text-base">
              Leadař je ten, kdo doporučí finančnímu poradci člověka, který řeší finance. 
              Odbornou část a servis zajistí tým 4fin, vy získáte odměnu za doporučení.
            </p>
            <ul className="space-y-2 text-card-foreground/90 text-sm md:text-base">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-card-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Bez nutnosti odborných zkoušek</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-card-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Flexibilní spolupráce – jen doporučujete</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-card-foreground rounded-full mt-2 flex-shrink-0"></div>
                <span>Odměna za úspěšně zrealizované obchody</span>
              </li>
            </ul>
          </article>
        </div>

        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
          <Button variant="cta" size="lg" onClick={() => scrollTo("contact")} className="w-full sm:w-auto">Mám zájem o spolupráci</Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo("contact")} className="w-full sm:w-auto">Chci si nejdřív popovídat</Button>
        </div>

        <aside className="mt-8 md:mt-12 max-w-4xl mx-auto bg-primary/5 border border-primary/10 rounded-xl p-4 md:p-6 text-xs md:text-sm text-muted-foreground">
          <p>
            Hledáme lidi se zájmem o férové poradenství a dlouhodobé vztahy s klienty. Zkušenosti jsou výhodou, ale nejsou podmínkou – důležitá je chuť učit se a komunikovat.
          </p>
        </aside>
      </div>
    </section>;
};
export default Cooperation;