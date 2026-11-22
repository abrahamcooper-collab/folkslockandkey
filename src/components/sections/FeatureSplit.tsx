import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";
import { images, type ImageKey } from "@/content/images";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeading";
import { RequestServiceLink } from "@/components/ui/RequestServiceLink";

export type FeatureItem = {
  readonly icon: LucideIcon;
  readonly label: string;
  /** Optional link (area pages link their service chips to service pages). */
  readonly href?: string;
};

type Badge = { readonly label: string; readonly title: string };
type Cta = { readonly label: string; readonly category?: string };

function Paragraphs({ paragraphs }: { paragraphs: readonly ReactNode[] }) {
  return paragraphs.map((paragraph, index) => (
    <p key={index} className={`${index === 0 ? "mt-5" : "mt-4"} leading-relaxed text-body`}>
      {paragraph}
    </p>
  ));
}

function PhotoCard({
  image,
  aspect,
  overlay,
  badge,
  badgeSide,
}: {
  image: ImageKey;
  aspect: string;
  overlay: string;
  badge: Badge;
  badgeSide: "left" | "right";
}) {
  const photo = images[image];
  return (
    <>
      <div className="relative overflow-hidden rounded-2xl shadow-card">
        <div className={`relative w-full ${aspect}`}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1200px) 560px, (min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className={`absolute inset-0 bg-linear-to-t/srgb ${overlay} to-transparent`} />
      </div>
      <div
        className={`absolute -bottom-5 hidden rounded-xl bg-ink-900 px-5 py-4 shadow-lg ring-1 ring-gold/30 sm:block ${
          badgeSide === "right" ? "-right-3" : "-left-3"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-gold">{badge.label}</p>
        <p className="mt-1 text-sm font-bold text-white">{badge.title}</p>
      </div>
    </>
  );
}

const PHOTO_ASPECT = "aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]";

/**
 * Template "Residential" layout: photo with badge on the left, copy + icon list + dark CTA on the
 * right (stacked copy-first on mobile).
 */
export function FeatureSplit({
  id,
  eyebrow,
  title,
  paragraphs,
  items,
  cta,
  image,
  badge,
  background = "white",
}: {
  id?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  paragraphs: readonly ReactNode[];
  items: readonly FeatureItem[];
  cta: Cta;
  image: ImageKey;
  badge: Badge;
  background?: "white" | "cream";
}) {
  return (
    <section id={id} className={`${background === "white" ? "bg-white" : "bg-cream"} py-20 lg:py-28`}>
      <div className="mx-auto grid max-w-container items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <PhotoCard
            image={image}
            aspect={PHOTO_ASPECT}
            overlay="from-ink-900/30"
            badge={badge}
            badgeSide="right"
          />
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
          <Paragraphs paragraphs={paragraphs} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className={`flex items-center gap-3 rounded-lg border border-line px-4 py-3 ${
                  background === "white" ? "bg-cream/60" : "bg-white"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white ring-1 ring-line">
                  <Icon className="size-6 text-gold-600" />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink-900">{label}</span>
              </li>
            ))}
          </ul>
          <RequestServiceLink
            category={cta.category}
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-ink-900 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-ink-800"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
          </RequestServiceLink>
        </div>
      </div>
    </section>
  );
}

/**
 * Template "Commercial" layout: copy + check list + chip grid + gold CTA on the left, photo with
 * badge on the right.
 */
export function FeatureSplitAlt({
  id,
  eyebrow,
  title,
  paragraphs,
  checks,
  chips,
  cta,
  image,
  badge,
}: {
  id?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  paragraphs: readonly ReactNode[];
  checks: readonly string[];
  chips: readonly FeatureItem[];
  cta: Cta;
  image: ImageKey;
  badge: Badge;
}) {
  const chipClass =
    "flex items-center gap-2.5 rounded-lg border border-line bg-white px-3.5 py-2.5";
  return (
    <section id={id} className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-container items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
          <Paragraphs paragraphs={paragraphs} />
          <ul className="mt-8 grid gap-2.5">
            {checks.map((check) => (
              <li key={check} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/30">
                  <Check className="h-3.5 w-3.5 text-gold-600" />
                </span>
                <span className="text-sm font-semibold text-ink-900">{check}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {chips.map(({ icon: Icon, label, href }) => {
              const content = (
                <>
                  <Icon className="size-6 shrink-0 text-gold-600" />
                  <span className="text-xs font-semibold leading-snug text-ink-800">{label}</span>
                </>
              );
              return href ? (
                <Link
                  key={label}
                  href={href}
                  className={`${chipClass} transition-colors hover:border-gold/40`}
                >
                  {content}
                </Link>
              ) : (
                <div key={label} className={chipClass}>
                  {content}
                </div>
              );
            })}
          </div>
          <RequestServiceLink
            category={cta.category}
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-ink-900 shadow-xs transition-all hover:bg-gold-400"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </RequestServiceLink>
        </div>
        <div className="relative">
          <PhotoCard
            image={image}
            aspect={PHOTO_ASPECT}
            overlay="from-ink-900/40"
            badge={badge}
            badgeSide="left"
          />
        </div>
      </div>
    </section>
  );
}
