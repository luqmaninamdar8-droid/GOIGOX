import { images } from "@/lib/data";

/** Home cards + dedicated routes — one source of truth */
export const mainPages = [
  {
    href: "/services",
    title: "Services",
    subtitle: "Airport, sightseeing, outstation",
    heroTitle: "Airport, sightseeing, and outstation.",
    metaTitle: "Taxi Services in Goa",
    metaDescription:
      "Airport transfers, local sightseeing, and outstation trips with GOIGOX Cabs in Goa.",
    image: images.airport,
  },
  {
    href: "/fleet",
    title: "Fleet",
    subtitle: "Sedans, SUVs, Tempo Traveller",
    heroTitle: "Clean cars for every kind of Goa trip.",
    metaTitle: "Taxi Fleet in Goa",
    metaDescription:
      "Sedans, SUVs, hatchbacks, and Tempo Travellers — clean, AC, and sanitized for every Goa trip.",
    image: images.outstation,
  },
  {
    href: "/pricing",
    title: "Pricing",
    subtitle: "From ₹30/km, no hidden fees",
    heroTitle: "Honest fares. No haggling.",
    metaTitle: "Taxi Prices in Goa",
    metaDescription:
      "Transparent per-km rates: hatchback and sedan ₹30, SUV ₹40, Tempo Traveller ₹80. No hidden charges.",
    image: images.pricing,
  },
  {
    href: "/routes",
    title: "Routes",
    subtitle: "Fixed fares across Goa",
    heroTitle: "Popular routes with prices you can plan around.",
    metaTitle: "Goa Taxi Routes & Fares",
    metaDescription:
      "Fixed fares for Dabolim, Mopa, Calangute, Baga, Anjuna, Palolem, and full-day North and South Goa tours.",
    image: images.dabolim,
  },
  {
    href: "/goa",
    title: "Explore Goa",
    subtitle: "Beaches, churches, nightlife",
    heroTitle: "We’ll take you to the best of it.",
    metaTitle: "Explore Goa by Taxi",
    metaDescription:
      "Rides to North and South Goa beaches, Old Goa churches, Dudhsagar, markets, nightlife, and both airports.",
    image: images.hero,
  },
  {
    href: "/faq",
    title: "FAQ",
    subtitle: "Booking, night charges, cancellations",
    heroTitle: "Questions, answered plainly.",
    metaTitle: "Taxi FAQ",
    metaDescription:
      "How to book GOIGOX Cabs, night charges, airport pickup, cancellations, payments, and outstation trips from Goa.",
    image: images.churches,
  },
] as const;

export type MainPageHref = (typeof mainPages)[number]["href"];

export function getMainPage(href: MainPageHref) {
  const page = mainPages.find((p) => p.href === href);
  if (!page) throw new Error(`Unknown main page: ${href}`);
  return page;
}

export function mainPageNeighbors(href: MainPageHref) {
  const i = mainPages.findIndex((p) => p.href === href);
  return {
    prev: i > 0 ? mainPages[i - 1] : null,
    next: i >= 0 && i < mainPages.length - 1 ? mainPages[i + 1] : null,
  };
}
