import { credentials, trustHeadline, trustSummary } from "@/content/trust";

/**
 * Full credentials band (Licensed / Bonded / Insured + "Your Security. Our Responsibility.").
 * Rendered at the bottom of every page hero. Three columns at every width: icons stack above
 * the text on phones and sit beside it from `sm`; the headline moves to the right from `lg`.
 */
export function TrustBand() {
  return (
    <div className="relative z-10 border-t border-white/10 bg-ink-800">
      <div className="mx-auto grid max-w-container gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:px-8 lg:py-9">
        <ul className="grid grid-cols-3 gap-3 sm:gap-6" aria-label={trustSummary}>
          {credentials.map(({ icon: Icon, title, detail }) => (
            <li
              key={title}
              className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:items-start sm:gap-3.5 sm:text-left"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/40 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-gold sm:h-6 sm:w-6" />
              </span>
              <span>
                <span className="block text-sm font-bold text-white sm:text-base">{title}</span>
                <span className="mt-0.5 block text-[11px] leading-snug text-white/60 sm:text-sm">
                  {detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
        <div className="border-t border-white/10 pt-6 text-center lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:text-left">
          <p className="text-lg font-extrabold leading-tight text-white sm:text-xl">
            {trustHeadline.lead} <span className="text-gold">{trustHeadline.accent}</span>
          </p>
          <p className="mt-1.5 text-sm text-white/65">{trustSummary}</p>
        </div>
      </div>
    </div>
  );
}

/** Compact "Licensed · Bonded · Insured" pills for dark sections (CTA band, contact card, footer). */
export function TrustPills({ className = "" }: { className?: string }) {
  return (
    <ul aria-label={trustSummary} className={`flex flex-wrap items-center gap-2 ${className}`}>
      {credentials.map(({ icon: Icon, title }) => (
        <li
          key={title}
          className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90"
        >
          <Icon className="h-3.5 w-3.5 text-gold" />
          {title}
        </li>
      ))}
    </ul>
  );
}
