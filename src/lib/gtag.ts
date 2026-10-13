import { site } from "./site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const conversionSendTo = `${site.googleAdsId}/${site.googleAdsConversionLabel}`;

export function trackWhatsAppConversion() {
  const w = window;
  if (typeof w.gtag === "function") {
    w.gtag("event", "conversion", { send_to: conversionSendTo });
  } else {
    // gtag.js may not have loaded yet (afterInteractive) — queue the hit
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(["event", "conversion", { send_to: conversionSendTo }]);
  }
}
