import type { Metadata } from "next";
import { categories, servicesInCategory } from "@/content/services";
import { innerHeroFeatures } from "@/content/page-features";
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
  title: "Locksmith & Key Duplication Services",
  description:
    "Lockouts, lock installation, rekeying, repairs, master keys, and key duplication from Folks Lock & Key, serving Vallejo, Napa, and nearby communities 24 hours a day.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <Hero
        eyebrow="Our Services"
        titleLead="Locksmith & Key Services."
        titleAccent="For Homes, Businesses, and Vehicles."
        intro={
          <>
            From lockouts and lock installation to rekeying and key duplication, <BusinessName />{" "}
            handles locksmith needs across Vallejo, Napa, and nearby communities, 24 hours a day.
          </>
        }
        image="hero"
        features={innerHeroFeatures}
      />
      <Highlights />
      {categories.map((category, index) => (
        <ServicesGrid
          key={category.slug}
          id={category.slug}
          eyebrow={category.name}
          title={index === 0 ? "Complete Locksmith Services for Every Need" : "Key Duplication for Every Key"}
          intro={category.description}
          background={index === 0 ? "cream" : "white"}
          cards={servicesInCategory(category.slug).map((service) => serviceCard(service))}
        />
      ))}
      <WhyChoose />
      <HowItWorks />
      <ServiceAreas
        intro={
          <>
            <BusinessName /> serves residential, commercial, and automotive customers throughout
            Vallejo and nearby Northern California communities.
          </>
        }
      />
      <ContactSection />
      <CtaBand />
    </>
  );
}
