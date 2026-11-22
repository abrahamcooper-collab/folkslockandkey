import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { areaLabel, areaPath, areas as allAreas, type ServiceArea } from "@/content/areas";
import { CONTACT_HREF } from "@/content/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Template "Service Areas" grid; every area links to its page. */
export function ServiceAreas({
  eyebrow = "Service Areas",
  title = "Serving Vallejo, Napa, and Surrounding Communities",
  intro,
  areas = allAreas,
}: {
  eyebrow?: ReactNode;
  title?: ReactNode;
  intro: ReactNode;
  areas?: readonly ServiceArea[];
}) {
  return (
    <section id="service-areas" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link
                href={areaPath(area.slug)}
                className="flex h-full items-center gap-2.5 rounded-lg border border-line bg-white px-4 py-3.5 transition-colors hover:border-gold/40 hover:shadow-card"
              >
                <MapPin className="size-6 shrink-0 text-gold-600" />
                <span className="text-sm font-semibold text-ink-900">{areaLabel(area)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-line bg-white px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm leading-relaxed text-body">
            Not sure if your location is covered? Contact our team with your city and service needs
            so we can discuss availability.
          </p>
          <a
            href={CONTACT_HREF}
            className="group inline-flex shrink-0 items-center gap-2 rounded-md bg-ink-900 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ink-800"
          >
            Check Service Availability
            <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
