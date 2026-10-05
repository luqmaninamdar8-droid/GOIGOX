"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/cn";
import { defaultWaMessage, waUrl } from "@/lib/whatsapp";

export function FAQ({ hideHeading = false }: { hideHeading?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={cn(hideHeading ? "pb-20 pt-10 sm:pb-28 sm:pt-12" : "py-20 sm:py-28")}>
      <Container>
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered plainly"
            description="Everything you need to know before you hop in — booking, night fares, airports, and cancellations."
          />
        )}

        <div className={cn("mx-auto max-w-3xl divide-y divide-ink/10 rounded-[1.75rem] bg-white ring-1 ring-ink/5", hideHeading ? "" : "mt-12")}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-5 sm:px-7">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-teal transition",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-muted">
                    <span className="block pb-5">{item.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[1.5rem] bg-ocean px-6 py-6 text-center text-white">
          <p className="font-display text-2xl">Still have questions?</p>
          <a
            href={waUrl(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ocean hover:bg-gold-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat with us on WhatsApp
          </a>
        </div>
      </Container>
    </section>
  );
}
