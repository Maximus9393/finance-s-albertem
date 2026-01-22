import { memo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Je finanční poradenství u vás zdarma?",
    answer:
      "Ano. Moje služby jsou pro klienty bez přímých poplatků. Jsem odměňován finančními institucemi, se kterými spolupracuji, a to pouze v případě, že se pro konkrétní řešení rozhodnete.",
  },
  {
    question: "Jsem něčím vázaný, když vás kontaktuji?",
    answer:
      "Ne. První konzultace je nezávazná a slouží hlavně k tomu, abychom si ujasnili vaši situaci a možnosti. Rozhodnutí je vždy jen na vás.",
  },
  {
    question: "Spolupracujete s více bankami a pojišťovnami?",
    answer:
      "Ano. Působím pod společností 4fin a spolupracuji s většinou bank a pojišťoven na českém trhu, díky čemuž mohu porovnávat více variant a hledat řešení na míru.",
  },
  {
    question: "Doporučíte mi opravdu nejlepší řešení?",
    answer:
      "Mým cílem je dlouhodobá spolupráce, ne jednorázový prodej. Řešení vybírám podle vaší situace, cílů a možností – ne podle krátkodobé provize.",
  },
  {
    question: "Pomůžete mi i s hypotékou, když ještě nemám vybranou nemovitost?",
    answer:
      "Ano. Naopak – řešit hypotéku dopředu je ideální. Zjistíme, na jakou částku dosáhnete, a vy pak hledáte nemovitost s jistotou financování.",
  },
  {
    question: "Pomáháte i s refinancováním hypotéky?",
    answer:
      "Ano. Kontroluji stávající hypotéky, hlídám konec fixace a často dokážu snížit splátku nebo zlepšit podmínky.",
  },
  {
    question: "Kolik musím mít vlastních peněz na hypotéku?",
    answer:
      "Záleží na konkrétní situaci. Ve většině případů je potřeba alespoň 10–20 % vlastních zdrojů, ale existují i kombinovaná řešení. Vše s vámi projdu individuálně.",
  },
  {
    question: "Musím mít hodně peněz, abych mohl investovat?",
    answer:
      "Ne. Investovat lze i s menšími částkami. Důležitější než výše částky je pravidelnost, horizont a správné nastavení rizika.",
  },
  {
    question: "Jaké je riziko investování?",
    answer:
      "Každá investice má určité riziko. Mým úkolem je nastavit investice tak, aby odpovídaly vašim cílům a toleranci k riziku a aby byly dlouhodobě udržitelné.",
  },
  {
    question: "Kontrolujete i moje stávající pojištění?",
    answer:
      "Ano. Rád se podívám na vaše současné smlouvy a řeknu vám otevřeně, jestli dávají smysl, nebo kde jsou slabá místa.",
  },
  {
    question: "Pomůžete mi i při pojistné události?",
    answer:
      "Ano. Klientům pomáhám i při řešení pojistných událostí, aby vše proběhlo správně a bez zbytečných komplikací.",
  },
  {
    question: "Jak probíhá první schůzka?",
    answer:
      "První schůzka je hlavně o poznání vaší situace, cílů a plánů. Nic se nepodepisuje a vše vysvětluji srozumitelně.",
  },
  {
    question: "Musíme se sejít osobně, nebo to jde online?",
    answer:
      "Obojí je možné. Schůzku můžeme mít osobně v Liberci nebo online, podle toho, co vám více vyhovuje.",
  },
  {
    question: "Jak rychle mi dokážete pomoci?",
    answer:
      "Na zprávy a hovory odpovídám do 24 hodin. U akutních věcí (hypotéka, konec fixace) reaguji co nejrychleji.",
  },
  {
    question: "Působíte přímo v Liberci?",
    answer:
      "Ano. Sídlím v Liberci (Chrastavská 231/32A) a pracuji také s klienty z okolí – Jablonec nad Nisou, Chrastava, Frýdlant a celý Liberecký kraj.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

const FAQ = memo(() => {
  return (
    <section id="faq" className="py-12 md:py-20 bg-secondary/30">
      {/* SEO: FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Často kladené otázky <span className="text-primary">(FAQ)</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Nejčastější dotazy, které od klientů dostávám – stručně a srozumitelně.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
            <Accordion type="single" collapsible className="px-4 md:px-6">
              {faqs.map((item, idx) => (
                <AccordionItem key={item.question} value={`faq-${idx}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-base md:text-lg py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
});

FAQ.displayName = "FAQ";

export default FAQ;
