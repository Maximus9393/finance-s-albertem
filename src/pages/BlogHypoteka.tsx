import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, FileText, Wallet, Home, ShieldCheck } from "lucide-react";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Jak se připravit na žádost o hypotéku v roce 2026 – kompletní průvodce",
  description:
    "Praktický průvodce přípravou na hypotéku: jaké doklady budete potřebovat, jak banka posuzuje bonitu, kolik vlastních zdrojů mít a jak vám pomůže finanční poradce v Liberci.",
  author: {
    "@type": "Person",
    name: "Albert Gurdžjan",
    url: "https://financesalbertem.cz",
  },
  publisher: {
    "@type": "Organization",
    name: "4fin Better Together a.s.",
    logo: {
      "@type": "ImageObject",
      url: "https://financesalbertem.cz/favicon-4fin.png",
    },
  },
  datePublished: "2026-06-15",
  dateModified: "2026-06-15",
  mainEntityOfPage: "https://financesalbertem.cz/blog/jak-se-pripravit-na-hypoteku",
  image: "https://financesalbertem.cz/og-image.jpg",
  inLanguage: "cs-CZ",
  keywords:
    "hypotéka, hypotéka Liberec, finanční poradce Liberec, refinancování hypotéky, žádost o hypotéku, bonita, LTV, vlastní zdroje, reality Liberec",
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Úvod", item: "https://financesalbertem.cz/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://financesalbertem.cz/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Jak se připravit na hypotéku",
      item: "https://financesalbertem.cz/blog/jak-se-pripravit-na-hypoteku",
    },
  ],
};

const BlogHypoteka = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToContact = () => {
    navigate("/#contact");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Jak se připravit na hypotéku 2026 – průvodce | Finanční poradce Liberec</title>
        <meta
          name="description"
          content="Jak se připravit na žádost o hypotéku v Liberci a okolí: doklady, bonita, vlastní zdroje, LTV i refinancování. Praktický návod od finančního poradce Alberta Gurdžjana."
        />
        <meta
          name="keywords"
          content="hypotéka Liberec, jak získat hypotéku, žádost o hypotéku, refinancování hypotéky, finanční poradce Liberec, bonita, LTV, vlastní zdroje, reality Liberec, nemovitosti Liberec"
        />
        <link rel="canonical" href="https://financesalbertem.cz/blog/jak-se-pripravit-na-hypoteku" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Jak se připravit na hypotéku 2026 – kompletní průvodce | Finance s Albertem"
        />
        <meta
          property="og:description"
          content="Vše, co potřebujete vědět před žádostí o hypotéku v Liberci: doklady, bonita, vlastní zdroje, refinancování a role finančního poradce."
        />
        <meta property="og:url" content="https://financesalbertem.cz/blog/jak-se-pripravit-na-hypoteku" />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbsJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <article className="container mx-auto px-4 max-w-3xl">
            <header className="mb-8 md:mb-12 animate-fade-in">
              <p className="text-sm text-primary uppercase tracking-wider mb-3">
                Blog · Hypotéky · Liberec
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                Jak se připravit na žádost o <span className="text-primary">hypotéku</span> v roce
                2026
              </h1>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Kompletní průvodce přípravou na hypotéku v Liberci a okolí – jaké doklady budete
                potřebovat, jak banka posuzuje vaši bonitu, kolik vlastních zdrojů si připravit a
                jak vám zkušený finanční poradce ušetří desítky tisíc korun.
              </p>
            </header>

            <div className="space-y-10 text-white/85 leading-relaxed text-base md:text-lg">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" /> 1. Jaké doklady k hypotéce
                  připravit
                </h2>
                <p className="mb-3">
                  Banka chce co nejpřesněji zjistit, kdo jste, kolik vyděláváte a jakou nemovitost
                  pořizujete. Většina bank v Liberci a celé ČR vyžaduje:
                </p>
                <ul className="space-y-2 pl-2">
                  {[
                    "Občanský průkaz a druhý doklad totožnosti",
                    "Potvrzení o příjmu od zaměstnavatele (zpravidla 3 měsíce zpětně)",
                    "Daňové přiznání za poslední 2 roky (u OSVČ)",
                    "Výpisy z bankovního účtu za 3–6 měsíců",
                    "Kupní nebo rezervační smlouvu k nemovitosti",
                    "List vlastnictví a odhad nemovitosti (často zajistí poradce)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-primary" /> 2. Bonita – jak ji banka počítá
                </h2>
                <p>
                  Bonita je schopnost splácet úvěr. Banka sleduje váš čistý příjem, výši ostatních
                  splátek, počet vyživovaných osob a životní minimum. Kromě toho ČNB doporučuje
                  ukazatele <strong>DSTI</strong> (poměr splátek k příjmu) a{" "}
                  <strong>DTI</strong> (poměr dluhu k ročnímu příjmu). Před žádostí proto:
                </p>
                <ul className="space-y-2 pl-2 mt-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Uhraďte nebo refinancujte drobné spotřebitelské úvěry a kreditky.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Vyhněte se novým úvěrům a leasingům 6 měsíců před žádostí.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Zkontrolujte si registr SOLUS a bankovní/nebankovní registr klientů.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Home className="w-6 h-6 text-primary" /> 3. Kolik vlastních zdrojů potřebujete
                </h2>
                <p>
                  V roce 2026 banky standardně financují <strong>80–90 % hodnoty nemovitosti</strong>{" "}
                  (LTV 80 % nebo 90 % pro klienty do 36 let). Zbytek je nutné doložit z vlastních
                  zdrojů. U bytu v Liberci za 4 mil. Kč to znamená 400–800 tis. Kč vlastních peněz
                  plus rezerva na poplatky, daň z nabytí převodů, odhad a zařízení.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary" /> 4. Refinancování a fixace
                </h2>
                <p>
                  Pokud již hypotéku máte, hlídejte si <strong>konec fixace</strong>. 3 měsíce před
                  ní mohu zdarma porovnat nabídky bank a často snížím splátku o stovky až tisíce
                  korun měsíčně. Refinancování v období fixace je možné jen za poplatek, proto se
                  vyplatí mít poradce, který termíny hlídá za vás.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  5. Role finančního poradce v Liberci
                </h2>
                <p>
                  Jako nezávislý finanční poradce ve společnosti 4fin spolupracuji se všemi
                  hlavními bankami v ČR. Pro klienta to znamená jednu schůzku místo pěti, srovnání
                  desítek variant a jednání s bankou za vás. Služba je pro vás bez poplatků –
                  odměnu mi platí banka.
                </p>
              </section>

              <section className="bg-card border border-white/20 rounded-2xl p-6 md:p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Chcete projít vaši situaci osobně?
                </h2>
                <p className="text-white/80 mb-6">
                  Nezávazná konzultace zdarma v Liberci nebo online. Spočítáme, na jakou hypotéku
                  dosáhnete, a vyberete nemovitost s jistotou financování.
                </p>
                <Button variant="cta" size="lg" onClick={goToContact}>
                  Domluvit konzultaci
                </Button>
              </section>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogHypoteka;
