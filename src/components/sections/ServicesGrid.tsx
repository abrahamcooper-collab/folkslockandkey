import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { images, type ImageKey } from "@/content/images";
import { servicePath, type Service } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type ServiceCard = {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly href: string;
  /** Background photo. Cards with one render as dark photo cards; without, as plain white cards. */
  readonly image?: ImageKey;
};

/** Card for a service page, with the service's own photo unless another is given. */
export function serviceCard(service: Service, image: ImageKey = service.image): ServiceCard {
  return {
    icon: service.icon,
    title: service.name,
    description: service.summary,
    href: servicePath(service.slug),
    image,
  };
}

/** Template "Our Locksmith Services" grid of cards; each card links to its service page. */
export function ServicesGrid({
  id,
  eyebrow,
  title,
  intro,
  cards,
  background = "cream",
}: {
  id?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  cards: readonly ServiceCard[];
  background?: "cream" | "white";
}) {
  return (
    <section id={id} className={`${background === "cream" ? "bg-cream" : "bg-white"} py-20 lg:py-28`}>
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) =>
            card.image ? (
              <PhotoCard key={card.href} card={card} image={card.image} />
            ) : (
              <PlainCard key={card.href} card={card} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function PlainCard({ card: { icon: Icon, title, description, href } }: { card: ServiceCard }) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-cardhover">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-gold ring-1 ring-gold/20 transition-colors group-hover:bg-gold group-hover:text-ink-900">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-body">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 transition-colors hover:text-ink-900"
      >
        Learn More
        <span className="sr-only"> about {title}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}

/**
 * Photo-background card: the service photo under a dark gradient so the white copy stays readable.
 * The "Learn More" link is stretched over the whole card, so the entire card is clickable.
 */
function PhotoCard({
  card: { icon: Icon, title, description, href },
  image,
}: {
  card: ServiceCard;
  image: ImageKey;
}) {
  const photo = images[image];
  return (
    <article className="group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden rounded-xl bg-ink-900 p-6 shadow-card ring-1 ring-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-cardhover hover:ring-gold/50">
      {/* Behind the copy (-z-10 inside the isolated card) so the copy needs no positioning and the
          stretched link below covers the whole card, not just the copy block. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t/srgb from-ink-900 via-ink-900/75 to-ink-900/15" />
      </div>
      <div className="flex flex-col">
        <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900/80 text-gold ring-1 ring-gold/40 backdrop-blur-xs transition-colors group-hover:bg-gold group-hover:text-ink-900">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75">{description}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-400 transition-colors after:absolute after:inset-0 after:content-[''] hover:text-white"
        >
          Learn More
          <span className="sr-only"> about {title}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
