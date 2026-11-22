/**
 * Every service the business offers, grouped by category. Each entry becomes a page at
 * /services/<slug> and appears in the navbar dropdown, footer, contact form and schema.
 *
 * Copy may contain the token {business}; render it with <RichText> so the business name links to
 * the Google Business Profile.
 */
import {
  Briefcase,
  Building,
  Building2,
  Car,
  CarFront,
  Copy,
  CopyPlus,
  DoorClosed,
  DoorOpen,
  FileKey2,
  Fingerprint,
  House,
  Key,
  KeyRound,
  KeySquare,
  Lock,
  LockKeyhole,
  Network,
  Scale,
  Scissors,
  ShieldCheck,
  Siren,
  Store,
  Warehouse,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { ImageKey } from "./images";

export type Faq = { readonly q: string; readonly a: string };

export type CategorySlug = "locksmith" | "key-duplication";

export type ServiceCategory = {
  readonly slug: CategorySlug;
  readonly name: string;
  readonly description: string;
};

export type Service = {
  readonly slug: string;
  readonly name: string;
  readonly category: CategorySlug;
  readonly icon: LucideIcon;
  /** Page hero photo. */
  readonly image: ImageKey;
  /** Photo beside the main content section. */
  readonly featureImage: ImageKey;
  /** Gold second line of the page hero headline. */
  readonly tagline: string;
  /** One or two sentences for service cards. */
  readonly summary: string;
  /** Hero paragraph; also the page meta description source. */
  readonly intro: string;
  readonly heading: string;
  readonly body: readonly string[];
  readonly included: readonly string[];
  readonly faqs: readonly Faq[];
};

export const categories: readonly ServiceCategory[] = [
  {
    slug: "locksmith",
    name: "Locksmith Services",
    description:
      "Lockouts, lock installation, rekeying, repairs, and more for homes, businesses, and vehicles.",
  },
  {
    slug: "key-duplication",
    name: "Key Duplication Services",
    description: "Copies of house, car, office, storefront, master, and high-security keys.",
  },
];

export const services: readonly Service[] = [
  // ── Locksmith Services ────────────────────────────────────────────────────────────────────
  {
    slug: "electronic-lock-installation",
    name: "Electronic Lock Installation",
    category: "locksmith",
    icon: Fingerprint,
    image: "schlageEncode",
    featureImage: "keypadLever",
    tagline: "Keyless Entry for Homes and Businesses",
    summary:
      "Installation of keypad, keyless, and electronic door locks for homes and businesses, matched to your door and how you use it.",
    intro:
      "Thinking about going keyless? {business} installs electronic and keypad locks for homes, rentals, and businesses across Vallejo and nearby communities.",
    heading: "Electronic Locks, Installed Properly",
    body: [
      "Electronic locks let you open a door with a code, a fob, or a phone instead of a key. They are a practical choice for busy households, rental properties that change occupants, and businesses that need to share access with staff without handing out keys.",
      "A keyless lock only works as well as its installation. We check the door, the bore, and the existing hardware, fit the new lock so the latch and deadbolt line up cleanly, and walk you through setting codes and day-to-day use before we leave.",
    ],
    included: [
      "Keypad deadbolt installation",
      "Smart and keyless entry locks",
      "Combination lock installation",
      "Fit check on door and strike",
      "Code setup walkthrough",
      "Replacing old keyed hardware",
    ],
    faqs: [
      {
        q: "Can you install an electronic lock I already bought?",
        a: "In many cases, yes. Tell us the brand and model when you call so we can confirm it suits your door before the appointment.",
      },
      {
        q: "Will an electronic lock fit my existing door?",
        a: "Most keypad and smart locks are designed for standard door preparations. If your door needs adjustment, we'll explain what's involved before doing any work.",
      },
      {
        q: "Do electronic locks still have a key backup?",
        a: "Many models include a key override for when batteries run low. We'll show you how your lock's backup works and how to change the batteries.",
      },
    ],
  },
  {
    slug: "lock-installation",
    name: "General Lock Installation",
    category: "locksmith",
    icon: Lock,
    image: "smartkeyHandleset",
    featureImage: "brassDeadboltFairfield",
    tagline: "New Locks, Fitted Right the First Time",
    summary:
      "Installation of new deadbolts, knobs, levers, and door hardware for homes and businesses.",
    intro:
      "Whether you're replacing worn hardware or adding a deadbolt, {business} installs new locks for homes and businesses throughout Vallejo, Napa, and nearby communities.",
    heading: "Lock Installation for Every Door",
    body: [
      "New locks are one of the simplest ways to improve security, whether you just moved in, upgraded a door, or have hardware that sticks, wobbles, or no longer latches. We install deadbolts, knob and lever sets, and other standard door hardware.",
      "We take the time to align the bolt and strike so the door closes and locks smoothly. If you'd like several locks to work with the same key, ask about keying them alike during installation.",
    ],
    included: [
      "Deadbolt installation",
      "Knob and lever sets",
      "Replacing worn or damaged locks",
      "Strike and latch alignment",
      "Keying new locks alike",
      "Hardware for new doors",
    ],
    faqs: [
      {
        q: "Do you supply the locks, or can I provide my own?",
        a: "Either can work. Call us to discuss the hardware you have in mind and we'll let you know what's available or whether your lock is suitable.",
      },
      {
        q: "Can my new locks use the same key?",
        a: "Locks from compatible brands can often be keyed alike so one key opens several doors. Mention it when you book and we'll confirm.",
      },
      {
        q: "How long does a lock installation take?",
        a: "It depends on the number of doors and the type of hardware. We'll give you an idea of timing when we discuss the job.",
      },
    ],
  },
  {
    slug: "master-key-systems",
    name: "Master Key Systems",
    category: "locksmith",
    icon: KeySquare,
    image: "interchangeableCore",
    featureImage: "rekeyTwentyLocks",
    tagline: "Controlled Access for Every Door",
    summary:
      "Planning and setup of master key systems so the right people can open the right doors.",
    intro:
      "Managing many doors with many keys gets complicated. {business} sets up master key systems for businesses, property managers, and multi-unit buildings.",
    heading: "One Key Plan, Many Doors",
    body: [
      "A master key system lets each person carry a key that opens only the doors they need, while an owner or manager holds a key that opens all of them. It's a common setup for offices, apartment buildings, rental properties, and shops with stockrooms.",
      "We start by mapping out who needs access to what, then key the locks to match that plan. As your team or tenants change, the system can be adjusted by rekeying specific locks instead of replacing everything.",
    ],
    included: [
      "Access planning by door and role",
      "Master and sub-master keys",
      "Rekeying existing locks to the system",
      "Systems for offices and rentals",
      "Multi-unit property setups",
      "Adjusting systems as needs change",
    ],
    faqs: [
      {
        q: "What is a master key system?",
        a: "It's a keying plan where individual keys open specific doors and a master key opens all of them, so you control access without carrying a ring of keys.",
      },
      {
        q: "Can you set up a master key system with my existing locks?",
        a: "Often, yes, if the locks are compatible. We'll look at your current hardware and explain what can be rekeyed and what may need replacing.",
      },
      {
        q: "Who is a master key system right for?",
        a: "Businesses, property managers, landlords, and anyone responsible for multiple doors used by different people.",
      },
    ],
  },
  {
    slug: "emergency-locksmith",
    name: "Emergency Locksmith Service",
    category: "locksmith",
    icon: Siren,
    image: "vanWorkbench",
    featureImage: "storefrontCylinderKey",
    tagline: "Help Around the Clock, 24 Hours a Day",
    summary:
      "Urgent locksmith help for broken locks, lost keys, and doors that won't secure, available 24 hours a day.",
    intro:
      "Lock problems don't wait for business hours. {business} is open 24 hours a day for urgent locksmith needs in Vallejo, Napa, and surrounding communities.",
    heading: "When a Lock Problem Can't Wait",
    body: [
      "An emergency can be a broken lock after a break-in, a key snapped off in the cylinder, a door that won't secure at night, or keys lost with no spare. These situations leave your home, business, or vehicle exposed, and they need attention quickly.",
      "Call us any time of day or night and describe what's happening. We'll talk through the problem, your location, and what's needed, so you know what to expect before we arrive.",
    ],
    included: [
      "Broken or damaged locks",
      "Keys broken off in the lock",
      "Doors that won't lock or latch",
      "Lost keys with no spare",
      "Lock changes after a break-in",
      "Home, business, and vehicle help",
    ],
    faqs: [
      {
        q: "Are you really open 24 hours?",
        a: "Yes. We're open 24 hours a day, 7 days a week. Call (707) 290-6432 to discuss your situation.",
      },
      {
        q: "What should I do if my lock was damaged in a break-in?",
        a: "Make sure you're safe and contact the police first if needed. Then call us so we can discuss repairing or replacing the lock to secure the door.",
      },
      {
        q: "What information should I have ready when I call?",
        a: "Your location, what kind of lock or door is involved, and a short description of the problem. That helps us prepare before we head out.",
      },
    ],
  },
  {
    slug: "residential-locksmith",
    name: "Residential Locksmith Service",
    category: "locksmith",
    icon: House,
    image: "doubleDoorHandlesets",
    featureImage: "satinDeadboltKnob",
    tagline: "Helping You Feel Secure at Home",
    summary:
      "Lock changes, rekeying, lockout help, and other locksmith services for homeowners and renters.",
    intro:
      "Your home's locks play an important role in everyday security. {business} helps homeowners and renters with lockouts, lost keys, lock changes, and more.",
    heading: "Complete Locksmith Care for Your Home",
    body: [
      "From the front door to the side gate, the locks around your home see daily use. Over time they wear out, keys get lost or copied, and security needs change when people move in or out.",
      "We handle the full range of residential locksmith needs: getting you back inside after a lockout, rekeying after a move, installing new deadbolts or keypad locks, repairing sticky hardware, and cutting spare keys for the household.",
    ],
    included: [
      "House lockouts",
      "Rekeying after moving in",
      "Deadbolt and lock installation",
      "Lock repair and adjustment",
      "Spare house keys",
      "Keypad and smart locks",
    ],
    faqs: [
      {
        q: "Should I rekey or replace my locks after moving?",
        a: "If your locks are in good working condition, rekeying is usually the simpler option. It makes the old keys useless while keeping your existing hardware.",
      },
      {
        q: "Do you work with renters?",
        a: "Yes. Renters may need the property owner's permission for lock changes, so check your lease before scheduling.",
      },
      {
        q: "Can you install keypad locks at my home?",
        a: "Yes. We install electronic and keypad locks. Let us know the model you're considering and we'll confirm it suits your door.",
      },
    ],
  },
  {
    slug: "commercial-locksmith",
    name: "Commercial Locksmith Service",
    category: "locksmith",
    icon: Building2,
    image: "commercialDoublePulls",
    featureImage: "storefrontLeverInstalled",
    tagline: "Professional Locksmith Services for Businesses",
    summary:
      "Locksmith services for offices, storefronts, and commercial properties, from lock changes to master keys.",
    intro:
      "Access issues and lock problems can disrupt daily operations. {business} provides commercial locksmith services for businesses throughout Vallejo and nearby communities.",
    heading: "Keeping Your Business Secure and Running",
    body: [
      "Businesses face lock needs that homes don't: staff turnover, shared offices, storefront doors that take heavy daily traffic, and the need to control who can reach stockrooms, offices, and records.",
      "We work with business owners and property managers on lock changes, rekeying when employees leave, master key systems, storefront hardware, and lockouts. Because we're open 24 hours, we can also help when a problem comes up after closing.",
    ],
    included: [
      "Rekeying after staff changes",
      "Storefront door locks",
      "Master key systems",
      "Business lockouts",
      "Office key duplication",
      "Electronic and keypad locks",
    ],
    faqs: [
      {
        q: "Can you rekey our locks when an employee leaves?",
        a: "Yes. Rekeying makes old keys stop working without replacing the hardware, which is a common step after staff changes.",
      },
      {
        q: "Do you work with property managers?",
        a: "Yes. We help property managers with lock changes, rekeying, and keys for multiple units and buildings.",
      },
      {
        q: "Can you help outside normal business hours?",
        a: "We're open 24 hours a day, so you can call us when a lock issue comes up after closing.",
      },
    ],
  },
  {
    slug: "automotive-locksmith",
    name: "Automotive Locksmith Service",
    category: "locksmith",
    icon: CarFront,
    image: "carIgnition",
    featureImage: "vanRekeyStation",
    tagline: "Back on the Road With Professional Help",
    summary:
      "Car lockouts, lost car keys, and key duplication for drivers, depending on the vehicle and key type.",
    intro:
      "Locked out of your vehicle or dealing with a lost key? Contact {business} to discuss your automotive lockout or key-related needs.",
    heading: "Locksmith Help for Your Vehicle",
    body: [
      "Vehicle key problems are stressful, whether your keys are locked in the car, lost entirely, or you just need a spare before something goes wrong. Modern vehicles use a wide range of key types, from basic cut keys to keys with transponder chips.",
      "Service availability depends on the vehicle and the specific issue. Call us with the make, model, and year of your vehicle and a description of the problem, and we'll discuss the options available.",
    ],
    included: [
      "Car lockouts",
      "Keys locked in the trunk",
      "Lost car keys",
      "Car key duplication",
      "Spare keys before you need them",
      "Vehicle details reviewed up front",
    ],
    faqs: [
      {
        q: "What information do you need about my vehicle?",
        a: "The make, model, and year, plus the type of key it uses if you know it. That helps us confirm what we can do before we arrive.",
      },
      {
        q: "Can you make a key if I've lost all of mine?",
        a: "It depends on the vehicle and key type. Call us with your vehicle details so we can discuss whether we can help.",
      },
      {
        q: "Do you help with keys locked in the trunk?",
        a: "Yes, trunk lockouts are part of our automotive lockout service. Availability depends on the vehicle, so call us with the details.",
      },
    ],
  },
  {
    slug: "emergency-lockout",
    name: "Emergency Lockout Service",
    category: "locksmith",
    icon: Zap,
    image: "vanRekeyStation",
    featureImage: "deadboltKnobFairfield",
    tagline: "Locked Out? We're Open 24 Hours.",
    summary: "Lockout help for homes, businesses, and vehicles at any hour of the day or night.",
    intro:
      "Locked out of your home, business, or car? {business} is open 24 hours a day to help you get back in across Vallejo, Napa, and surrounding communities.",
    heading: "Careful Help When You're Locked Out",
    body: [
      "Lockouts tend to happen at the worst moments: late at night, in the rain, with groceries in hand or a child inside. Whatever the situation, the first step is the same: call us and tell us where you are and what's locked.",
      "We focus on getting you back inside carefully and confirming you're authorized to access the property or vehicle. If the lock is damaged or the keys are gone for good, we can also discuss rekeying or replacing the lock.",
    ],
    included: [
      "Home lockouts",
      "Business lockouts",
      "Car lockouts",
      "Keys locked inside",
      "Lockouts after keys are lost",
      "Rekeying after a lockout",
    ],
    faqs: [
      {
        q: "Can you help with a lockout in the middle of the night?",
        a: "Yes. We're open 24 hours a day, 7 days a week. Call (707) 290-6432 any time.",
      },
      {
        q: "Will I need to show that I live there?",
        a: "Expect to confirm you're authorized to access the property or vehicle. It protects you and your property.",
      },
      {
        q: "What if my keys are lost, not just locked inside?",
        a: "We can help you get back in and then discuss rekeying the lock so the lost keys no longer work.",
      },
    ],
  },
  {
    slug: "car-lockout",
    name: "Car Lockout Service",
    category: "locksmith",
    icon: Car,
    image: "carIgnition",
    featureImage: "vanWorkbench",
    tagline: "Keys Locked in the Car? Call Us.",
    summary: "Help getting back into your vehicle when keys are locked inside or in the trunk.",
    intro:
      "Keys locked inside the car? {business} provides car lockout service for drivers in Vallejo, Napa, Fairfield, and nearby communities, 24 hours a day.",
    heading: "Getting You Back Into Your Vehicle",
    body: [
      "It happens to everyone: the door closes, and the keys are sitting on the seat, in the ignition, or in the trunk. Trying to force your way in with a coat hanger can damage the door, the weather seal, or the lock mechanism.",
      "Call us with your location and the make, model, and year of your vehicle. Service availability depends on the vehicle, and we'll discuss the options before we head out.",
    ],
    included: [
      "Keys locked inside the car",
      "Keys locked in the trunk",
      "Lockouts at home, work, or roadside",
      "Cars, trucks, and SUVs",
      "Vehicle details reviewed up front",
      "Spare key options afterward",
    ],
    faqs: [
      {
        q: "How do I know if you can open my vehicle?",
        a: "Call us with the make, model, and year. Availability depends on the vehicle, and we'll let you know what's possible.",
      },
      {
        q: "Is car lockout service available at night?",
        a: "Yes. We're open 24 hours a day, 7 days a week.",
      },
      {
        q: "Should I get a spare key after a lockout?",
        a: "A spare kept somewhere safe can save you from the next lockout. Ask us about car key duplication for your vehicle.",
      },
    ],
  },
  {
    slug: "house-lockout",
    name: "House Lockout Service",
    category: "locksmith",
    icon: DoorClosed,
    image: "bronzeLeverDeadbolt",
    featureImage: "kwiksetDeadboltKnob",
    tagline: "Back Inside Your Home, Day or Night",
    summary: "Help getting back into your home when you're locked out, 24 hours a day.",
    intro:
      "Locked out of your house or apartment? {business} helps residents across Vallejo and nearby communities get back inside, any time of day.",
    heading: "Locked Out of Your Home?",
    body: [
      "Being locked out of your own home is frustrating, and sometimes urgent: a pet or child inside, something on the stove, or bad weather outside. Our house lockout service is focused on getting you back in with care for your door and lock.",
      "We'll ask you to confirm you live at the property before we begin. If your keys are lost rather than locked inside, we can also rekey the lock so the missing keys won't work.",
    ],
    included: [
      "Front and back door lockouts",
      "Apartment and condo lockouts",
      "Deadbolt and knob lockouts",
      "Lost house keys",
      "Rekeying after lost keys",
      "Spare house keys",
    ],
    faqs: [
      {
        q: "Can you open a deadbolt without replacing it?",
        a: "In many cases, yes. We'll assess the lock and explain the approach before starting work.",
      },
      {
        q: "I rent my home. Can you still help?",
        a: "Yes. We'll need you to confirm you live at the property. For lock changes afterward, check what your lease allows.",
      },
      {
        q: "How can I avoid the next lockout?",
        a: "Keep a spare key with someone you trust, or consider a keypad lock so a code can get you in.",
      },
    ],
  },
  {
    slug: "business-lockout",
    name: "Business Lockout Service",
    category: "locksmith",
    icon: Warehouse,
    image: "storefrontLockTested",
    featureImage: "commercialLeverDeadbolt",
    tagline: "Get Your Business Back Open",
    summary:
      "Lockout help for offices, shops, and commercial buildings so you can get back to work.",
    intro:
      "Locked out of your shop, office, or building? {business} helps business owners and managers regain access, 24 hours a day.",
    heading: "Lockouts Shouldn't Shut Down Your Day",
    body: [
      "A business lockout costs more than time. Staff can't get to work, customers are turned away, and deliveries pile up at the door. Whether the keys were left inside, lost, or a lock has failed, the goal is to get you open again.",
      "We'll ask you to confirm you're authorized to access the premises. Once you're in, we can discuss rekeying if keys are missing, or repairing a lock that's failing.",
    ],
    included: [
      "Storefront lockouts",
      "Office and suite lockouts",
      "Back door and stockroom doors",
      "Failed or jammed locks",
      "Rekeying after lost keys",
      "After-hours lockouts",
    ],
    faqs: [
      {
        q: "Who can request a business lockout?",
        a: "An owner, manager, or someone authorized to access the premises. Be ready to confirm your authorization.",
      },
      {
        q: "Can you help before opening time?",
        a: "Yes. We're open 24 hours a day, so early-morning and late-night lockouts are covered.",
      },
      {
        q: "What if an employee lost the business keys?",
        a: "We can help you get in and then rekey the affected locks so the lost keys no longer work.",
      },
    ],
  },
  {
    slug: "lock-rekeying",
    name: "Lock Rekeying Service",
    category: "locksmith",
    icon: KeyRound,
    image: "rekeyTwentyLocks",
    featureImage: "pinningCylinder",
    tagline: "New Keys Without New Locks",
    summary: "Rekeying existing locks so old keys stop working, without replacing the hardware.",
    intro:
      "Moved into a new place or lost track of who has a key? {business} rekeys locks for homes and businesses throughout Vallejo and nearby communities.",
    heading: "Take Back Control of Who Has a Key",
    body: [
      "Rekeying changes the inside of a lock so it works with a new key, and every old key stops working. You keep your existing hardware, which makes it a practical option when the locks are in good shape but the keys aren't under your control.",
      "Common reasons to rekey include moving into a new home, a tenant moving out, an employee leaving, or lost keys. We can also key several locks alike so one key opens your front door, back door, and garage.",
    ],
    included: [
      "Rekeying after moving in",
      "Rekeying between tenants",
      "Rekeying after staff changes",
      "Keying locks alike",
      "Residential and commercial locks",
      "New keys for rekeyed locks",
    ],
    faqs: [
      {
        q: "What's the difference between rekeying and replacing a lock?",
        a: "Rekeying changes which key works the lock while keeping the hardware. Replacing swaps out the lock entirely, which makes sense when it's damaged, worn, or you want an upgrade.",
      },
      {
        q: "Can you make all my locks use one key?",
        a: "Often, yes, if the locks are compatible. Ask about keying them alike when you book.",
      },
      {
        q: "When should I rekey my locks?",
        a: "After moving in, after losing keys, when a tenant or employee leaves, or any time you're not sure who still has a key.",
      },
    ],
  },
  {
    slug: "lock-repair",
    name: "Lock Repair Service",
    category: "locksmith",
    icon: Wrench,
    image: "slidingDoorRepair",
    featureImage: "brokenKeyExtracted",
    tagline: "Fix Sticky, Loose, and Failing Locks",
    summary:
      "Repair and adjustment for locks that stick, jam, won't latch, or have stopped working properly.",
    intro:
      "A lock that sticks or won't latch is a security problem waiting to happen. {business} repairs locks for homes and businesses across Vallejo and nearby communities.",
    heading: "Repair Before You Replace",
    body: [
      "Locks wear out with daily use. Keys get harder to turn, latches stop catching, deadbolts drag against the strike, and handles work loose. Left alone, a failing lock can leave you locked out, or unable to lock up.",
      "Many of these problems can be fixed with an adjustment or repair rather than new hardware. We'll look at the lock and the door, explain what's causing the problem, and tell you whether repair or replacement makes more sense.",
    ],
    included: [
      "Keys that stick or won't turn",
      "Deadbolts that drag or bind",
      "Latches that won't catch",
      "Loose handles and knobs",
      "Strike plate adjustment",
      "Repair-or-replace advice",
    ],
    faqs: [
      {
        q: "Is it worth repairing an old lock?",
        a: "If the lock is sound and the problem is wear or alignment, repair is often a good option. If it's badly damaged, we'll tell you when replacement makes more sense.",
      },
      {
        q: "Why is my key suddenly hard to turn?",
        a: "It can be a worn key, a worn cylinder, or a door that has shifted out of alignment. We'll find the cause before recommending a fix.",
      },
      {
        q: "Do you repair commercial locks too?",
        a: "Yes. We work on locks for both homes and businesses, including storefront doors.",
      },
    ],
  },
  {
    slug: "lost-key-service",
    name: "Lost Key Service",
    category: "locksmith",
    icon: FileKey2,
    image: "rekeyedKnobDeadbolt",
    featureImage: "brokenKeyInCylinder",
    tagline: "Lost Your Keys? We Can Help.",
    summary: "Help when keys are lost or stolen: getting back in, making new keys, and rekeying locks.",
    intro:
      "Lost or stolen keys leave you locked out and unsure who might have them. {business} helps you regain access and secure your locks again.",
    heading: "Lost Keys, Handled Start to Finish",
    body: [
      "Losing your keys creates two problems: you can't get in, and someone else might be able to. A good fix deals with both, restoring your access now and making sure the missing keys won't work later.",
      "Depending on the situation, we can help you get back inside, make new keys, and rekey the affected locks. For vehicle keys, options depend on the make, model, and key type, so call us with the details.",
    ],
    included: [
      "Lost house keys",
      "Lost business keys",
      "Lost car keys",
      "New key making",
      "Rekeying after lost keys",
      "Spare keys for later",
    ],
    faqs: [
      {
        q: "Should I rekey after losing my keys?",
        a: "If there's any chance someone could find the keys and know where they belong, rekeying is the safest step.",
      },
      {
        q: "Can you make a new key without the original?",
        a: "Often, yes, depending on the lock or vehicle. Call us to discuss your situation.",
      },
      {
        q: "What if my keys were stolen?",
        a: "Treat it as a security issue. Call us to discuss rekeying or replacing the affected locks as soon as possible.",
      },
    ],
  },
  {
    slug: "sheriff-evictions",
    name: "Sheriff Eviction Lock Service",
    category: "locksmith",
    icon: Scale,
    image: "rekeyedSecurityDoor",
    featureImage: "deadboltDoorknobReplacement",
    tagline: "Lock Changes for Authorized Evictions",
    summary: "Lock changes for landlords and property managers during sheriff-enforced evictions.",
    intro:
      "When a sheriff-enforced eviction is scheduled, {business} provides lock change services for landlords and property managers in Vallejo and nearby communities.",
    heading: "Securing the Property on Eviction Day",
    body: [
      "When a sheriff carries out an eviction, the property owner typically needs the locks changed at that time so the former occupant can't return. Coordinating that timing with a locksmith in advance helps the day go smoothly.",
      "Service arrangements and authorization requirements should be confirmed before scheduling. Contact us with the property address and the scheduled date so we can discuss availability and what documentation is needed.",
    ],
    included: [
      "Lock changes at the eviction",
      "Rekeying existing locks",
      "Coordinating with the scheduled time",
      "Residential rental properties",
      "Commercial properties",
      "New keys for the owner",
    ],
    faqs: [
      {
        q: "Who can schedule eviction lock services?",
        a: "The property owner, landlord, or their authorized property manager. Be prepared to confirm your authorization.",
      },
      {
        q: "Should I schedule the locksmith in advance?",
        a: "Yes. Contact us as soon as you have the scheduled date so we can discuss availability.",
      },
      {
        q: "Will you rekey or replace the locks?",
        a: "Rekeying is usually enough if the hardware is in good condition. We'll discuss the best option for the property.",
      },
    ],
  },

  // ── Key Duplication Services ──────────────────────────────────────────────────────────────
  {
    slug: "key-duplication",
    name: "Key Duplication",
    category: "key-duplication",
    icon: Copy,
    image: "antiqueKey",
    featureImage: "vanRekeyStation",
    tagline: "Accurate Copies of the Keys You Use",
    summary: "Key copies for homes, businesses, and vehicles, depending on the key type.",
    intro:
      "Need a spare? {business} provides key duplication for house, office, and car keys across Vallejo, Napa, and nearby communities.",
    heading: "Spare Keys You Can Count On",
    body: [
      "A spare key is cheap insurance against lockouts, and extra copies make life easier when several people share a home or workplace. A poorly cut copy, though, can stick, fail to turn, or wear down your lock.",
      "We duplicate keys for compatible locks and keys. Availability depends on the key type, since some keys are restricted or use special blanks, so bring the key or call to describe it and we'll confirm.",
    ],
    included: [
      "House key copies",
      "Office and business keys",
      "Car key duplication",
      "Padlock and mailbox keys",
      "Multiple copies at once",
      "Key type checked first",
    ],
    faqs: [
      {
        q: "Can you copy any key?",
        a: "Most standard keys can be copied, but some high-security or restricted keys need authorization or special blanks. Tell us about the key and we'll confirm.",
      },
      {
        q: "How many copies can I get?",
        a: "As many as you need. Making several at once is convenient for households and teams.",
      },
      {
        q: "Can you copy a car key?",
        a: "It depends on the vehicle and key type. See our car key duplication service or call us with your vehicle details.",
      },
    ],
  },
  {
    slug: "house-key-duplication",
    name: "House Key Duplication",
    category: "key-duplication",
    icon: LockKeyhole,
    image: "brassDeadboltKeys",
    featureImage: "doorknobInstalled",
    tagline: "Spare Keys for Everyone at Home",
    summary:
      "Copies of front door, back door, and other household keys for family members and trusted helpers.",
    intro:
      "Make sure everyone in your household has a key. {business} duplicates house keys for residents throughout Vallejo and nearby communities.",
    heading: "A Key for Everyone Who Needs One",
    body: [
      "Households change: kids grow old enough for their own key, a partner moves in, or you want a spare with a neighbor, relative, or pet sitter. House key duplication makes sure the right people can get in.",
      "If you have several different keys for different doors, ask about rekeying your locks alike so a single key opens them all. That means fewer keys to copy and carry.",
    ],
    included: [
      "Front and back door keys",
      "Deadbolt keys",
      "Garage side-door keys",
      "Keys for family members",
      "Spares for neighbors or sitters",
      "Option to key locks alike",
    ],
    faqs: [
      {
        q: "Can I get one key for all my doors?",
        a: "If your locks are compatible, we can rekey them alike so one key works throughout the house.",
      },
      {
        q: "Who should have a spare house key?",
        a: "Someone you trust who lives nearby, like a family member or neighbor, is a good backup against lockouts.",
      },
      {
        q: "Do I need to bring the original key?",
        a: "Yes, to duplicate a key we need the original or a working copy. If you've lost all your keys, see our lost key service.",
      },
    ],
  },
  {
    slug: "car-key-duplication",
    name: "Car Key Duplication",
    category: "key-duplication",
    icon: Key,
    image: "carIgnition",
    featureImage: "vanWorkbench",
    tagline: "A Spare Car Key Before You Need One",
    summary: "Spare car keys for compatible vehicles, depending on the make, model, and key type.",
    intro:
      "A spare car key can save you from a lockout or a long wait. {business} offers car key duplication for compatible vehicles across Vallejo and nearby communities.",
    heading: "Car Key Copies, Matched to Your Vehicle",
    body: [
      "Many drivers only have one working car key, until it's lost. A spare kept at home or with a family member turns a stressful situation into a minor inconvenience.",
      "Vehicle keys vary widely. Some are simple cut keys, while others contain chips that must match the vehicle. Call us with the make, model, and year, and we'll let you know what's possible for your key.",
    ],
    included: [
      "Spare car keys",
      "Truck and SUV keys",
      "Basic cut vehicle keys",
      "Key type confirmed first",
      "Vehicle details reviewed up front",
      "Advice on chip keys",
    ],
    faqs: [
      {
        q: "Can you duplicate my car key?",
        a: "It depends on your vehicle and key type. Call with the make, model, and year so we can confirm.",
      },
      {
        q: "Why are some car keys harder to copy?",
        a: "Keys with chips or special cuts need different blanks and steps than a basic metal key. We'll discuss the details for your key.",
      },
      {
        q: "What if I've lost my only car key?",
        a: "See our lost key service, or call us to discuss your vehicle and what options are available.",
      },
    ],
  },
  {
    slug: "commercial-key-duplication",
    name: "Commercial Key Duplication",
    category: "key-duplication",
    icon: Building,
    image: "storefrontCylinderKey",
    featureImage: "coinLaundryLock",
    tagline: "Keys for Your Whole Team",
    summary:
      "Key copies for offices, shops, and commercial properties, handled with access control in mind.",
    intro:
      "Growing team or new location? {business} provides commercial key duplication for businesses and property managers in Vallejo and nearby communities.",
    heading: "Business Keys, Kept Under Control",
    body: [
      "Businesses need keys for staff, managers, cleaners, and vendors, but every extra key is another way into your building. Duplicating keys should go hand in hand with knowing who holds them.",
      "We copy commercial keys for compatible locks and can help you plan access with a master key system, so each person gets only the keys they need. If keys go missing, rekeying keeps your building secure.",
    ],
    included: [
      "Office and suite keys",
      "Storefront keys",
      "Keys for new staff",
      "Property manager key sets",
      "Authorized master key copies",
      "Advice on key control",
    ],
    faqs: [
      {
        q: "Can I get copies of our master key?",
        a: "Master keys should only be copied with proper authorization. See our master key duplication service for details.",
      },
      {
        q: "How do we keep track of who has keys?",
        a: "Keep a simple key log and limit copies to what's needed. A master key system can make access easier to manage.",
      },
      {
        q: "What if an employee doesn't return their key?",
        a: "Rekeying the affected locks makes the unreturned key useless. Contact us to discuss.",
      },
    ],
  },
  {
    slug: "duplicate-key-cutting",
    name: "Duplicate Key Cutting",
    category: "key-duplication",
    icon: Scissors,
    image: "vanRekeyStation",
    featureImage: "antiqueKey",
    tagline: "Clean, Precise Key Cuts",
    summary: "Precise cutting of duplicate keys from your original, for keys that turn smoothly.",
    intro:
      "A good copy starts with a good cut. {business} cuts duplicate keys for homes, businesses, and vehicles across Vallejo and nearby communities.",
    heading: "Why the Cut Matters",
    body: [
      "A key that's cut even slightly off can stick, need jiggling, or fail to turn at all, and a rough key can wear down the pins inside your lock over time.",
      "We cut duplicates from your original key on the correct blank for your lock, then check the copy against the original. If your original is badly worn, let us know: copying a worn key can copy its problems too.",
    ],
    included: [
      "Copies cut from your original",
      "Correct blank for the lock",
      "Copy checked against the original",
      "House and business keys",
      "Multiple copies at once",
      "Advice on worn keys",
    ],
    faqs: [
      {
        q: "Why doesn't my old copy work well?",
        a: "Copies of copies, or copies of worn keys, can drift from the original cut. Bring the best key you have.",
      },
      {
        q: "Can you copy a key that's badly worn?",
        a: "We'll look at it. If it's too worn, rekeying the lock and starting with a fresh key may be the better fix.",
      },
      {
        q: "How long does key cutting take?",
        a: "Standard keys are usually quick. Call ahead if you need many copies or a special key type.",
      },
    ],
  },
  {
    slug: "door-key-duplication",
    name: "Door Key Duplication",
    category: "key-duplication",
    icon: DoorOpen,
    image: "deadboltDoorknobReplacement",
    featureImage: "leverDeadboltInstall",
    tagline: "Copies for Every Door You Use",
    summary: "Copies of keys for front doors, back doors, side gates, and interior doors.",
    intro:
      "Front door, back door, side gate: {business} duplicates door keys for homes and businesses throughout Vallejo and nearby communities.",
    heading: "Every Door, Covered",
    body: [
      "Most properties have more doors than people remember: front and back entries, side gates, garage access doors, sheds, and interior offices. It's easy to end up with only one key for a door that matters.",
      "We duplicate keys for compatible door locks so you have spares for every entry point. If juggling many keys is the bigger problem, ask about keying your door locks alike.",
    ],
    included: [
      "Front and back door keys",
      "Side gate keys",
      "Garage access door keys",
      "Interior and office door keys",
      "Deadbolt keys",
      "Keying doors alike",
    ],
    faqs: [
      {
        q: "Can you copy a key if I don't know the lock brand?",
        a: "Usually, yes. We identify the key type from the key itself.",
      },
      {
        q: "I have too many door keys. Can that be simplified?",
        a: "If your locks are compatible, we can rekey them alike so one key opens several doors.",
      },
      {
        q: "Do you copy keys for patio doors?",
        a: "Many patio door locks use standard keys we can copy. Bring the key and we'll check.",
      },
    ],
  },
  {
    slug: "office-key-duplication",
    name: "Office Key Duplication",
    category: "key-duplication",
    icon: Briefcase,
    image: "commercialLeverDeadbolt",
    featureImage: "storefrontLever",
    tagline: "Keys for Every Desk and Door",
    summary: "Copies of office, suite, and cabinet keys for staff and managers.",
    intro:
      "Bringing on new staff or opening a new suite? {business} duplicates office keys for businesses across Vallejo, Napa, and nearby communities.",
    heading: "Office Keys Without the Hassle",
    body: [
      "Offices run on keys: the front entry, individual offices, storage rooms, and sometimes filing cabinets and desks. When new people join or a key wears out, you need reliable copies quickly.",
      "We copy office keys for compatible locks and can help you think through who should hold which keys. For larger teams, a master key system can reduce the number of keys everyone carries.",
    ],
    included: [
      "Office entry keys",
      "Suite and interior door keys",
      "Storage room keys",
      "Keys for new employees",
      "Manager key sets",
      "Master key planning",
    ],
    faqs: [
      {
        q: "Can you copy keys stamped “Do Not Duplicate”?",
        a: "Keys marked this way may need confirmation from the property owner or manager before copying. Ask us when you call.",
      },
      {
        q: "How can we reduce the number of office keys?",
        a: "A master key system or keying locks alike can cut down the keys each person carries.",
      },
      {
        q: "What should we do when a key goes missing?",
        a: "Rekey the affected locks so the missing key no longer works.",
      },
    ],
  },
  {
    slug: "storefront-key-duplication",
    name: "Storefront Key Duplication",
    category: "key-duplication",
    icon: Store,
    image: "storefrontLeverInstalled",
    featureImage: "storefrontLatchCheck",
    tagline: "Spare Keys for Your Storefront",
    summary:
      "Copies of storefront and commercial entry keys so the people who open and close always have access.",
    intro:
      "Make sure whoever opens and closes your shop has a key. {business} duplicates storefront keys for businesses in Vallejo and nearby communities.",
    heading: "Keys for the Front Door of Your Business",
    body: [
      "Storefront doors see heavy daily use, and so do their keys. Shops with several managers or rotating shifts need enough keys for the people who open and close, and no more.",
      "We duplicate keys for compatible storefront and commercial entry locks. If a storefront lock is worn, sticking, or no longer secure, we can also discuss lock repair or replacement.",
    ],
    included: [
      "Storefront door keys",
      "Rear and service entry keys",
      "Keys for openers and closers",
      "Commercial entry locks",
      "Worn key replacement",
      "Storefront lock advice",
    ],
    faqs: [
      {
        q: "Can you copy storefront door keys?",
        a: "Many storefront doors use standard commercial cylinders we can copy. Bring the key or describe it and we'll confirm.",
      },
      {
        q: "How many storefront keys should we have?",
        a: "Enough for the people who open and close, plus a secure spare. Fewer keys means easier control.",
      },
      {
        q: "Our storefront lock is hard to turn. Can you help?",
        a: "Yes. Lock repair or replacement may solve it. See our lock repair service or call us to discuss.",
      },
    ],
  },
  {
    slug: "master-key-duplication",
    name: "Master Key Duplication",
    category: "key-duplication",
    icon: Network,
    image: "interchangeableCore",
    featureImage: "clusterMailboxOpen",
    tagline: "Authorized Copies of Master Keys",
    summary: "Copies of master keys for authorized owners and managers, handled with care.",
    intro:
      "Master keys open many doors, so copies need care. {business} duplicates master keys for authorized owners and property managers in Vallejo and nearby communities.",
    heading: "Handled With the Care Master Keys Deserve",
    body: [
      "A master key can open every door in a system, which makes it the most sensitive key a business or property owns. Copies should only go to people who truly need them, and only with the right authorization.",
      "We'll ask you to confirm you're authorized before copying a master key. If you're not sure how many master keys are out there, rekeying the system may be the more secure step.",
    ],
    included: [
      "Authorized master key copies",
      "Sub-master key copies",
      "Property manager key sets",
      "Authorization confirmed first",
      "Key control advice",
      "Rekeying when control is lost",
    ],
    faqs: [
      {
        q: "Who can request a master key copy?",
        a: "The owner or an authorized manager. Be prepared to confirm your authorization.",
      },
      {
        q: "What if we've lost track of our master keys?",
        a: "Rekeying the system so old master keys stop working is the safest fix. Contact us to discuss.",
      },
      {
        q: "Can you set up a new master key system?",
        a: "Yes. See our master key systems service for planning and setup.",
      },
    ],
  },
  {
    slug: "high-security-key-duplication",
    name: "High-Security Key Duplication",
    category: "key-duplication",
    icon: ShieldCheck,
    image: "commercialDoublePulls",
    featureImage: "interchangeableCore",
    tagline: "Restricted Keys, Handled Properly",
    summary:
      "Duplication options for high-security and restricted keys, subject to authorization and key type.",
    intro:
      "High-security keys are designed to be hard to copy. {business} can discuss duplication options for restricted keys with authorized owners.",
    heading: "Why High-Security Keys Are Different",
    body: [
      "High-security and restricted keys use special blanks and cuts designed to prevent unauthorized copies. Many systems require proof of ownership, a registration card, or authorization from the registered key holder.",
      "Availability depends on the key system involved. Contact us with the brand stamped on your key and any ownership card you have, and we'll let you know whether we can help or what the next step is.",
    ],
    included: [
      "Restricted key review",
      "Authorization confirmed first",
      "Brand and system identified",
      "Ownership card guidance",
      "Advice on next steps",
      "Security upgrade options",
    ],
    faqs: [
      {
        q: "Why can't high-security keys be copied anywhere?",
        a: "They use protected blanks and cuts, and many systems restrict copies to authorized dealers or registered owners.",
      },
      {
        q: "What do I need to copy a restricted key?",
        a: "Usually proof that you're the authorized owner, such as a key card or letter. Requirements vary by system.",
      },
      {
        q: "Should I upgrade to high-security keys?",
        a: "If controlling copies of your keys matters, it's worth discussing. Contact us about your property and needs.",
      },
    ],
  },
  {
    slug: "duplicate-house-keys",
    name: "Duplicate House Keys",
    category: "key-duplication",
    icon: CopyPlus,
    image: "smartkeyHandleset",
    featureImage: "kwiksetDeadboltKnob",
    tagline: "The Right Number of Spares for Your Home",
    summary:
      "Duplicate house keys for new homeowners, growing families, and anyone who needs a dependable spare.",
    intro:
      "Just moved, or tired of sharing one key? {business} makes duplicate house keys for residents across Vallejo, Napa, and nearby communities.",
    heading: "Planning Your Household Key Set",
    body: [
      "When you move in, you often get only one or two keys. When the family grows, that's rarely enough. Planning your key set (who needs one, plus a spare or two) saves lockouts and last-minute scrambles.",
      "If you just moved in, consider rekeying first so you're duplicating keys nobody else has. Then we can cut the duplicates you need for everyone in the household.",
    ],
    included: [
      "Duplicates for new homeowners",
      "Keys for every family member",
      "A spare for emergencies",
      "Rekeying before copying",
      "Deadbolt and knob keys",
      "Keying locks alike",
    ],
    faqs: [
      {
        q: "Should I rekey before making duplicate keys?",
        a: "If you just moved in, yes. Rekeying first means you're copying keys only your household has.",
      },
      {
        q: "Where should I keep a spare house key?",
        a: "With a trusted neighbor or family member is safer than under a mat or in a planter.",
      },
      {
        q: "How many duplicate keys should I make?",
        a: "One for each person who lives there, plus at least one spare kept with someone you trust.",
      },
    ],
  },
];

const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

export function getService(slug: string): Service | undefined {
  return serviceBySlug.get(slug);
}

/** Looks up a slug that is known at build time; throws so a typo fails the build, not a page. */
export function requireService(slug: string): Service {
  const service = serviceBySlug.get(slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}

export function servicesInCategory(category: CategorySlug): Service[] {
  return services.filter((service) => service.category === category);
}

export function servicePath(slug: string): string {
  return `/services/${slug}`;
}

/** The next few services in the same category, wrapping around, for "related services". */
export function relatedServices(service: Service, count = 3): Service[] {
  const siblings = servicesInCategory(service.category);
  const start = siblings.findIndex((s) => s.slug === service.slug);
  return Array.from(
    { length: Math.min(count, siblings.length - 1) },
    (_, i) => siblings[(start + 1 + i) % siblings.length],
  );
}
