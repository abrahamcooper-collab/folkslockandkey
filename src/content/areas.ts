/**
 * Service areas. Each entry becomes a page at /service-areas/<slug> and appears in the navbar
 * dropdown, footer, service-area grids and schema. Copy may contain the {business} token.
 */
import type { ImageKey } from "./images";
import type { Faq } from "./services";

export type ServiceArea = {
  readonly slug: string;
  readonly city: string;
  readonly county: string;
  /** Page hero photo. */
  readonly image: ImageKey;
  /** Photo beside the main content section. */
  readonly featureImage: ImageKey;
  readonly intro: string;
  readonly heading: string;
  readonly body: readonly string[];
  /** Three short check-list points for the intro section. */
  readonly highlights: readonly [string, string, string];
  readonly faq: Faq;
  readonly nearby: readonly string[];
};

export const STATE_CODE = "CA";

export const areas: readonly ServiceArea[] = [
  {
    slug: "vallejo-ca",
    image: "doubleDoorHandlesets",
    featureImage: "rekeyTwentyLocks",
    city: "Vallejo",
    county: "Solano County",
    intro:
      "Looking for a locksmith in Vallejo? {business} provides residential, commercial, and automotive locksmith services throughout Vallejo, 24 hours a day.",
    heading: "Your Local Vallejo Locksmith",
    body: [
      "Vallejo is at the heart of our service area. From older homes with original hardware to apartments, shops, and businesses across town, we help Vallejo residents and owners with lockouts, rekeying, lock changes, and key duplication.",
      "Because we're open 24 hours, Vallejo customers can call us for a lockout on the way home from work, a lock that fails late at night, or a key problem before the morning commute on I-80 or Highway 37.",
    ],
    highlights: [
      "Open 24 hours for Vallejo lockouts",
      "Homes, rentals, and businesses",
      "Rekeying for new homeowners",
    ],
    faq: {
      q: "Can you help with a lockout in Vallejo at night?",
      a: "Yes. We're open 24 hours a day, 7 days a week. Call (707) 290-6432 to discuss your lockout.",
    },
    nearby: ["benicia-ca", "american-canyon-ca", "crockett-ca"],
  },
  {
    slug: "benicia-ca",
    image: "commercialDeadboltRepair",
    featureImage: "oasisMailbox",
    city: "Benicia",
    county: "Solano County",
    intro:
      "Need a locksmith in Benicia? {business} helps Benicia homeowners, businesses, and drivers with lockouts, rekeying, and key services.",
    heading: "Locksmith Services in Benicia",
    body: [
      "Benicia mixes historic homes, newer neighborhoods, and small businesses along First Street and beyond. Older doors often carry older hardware that sticks or wears, while newer homes may be ready for a keypad upgrade.",
      "We provide lock repair, rekeying, lock installation, and lockout help across Benicia, and serve Martinez and Concord just across the Benicia-Martinez Bridge.",
    ],
    highlights: [
      "Care for older door hardware",
      "Keypad and electronic lock upgrades",
      "Lockout help 24 hours a day",
    ],
    faq: {
      q: "Can you work on older locks in historic Benicia homes?",
      a: "Yes. We'll assess older hardware and explain whether repair, rekeying, or replacement makes the most sense.",
    },
    nearby: ["vallejo-ca", "martinez-ca", "fairfield-ca"],
  },
  {
    slug: "american-canyon-ca",
    image: "kwiksetDeadboltKnob",
    featureImage: "clusterMailboxUnits",
    city: "American Canyon",
    county: "Napa County",
    intro:
      "Locked out in American Canyon or need new keys? {business} serves American Canyon homes, businesses, and drivers, 24 hours a day.",
    heading: "American Canyon Locksmith Services",
    body: [
      "American Canyon sits between Vallejo and Napa along Highway 29, with many newer homes, growing neighborhoods, and commercial businesses. Homes here change hands often, which makes rekeying a smart first step for new owners.",
      "We help American Canyon customers with rekeying, electronic lock installation, house and car lockouts, and key duplication for homes and businesses.",
    ],
    highlights: [
      "Rekeying for new homeowners",
      "Locks for commercial properties",
      "Car lockouts along Highway 29",
    ],
    faq: {
      q: "I just bought a home in American Canyon. Should I rekey?",
      a: "Yes. Rekeying is a good first step so previous owners' keys no longer work, and it keeps your existing hardware.",
    },
    nearby: ["vallejo-ca", "napa-ca", "fairfield-ca"],
  },
  {
    slug: "napa-ca",
    image: "doubleDoorLevers",
    featureImage: "schlageEncode",
    city: "Napa",
    county: "Napa County",
    intro:
      "Looking for a locksmith in Napa? {business} provides residential, commercial, and automotive locksmith services across Napa.",
    heading: "Locksmith Services in Napa",
    body: [
      "Napa is home to established neighborhoods, a busy downtown, and many hospitality businesses that depend on secure, working doors. Vacation rentals and guest properties also need dependable locks and careful key management.",
      "We help Napa homeowners, property managers, and businesses with rekeying between guests or tenants, keypad and electronic lock installation, master key systems, and lockout help.",
    ],
    highlights: [
      "Keypad locks for rental properties",
      "Rekeying between tenants or guests",
      "Commercial locksmith services",
    ],
    faq: {
      q: "Do you install keypad locks for vacation rentals in Napa?",
      a: "Yes. Keypad and electronic locks make it easier to manage guest access. Contact us to discuss options for your property.",
    },
    nearby: ["american-canyon-ca", "vallejo-ca", "fairfield-ca"],
  },
  {
    slug: "fairfield-ca",
    image: "brassDeadboltFairfield",
    featureImage: "deadboltBorePrep",
    city: "Fairfield",
    county: "Solano County",
    intro:
      "Need a locksmith in Fairfield? {business} serves Fairfield homes, businesses, and drivers with lockouts, rekeying, and key services around the clock.",
    heading: "Fairfield Locksmith Services",
    body: [
      "As the Solano County seat, Fairfield has a wide mix of family neighborhoods, offices, and retail businesses. That means a wide range of lock needs, from house lockouts to rekeying offices after staff changes.",
      "Drivers along I-80 also count on us for car lockouts and car key duplication. Wherever you are in Fairfield, call us to discuss your needs and availability.",
    ],
    highlights: [
      "House and car lockouts",
      "Office rekeying and master keys",
      "Car key duplication",
    ],
    faq: {
      q: "Do you help with car lockouts in Fairfield?",
      a: "Yes. Call us with your location and your vehicle's make, model, and year so we can discuss the options.",
    },
    nearby: ["vacaville-ca", "benicia-ca", "american-canyon-ca"],
  },
  {
    slug: "vacaville-ca",
    image: "satinDeadboltKnob",
    featureImage: "vanWorkbench",
    city: "Vacaville",
    county: "Solano County",
    intro:
      "Locked out in Vacaville or need a spare key? {business} helps Vacaville residents and businesses with locksmith services 24 hours a day.",
    heading: "Locksmith Services in Vacaville",
    body: [
      "Vacaville's neighborhoods, shopping centers, and local businesses all rely on locks that work when they're needed. We help Vacaville homeowners with lockouts, rekeying, and new lock installation, and businesses with storefront and office lock needs.",
      "Vacaville sits along I-80 at the northern end of our service area, so call us with your location to confirm availability and timing.",
    ],
    highlights: [
      "Home lockouts and rekeying",
      "Storefront and office locks",
      "Lock repair and replacement",
    ],
    faq: {
      q: "Do you serve businesses in Vacaville?",
      a: "Yes. We help Vacaville businesses with storefront locks, rekeying, master key systems, and lockouts.",
    },
    nearby: ["fairfield-ca", "vallejo-ca", "benicia-ca"],
  },
  {
    slug: "concord-ca",
    image: "commercialDoublePulls",
    featureImage: "storefrontLever",
    city: "Concord",
    county: "Contra Costa County",
    intro:
      "Need a locksmith in Concord? {business} provides locksmith services for Concord homes, businesses, and vehicles.",
    heading: "Concord Locksmith Services",
    body: [
      "Concord is one of the larger cities we serve, with everything from single-family homes and apartment complexes to office parks and retail. Property managers and landlords here often need rekeying between tenants and master key systems for multi-unit buildings.",
      "We also help Concord residents with house and car lockouts, lost keys, and key duplication. Call us with your location to discuss availability.",
    ],
    highlights: [
      "Rekeying between tenants",
      "Master keys for multi-unit buildings",
      "Lost key service",
    ],
    faq: {
      q: "Do you work with property managers in Concord?",
      a: "Yes. We help property managers with rekeying between tenants, lock changes, and master key systems.",
    },
    nearby: ["pleasant-hill-ca", "martinez-ca", "benicia-ca"],
  },
  {
    slug: "pleasant-hill-ca",
    image: "bronzeLeverDeadbolt",
    featureImage: "pedestalMailboxNewLock",
    city: "Pleasant Hill",
    county: "Contra Costa County",
    intro:
      "Looking for a locksmith in Pleasant Hill? {business} helps Pleasant Hill homeowners and businesses with lock and key services.",
    heading: "Locksmith Services in Pleasant Hill",
    body: [
      "Pleasant Hill's residential neighborhoods and local shopping areas need locks that are secure and easy to use. Many homeowners here are upgrading to keypad entry or replacing older deadbolts.",
      "We provide lock installation, electronic lock upgrades, rekeying, lockout help, and key duplication across Pleasant Hill, alongside our Concord and Martinez service areas.",
    ],
    highlights: [
      "Deadbolt upgrades",
      "Electronic and keypad locks",
      "Key duplication for households",
    ],
    faq: {
      q: "Can you upgrade my Pleasant Hill home to keypad locks?",
      a: "Yes. We install electronic and keypad locks. Let us know the model you're considering and we'll confirm it suits your door.",
    },
    nearby: ["concord-ca", "martinez-ca", "el-cerrito-ca"],
  },
  {
    slug: "crockett-ca",
    image: "doorknobInstalled",
    featureImage: "residentialMailbox",
    city: "Crockett",
    county: "Contra Costa County",
    intro:
      "Need a locksmith in Crockett? {business} serves this small community on the Carquinez Strait with lockout, rekeying, and key services.",
    heading: "Crockett Locksmith Services",
    body: [
      "Crockett is a small hillside town at the south end of the Carquinez Bridge, just across the water from Vallejo. Many homes here are older, and older hardware can stick, loosen, or wear out over the years.",
      "We help Crockett residents and businesses with lock repair, rekeying, lock replacement, lockouts, and spare keys.",
    ],
    highlights: [
      "Repair for older locks",
      "Lockouts across Crockett",
      "Rekeying and lock replacement",
    ],
    faq: {
      q: "My Crockett home has old locks. Should I repair or replace them?",
      a: "It depends on their condition. We'll look at the hardware and explain whether repair, rekeying, or replacement makes sense.",
    },
    nearby: ["rodeo-ca", "vallejo-ca", "martinez-ca"],
  },
  {
    slug: "rodeo-ca",
    image: "brassDeadboltKeys",
    featureImage: "doorPrep",
    city: "Rodeo",
    county: "Contra Costa County",
    intro:
      "Locked out in Rodeo or need new keys? {business} provides locksmith services to Rodeo homes and businesses.",
    heading: "Locksmith Services in Rodeo",
    body: [
      "Rodeo is a close-knit community along the shoreline between Crockett and Hercules. Whether you need a spare key, a lock repaired, or help after being locked out, Rodeo residents can reach us any time.",
      "We handle house lockouts, car lockouts, rekeying, lock installation, and key duplication for Rodeo customers. Call us with your address to discuss availability.",
    ],
    highlights: [
      "House and car lockouts",
      "Rekeying and lock installation",
      "Spare keys for households",
    ],
    faq: {
      q: "Can I call you any time for a lockout in Rodeo?",
      a: "Yes. We're open 24 hours a day, 7 days a week. Call (707) 290-6432.",
    },
    nearby: ["crockett-ca", "el-cerrito-ca", "vallejo-ca"],
  },
  {
    slug: "el-cerrito-ca",
    image: "brokenKeyExtracted",
    featureImage: "storefrontCylinderKey",
    city: "El Cerrito",
    county: "Contra Costa County",
    intro:
      "Need a locksmith in El Cerrito? {business} helps El Cerrito residents and businesses with lockouts, rekeying, and lock installation.",
    heading: "El Cerrito Locksmith Services",
    body: [
      "El Cerrito's hillside homes and San Pablo Avenue businesses each come with their own lock needs, from older residential hardware to busy commercial entrances.",
      "We provide residential and commercial locksmith services in El Cerrito, including lock repair, rekeying, keypad lock installation, lockouts, and key duplication. As one of the farther points in our service area, call ahead to confirm availability.",
    ],
    highlights: [
      "Care for older home hardware",
      "Commercial entrance locks",
      "Keypad lock installation",
    ],
    faq: {
      q: "Do you serve businesses on San Pablo Avenue?",
      a: "Yes. We help El Cerrito businesses with storefront locks, rekeying, and lockouts. Call ahead to confirm availability.",
    },
    nearby: ["rodeo-ca", "pleasant-hill-ca", "crockett-ca"],
  },
  {
    slug: "martinez-ca",
    image: "interchangeableCore",
    featureImage: "clusterMailboxClosed",
    city: "Martinez",
    county: "Contra Costa County",
    intro:
      "Looking for a locksmith in Martinez? {business} serves Martinez homes, businesses, and drivers with locksmith services 24 hours a day.",
    heading: "Locksmith Services in Martinez",
    body: [
      "Martinez, the Contra Costa County seat, sits on the Carquinez Strait across the Benicia-Martinez Bridge from Benicia. Its historic downtown, offices, and residential neighborhoods all depend on locks that work.",
      "We help Martinez customers with commercial and office locksmith needs, rekeying, lock repair, house and car lockouts, and key duplication.",
    ],
    highlights: [
      "Office and commercial locks",
      "Downtown storefront doors",
      "House and car lockouts",
    ],
    faq: {
      q: "Do you provide commercial locksmith services in Martinez?",
      a: "Yes. We help Martinez offices and storefronts with rekeying, lock changes, master key systems, and lockouts.",
    },
    nearby: ["benicia-ca", "concord-ca", "pleasant-hill-ca"],
  },
];

