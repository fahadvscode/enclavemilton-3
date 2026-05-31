import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Providers } from "@/components/Providers";
import { SITE_URL } from "@/lib/floor-plans";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Enclave Milton | New Townhomes in Milton, ON",
    template: "%s | The Enclave Milton",
  },
  description:
    "The Enclave by Sundial Homes — freehold townhomes in southeast Milton with no monthly maintenance fees. Village back-to-back and Park traditional designs from 953 to 2,843 sq ft. From $599,990.",
  openGraph: {
    siteName: "The Enclave Milton",
    locale: "en_CA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
