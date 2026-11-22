/** Helpers for content copy that contains the {business} token (see <RichText>). */
import { business } from "@/content/business";

export const BUSINESS_TOKEN = "{business}";

/** Plain-text version of content copy, for metadata and schema where links can't exist. */
export function plainText(text: string): string {
  return text.replaceAll(BUSINESS_TOKEN, business.name);
}
