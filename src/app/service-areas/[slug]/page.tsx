import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  areaFaqs,
  areaLabel,
  areaPath,
  areas,
  getArea,
} from "@/content/areas";
import { innerHeroFeatures } from "@/content/page-features";
import { requireService, servicePath } from "@/content/services";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureSplitAlt } from "@/components/sections/FeatureSplit";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BusinessName, RichText } from "@/components/ui/BusinessName";
import { JsonLd } from "@/components/ui/JsonLd";
import { plainText } from "@/lib/copy";
import { areaPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

/** Services linked from every area page: chips in the intro, then cards. */
const chipSlugs = [
  "residential-locksmith",
  "commercial-locksmith",
  "automotive-locksmith",
  "emergency-lockout",
  "lock-rekeying",
  "lock-repair",
  "lost-key-service",
  "key-duplication",
] as const;

const cardSlugs = [
  "emergency-locksmith",
  "house-lockout",
  "car-lockout",
  "electronic-lock-installation",
  "master-key-systems",
  "car-key-duplication",
] as const;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/service-areas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Locksmith in ${areaLabel(area)}`,
    description: plainText(area.intro),
    alternates: { canonical: areaPath(area.slug) },
  };
}

export default async function AreaPage({ params }: PageProps<"/service-areas/[slug]">) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const label = areaLabel(area);
  const faqs = areaFaqs(area);
  const otherAreas = areas.filter((other) => other.slug !== area.slug);

  return (
    <>
      <JsonLd
        data={[
          areaPageSchema(area),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
            { name: label, path: areaPath(area.slug) },
          ]),
          faqSchema(faqs),
        ]}
      />
      <Hero
        eyebrow={`Locksmith in ${label}`}
        titleLead={`${area.city} Locksmith Services.`}
        titleAccent="Open 24 Hours, 7 Days a Week."
        intro={<RichText text={area.intro} />}
        image={area.image}
        features={innerHeroFeatures}
        badge={`Serving ${area.city} & ${area.county}`}
      />
      <Highlights />
      <FeatureSplitAlt
        eyebrow={label}
        title={area.heading}
        paragraphs={area.body.map((paragraph) => (
          <RichText key={paragraph} text={paragraph} />
        ))}
        checks={area.highlights}
        chips={chipSlugs.map((serviceSlug) => {
          const service = requireService(serviceSlug);
          return { icon: service.icon, label: service.name, href: servicePath(serviceSlug) };
        })}
        cta={{ label: `Request Service in ${area.city}` }}
        image={area.featureImage}
        badge={{ label: area.city, title: "Your Local Locksmith" }}
      />
      <ServicesGrid
        eyebrow={`Services in ${area.city}`}
        title={`Locksmith Services Available in ${area.city}`}
        intro={
          <>
            <BusinessName /> helps {area.city} homes, businesses, and drivers with lockouts, lock
            installation, rekeying, and key services.
          </>
        }
        cards={cardSlugs.map((serviceSlug) => {
          const service = requireService(serviceSlug);
          return {
            icon: service.icon,
            title: service.name,
            description: service.summary,
            href: servicePath(serviceSlug),
          };
        })}
        background="white"
      />
      <WhyChoose />
      <HowItWorks />
      <ServiceAreas
        eyebrow="Nearby Service Areas"
        title={`Also Serving Communities Near ${area.city}`}
        intro={
          <>
            Beyond {area.city}, <BusinessName /> serves customers throughout Solano, Napa, and
            Contra Costa counties.
          </>
        }
        areas={otherAreas}
      />
      <ContactSection />
      <FaqSection faqs={faqs} title={`${area.city} Locksmith FAQs`} />
      <CtaBand />
    </>
  );
}
