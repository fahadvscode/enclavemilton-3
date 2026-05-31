import type { MetadataRoute } from "next";
import { getAllModels, SITE_URL } from "@/lib/floor-plans";

export default function sitemap(): MetadataRoute.Sitemap {
  const models = getAllModels();
  const now = new Date();

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/floor-plans`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...models.map((m) => ({
      url: `${SITE_URL}/floor-plans/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
