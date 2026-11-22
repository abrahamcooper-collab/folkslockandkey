import type { ReactNode } from "react";

type Tone = "light" | "dark";

/** Small uppercase label above section titles (template pattern). */
export function Eyebrow({ tone = "light", children }: { tone?: Tone; children: ReactNode }) {
  const color = tone === "dark" ? "text-gold" : "text-gold-600";
  return (
    <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${color}`}>{children}</p>
  );
}

export function SectionTitle({ tone = "light", children }: { tone?: Tone; children: ReactNode }) {
  const color = tone === "dark" ? "text-white" : "text-ink-900";
  return <h2 className={`text-3xl font-extrabold sm:text-4xl ${color}`}>{children}</h2>;
}

/** Centered eyebrow + title + optional intro, as used at the top of most template sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  tone?: Tone;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <SectionTitle tone={tone}>{title}</SectionTitle>
      {intro && (
        <p
          className={`mt-5 leading-relaxed ${tone === "dark" ? "text-white/65" : "text-body"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
