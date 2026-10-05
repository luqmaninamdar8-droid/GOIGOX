import Image from "next/image";
import { Clock, Plane, Shield, Sparkles } from "lucide-react";
import { Container, WhatsAppIcon } from "@/components/ui";
import { images, marqueePlaces } from "@/lib/data";
import { site } from "@/lib/site";
import { defaultWaMessage, waUrl } from "@/lib/whatsapp";
import { HeroBooking } from "@/components/HeroBooking";

const stats = [
  { value: "180+", label: "Happy travellers" },
  { value: "24/7", label: "Always available" },
  { value: "2", label: "Airport pickups" },
  { value: "100%", label: "Verified drivers" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ocean">
      <Image
        src={images.hero}
        alt="Palolem beach in South Goa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,36,0.88)_0%,rgba(7,27,36,0.62)_48%,rgba(7,27,36,0.28)_100%)]" />
      <div className="absolute inset-0 grain opacity-[0.18] mix-blend-overlay" />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-28 lg:justify-center lg:pb-28 lg:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.85fr] lg:items-start lg:gap-x-10 xl:gap-x-14">
          <div className="max-w-xl lg:pt-2 xl:max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              {site.name} · GOI & GOX
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-white text-balance sm:text-5xl lg:text-6xl">
              Ride Goa the easy way —{" "}
              <span className="text-gold">honest fares</span>, beautiful roads.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Airport pickups, beach hops, and outstation trips with verified drivers.
              Book in a minute on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waUrl(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ocean shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-gold-2"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href="#pages"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/16"
              >
                Explore pages
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/16"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-gold sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 hidden flex-wrap gap-2 lg:flex">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
                <Plane className="h-3.5 w-3.5 text-gold" /> Dabolim & Mopa
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
                <Shield className="h-3.5 w-3.5 text-gold" /> Police-verified
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
                <Clock className="h-3.5 w-3.5 text-gold" /> Night rides welcome
              </span>
            </div>
          </div>

          <div className="relative z-20 w-full lg:-mt-4 lg:translate-y-[-1.25rem] xl:-mt-8 xl:translate-y-[-2rem]">
            <HeroBooking />
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-white/10 bg-ocean/55 backdrop-blur-md">
        <div className="overflow-hidden py-3.5 whitespace-nowrap">
          <div className="animate-marquee flex w-max gap-10">
            {[...marqueePlaces, ...marqueePlaces].map((place, i) => (
              <span key={`${place}-${i}`} className="text-sm tracking-[0.18em] text-white/70 uppercase">
                {place}
                <span className="ml-10 text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-6 bottom-32 flex flex-col gap-2 lg:hidden">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
          <Plane className="h-3.5 w-3.5 text-gold" /> Dabolim & Mopa
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
          <Shield className="h-3.5 w-3.5 text-gold" /> Police-verified
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
          <Clock className="h-3.5 w-3.5 text-gold" /> Night rides welcome
        </span>
      </div>
    </section>
  );
}
