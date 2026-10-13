import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — GOI & GOX Airport Taxi in Goa`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "GOIGOX Cabs",
    "GOI airport taxi",
    "GOX airport taxi",
    "taxi service in Goa",
    "Dabolim airport taxi",
    "Mopa airport taxi",
    "Goa sightseeing tours",
    "North Goa taxi",
    "South Goa taxi",
    site.alternateName,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — GOI & GOX Airport Taxi in Goa`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — GOI & GOX Airport Taxi in Goa`,
    description: site.description,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand font-sans text-ink">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ocean"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.googleAdsId}');`}
        </Script>
      </body>
    </html>
  );
}
