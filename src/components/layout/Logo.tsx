import Image from "next/image";
import Link from "next/link";
import { business } from "@/content/business";
import { BusinessName } from "@/components/ui/BusinessName";
import logoMark from "@/assets/brand/logo-mark.png";
import logoWordmark from "@/assets/brand/logo-wordmark.png";

const sizes = {
  // Widths are the rendered CSS widths (height × aspect) so next/image serves 1x/2x, not 950px.
  header: {
    mark: "h-10 w-auto",
    markWidth: 40,
    wordmark: "h-8 w-auto",
    wordmarkWidth: 113,
    gap: "gap-3",
    divider: "h-9",
  },
  footer: {
    mark: "h-16 w-auto",
    markWidth: 63,
    wordmark: "h-11 w-auto",
    wordmarkWidth: 156,
    gap: "gap-4",
    divider: "h-14",
  },
} as const;

/**
 * The client's logo, split at its gold divider (as in the original artwork) into the shield mark
 * and the "Folks Lock & Key" wordmark. The mark links home; the wordmark is the business name,
 * so it links to the GMB profile (client rule). The PNGs are transparent cut-outs of the client's
 * logo (original in /client-photos-original/logo.png).
 */
export function Logo({ variant = "header" }: { variant?: keyof typeof sizes }) {
  const size = sizes[variant];
  return (
    <div className="flex shrink-0 flex-col">
      <div className={`flex shrink-0 items-center ${size.gap}`}>
        <Link
          href="/"
          aria-label={`${business.name} home`}
          className="transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={logoMark}
            alt=""
            width={size.markWidth}
            priority={variant === "header"}
            className={size.mark}
          />
        </Link>
        <span aria-hidden="true" className={`w-px bg-gold/60 ${size.divider}`} />
        <BusinessName plain>
          <Image
            src={logoWordmark}
            alt={business.name}
            width={size.wordmarkWidth}
            priority={variant === "header"}
            className={`${size.wordmark} transition-opacity duration-300 hover:opacity-85`}
          />
        </BusinessName>
      </div>
      {variant === "footer" && (
        <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-white/60">
          {business.slogan}
        </p>
      )}
    </div>
  );
}
