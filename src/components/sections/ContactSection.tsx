"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  Building2,
  Car,
  CircleAlert,
  CircleCheck,
  Clock,
  House,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { business, emailHref, phoneHref } from "@/content/business";
import { categories, servicesInCategory } from "@/content/services";
import { PRESELECT_CATEGORY_EVENT } from "@/lib/service-request";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Template "Request Locksmith Service" section. Like the template, submitting validates the form
 * and opens a pre-filled email to the business (no server or third-party form service).
 */

const OTHER_CATEGORY = "Other Locksmith Services";
const CONTACT_METHODS = ["Phone", "Email", "Either"] as const;
const MIN_PHONE_DIGITS = 7;
const OPENED_NOTICE_DELAY_MS = 1200;

const quickCategories = [
  { label: "Residential Locksmith", icon: House, category: "Residential Locksmith Service" },
  { label: "Commercial Locksmith", icon: Building2, category: "Commercial Locksmith Service" },
  { label: "Automotive Lockout", icon: Car, category: "Automotive Locksmith Service" },
] as const;

type FormValues = {
  fullName: string;
  phone: string;
  serviceCategory: string;
  serviceLocation: string;
  description: string;
  email: string;
  contactMethod: string;
  additionalDetails: string;
};
type Field = keyof FormValues;
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "opened";

const emptyValues: FormValues = {
  fullName: "",
  phone: "",
  serviceCategory: "",
  serviceLocation: "",
  description: "",
  email: "",
  contactMethod: "",
  additionalDetails: "",
};

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (values.phone.replace(/\D/g, "").length < MIN_PHONE_DIGITS)
    errors.phone = "Please enter a valid phone number.";
  if (!values.serviceCategory) errors.serviceCategory = "Please select a service category.";
  if (!values.serviceLocation.trim())
    errors.serviceLocation = "Please enter your service location or city.";
  if (!values.description.trim()) errors.description = "Please briefly describe the issue.";
  return errors;
}

