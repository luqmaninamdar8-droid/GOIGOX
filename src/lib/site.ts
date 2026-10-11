export const site = {
  name: "GOIGOX Cabs",
  alternateName: "Irfan Taxi",
  tagline: "GOI & GOX airport taxis · Goa",
  description:
    "GOIGOX Cabs — reliable taxi service in Goa for Dabolim (GOI) and Mopa (GOX) airport transfers, local sightseeing, and outstation trips. Book 24/7 on WhatsApp.",
  phoneDisplay: "+91 98221 64507",
  phoneTel: "+919822164507",
  whatsapp: "919822164507",
  email: "irfanmujavara@gmail.com",
  address: "Panaji, Goa, India",
  url: "https://irfantaxi.in",
  hours: "Open 24 hours",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/pricing", label: "Pricing" },
  { href: "/routes", label: "Routes" },
  { href: "/goa", label: "Explore Goa" },
  { href: "/faq", label: "FAQ" },
] as const;

export const pages = [
  ...nav,
  { href: "/reviews", label: "Reviews" },
  { href: "/book", label: "Book now" },
] as const;
