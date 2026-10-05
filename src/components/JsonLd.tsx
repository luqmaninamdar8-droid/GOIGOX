import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: site.name,
    alternateName: site.alternateName,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    image: `${site.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Panaji",
      addressRegion: "Goa",
      addressCountry: "IN",
    },
    areaServed: ["Goa", "Dabolim Airport", "Mopa Airport", "North Goa", "South Goa"],
    openingHours: "Mo-Su 00:00-23:59",
    priceRange: "₹₹",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