function buildMailto(values: FormValues): string {
  const subject = `Locksmith Service Request - ${values.serviceCategory}`;
  const body = [
    `Service Request from ${values.fullName}`,
    "",
    `Service Category: ${values.serviceCategory}`,
    `Service Location / City: ${values.serviceLocation}`,
    `Phone: ${values.phone}`,
    values.email.trim() ? `Email: ${values.email}` : null,
    values.contactMethod ? `Preferred Contact Method: ${values.contactMethod}` : null,
    "",
    "Issue Description:",
    values.description,
    values.additionalDetails.trim() ? `Additional Details: ${values.additionalDetails}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");
  return `${emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function inputClass(hasError: boolean): string {
  return `w-full rounded-md border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-body/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-gold/40 ${
    hasError ? "border-red-400 focus:ring-red-200" : "border-line focus:border-gold/60"
  }`;
}

const labelClass = "mb-1.5 block text-sm font-semibold text-ink-900";

function Required() {
  return <span className="text-gold-600">*</span>;
}

function Optional() {
  return <span className="text-xs font-medium text-body/50">(optional)</span>;
}

function FieldError({ field, message }: { field: Field; message?: string }) {
  if (!message) return null;
  return (
    <p id={`err-${field}`} className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
      <CircleAlert className="h-3.5 w-3.5" />
      {message}
    </p>
  );
}

export function ContactSection({ defaultCategory = "" }: { defaultCategory?: string }) {
  const [values, setValues] = useState<FormValues>({ ...emptyValues, serviceCategory: defaultCategory });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const onPreselect = (event: Event) => {
      const category = (event as CustomEvent<string>).detail;
      if (!category) return;
      setValues((current) => ({ ...current, serviceCategory: category }));
      setStatus("idle");
      setErrors({});
    };
    window.addEventListener(PRESELECT_CATEGORY_EVENT, onPreselect);
    return () => window.removeEventListener(PRESELECT_CATEGORY_EVENT, onPreselect);
  }, []);

  useEffect(() => {
    if (status !== "submitting") return;
    const timer = window.setTimeout(() => setStatus("opened"), OPENED_NOTICE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [status]);

  const update = (field: Field, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setStatus("submitting");
    window.location.href = buildMailto(values);
  };

  const fieldProps = (field: Field) => ({
    id: field,
    className: inputClass(Boolean(errors[field])),
    value: values[field],
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `err-${field}` : undefined,
  });

  return (
    <section id="contact" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Request Service"
          title="Request Locksmith Service"
          intro="Tell us a little about what you need, and our team can follow up to discuss the next steps."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="rounded-2xl border border-line bg-cream/40 p-6 sm:p-8">
            {status === "opened" && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3.5"
              >
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <div className="text-sm leading-relaxed text-ink-900">
                  <p className="font-bold">Your email application should now be open.</p>
                  <p className="mt-1 text-body">
                    A pre-filled message to {business.email} has been prepared. Review it and press
                    send to complete your request. If your email app didn&apos;t open, use the
                    contact details on the right.
                  </p>
                </div>
              </div>
            )}
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name <Required />
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    {...fieldProps("fullName")}
                    onChange={(e) => update("fullName", e.target.value)}
                  />
                  <FieldError field="fullName" message={errors.fullName} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <Required />
                  </label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    {...fieldProps("phone")}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  <FieldError field="phone" message={errors.phone} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="serviceCategory" className={labelClass}>
                    Service Category <Required />
                  </label>
                  <select
                    {...fieldProps("serviceCategory")}
                    onChange={(e) => update("serviceCategory", e.target.value)}
                  >
                    <option value="">Select a service…</option>
                    {categories.map((category) => (
                      <optgroup key={category.slug} label={category.name}>
                        {servicesInCategory(category.slug).map((service) => (
                          <option key={service.slug} value={service.name}>
                            {service.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value={OTHER_CATEGORY}>{OTHER_CATEGORY}</option>
                  </select>
                  <FieldError field="serviceCategory" message={errors.serviceCategory} />
                </div>
                <div>
                  <label htmlFor="serviceLocation" className={labelClass}>
                    Service Location / City <Required />
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vallejo, CA"
                    {...fieldProps("serviceLocation")}
                    onChange={(e) => update("serviceLocation", e.target.value)}
                  />
                  <FieldError field="serviceLocation" message={errors.serviceLocation} />
                </div>
              </div>

              <div>
                <label htmlFor="description" className={labelClass}>
                  Brief Description of the Issue <Required />
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe the lock, key, property, vehicle, or access issue..."
                  {...fieldProps("description")}
                  onChange={(e) => update("description", e.target.value)}
                />
                <FieldError field="description" message={errors.description} />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <Optional />
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    {...fieldProps("email")}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="contactMethod" className={labelClass}>
                    Preferred Contact Method <Optional />
                  </label>
                  <select
                    {...fieldProps("contactMethod")}
                    onChange={(e) => update("contactMethod", e.target.value)}
                  >
                    <option value="">No preference</option>
                    {CONTACT_METHODS.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="additionalDetails" className={labelClass}>
                  Additional Details <Optional />
                </label>
                <textarea
                  rows={3}
                  placeholder="Anything else that may be helpful for our team to know..."
                  {...fieldProps("additionalDetails")}
                  onChange={(e) => update("additionalDetails", e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-ink-900 shadow-xs transition-all hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Preparing your request…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Service Request
                  </>
                )}
              </button>
              <p className="text-xs text-body/70">
                Submitting this form opens a pre-filled email to {business.email}. Sending the email
                completes your request; no message is sent automatically.
              </p>
            </form>
          </div>

          <aside className="relative overflow-hidden rounded-2xl bg-ink-900 p-7 text-white sm:p-8">
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold/10 blur-2xl" />
            <h3 className="text-xl font-bold text-white">Let&apos;s Talk About Your Locksmith Needs</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Reach out by phone or email and our team will follow up to discuss your service and
              availability.
            </p>
            <div className="mt-7 space-y-3">
              <ContactCard href={phoneHref} icon={Phone} label="Call us" value={business.phone} />
              <ContactCard href={emailHref} icon={Mail} label="Email us" value={business.email} />
              <ContactCard
                icon={MapPin}
                label="Address"
                value={`${business.streetAddress}, ${business.addressRegion}`}
              />
              <ContactCard icon={Clock} label="Hours" value={business.hoursLabel} />
            </div>
            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-gold">Service Categories</p>
              <ul className="mt-3 grid gap-2">
                {quickCategories.map(({ label, icon: Icon, category }) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => update("serviceCategory", category)}
                      className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-sm font-semibold text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
                    >
                      <Icon className="h-4 w-4 text-gold" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
}: {
  href?: string;
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold text-ink-900">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wide text-white/50">{label}</span>
        <span className="block break-words text-base font-bold text-white">{value}</span>
      </span>
    </>
  );
  const base = "flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5";
  return href ? (
    <a href={href} className={`${base} transition-colors hover:border-gold/40 hover:bg-white/[0.06]`}>
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  );
}
