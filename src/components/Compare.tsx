import { Check, Shield, Sparkles, Wind } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { compare } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Compare() {
  return (
    <section className="bg-sand-2/60 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Compare"
          title="Not sure which car to book?"
          description="A quick side-by-side look so you can pick the right ride for your group, bags, and budget."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {compare.map((item) => (
            <article
              key={item.name}
              className={cn(
                "relative rounded-[1.75rem] bg-white p-6 shadow-[var(--shadow-card)] ring-1 ring-ink/5",
                item.popular && "ring-2 ring-gold",
              )}
            >
              {item.popular ? (
                <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold tracking-wide text-ocean uppercase">
                  {item.badge}
                </span>
              ) : (
                <span className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                  {item.badge}
                </span>
              )}
              <h3 className="mt-4 font-display text-2xl text-ink">{item.name}</h3>
              <p className="mt-2 font-display text-3xl text-ocean">
                ₹{item.rate}
                <span className="ml-1 text-base font-sans text-muted">/km</span>
              </p>
              <ul className="mt-5 grid gap-2.5 text-sm text-ink/80">
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-teal" />
                  {item.passengers}
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-teal" />
                  {item.luggage}
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-teal" />
                  Air conditioning
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-teal" />
                  Music system
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 text-teal" />
                  Best for {item.bestFor.toLowerCase()}
                </li>
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Shield, title: "All insured", text: "Full insurance coverage on every vehicle" },
            { icon: Sparkles, title: "Well maintained", text: "Regular servicing and quality checks" },
            { icon: Wind, title: "Sanitized", text: "Thoroughly cleaned before every trip" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4">
              <item.icon className="mt-0.5 h-5 w-5 text-teal" />
              <div>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
