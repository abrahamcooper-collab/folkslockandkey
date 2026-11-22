import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Phone, ShieldCheck, type LucideIcon } from "lucide-react";
import { business, phoneHref } from "@/content/business";
import { images, type ImageKey } from "@/content/images";
import { CONTACT_HREF } from "@/content/navigation";

export type HeroFeature = { readonly icon: LucideIcon; readonly label: string };

/**
 * Template hero: copy and CTAs on the left, photo with gradient overlays on the right. Used on the
 * home page and as the page hero for every service and area page.
 */
export function Hero({
  eyebrow,
  titleLead,
  titleAccent,
  intro,
  image,
  features,
  badge = "Serving Solano & Bay Area Communities",
  ctaLabel = "Request Locksmith Service",
}: {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  intro: ReactNode;
  image: ImageKey;
  features: readonly HeroFeature[];
  badge?: string;
  ctaLabel?: string;
}) {
  const photo = images[image];
  return (
    <section id="home" className="relative bg-ink-900 pt-16">
      <div className="mx-auto grid max-w-container items-stretch gap-0 px-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:py-24 lg:pl-8 lg:pr-12">
          <p className="mb-5 inline-flex animate-fade-up items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold/60" />
            {eyebrow}
          </p>
          <h1
            className="animate-fade-up text-4xl font-extrabold leading-[1.07] text-white sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "60ms" }}
          >
            {titleLead}
            <span className="block text-gold">{titleAccent}</span>
          </h1>
          <p
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/70 sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            {intro}
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "180ms" }}
          >
            <a
              href={CONTACT_HREF}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-ink-900 shadow-lg shadow-gold/20 transition-all hover:bg-gold-400 hover:shadow-gold/30"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-gold/60 hover:text-gold"
            >
              <Phone className="h-4 w-4 text-gold" />
              Call {business.phone}
            </a>
          </div>
          <ul
            className="mt-10 grid animate-fade-up gap-3 sm:grid-cols-3"
            style={{ animationDelay: "240ms" }}
          >
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-start gap-2.5 rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-3"
              >
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-xs font-semibold leading-snug text-white/85">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[340px] overflow-hidden lg:min-h-[640px]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(min-width: 1200px) 570px, (min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r/srgb from-ink-900 via-ink-900/40 to-transparent lg:from-ink-900/90 lg:via-ink-900/10 lg:to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t/srgb from-ink-900/70 via-transparent to-transparent lg:bg-none" />
          <div className="absolute bottom-5 right-5 hidden items-center gap-2 rounded-md bg-ink-900/80 px-4 py-2.5 ring-1 ring-gold/30 backdrop-blur-xs lg:flex">
            <ShieldCheck className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold text-white/90">{badge}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
