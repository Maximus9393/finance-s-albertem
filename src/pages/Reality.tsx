import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Phone, Mail, Home, Calculator, Building, Shield, Star, Award } from "lucide-react";
import vladimirPhoto from "@/assets/vladimir-rehak.jpg";
import martinPhoto from "@/assets/martin-petrik.jpg";

const Reality = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <Helmet>
        <title>Reality a Hypotéky | Finance s Albertem</title>
        <meta name="description" content="Specializujeme se na hypotéky a realitní služby. Spolupracujeme s renomovanými realitními makléři z Century 21. Zajistíme vám kompletní služby od hypotéky po výběr nemovitosti." />
        <meta name="keywords" content="hypotéky, reality, nemovitosti, realitní makléř, Century 21, financování nemovitostí" />
        <link rel="canonical" href="/reality" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="absolute inset-0 bg-gradient-subtle opacity-30"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Reality a <span className="text-primary">Hypotéky</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Komplexní služby pro váš realitní sen - od hypotéky po klíče od nového domova
                </p>
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={scrollToContact}
                  className="animate-scale-in text-lg px-8 py-4"
                >
                  Nezávazná konzultace
                </Button>
              </div>
            </div>
          </section>

          {/* Hypoteční úvěry Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  <span className="text-primary">Hypoteční</span> úvěry
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Najdeme vám tu nejlepší hypotéku na trhu s nejlepšími podmínkami pro financování vaší nemovitosti
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Výhodné hypotéky</h3>
                  <p className="text-card-foreground/90 mb-6 leading-relaxed">
                    Pomůžeme vám najít tu nejlepší hypotéku na trhu. Porovnáme nabídky všech bank 
                    a zajistíme vám ty nejlepší podmínky pro financování vaší nemovitosti.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-card-foreground">Porovnání všech bank na trhu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-card-foreground">Individuální posouzení vaší situace</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-card-foreground">Asistence při vyřizování</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-card-foreground">Poradenství při výběru hypotéky</span>
                    </li>
                  </ul>
                  <Button 
                    variant="cta" 
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    Zjistit více
                  </Button>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">Refinancování</h3>
                  <p className="text-card-foreground/90 mb-6 leading-relaxed">
                    Máte již hypotéku a chcete ušetřit? Pomůžeme vám s refinancováním 
                    a převedením k výhodnější bance s lepšími podmínkami.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-card-foreground">Analýza současné hypotéky</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-card-foreground">Výpočet možných úspor</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-card-foreground">Kompletní vyřízení přechodu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-card-foreground">Bez starostí a poplatků</span>
                    </li>
                  </ul>
                  <Button 
                    variant="cta" 
                    className="w-full"
                    onClick={scrollToContact}
                  >
                    Zjistit více
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Realitní portál Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  <span className="text-primary">Realitní</span> portál
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Disponujeme rozsáhlým realitním portálem s aktuální nabídkou nemovitostí. 
                  Najděte si svůj vysněný domov v naší databázi tisíců nemovitostí.
                </p>
                
                <Button asChild variant="cta" size="lg" className="mb-12 text-lg px-8 py-4">
                  <a 
                    href="https://www.century21.cz/vyhledat-nemovitosti" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Prohlédnout nabídku nemovitostí
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-bold text-primary">1000+</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Nemovitostí</h3>
                    <p className="text-muted-foreground">V naší databázi</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-bold text-primary">24/7</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Dostupnost</h3>
                    <p className="text-muted-foreground">Online vyhledávání</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl font-bold text-primary">100%</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Ověřené</h3>
                    <p className="text-muted-foreground">Aktuální nabídky</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Realitní makléři Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 animate-fade-in">
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                     Naši <span className="text-primary">realitní makléři</span>
                   </h2>
                   <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                     Spolupracujeme s renomovanými makléři z Century 21, kteří vám pomohou najít tu pravou nemovitost
                   </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Vladimír Řehák */}
                  <div className="bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50 overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={vladimirPhoto} 
                        alt="Vladimír Řehák - realitní makléř"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Vladimír Řehák</h3>
                      <p className="text-white/90 font-semibold mb-4">CENTURY 21 Synergy Liberec</p>
                      
                      <blockquote className="text-white/80 mb-6 italic leading-relaxed border-l-4 border-white/40 pl-4">
                        "Má služba nespočívá jen v prodeji nemovitostí, přesvědčte se."
                      </blockquote>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Phone className="w-4 h-4 text-white" />
                          </div>
                          <a href="tel:+420731334373" className="text-white hover:text-white/80 transition-colors font-medium">
                            +420 731 334 373
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Mail className="w-4 h-4 text-white" />
                          </div>
                          <a href="mailto:vladimir.rehak@century21.cz" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                            vladimir.rehak@century21.cz
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Klienti doporučují
                        </span>
                        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Partner při koupi
                        </span>
                      </div>

                      <Button asChild variant="outline" className="w-full bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                        <a 
                          href="https://www.century21.cz/makler/vladimir-rehak" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          Zobrazit profil
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Martin Petřík */}
                  <div className="bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50 overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img 
                        src={martinPhoto} 
                        alt="Martin Petřík - realitní makléř"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Martin Petřík</h3>
                      <p className="text-white/90 font-semibold mb-4">CENTURY 21 Synergy Liberec</p>
                      
                      <blockquote className="text-white/80 mb-6 italic leading-relaxed border-l-4 border-white/40 pl-4">
                        "Mám vysoké nároky na svou práci, protože věřím, že jen tak mohou moji klienti získat to nejlepší."
                      </blockquote>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Phone className="w-4 h-4 text-white" />
                          </div>
                          <a href="tel:+420725813283" className="text-white hover:text-white/80 transition-colors font-medium">
                            +420 725 813 283
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Mail className="w-4 h-4 text-white" />
                          </div>
                          <a href="mailto:martin.petrik@century21.cz" className="text-white hover:text-white/80 transition-colors font-medium text-sm">
                            martin.petrik@century21.cz
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Makléř pojištěn
                        </span>
                        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Klienti doporučují
                        </span>
                        <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-medium flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Certifikovaný
                        </span>
                      </div>

                      <Button asChild variant="outline" className="w-full bg-white text-primary border-white hover:bg-white/90 hover:text-primary">
                        <a 
                          href="https://www.century21.cz/makler/martin-petrik" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2"
                        >
                          Zobrazit profil
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Potřebujete poradit s <span className="text-primary">nemovitostí?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                  Kontaktujte nás pro nezávaznou konzultaci. Pomůžeme vám s hypotékou i výběrem nemovitosti 
                  a provedeme vás celým procesem od A do Z.
                </p>
                <Button 
                  variant="cta" 
                  size="lg" 
                  onClick={scrollToContact}
                  className="text-lg px-8 py-4"
                >
                  Nezávazná konzultace
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Reality;