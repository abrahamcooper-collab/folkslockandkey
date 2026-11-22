import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type ServiceCard = {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly href: string;
};

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
          {cards.map(({ icon: Icon, title: cardTitle, description, href }) => (
            <article
              key={href}
              className="group relative flex flex-col rounded-xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-cardhover"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-ink-900 text-gold ring-1 ring-gold/20 transition-colors group-hover:bg-gold group-hover:text-ink-900">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-ink-900">{cardTitle}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-body">{description}</p>
              <Link
                href={href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-gold-600 transition-colors hover:text-ink-900"
              >
                Learn More
                <span className="sr-only"> about {cardTitle}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
