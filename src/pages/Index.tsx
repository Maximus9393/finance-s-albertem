import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Lazy load below-the-fold components
const Services = lazy(() => import("@/components/Services"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const Cooperation = lazy(() => import("@/components/Cooperation"));

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Albert Gurdžjan - Finanční Poradce",
  "description": "Komplexní analýza a optimalizace rodinných financí pod záštitou 4fin Better Together a.s.",
  "url": "https://financesalbertem.cz",
  "telephone": "+420 728 271 275",
  "email": "albert.gurdzjan@4fin.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chrastavská 231/32A",
    "addressLocality": "Liberec",
    "postalCode": "460 01",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.7663",
    "longitude": "15.0543"
  },
  "serviceType": ["Finanční poradenství", "Pojištění", "Investice", "Hypotéky"],
  "priceRange": "Nezávazná konzultace zdarma"
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  return (
    <>
      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Cooperation />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
