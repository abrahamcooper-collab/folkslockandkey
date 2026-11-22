/**
 * JSON-LD builders. All values come from src/content so schema never drifts from the page.
 * Rules: omit what we don't know (no invented geo, price range or ratings).
 */
import { areaLabel, areaPath, areas, STATE_CODE, type ServiceArea } from "@/content/areas";
import { absoluteUrl, business } from "@/content/business";
import { images } from "@/content/images";
import { servicePath, services, type Faq, type Service } from "@/content/services";
import { plainText } from "./copy";

type JsonLd = Record<string, unknown>;

const BUSINESS_ID = absoluteUrl("/#business");
const ALL_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function city(area: ServiceArea): JsonLd {
  return { "@type": "City", name: areaLabel(area) };
}

function imageUrl(src: string): string {
  return src.startsWith("http") ? src : absoluteUrl(src);
}

export function localBusinessSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    "@id": BUSINESS_ID,
    name: business.name,
    url: absoluteUrl("/"),
    image: imageUrl(images.hero.src),
    logo: absoluteUrl("/icon.svg"),
    telephone: business.phoneE164,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressRegion: STATE_CODE,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ALL_DAYS,
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: areas.map(city),
    hasMap: business.gmbUrl,
    sameAs: [business.gmbUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith and Key Duplication Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absoluteUrl(servicePath(service.slug)),
        },
      })),
    },
  };
}

/** A Service offered by the business, optionally scoped to one area. */
export function serviceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed: readonly ServiceArea[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": BUSINESS_ID },
    areaServed: areaServed.map(city),
  };
}

export function servicePageSchema(service: Service): JsonLd {
  return serviceSchema({
    name: service.name,
    description: plainText(service.intro),
    path: servicePath(service.slug),
    areaServed: areas,
  });
}

export function areaPageSchema(area: ServiceArea): JsonLd {
  return serviceSchema({
    name: `Locksmith Services in ${areaLabel(area)}`,
    description: plainText(area.intro),
    path: areaPath(area.slug),
    areaServed: [area],
  });
}

export function breadcrumbSchema(trail: readonly { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** Only for pages that render these exact FAQs visibly. */
export function faqSchema(faqs: readonly Faq[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
