import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { business, phoneHref } from "@/content/business";
import { images } from "@/content/images";
import { CONTACT_HREF } from "@/content/navigation";
import { BusinessName } from "@/components/ui/BusinessName";
import { TrustPills } from "@/components/ui/TrustBadges";

/** Template closing call-to-action band over a darkened photo. */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink-800 py-20 lg:py-24">
      <Image
        src={images.hero.src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-linear-to-r/srgb from-ink-900 via-ink-900/85 to-ink-900/60" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          <BusinessName />
        </p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.75rem]">
          Need a Locksmith? Let&apos;s Talk.
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-white/70">
          Whether you&apos;re dealing with a lockout, a lost key, or a lock issue at your home or
          business, contact <BusinessName /> to discuss your needs.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-ink-900 shadow-lg shadow-gold/20 transition-all hover:bg-gold-400"
          >
            <Phone className="h-4 w-4" />
            Call {business.phone}
          </a>
          <a
            href={CONTACT_HREF}
            className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-gold/60 hover:text-gold"
          >
            Request Service
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
        <TrustPills className="mt-8 justify-center" />
      </div>
    </section>
  );
}
