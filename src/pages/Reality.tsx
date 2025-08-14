import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, Phone, Mail } from "lucide-react";
import vladimirPhoto from "@/assets/vladimir-rehak.jpg";
import martinPhoto from "@/assets/martin-petrik.jpg";

const Reality = () => {
  return (
    <>
      <Helmet>
        <title>Reality a Hypotéky | Finance s Albertem</title>
        <meta name="description" content="Specializujeme se na hypotéky a realitní služby. Spolupracujeme s renomovanými realitními makléři z Century 21. Zajistíme vám kompletní služby od hypotéky po výběr nemovitosti." />
        <meta name="keywords" content="hypotéky, reality, nemovitosti, realitní makléř, Century 21, financování nemovitostí" />
        <link rel="canonical" href="/reality" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Reality a Hypotéky
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Komplexní služby pro váš realitní sen - od hypotéky po klíče
                </p>
              </div>
            </div>
          </section>

          {/* Hypoteční úvěry Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Hypoteční úvěry</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-card p-8 rounded-xl border border-border">
                    <h3 className="text-xl font-semibold mb-4">Výhodné hypotéky</h3>
                    <p className="text-muted-foreground mb-6">
                      Pomozheme vám najít tu nejlepší hypotéku na trhu. Porovnáme nabídky všech bank 
                      a zajistíme vám ty nejlepší podmínky pro financování vaší nemovitosti.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Porovnání všech bank na trhu
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Individuální posouzení vaší situace
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Asistence při vyřizování
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Poradenství při výběru hypotéky
                      </li>
                    </ul>
                  </div>

                  <div className="bg-card p-8 rounded-xl border border-border">
                    <h3 className="text-xl font-semibold mb-4">Refinancování</h3>
                    <p className="text-muted-foreground mb-6">
                      Máte již hypotéku a chcete ušetřit? Pomozheme vám s refinancováním 
                      a převedením k výhodnější bance s lepšími podmínkami.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Analýza současné hypotéky
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Výpočet možných úspor
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Kompletní vyřízení přechodu
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Bez starostí a poplatků
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Realitní portál Section */}
          <section className="py-16 bg-gradient-to-br from-secondary/5 to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Realitní portál</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Disponujeme rozsáhlým realitním portálem s aktuální nabídkou nemovitostí. 
                  Najděte si svůj vysněný domov v naší databázi tisíců nemovitostí.
                </p>
                
                <Button asChild variant="cta" size="lg" className="mb-8">
                  <a 
                    href="https://www.century21.cz/vyhledat-nemovitosti" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Prohlédnout nabídku nemovitostí
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>

                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1000+</span>
                    </div>
                    <h3 className="font-semibold mb-2">Nemovitostí</h3>
                    <p className="text-sm text-muted-foreground">V naší databázi</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">24/7</span>
                    </div>
                    <h3 className="font-semibold mb-2">Dostupnost</h3>
                    <p className="text-sm text-muted-foreground">Online vyhledávání</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">100%</span>
                    </div>
                    <h3 className="font-semibold mb-2">Ověřené</h3>
                    <p className="text-sm text-muted-foreground">Aktuální nabídky</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Realitní makléři Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Naši realitní makléři</h2>
                <p className="text-xl text-center text-muted-foreground mb-12">
                  Spolupracujeme s renomovanými makléři z Century 21, kteří vám pomohou najít tu pravou nemovitost
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Vladimír Řehák */}
                  <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={vladimirPhoto} 
                        alt="Vladimír Řehák - realitní makléř"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">Vladimír Řehák</h3>
                      <p className="text-muted-foreground mb-4">CENTURY 21 Synergy Liberec</p>
                      
                      <p className="text-sm text-muted-foreground mb-6">
                        "Má služba nespočívá jen v prodeji nemovitostí, přesvědčte se."
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Phone className="w-4 h-4 text-primary" />
                          <a href="tel:+420731334373" className="hover:text-primary transition-colors">
                            +420 731 334 373
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Mail className="w-4 h-4 text-primary" />
                          <a href="mailto:vladimir.rehak@century21.cz" className="hover:text-primary transition-colors">
                            vladimir.rehak@century21.cz
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Klienti doporučují
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Partner při koupi
                        </span>
                      </div>

                      <Button asChild variant="outline" className="w-full">
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
                  <div className="bg-card rounded-xl border border-border overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={martinPhoto} 
                        alt="Martin Petřík - realitní makléř"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">Martin Petřík</h3>
                      <p className="text-muted-foreground mb-4">CENTURY 21 Synergy Liberec</p>
                      
                      <p className="text-sm text-muted-foreground mb-6">
                        "Mám vysoké nároky na svou práci, protože věřím, že jen tak mohou moji klienti získat to nejlepší."
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Phone className="w-4 h-4 text-primary" />
                          <a href="tel:+420725813283" className="hover:text-primary transition-colors">
                            +420 725 813 283
                          </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Mail className="w-4 h-4 text-primary" />
                          <a href="mailto:martin.petrik@century21.cz" className="hover:text-primary transition-colors">
                            martin.petrik@century21.cz
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Makléř pojištěn
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Klienti doporučují
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Certifikovaný makléř
                        </span>
                      </div>

                      <Button asChild variant="outline" className="w-full">
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
          <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Potřebujete poradit s nemovitostí?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Kontaktujte nás pro nezávaznou konzultaci. Pomůžeme vám s hypotékou i výběrem nemovitosti.
                </p>
                <Button asChild variant="cta" size="lg">
                  <a href="#contact">
                    Nezávazná konzultace
                  </a>
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