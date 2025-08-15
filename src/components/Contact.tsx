import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Equal, ChevronRight, Plus, BarChart3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { ContactFormData } from "@/lib/supabase";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    gdprConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      toast({
        title: "GDPR souhlas",
        description: "Prosím, odsouhlaste zpracování osobních údajů.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const contactData: Omit<ContactFormData, 'created_at'> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        gdpr_consent: formData.gdprConsent
      };
      const {
        error
      } = await supabase.from('contacts').insert([contactData]);
      if (error) {
        throw error;
      }
      toast({
        title: "Formulář odeslán",
        description: "Děkujeme za vaši zprávu. Ozveme se vám co nejdříve."
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        gdprConsent: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Chyba při odesílání",
        description: "Něco se pokazilo. Zkuste to prosím znovu.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Kontaktujte <span className="text-primary">Alberta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rád si s vámi promluvím o vašich finančních cílech a najdeme nejlepší řešení pro vaši situaci.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-16 w-full animate-scale-in">
          <div className="flex justify-center">
            <img src="/cara_kontakt2.png" alt="Naše hodnoty - partnerství, inovace, kvalita, růst" className="max-w-none w-full max-w-6xl h-auto rounded-lg shadow-soft" loading="lazy" decoding="async" width="1200" height="600" onError={e => {
            console.log('Image failed to load:', e.currentTarget.src);
            e.currentTarget.style.display = 'none';
          }} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card animate-scale-in">
            <h3 className="text-2xl font-bold text-white mb-6">Nezávazná konzultace</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Jméno a příjmení *
                  </label>
                  <Input value={formData.name} onChange={e => handleInputChange('name', e.target.value)} required placeholder="Vaše jméno" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    E-mail *
                  </label>
                  <Input type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required placeholder="vas@email.cz" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Telefon
                  </label>
                  <Input value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="+420 123 456 789" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Oblast zájmu
                  </label>
                  <Select value={formData.service} onValueChange={value => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Vyberte službu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pojisteni">Pojištění</SelectItem>
                      <SelectItem value="investice">Investice</SelectItem>
                      <SelectItem value="hypoteky">Hypotéky</SelectItem>
                      <SelectItem value="planovani">Finanční plánování</SelectItem>
                      <SelectItem value="ostatni">Ostatní</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Zpráva
                </label>
                <Textarea value={formData.message} onChange={e => handleInputChange('message', e.target.value)} placeholder="Popište nám svou situaci a požadavky..." rows={4} />
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-lg border border-primary/20 bg-background/95 shadow-soft">
                <Checkbox id="gdpr" checked={formData.gdprConsent} onCheckedChange={checked => setFormData(prev => ({
                ...prev,
                gdprConsent: !!checked
              }))} className="mt-1 border-2 border-foreground data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                <label htmlFor="gdpr" className="text-sm text-foreground leading-relaxed cursor-pointer">
                  Souhlasím se zpracováním osobních údajů za účelem kontaktování a poskytnutí nabídky služeb. 
                  Více informací v našich <span className="text-primary font-medium cursor-pointer hover:underline hover:text-primary-hover">zásadách ochrany osobních údajů</span>.
                </label>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3),2px_0_12px_-2px_rgba(0,0,0,0.4)] border-2 border-primary/30 hover:shadow-[0_6px_25px_-2px_rgba(0,0,0,0.4),4px_0_16px_-2px_rgba(0,0,0,0.5)] hover:scale-105 hover:border-primary/50" disabled={isSubmitting}>
                {isSubmitting ? "Odesílám..." : "Odeslat poptávku"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-white mb-6">Kontaktní údaje</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefon</h4>
                    <p className="text-white/80">+420 728 271 275</p>
                    
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-white/80">albert.gurdzjan@4fin.cz</p>
                    <p className="text-sm text-white/60">Odpovídáme do 24 hodin</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Adresa</h4>
                    <p className="text-white/80">Chrastavská 231/32A<br />460 01 Liberec</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ozvěte se pro nezávaznou konzultaci!</h3>
              <p className="text-white/90 mb-6">
                Využijte naší nabídky bezplatné konzultace a zjistěte, jak můžeme pomoci s vašimi financemi.
              </p>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Bez závazků</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Individuální přístup</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Profesionální poradenství</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;