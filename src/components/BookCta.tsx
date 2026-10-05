import Link from "next/link";
import { Container, WhatsAppIcon } from "@/components/ui";
import { site } from "@/lib/site";
import { defaultWaMessage, waUrl } from "@/lib/whatsapp";

export function BookCta() {
  return (
    <section className="bg-ocean py-16 text-white sm:py-20">
      <Container className="text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
          Ready when you are
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-balance sm:text-4xl">
          Book your Goa ride in a minute
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-white/70">
          Instant confirmation on WhatsApp — airport, beaches, or outstation.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ocean hover:bg-gold-2"
          >
            Book now
          </Link>
          <a
            href={waUrl(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </Container>
    </section>
  );
}
