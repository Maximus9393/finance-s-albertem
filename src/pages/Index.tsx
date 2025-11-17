import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
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
  "url": "https://albert.4fin.cz",
  "telephone": "+420 123 456 789",
  "email": "albert@4fin.cz",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Václavské náměstí 123",
    "addressLocality": "Praha",
    "postalCode": "110 00",
    "addressCountry": "CZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "50.0755",
    "longitude": "14.4378"
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
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
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
