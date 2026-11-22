"use client";

import type { ReactNode } from "react";
import { preselectCategory } from "@/lib/service-request";

/** A link to the page's contact form that also preselects a service category, if given. */
export function RequestServiceLink({
  category,
  className,
  children,
}: {
  category?: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a href="#contact" onClick={category ? () => preselectCategory(category) : undefined} className={className}>
      {children}
    </a>
  );
}
