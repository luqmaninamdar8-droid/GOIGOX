"use client";

import { useEffect } from "react";
import { trackWhatsAppConversion } from "@/lib/gtag";

const waHref = /wa\.me\/|api\.whatsapp\.com\/|whatsapp:\/\//;

export function GoogleAdsTracking() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a");
      if (link && waHref.test(link.href)) trackWhatsAppConversion();
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
