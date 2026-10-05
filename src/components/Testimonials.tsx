import { Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Testimonials({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="reviews" className={cn("bg-sand-2/50", hideHeading ? "pb-20 pt-10 sm:pb-28 sm:pt-12" : "py-20 sm:py-28")}>
      <Container>
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="Traveller stories"
            title="What our guests say"
            description="On-time pickups, clean cars, and fares that feel fair — here’s how the ride lands."
          />
        )}
        <div className={hideHeading ? "grid gap-5 lg:grid-cols-3" : "mt-14 grid gap-5 lg:grid-cols-3"}>
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-[1.75rem] bg-white p-7 shadow-[var(--shadow-card)] ring-1 ring-ink/5"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink/80">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ocean font-display text-lg text-gold">
                  {item.name[0]}
                </span>
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-muted">{item.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
