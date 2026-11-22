import { Fragment, type ReactNode } from "react";
import { business } from "@/content/business";
import { BUSINESS_TOKEN } from "@/lib/copy";

const linkClass = "underline-offset-4 decoration-1 hover:underline";

/**
 * The business name as a link to its Google Business Profile. Client rule: every visible mention
 * of the business name links to the GMB, so never render `business.name` as plain text.
 */
export function BusinessName({
  className = "",
  children = business.name,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={business.gmbUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${linkClass} ${className}`}
    >
      {children}
    </a>
  );
}

/** Renders copy from src/content, replacing each {business} token with <BusinessName />. */
export function RichText({ text }: { text: string }) {
  return text.split(BUSINESS_TOKEN).map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <BusinessName />}
      {part}
    </Fragment>
  ));
}
