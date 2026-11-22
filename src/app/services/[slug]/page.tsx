import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CircleCheck } from "lucide-react";
import { innerHeroFeatures } from "@/content/page-features";
import {
  categories,
  getService,
  relatedServices,
  servicePath,
  services,
} from "@/content/services";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureSplit } from "@/components/sections/FeatureSplit";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { BusinessName, RichText } from "@/components/ui/BusinessName";
import { JsonLd } from "@/components/ui/JsonLd";
import { plainText } from "@/lib/copy";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Vallejo, CA`,
    description: plainText(service.intro),
    alternates: { canonical: servicePath(service.slug) },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const category = categories.find((c) => c.slug === service.category);
  if (!category) throw new Error(`Service ${service.slug} has unknown category ${service.category}`);

  return (
    <>
      <JsonLd
        data={[
          servicePageSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: servicePath(service.slug) },
          ]),
          faqSchema(service.faqs),
        ]}
      />
      <Hero
        eyebrow={category.name}
        titleLead={service.name}
        titleAccent={service.tagline}
        intro={<RichText text={service.intro} />}
        image={service.image}
        features={innerHeroFeatures}
      />
      <Highlights />
      <FeatureSplit
        eyebrow={service.name}
        title={service.heading}
        paragraphs={service.body.map((paragraph) => (
          <RichText key={paragraph} text={paragraph} />
        ))}
        items={service.included.map((label) => ({ icon: CircleCheck, label }))}
        cta={{ label: `Request ${service.name}`, category: service.name }}
        image={service.featureImage}
        badge={{ label: category.name, title: service.tagline }}
        background="cream"
      />
      <ServicesGrid
        eyebrow="Related Services"
        title={`More ${category.name}`}
        intro={category.description}
        cards={relatedServices(service).map((related) => ({
          icon: related.icon,
          title: related.name,
          description: related.summary,
          href: servicePath(related.slug),
        }))}
        background="white"
      />
      <WhyChoose />
      <HowItWorks />
      <ServiceAreas
        intro={
          <>
            <BusinessName /> provides {service.name.toLowerCase()} throughout Vallejo and nearby
            Northern California communities.
          </>
        }
      />
      <ContactSection defaultCategory={service.name} />
      <FaqSection faqs={service.faqs} title={`${service.name} FAQs`} />
      <CtaBand />
    </>
  );
}
