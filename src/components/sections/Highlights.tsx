import { Building2, Car, House, MapPin } from "lucide-react";

const highlights = [
  { icon: House, label: "Residential Locksmith Services" },
  { icon: Building2, label: "Commercial Locksmith Services" },
  { icon: Car, label: "Automotive Lockout Assistance" },
  { icon: MapPin, label: "Multiple Service Areas" },
] as const;

/** White strip of four service highlights under the hero (template). */
export function Highlights() {
  return (
    <section aria-label="Service highlights" className="border-b border-line bg-white">
      <div className="mx-auto max-w-container px-4 py-7 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4 lg:divide-x lg:divide-line">
          {highlights.map(({ icon: Icon, label }, index) => (
            <li key={label} className={`flex items-center gap-3 ${index > 0 ? "lg:pl-6" : ""}`}>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cream ring-1 ring-line">
                <Icon className="h-5 w-5 text-gold" />
              </span>
              <span className="text-sm font-semibold leading-snug text-ink-900">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
