import {
  Building2,
  Car,
  Copy,
  Ellipsis,
  FileKey2,
  House,
  KeyRound,
  KeySquare,
  Replace,
  Scale,
  ShieldCheck,
  Store,
} from "lucide-react";
import { homeFaqs } from "@/content/home";
import type { ImageKey } from "@/content/images";
import { requireService, servicePath } from "@/content/services";
import { Automotive } from "@/components/sections/Automotive";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureSplit, FeatureSplitAlt } from "@/components/sections/FeatureSplit";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { ServicesGrid, serviceCard } from "@/components/sections/ServicesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BusinessName } from "@/components/ui/BusinessName";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/schema";

const heroFeatures = [
  { icon: KeyRound, label: "Residential Locksmith Services" },
  { icon: ShieldCheck, label: "Commercial Security Solutions" },
  { icon: Car, label: "Automotive Lockout Services" },
] as const;

/** The template's 12 home cards, each pointing at the matching service page. */
const featuredSlugs = [
  "emergency-lockout",
  "house-lockout",
  "car-lockout",
  "lock-rekeying",
  "sheriff-evictions",
  "key-duplication",
  "lost-key-service",
  "commercial-locksmith",
  "storefront-key-duplication",
  "residential-locksmith",
  "lock-installation",
  "master-key-systems",
] as const;

/**
 * Card photos that differ from the service's own hero photo, where that photo already appears
 * elsewhere on the home page (hero, residential and commercial sections) or reads poorly small.
 */
const cardImageOverrides: Partial<Record<(typeof featuredSlugs)[number], ImageKey>> = {
  "emergency-lockout": "vanWorkbench",
  "residential-locksmith": "brassDeadboltFairfield",
  "commercial-locksmith": "commercialLeverDeadbolt",
  "lost-key-service": "kwiksetDeadboltKnob",
};

const featuredCards = featuredSlugs.map((slug) => {
  const service = requireService(slug);
  return serviceCard(service, cardImageOverrides[slug] ?? service.image);
});

const residentialItems = [
  { icon: House, label: "Residential Lockout Services" },
  { icon: KeyRound, label: "Rekeying Services" },
  { icon: Replace, label: "Lock Changes and Replacements" },
  { icon: FileKey2, label: "Lost Key Replacement" },
  { icon: Copy, label: "Key Duplication" },
  { icon: Ellipsis, label: "Additional Residential Locksmith Needs" },
] as const;

const commercialChips = [
  { icon: Building2, label: "Commercial Locksmith Services", slug: "commercial-locksmith" },
  { icon: Store, label: "Storefront Key Duplication", slug: "storefront-key-duplication" },
  { icon: KeyRound, label: "Rekeying Services", slug: "lock-rekeying" },
  { icon: Replace, label: "Lock Installation and Replacements", slug: "lock-installation" },
  { icon: Copy, label: "Commercial Key Duplication", slug: "commercial-key-duplication" },
  { icon: Scale, label: "Sheriff Eviction Lock Services", slug: "sheriff-evictions" },
  { icon: KeySquare, label: "Master Key Systems", slug: "master-key-systems" },
].map(({ slug, ...chip }) => ({ ...chip, href: servicePath(slug) }));

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero
        eyebrow="Professional Locksmith Services"
        titleLead="Security You Can Count On."
        titleAccent="Service You Can Trust."
        intro={
          <>
            From unexpected lockouts to residential, commercial, and automotive locksmith needs,{" "}
            <BusinessName /> provides professional service throughout Vallejo, Napa, and surrounding
            Northern California communities, 24 hours a day.
          </>
        }
        image="hero"
        features={heroFeatures}
        headline="brand"
      />
      <Highlights />
      <ServicesGrid
        id="services"
        eyebrow="Our Locksmith Services"
        title="Complete Locksmith Services for Every Need"
        intro={
          <>
            Whether you need help accessing your property, replacing a key, or addressing a lock
            issue, <BusinessName /> provides locksmith services for homes, businesses, and vehicles.
          </>
        }
        cards={featuredCards}
      />
      <FeatureSplit
        id="residential"
        eyebrow="Residential Locksmith"
        title="Helping You Feel Secure at Home"
        paragraphs={[
          <>
            Your home&apos;s locks play an important role in everyday security. <BusinessName />{" "}
            offers residential locksmith services to help address lockouts, lost keys, lock
            changes, and other access-related needs.
          </>,
        ]}
        items={residentialItems}
        cta={{
          label: "Request Residential Service",
          category: requireService("residential-locksmith").name,
        }}
        image="doubleDoorHandlesets"
        badge={{ label: "Residential", title: "Secure Access for Your Home" }}
      />
      <FeatureSplitAlt
        id="commercial"
        eyebrow="Commercial Locksmith"
        title="Professional Locksmith Services for Businesses"
        paragraphs={[
          <>
            Access issues and lock problems can disrupt daily operations. <BusinessName /> provides
            commercial locksmith services for businesses that need assistance with storefront locks,
            lock changes, and other commercial access needs.
          </>,
        ]}
        checks={[
          "Support for Commercial Properties",
          "Storefront Lock and Hardware Services",
          "Practical Solutions for Changing Access Needs",
        ]}
        chips={commercialChips}
        cta={{
          label: "Discuss Your Commercial Needs",
          category: requireService("commercial-locksmith").name,
        }}
        image="commercialDoublePulls"
        badge={{ label: "Commercial", title: "Reliable Business Access" }}
      />
      <Automotive />
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
      <FaqSection faqs={homeFaqs} />
      <CtaBand />
    </>
  );
}
