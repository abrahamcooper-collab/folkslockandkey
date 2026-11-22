import { Phone, Send } from "lucide-react";
import { phoneHref } from "@/content/business";
import { CONTACT_HREF } from "@/content/navigation";

/** Sticky call / request bar shown below the lg breakpoint (template). */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-900/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-2 gap-px">
        <a
          href={phoneHref}
          className="flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/5"
        >
          <Phone className="h-4 w-4 text-gold" />
          Call Now
        </a>
        <a
          href={CONTACT_HREF}
          className="flex items-center justify-center gap-2 bg-gold px-4 py-3.5 text-sm font-bold text-ink-900 transition-colors hover:bg-gold-400"
        >
          <Send className="h-4 w-4" />
          Request Service
        </a>
      </div>
    </div>
  );
}
