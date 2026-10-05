import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";
import { mainPages } from "@/lib/main-pages";

export function HomeExplore() {
  return (
    <section id="pages" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal">
            Separate pages
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Pick a page. Each one is its own URL.
          </h2>
          <p className="mt-3 text-muted">
            Services, fleet, pricing, routes, Goa guide, and FAQ — open any card for the full page.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mainPages.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative isolate min-h-52 overflow-hidden rounded-[1.6rem]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean via-ocean/40 to-ocean/10" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl text-white">{card.title}</h3>
                <p className="mt-1 text-sm text-white/70">{card.subtitle}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Open page <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
