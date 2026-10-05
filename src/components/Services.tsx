import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { extraServices, services } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Services({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="services" className={cn("relative", hideHeading ? "pb-20 pt-10 sm:pb-28 sm:pt-12" : "py-20 sm:py-28")}>
      <Container>
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="What we do"
            title="From the runway to the shoreline"
            description="Airport rides, full-day tours, and outstation trips — all your Goa transport, covered at honest prices."
          />
        )}

        <div className={hideHeading ? "grid gap-6 lg:grid-cols-3" : "mt-14 grid gap-6 lg:grid-cols-3"}>
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-ink/5"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/70 to-transparent" />
                <h3 className="absolute bottom-4 left-5 font-display text-2xl text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted">{service.text}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/70">{service.long}</p>
                <ul className="mt-5 grid gap-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-ink">
                      <Check className="h-4 w-4 text-teal" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ocean-2 hover:text-teal"
                >
                  Open {service.title} page <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {extraServices.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink/80"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
