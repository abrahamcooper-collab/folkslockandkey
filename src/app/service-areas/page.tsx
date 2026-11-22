import type { Metadata } from "next";
import { innerHeroFeatures } from "@/content/page-features";
import { requireService } from "@/content/services";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { ServicesGrid, serviceCard } from "@/components/sections/ServicesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BusinessName } from "@/components/ui/BusinessName";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Folks Lock & Key serves Vallejo, Benicia, American Canyon, Napa, Fairfield, Vacaville, Concord, Pleasant Hill, Crockett, Rodeo, El Cerrito, and Martinez, CA.",
  alternates: { canonical: "/service-areas" },
};

const popularSlugs = [
  "emergency-lockout",
  "residential-locksmith",
  "commercial-locksmith",
  "automotive-locksmith",
  "lock-rekeying",
  "key-duplication",
] as const;

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
      <Hero
        eyebrow="Service Areas"
        titleLead="Local Locksmith Service."
        titleAccent="Across Solano, Napa & Contra Costa."
        intro={
          <>
            <BusinessName /> serves twelve communities around Vallejo, Napa, and the Carquinez
            Strait, with locksmith help available 24 hours a day.
          </>
        }
        image="vanWorkbench"
        features={innerHeroFeatures}
      />
      <Highlights />
      <ServiceAreas
        intro={
          <>
            Select your city to learn about the locksmith services <BusinessName /> provides in
            your area.
          </>
        }
      />
      <ServicesGrid
        eyebrow="Popular Services"
        title="Locksmith Services in Every Area We Serve"
        background="white"
        cards={popularSlugs.map((slug) => serviceCard(requireService(slug)))}
      />
      <WhyChoose />
      <HowItWorks />
      <ContactSection />
      <CtaBand />
    </>
  );
}
