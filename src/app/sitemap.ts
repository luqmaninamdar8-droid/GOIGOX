import type { MetadataRoute } from "next";
import { services } from "@/lib/data";
import { pages, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const main = pages.map((page) => ({
    url: `${site.url}${page.href === "/" ? "" : page.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.href === "/" ? 1 : 0.8,
  }));

  const extras = services.map((service) => ({
    url: `${site.url}${service.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...main, ...extras];
}
