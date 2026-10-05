import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { destinations } from "@/lib/data";
import { defaultWaMessage, waUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

export function Destinations({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="destinations" className={cn(hideHeading ? "pb-20 pt-10 sm:pb-28 sm:pt-12" : "py-20 sm:py-28")}>
      <Container>
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="Explore Goa"
            title="We’ll take you to the best of it"
            description="From Palolem sunsets to Old Goa churches, beach shacks to spice farms — tell us where, and we drive."
          />
        )}

        <div className={hideHeading ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" : "mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"}>
          {destinations.map((place, i) => (
            <Link
              key={place.title}
              href={place.href}
              className={`group relative isolate overflow-hidden rounded-[1.6rem] ${i === 2 || i === 3 ? "sm:col-span-1 lg:col-span-2 min-h-72" : "min-h-64"}`}
            >
              <Image
                src={place.image}
                alt={place.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean via-ocean/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl text-white">{place.title}</h3>
                <p className="mt-1 text-sm text-white/70">{place.text}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  {place.cta} <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-ocean px-6 py-8 text-center text-white sm:px-10">
          <h3 className="font-display text-3xl">Want a custom tour?</h3>
          <p className="mx-auto mt-3 max-w-xl text-white/70">
            Plan your own route — beaches in the morning, churches in the afternoon, dinner wherever you like.
          </p>
          <a
            href={waUrl(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ocean hover:bg-gold-2"
          >
            Plan a custom tour
          </a>
        </div>
      </Container>
    </section>
  );
}
