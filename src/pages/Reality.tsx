import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Phone, Mail, Home, Calculator, Building, Shield, Star, Award } from "lucide-react";
import vladimirPhoto from "@/assets/vladimir-rehak.jpg";
import martinPhoto from "@/assets/martin-petrik.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Reality = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigateToContact = () => {
    navigate('/#contact');
    // Use setTimeout to ensure navigation happens before scrolling
    setTimeout(() => {
      const element = document.getElementById('contact');
      if (element) {
        const offset = 80;
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };
  return <>
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
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">Uvažujete o prodeji nebo pronájmu Vaší nemovitosti? Ozvěte se mi a můj kolega se o Vás postará.</p>
                <Button variant="cta" size="lg" onClick={navigateToContact} className="animate-scale-in text-lg px-8 py-4">
                  Nezávazná konzultace
                </Button>
              </div>
            </div>
          </section>

          {/* Realitní makléři Section */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-16 animate-fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                    Naši <span className="text-primary">realitní makléři</span>
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Spolupracujeme s renomovanými makléři z Century 21, kteří vám pomohou najít tu pravou nemovitost
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Vladimír Řehák */}
                  <div className="bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50 overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img src={vladimirPhoto} alt="Vladimír Řehák - realitní makléř" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Vladimír Řehák</h3>
                      <p className="text-card-foreground/90 font-semibold mb-4">CENTURY 21 Synergy Liberec</p>
                      
                      <blockquote className="text-card-foreground/80 mb-6 italic leading-relaxed border-l-4 border-primary/40 pl-4 text-sm md:text-base">
                        "Má služba nespočívá jen v prodeji nemovitostí, ale v komplexním poradenství pro každého klienta."
                      </blockquote>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <Phone className="w-4 h-4 text-primary" />
                          </div>
                          <a href="tel:+420731334373" className="text-card-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
                            +420 731 334 373
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <Mail className="w-4 h-4 text-primary" />
                          </div>
                          <a href="mailto:vladimir.rehak@century21.cz" className="text-card-foreground hover:text-primary transition-colors font-medium text-xs md:text-sm break-all">
                            vladimir.rehak@century21.cz
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 md:px-3 py-1 bg-primary/20 text-primary text-xs md:text-sm rounded-full font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Klienti doporučují
                        </span>
                        <span className="px-2 md:px-3 py-1 bg-primary/20 text-primary text-xs md:text-sm rounded-full font-medium flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Partner při koupi
                        </span>
                        <span className="px-2 md:px-3 py-1 bg-primary/20 text-primary text-xs md:text-sm rounded-full font-medium flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Zkušený makléř
                        </span>
                      </div>

                      <a href="https://www.century21.cz/makler/vladimir-rehak" target="_blank" rel="noopener noreferrer" className="w-full bg-muted hover:bg-muted/80 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold py-3 inline-flex items-center justify-center gap-2 rounded-md">
                        Zobrazit profil
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>

                  {/* Martin Petřík */}
                  <div className="bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50 overflow-hidden">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img src={martinPhoto} alt="Martin Petřík - realitní makléř" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-2">Martin Petřík</h3>
                      <p className="text-card-foreground/90 font-semibold mb-4">CENTURY 21 Synergy Liberec</p>
                      
                      <blockquote className="text-card-foreground/80 mb-6 italic leading-relaxed border-l-4 border-primary/40 pl-4 text-sm md:text-base">
                        "Mám vysoké nároky na svou práci, protože věřím v individuální přístup ke každému klientovi."
                      </blockquote>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <Phone className="w-4 h-4 text-primary" />
                          </div>
                          <a href="tel:+420725813283" className="text-card-foreground hover:text-primary transition-colors font-medium text-sm md:text-base">
                            +420 725 813 283
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <Mail className="w-4 h-4 text-primary" />
                          </div>
                          <a href="mailto:martin.petrik@century21.cz" className="text-card-foreground hover:text-primary transition-colors font-medium text-xs md:text-sm break-all">
                            martin.petrik@century21.cz
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-2 md:px-3 py-1 bg-primary/20 text-primary text-xs md:text-sm rounded-full font-medium flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          Makléř pojištěn
                        </span>
                        <span className="px-2 md:px-3 py-1 bg-primary/20 text-primary text-xs md:text-sm rounded-full font-medium flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Klienti doporučují
                        </span>
                        <span className="px-2 md:px-3 py-1 bg-primary/20 text-primary text-xs md:text-sm rounded-full font-medium flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Certifikovaný
                        </span>
                      </div>

                      <a href="https://www.century21.cz/makler/martin-petrik" target="_blank" rel="noopener noreferrer" className="w-full bg-muted hover:bg-muted/80 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold py-3 inline-flex items-center justify-center gap-2 rounded-md">
                        Zobrazit profil
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hypoteční úvěry Section */}
          <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 md:mb-16 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  <span className="text-primary">Hypoteční</span> úvěry
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Najdeme vám tu nejlepší hypotéku na trhu s nejlepšími podmínkami pro financování vaší nemovitosti
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4">Výhodné hypotéky</h3>
                  <p className="text-card-foreground/90 mb-6 leading-relaxed text-sm md:text-base">
                    Pomůžeme vám najít tu nejlepší hypotéku na trhu. Porovnáme nabídky všech bank 
                    a zajistíme vám ty nejlepší podmínky pro financování vaší nemovitosti.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Porovnání všech bank na trhu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Individuální posouzení vaší situace</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Asistence při vyřizování</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Poradenství při výběru hypotéky</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Refinancování Vaší stávající hypotéky</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Úvěry ze stavebního spoření</span>
                    </li>
                  </ul>
                  <Button variant="default" className="w-full bg-muted hover:bg-muted/80 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold py-3" onClick={navigateToContact}>
                    Nezávazná konzultace
                  </Button>
                </div>

                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elegant transition-all duration-300 group border border-border/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-4">Služby realitních makléřů</h3>
                  <p className="text-card-foreground/90 mb-6 leading-relaxed text-sm md:text-base">
                    Naši partneři z Century 21 poskytují kompletní realitní služby od prodeje a pronájmu 
                    až po právní poradenství a správu nemovitostí po celé České republice.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Profesionální prodej a pronájem Vašich nemovitostí</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Poradenství a zastoupení při koupi domu, bytu či pozemku</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Odhady tržní ceny a řešení dědického řízení</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Zajistíme vyklizení, výmalba a úklid Vašeho domu nebo bytu</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Reality a finance pod jednou střechou</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-card-foreground text-sm md:text-base">Postaráme se o Vaše nemovitosti po celé České republice</span>
                    </li>
                  </ul>
                  <Button variant="default" className="w-full bg-muted hover:bg-muted/80 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold py-3" onClick={navigateToContact}>
                    Nezávazná konzultace
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Realitní portál Section */}
          <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  <span className="text-primary">Realitní</span> portál
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                  Disponujeme rozsáhlým realitním portálem s aktuální nabídkou nemovitostí. 
                  Najděte si svůj vysněný domov v naší databázi tisíců nemovitostí.
                </p>
                
                <Button asChild variant="cta" size="lg" className="mb-8 md:mb-12 text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                  <a href="https://www.century21.cz/vyhledat-nemovitosti" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    Prohlédnout nabídku nemovitostí
                    <ExternalLink className="w-4 md:w-5 h-4 md:h-5" />
                  </a>
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center group">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl md:text-3xl font-bold text-primary">1000+</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Nemovitostí</h3>
                    <p className="text-muted-foreground text-sm md:text-base">V naší databázi</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl md:text-3xl font-bold text-primary">24/7</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Dostupnost</h3>
                    <p className="text-muted-foreground text-sm md:text-base">Online vyhledávání</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl md:text-3xl font-bold text-primary">100%</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Ověřené</h3>
                    <p className="text-muted-foreground text-sm md:text-base">Aktuální nabídky</p>
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
                <Button variant="cta" size="lg" onClick={navigateToContact} className="text-lg px-8 py-4">
                  Nezávazná konzultace
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
};
export default Reality;