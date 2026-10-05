import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui";
import { site } from "@/lib/site";
import { defaultWaMessage, waUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <>
      <a
        href={waUrl(defaultWaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-5 bottom-24 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 lg:bottom-7"
      >
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-sand/95 p-3 backdrop-blur-xl lg:hidden">
        <a
          href={`tel:${site.phoneTel}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ocean py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" />
          Call us
        </a>
        <a
          href={waUrl(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-semibold text-ocean"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
