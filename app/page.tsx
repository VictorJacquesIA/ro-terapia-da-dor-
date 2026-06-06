import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import EmotionalSection from "@/components/EmotionalSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import DifferentialsSection from "@/components/DifferentialsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { BASE_URL } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Rô Espaço Terapêutico",
  description:
    "Massoterapia, drenagem linfática, reflexologia podal e terapias integrativas com atendimento humanizado em São José, SC.",
  url: BASE_URL,
  telephone: "+5548999797222",
  image: `${BASE_URL}/images/rosangela.webp`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Gentil Sandim, 261",
    addressLocality: "São José",
    addressRegion: "SC",
    postalCode: "88103-650",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.603,
    longitude: -48.621,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -27.603,
      longitude: -48.621,
    },
    geoRadius: "30000",
  },
  employee: {
    "@type": "Person",
    name: "Rosangela da Silva",
    jobTitle: "Massoterapeuta",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massagem Relaxante" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massagem Terapêutica" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drenagem Linfática" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reflexologia Podal" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terapia com Óleos Essenciais" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Planos de Tratamento" } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/ro_espacoterapeutico/",
    "https://www.instagram.com/estetica_ro1/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <EmotionalSection />
        <ServicesSection />
        <BenefitsSection />
        <HowItWorks />
        <DifferentialsSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
