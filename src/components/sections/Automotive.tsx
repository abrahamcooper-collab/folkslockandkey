import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, Copy, Ellipsis, FileKey2, Info } from "lucide-react";
import { images } from "@/content/images";
import { requireService, servicePath } from "@/content/services";
import { BusinessName } from "@/components/ui/BusinessName";
import { RequestServiceLink } from "@/components/ui/RequestServiceLink";

const items = [
  { icon: Car, label: "Automotive Lockout Services", slug: "car-lockout" },
  { icon: FileKey2, label: "Lost Key Replacement and Key Making", slug: "lost-key-service" },
  { icon: Copy, label: "Key Duplication Where Compatible", slug: "car-key-duplication" },
  { icon: Ellipsis, label: "Additional Automotive Locksmith Needs", slug: "automotive-locksmith" },
] as const;

/** Template dark "Automotive Locksmith" section (home page). */
export function Automotive() {
  const photo = images.carIgnition;
  const category = requireService("automotive-locksmith").name;
  return (
    <section id="automotive" className="relative overflow-hidden bg-ink-900 py-20 lg:py-28">
      <div className="mx-auto grid max-w-container items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1200px) 560px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t/srgb from-ink-900/50 to-transparent" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Automotive Locksmith
          </p>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Back on the Road With Professional Locksmith Assistance
          </h2>
          <p className="mt-5 leading-relaxed text-white/70">
            Locked out of your vehicle or dealing with a lost key? Contact <BusinessName /> to
            discuss your automotive lockout or key-related needs.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {items.map(({ icon: Icon, label, slug }) => (
              <li key={label}>
                <Link
                  href={servicePath(slug)}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-gold/30"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-800 ring-1 ring-gold/20">
                    <Icon className="size-6 text-gold" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-white/90">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-gold/20 bg-gold/[0.06] px-4 py-3">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-white/75">
              Service availability depends on the vehicle and the specific issue. Contact us with
              your vehicle details so we can discuss the available options.
            </p>
          </div>
          <RequestServiceLink
            category={category}
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-ink-900 shadow-xs transition-all hover:bg-gold-400"
          >
            Request Automotive Assistance
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </RequestServiceLink>
        </div>
      </div>
    </section>
  );
}
