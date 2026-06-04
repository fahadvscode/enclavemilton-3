import type { Metadata } from "next";
import { IMAGES } from "./images";
import { SITE_NAME, SITE_URL } from "./site";

const TITLE_SUFFIX = "Freehold Townhomes from $599,990";

type PageMeta = {
  path?: string;
  pageTitle: string;
  description: string;
  ogImage?: string;
};

export function buildMetadata({
  path = "",
  pageTitle,
  description,
  ogImage = IMAGES.hero,
}: PageMeta): Metadata {
  const fullTitle = `${SITE_NAME} — ${pageTitle} | ${TITLE_SUFFIX}`;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export const defaultDescription =
  "The Enclave Milton on Britannia Road between James Snow Parkway and Fourth Line — freehold townhomes from $599,990, $0 maintenance, ~3–5 min to Highway 401, Halton schools, now selling for 2027 occupancy.";
