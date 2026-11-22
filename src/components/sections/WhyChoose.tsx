import { LayoutGrid, MapPin, MessageSquare, Send } from "lucide-react";
import { BusinessName } from "@/components/ui/BusinessName";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    icon: LayoutGrid,
    title: "Multiple Service Categories",
    body: "Residential, commercial, and automotive locksmith assistance.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    body: "Discuss the reported issue, service requirements, and next steps before proceeding.",
  },
  {
    icon: Send,
    title: "Convenient Service Inquiries",
    body: "Call us 24 hours a day or submit a service request online.",
  },
  {
    icon: MapPin,
    title: "Regional Service Coverage",
    body: "Serving Vallejo, Napa, Fairfield, and surrounding communities.",
  },
] as const;

/** Template dark "Why Choose" section with four numbered cards. */
export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-ink-800 py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #C6A15B 0, transparent 40%)" }}
      />
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow={
            <>
              Why Choose <BusinessName />
            </>
          }
          title="Professional Service. A Better Locksmith Experience."
          intro="Choosing a locksmith means trusting someone with access to your property or vehicle. Our goal is to provide a professional, clear, and helpful service experience from the first conversation."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, body }, index) => (
            <div
              key={title}
              className="relative rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold/30 hover:bg-white/[0.05]"
            >
              <span className="absolute left-6 top-0 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-xs font-extrabold text-ink-900 ring-4 ring-ink-800">
                {index + 1}
              </span>
              <Icon className="h-7 w-7 text-gold" />
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
