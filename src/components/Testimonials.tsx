import { memo } from "react";
import { Star, Quote } from "lucide-react";
import CountUp from "@/components/CountUp";

const testimonials = [
  {
    name: "Hana Svobodová",
    role: "Učitelka v důchodu",
    content:
      "Jsem už řadu let klientkou pana Alberta Gurdžjana. Bez jeho odborné péče bych si v dnešním finančním světě nevěděla rady. Vždy mi dobře poradil, vše mi trpělivě vysvětlil. Cením si i jeho lidských kvalit. Je to milý, slušný, snaživý a informovaný člověk, který svou práci vykonává s láskou a plným nasazením. Děkuji, Hana Svobodová..",
    rating: 5,
  },
  {
    name: "Veronika Kellerová",
    role: "Na mateřské dovolené",
    content:
      "Se službami společnosti 4Fin jsme velmi spokojení. Náš finanční poradce - pan Albert Gurdžian, je profík. Je vidět, že své práci rozumí, je férový, vždy na příjmu a k dispozici, vždy nám se vším pomůže, poradí. Děkujeme !",
    rating: 5,
  },
  {
    name: "Miroslav Svoboda",
    role: "Manažer",
    content:
      "S Albertem Gurdžjanem se mi perfektně spolupracuje, ať už se jedná o finanční analytiku, či cokoliv jiného. Je to přesně ten pravý člověk na svém místě, který má nejen neskutečný tah na branku, ale také odborné znalosti, které neustále rozšiřuje. Vřele doporučuji.",
    rating: 5,
  },
];

const Testimonials = memo(() => {
  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Co říkají moji <span className="text-primary">klienti</span>
          </h2>
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            Důvěra mých klientů je pro mě nejcennější odměnou. Přečtěte si jejich zkušenosti s mými službami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card hover:shadow-elegant transition-all duration-300 relative animate-scale-in border border-border/50 will-change-transform"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="absolute top-4 right-4 md:top-6 md:right-6 text-white/20">
                <Quote className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              <div className="flex items-center mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
                ))}
              </div>

              <p className="text-white/80 mb-4 md:mb-6 leading-relaxed italic text-sm md:text-base">"{testimonial.content}"</p>

              <div className="border-t border-white/20 pt-3 md:pt-4">
                <h4 className="text-base md:text-lg font-semibold text-white">{testimonial.name}</h4>
                <p className="text-xs md:text-sm text-white/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-primary rounded-xl md:rounded-2xl p-5 md:p-8 lg:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                <CountUp end={150} suffix="+" />
              </div>
              <div className="text-white/80 text-xs md:text-base">Spokojených klientů</div>
            </div>
            <div
              className="animate-fade-in"
              style={{
                animationDelay: "0.2s",
              }}
            >
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                <CountUp end={5} suffix="+" duration={2200} />
              </div>
              <div className="text-white/80 text-xs md:text-base">Let zkušeností</div>
            </div>
            <div
              className="animate-fade-in"
              style={{
                animationDelay: "0.4s",
              }}
            >
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                <CountUp end={3} suffix="M+" duration={2400} />
              </div>
              <div className="text-white/80 text-xs md:text-base">Korun spravovaných</div>
            </div>
            <div
              className="animate-fade-in"
              style={{
                animationDelay: "0.6s",
              }}
            >
              <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                <CountUp end={99} suffix="%" duration={2600} />
              </div>
              <div className="text-white/80 text-xs md:text-base">Spokojenost klientů</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
