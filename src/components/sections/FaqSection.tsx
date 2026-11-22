"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/services";
import { SectionTitle, Eyebrow } from "@/components/ui/SectionHeading";

/** Template FAQ accordion; the first question starts open. */
export function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
}: {
  faqs: readonly Faq[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
        </div>
        <div className="mt-10 grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-btn-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <div
                key={faq.q}
                className={`rounded-xl border bg-white transition-colors ${
                  isOpen ? "border-gold/40 shadow-card" : "border-line"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-bold text-ink-900 sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-body">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
