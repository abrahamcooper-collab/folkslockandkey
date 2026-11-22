/**
 * Business facts for Folks Lock & Key — the single source for name, contact details and links.
 * Source: business-info.md (client brief + Google Business Profile, checked 2026-11-21).
 */
export const business = {
  name: "Folks Lock & Key",
  /** Logo wordmark: lead word in white, accent in gold (as in the template). */
  /** Slogan from the client's logo; shown under the footer logo. */
  slogan: "Security • Trust • Peace of Mind",
  phone: "(707) 290-6432",
  phoneE164: "+17072906432",
  email: "jefffolks@gmail.com",
  streetAddress: "451 Brunswick Drive",
  addressRegion: "California",
  addressRegionCode: "CA",
  hoursLabel: "Open 24 Hours, 7 Days a Week",
  gmbUrl:
    "https://www.google.com/maps/place/Folks+Lock+%26+Key/data=!4m2!3m1!1s0x0:0x996587767705a829?sa=X&ved=1t:2428&hl=en&ictx=111",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://folkslockandkey.org",
  regionLabel: "Vallejo, Napa, and surrounding Northern California communities",
} as const;

export const phoneHref = `tel:${business.phoneE164}`;
export const emailHref = `mailto:${business.email}`;

/** Absolute URL for a site path, for metadata and schema. */
export function absoluteUrl(path: string): string {
  return new URL(path, business.siteUrl).toString();
}
