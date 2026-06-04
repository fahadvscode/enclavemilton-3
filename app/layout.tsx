import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import TopNav from "@/components/TopNav";
import SiteFooter from "@/components/SiteFooter";
import MobileStickyCta from "@/components/MobileStickyCta";
import { buildMetadata, defaultDescription } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    pageTitle: "Now Selling",
    description: defaultDescription,
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body>
        <TopNav />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
