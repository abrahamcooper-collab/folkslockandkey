import { ClipboardCheck, MessagesSquare, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "Contact Our Team",
    body: "Call us or submit the service form with a brief description of your locksmith needs.",
  },
  {
    icon: MessagesSquare,
    num: "02",
    title: "Discuss the Details",
    body: "We'll review the information you provide and discuss the service requirements, location, and availability.",
  },
  {
    icon: ClipboardCheck,
    num: "03",
    title: "Determine the Next Steps",
    body: "Once the service requirements and arrangements are confirmed, proceed according to the agreed plan.",
  },
] as const;

/** Template three-step "How It Works" section. */
export function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How It Works" title="Getting the Help You Need Is Simple" />
        <div className="relative mt-14">
          <div className="gold-divider absolute left-[16%] right-[16%] top-[42px] hidden h-px opacity-40 lg:block" />
          <ol className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map(({ icon: Icon, num, title, body }) => (
              <li key={num} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-ink-900 ring-4 ring-cream">
                  <Icon className="h-8 w-8 text-gold" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[11px] font-extrabold text-ink-900 ring-2 ring-white">
                    {num}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-body">{body}</p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-10 text-center text-xs text-body/70">
          Submitting a form is an inquiry. It does not automatically confirm a booking or guarantee
          immediate service.
        </p>
      </div>
    </section>
  );
}
