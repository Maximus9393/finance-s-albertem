import { Star, Quote } from "lucide-react";
import CountUp from "@/components/CountUp";
const Testimonials = () => {
  const testimonials = [{
    name: "Jana Novotná",
    role: "Mladá maminka",
    content: "Díky profesionálnímu přístupu pana poradce jsme konečně porozuměli světu pojištění. Vše vysvětlil jednoduše a srozumitelně.",
    rating: 5
  }, {
    name: "Petr Svoboda",
    role: "Podnikatel",
    content: "Investiční strategie, kterou mi navrhli, již druhý rok přináší výborné výsledky. Jsem velmi spokojený s transparentním přístupem.",
    rating: 5
  }, {
    name: "Marie Dvořáková",
    role: "Důchodkyně",
    content: "Pomohli mi s refinancováním hypotéky a ušetřila jsem značnou částku na úrocích. Jednání bylo rychlé a bez zbytečných formalit.",
    rating: 5
  }];
  return <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Co říkají naši <span className="text-primary">klienti</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Důvěra našich klientů je pro nás nejcennější odměnou. Přečtěte si jejich zkušenosti s našimi službami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 relative animate-scale-in border border-border/50" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <h4 className="text-lg font-semibold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>)}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">
                <CountUp end={200} suffix="+" />
              </div>
              <div className="text-white/80">Spokojených klientů</div>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={5} suffix="+" duration={2200} />
              </div>
              <div className="text-white/80">Let zkušeností</div>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={3} suffix="M+" duration={2400} />
              </div>
              <div className="text-white/80">Korun spravovaných</div>
            </div>
            <div className="animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
              <div className="text-4xl font-bold mb-2">
                <CountUp end={99} suffix="%" duration={2600} />
              </div>
              <div className="text-white/80">Spokojenost klientů</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;