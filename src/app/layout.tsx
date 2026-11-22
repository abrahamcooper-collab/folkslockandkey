import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { business } from "@/content/business";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const description =
  "Need a locksmith in Vallejo, Napa, or nearby California communities? Contact Folks Lock & Key for residential, commercial, automotive, lockout, and key services.";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "Locksmith in Vallejo, CA | Folks Lock & Key",
    template: "%s | Folks Lock & Key",
  },
  description,
  openGraph: {
    type: "website",
    siteName: business.name,
    title: "Folks Lock & Key | Professional Locksmith in Vallejo, CA",
    description:
      "Residential, commercial, and automotive locksmith services serving Vallejo, Napa, Fairfield, and surrounding Northern California communities.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <JsonLd data={localBusinessSchema()} />
        <div className="min-h-screen bg-cream pb-14 lg:pb-0">
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileCallBar />
        </div>
      </body>
    </html>
  );
}
