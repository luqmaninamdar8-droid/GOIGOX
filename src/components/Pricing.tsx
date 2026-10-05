import { Check } from "lucide-react";
import { Container, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { pricing } from "@/lib/data";
import { cn } from "@/lib/cn";
import { waBookPrefix, waUrl } from "@/lib/whatsapp";

export function Pricing({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="pricing" className={cn(hideHeading ? "pb-20 pt-10 sm:pb-28 sm:pt-12" : "py-20 sm:py-28")}>
      <Container>
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="Transparent pricing"
            title="No surprises. No haggling."
            description="Just honest per-kilometre rates you can count on. Minimum charges apply; night and outstation trips may vary."
          />
        )}

        <div className={hideHeading ? "grid gap-6 lg:grid-cols-3" : "mt-14 grid gap-6 lg:grid-cols-3"}>
          {pricing.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-[1.85rem] p-8",
                plan.popular
                  ? "bg-ocean text-white shadow-2xl shadow-ocean/30"
                  : "bg-white text-ink ring-1 ring-ink/5 shadow-[var(--shadow-card)]",
              )}
            >
              {plan.popular ? (
                <span className="absolute -top-3 right-8 rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-wide text-ocean uppercase">
                  Popular
                </span>
              ) : null}
              <h3 className="font-display text-3xl">{plan.name}</h3>
              <p className="mt-4 font-display text-5xl">
                ₹{plan.rate}
                <span
                  className={cn(
                    "ml-2 font-sans text-base font-medium",
                    plan.popular ? "text-white/60" : "text-muted",
                  )}
                >
                  per km (round trip)
                </span>
              </p>
              <ul className="mt-8 grid flex-1 gap-3">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm">
                    <Check className={cn("h-4 w-4", plan.popular ? "text-gold" : "text-teal")} />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={waUrl(`${waBookPrefix()} I would like to book a ${plan.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5",
                  plan.popular ? "bg-gold text-ocean hover:bg-gold-2" : "bg-ocean text-white hover:bg-ocean-2",
                )}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Book {plan.name}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Minimum charges apply. Rates may vary for outstation and night trips. Contact us for detailed pricing.
        </p>
      </Container>
    </section>
  );
}
