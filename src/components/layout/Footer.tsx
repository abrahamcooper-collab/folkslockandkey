import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { areaLabel, areaPath, areas } from "@/content/areas";
import { business, emailHref, phoneHref } from "@/content/business";
import { CONTACT_HREF } from "@/content/navigation";
import { servicePath } from "@/content/services";
import { BusinessName } from "@/components/ui/BusinessName";
import { CurrentYear } from "./CurrentYear";
import { Logo } from "./Logo";

const footerServices = [
  { label: "Residential Locksmith", href: servicePath("residential-locksmith") },
  { label: "Commercial Locksmith", href: servicePath("commercial-locksmith") },
  { label: "Automotive Locksmith", href: servicePath("automotive-locksmith") },
  { label: "Emergency Lockout Services", href: servicePath("emergency-lockout") },
  { label: "Rekeying Services", href: servicePath("lock-rekeying") },
  { label: "Key Duplication", href: servicePath("key-duplication") },
] as const;

const headingClass = "text-xs uppercase tracking-[0.18em] text-gold";
const linkClass = "text-sm text-white/65 transition-colors hover:text-gold";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="mx-auto max-w-container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
          <div>
            <Logo variant="footer" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Professional residential, commercial, and automotive locksmith services serving
              Vallejo, Napa, and surrounding Northern California communities.
            </p>
          </div>

          <div>
            <h3 className={headingClass}>Services</h3>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={CONTACT_HREF} className={linkClass}>
                  Request Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Service Areas</h3>
            <ul className="mt-4 space-y-2.5">
              {areas.map((area) => (
                <li key={area.slug} className="text-sm">
                  <Link href={areaPath(area.slug)} className={linkClass}>
                    {areaLabel(area)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={phoneHref}
                  className="flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" /> {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={emailHref}
                  className="flex items-center gap-2.5 break-all text-sm text-white/80 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" /> {business.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {business.streetAddress}, {business.addressRegion}
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/80">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{business.hoursLabel}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs text-white/50">
            © <CurrentYear /> <BusinessName />. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Locksmith services for residential, commercial &amp; automotive customers in Northern
            California.
          </p>
          <p className="text-xs text-white/50">
            Built by{" "}
            <a
              href="https://upscalers.us"
              target="_blank"
              rel="noopener"
              className="font-semibold text-white/70 transition-colors hover:text-gold"
            >
              Upscalers
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
