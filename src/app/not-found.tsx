import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactSection } from "@/components/sections/ContactSection";

export default function NotFound() {
  return (
    <>
      <section className="bg-ink-900 pt-16">
        <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gold">404</p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Page Not Found</h1>
          <p className="mt-5 leading-relaxed text-white/70">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-ink-900 transition-all hover:bg-gold-400"
            >
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:border-gold/60 hover:text-gold"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