const areaBySlug = new Map(areas.map((area) => [area.slug, area]));

export function getArea(slug: string): ServiceArea | undefined {
  return areaBySlug.get(slug);
}

export function areaLabel(area: ServiceArea): string {
  return `${area.city}, ${STATE_CODE}`;
}

export function areaPath(slug: string): string {
  return `/service-areas/${slug}`;
}

/** Nearby areas for an area page; throws on a typo so it fails the build, not a page. */
export function nearbyAreas(area: ServiceArea): ServiceArea[] {
  return area.nearby.map((slug) => {
    const nearby = areaBySlug.get(slug);
    if (!nearby) throw new Error(`Unknown nearby area "${slug}" on ${area.slug}`);
    return nearby;
  });
}

/** The area's own FAQ plus two standard ones, all rendered visibly on the area page. */
export function areaFaqs(area: ServiceArea): Faq[] {
  return [
    area.faq,
    {
      q: `Do you serve all of ${area.city}?`,
      a: `We serve ${area.city} and surrounding communities. Call (707) 290-6432 with your address to confirm availability for your location.`,
    },
    {
      q: `What locksmith services do you offer in ${area.city}?`,
      a: `We offer residential, commercial, and automotive locksmith services in ${area.city}, including lockouts, rekeying, lock installation and repair, master key systems, and key duplication.`,
    },
  ];
}
