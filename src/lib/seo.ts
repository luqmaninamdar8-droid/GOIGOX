import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta(path: string, title: string, description: string): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
    },
  };
}
