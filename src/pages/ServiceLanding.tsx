import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, Phone, Mail } from "lucide-react";

export interface ServiceLandingContent {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  h1: string;
  h1Highlight: string;
  intro: string;
  serviceName: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faq: { q: string; a: string }[];
  related: { to: string; label: string }[];
}

const BASE = "https://financesalbertem.cz";

const ServiceLanding = ({ content }: { content: ServiceLandingContent }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [content.slug]);

  const goToContact = () => {
    navigate("/#contact");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    }, 120);
  };

  const url = `${BASE}${content.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.serviceName,
    serviceType: content.serviceName,
    description: content.description,
    url,
    provider: {
      "@type": "FinancialService",
      name: "4fin Better Together a.s. – Albert Gurdžjan",
      telephone: "+420774278005",
      email: "albert.gurdzjan@4fin.cz",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jablonecká 416",
        addressLocality: "Liberec",
        postalCode: "460 05",
        addressCountry: "CZ",
      },
    },
    areaServed: [
      { "@type": "City", name: "Liberec" },
      { "@type": "City", name: "Jablonec nad Nisou" },
      { "@type": "AdministrativeArea", name: "Liberecký kraj" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Domů", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: content.serviceName, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <meta name="keywords" content={content.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:url" content={url} />
        <meta property="og:locale" content="cs_CZ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />

        <main className="pt-24">
          <nav aria-label="Navigace" className="container mx-auto px-4 mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Domů
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{content.serviceName}</li>
            </ol>
          </nav>

          <section className="py-8 md:py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4 md:mb-6">
                {content.h1} <span className="text-primary">{content.h1Highlight}</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8">
                {content.intro}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button variant="hero" size="lg" onClick={goToContact} className="w-full sm:w-auto">
                  Nezávazná konzultace zdarma
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <a href="tel:+420774278005">
                    <Phone className="w-4 h-4 mr-2" /> +420 774 278 005
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="pb-8 md:pb-16">
            <div className="container mx-auto px-4 max-w-4xl space-y-10 md:space-y-14">
              {content.sections.map((s) => (
                <article key={s.heading}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{s.heading}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-3 mt-4">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-base md:text-lg text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="pb-8 md:pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Časté otázky</h2>
              <div className="space-y-6">
                {content.faq.map((f) => (
                  <div key={f.q} className="bg-card border border-border/50 rounded-2xl p-5 md:p-6 shadow-card">
                    <h3 className="text-lg md:text-xl font-semibold text-card-foreground mb-2">{f.q}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pb-12 md:pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Mohlo by vás zajímat</h2>
              <ul className="flex flex-wrap gap-3 mb-8">
                {content.related.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="inline-block px-4 py-2 rounded-full border border-border/60 text-sm md:text-base text-foreground hover:text-primary hover:border-primary transition-colors"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-card">
                <h2 className="text-xl md:text-2xl font-bold text-card-foreground mb-3">
                  Domluvme si schůzku v Liberci
                </h2>
                <p className="text-base text-muted-foreground mb-5">
                  První konzultace je nezávazná a zdarma – osobně v Liberci nebo online.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="cta" size="lg" onClick={goToContact} className="w-full sm:w-auto">
                    Napsat zprávu
                  </Button>
                  <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                    <a href="mailto:albert.gurdzjan@4fin.cz">
                      <Mail className="w-4 h-4 mr-2" /> albert.gurdzjan@4fin.cz
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServiceLanding;
