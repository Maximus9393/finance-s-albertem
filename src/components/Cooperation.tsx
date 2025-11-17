import { Button } from "@/components/ui/button";
const Cooperation = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="cooperation" className="py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Spolupráce – <span className="text-primary">finanční poradce</span> nebo leadař
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Zajímá vás podnikání v oblasti finančního poradenství? Nebo chcete jen doporučovat klienty jako leadař? Ozvěte se a probereme, jak můžeme spolupracovat.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-card rounded-2xl p-8 shadow-card animate-scale-in">
            <h3 className="text-2xl font-semibold text-white mb-3">Finanční poradce</h3>
            <p className="text-white/80 mb-6">
              Budujte vlastní klientské portfolio, poskytujte komplexní finanční řešení a získávejte odpovídající odměnu i kariérní růst.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Mentoring a zázemí silné značky 4fin</li>
              <li>Široké produktové portfolio (pojištění, investice, hypotéky…)</li>
              <li>Transparentní a férový provizní systém</li>
            </ul>
          </article>

          <article className="bg-card rounded-2xl p-8 shadow-card animate-scale-in">
            <h3 className="text-2xl font-semibold text-white mb-3">Leadař (doporučitel)</h3>
            <p className="text-white/80 mb-6">
              Leadař je ten, kdo doporučí finančnímu poradci člověka, který řeší finance. 
              Odbornou část a servis zajistí tým 4fin, vy získáte odměnu za doporučení.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Bez nutnosti odborných zkoušek</li>
              <li>Flexibilní spolupráce – jen doporučujete</li>
              <li>Odměna za úspěšně zrealizované obchody</li>
            </ul>
          </article>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="cta" size="lg" onClick={() => scrollTo("contact")}>Mám zájem o spolupráci</Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo("contact")}>Chci si nejdřív popovídat</Button>
        </div>

        <aside className="mt-12 max-w-4xl mx-auto bg-primary/5 border border-primary/10 rounded-xl p-6 text-sm text-muted-foreground">
          <p>
            Hledáme lidi se zájmem o férové poradenství a dlouhodobé vztahy s klienty. Zkušenosti jsou výhodou, ale nejsou podmínkou – důležitá je chuť učit se a komunikovat.
          </p>
        </aside>
      </div>
    </section>;
};
export default Cooperation;