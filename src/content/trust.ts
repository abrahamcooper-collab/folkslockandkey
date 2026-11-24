/**
 * The client's licensed / bonded / insured claim (owner-supplied, see business-info.md). Shown as
 * a band under every page hero and as compact badges in the CTA band, contact card and footer.
 */
import { BadgeCheck, CircleCheck, ShieldCheck, type LucideIcon } from "lucide-react";

export type Credential = {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly detail: string;
};

export const credentials: readonly Credential[] = [
  { icon: BadgeCheck, title: "Licensed", detail: "Professional locksmith service" },
  { icon: CircleCheck, title: "Bonded", detail: "Added customer assurance" },
  { icon: ShieldCheck, title: "Insured", detail: "Business coverage" },
];

export const trustHeadline = { lead: "Your Security.", accent: "Our Responsibility." } as const;

export const trustSummary = "Licensed, Bonded & Insured Locksmith Services";
