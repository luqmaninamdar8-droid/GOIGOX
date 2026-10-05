"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Navigation } from "lucide-react";
import { Container, SectionHeading, WhatsAppIcon } from "@/components/ui";
import { rates, routes } from "@/lib/data";
import { waBookPrefix, waUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

const vehicles = [
  { id: "hatchback", label: "Hatchback", rate: rates.hatchback },
  { id: "sedan", label: "Sedan", rate: rates.sedan },
  { id: "suv", label: "SUV", rate: rates.suv },
  { id: "traveller", label: "Tempo Traveller", rate: rates.traveller },
] as const;

export function Routes({ hideHeading = false }: { hideHeading?: boolean }) {
  const [km, setKm] = useState("50");
  const [vehicle, setVehicle] = useState<(typeof vehicles)[number]["id"]>("sedan");
  const [trip, setTrip] = useState<"1" | "2">("1");

  const fare = useMemo(() => {
    const distance = Number(km);
    if (!Number.isFinite(distance) || distance <= 0) return 0;
    const rate = vehicles.find((v) => v.id === vehicle)?.rate ?? 30;
    return Math.round(distance * rate * Number(trip));
  }, [km, vehicle, trip]);

  const selected = vehicles.find((v) => v.id === vehicle);

  return (
    <section id="routes" className={cn("bg-ocean text-white", hideHeading ? "pb-20 pt-10 sm:pb-28 sm:pt-12" : "py-20 sm:py-28")}>
      <Container>
        {hideHeading ? null : (
          <SectionHeading
            light
            eyebrow="Popular routes"
            title="Fixed fares for the journeys people book most"
            description="No surprises, no haggling. Airport runs, beach hops, and full-day tours with prices you can plan around."
          />
        )}

        <div className={hideHeading ? "grid gap-5 md:grid-cols-2 xl:grid-cols-3" : "mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"}>
          {routes.map((route) => (
            <article
              key={`${route.from}-${route.to}`}
              className="flex flex-col rounded-[1.6rem] border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-xl">{route.from}</p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-white/55">
                    <ArrowRight className="h-4 w-4 text-gold" />
                    {route.to}
                  </p>
                </div>
                {"tag" in route && route.tag ? (
                  <span className="rounded-full bg-gold/15 px-2.5 py-1 text-xs font-semibold text-gold">
                    {route.tag}
                  </span>
                ) : null}
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-3xl text-gold">₹{route.fare.toLocaleString("en-IN")}</p>
                  <p className="mt-1 text-xs text-white/50">~{route.km} km</p>
                </div>
                <a
                  href={waUrl(
                    `${waBookPrefix()} I would like to book:\n${route.from} → ${route.to}\nFare: ₹${route.fare.toLocaleString("en-IN")}`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ocean hover:bg-gold-2"
                >
                  Book now
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/5 lg:grid-cols-[1fr_0.85fr]">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 text-gold">
              <Navigation className="h-5 w-5" />
              <h3 className="font-display text-2xl text-white">Calculate your fare</h3>
            </div>
            <p className="mt-2 text-sm text-white/60">
              Estimate a trip in seconds. Actual fare may vary with route and traffic.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Distance (km)
                </span>
                <input
                  type="number"
                  min={1}
                  value={km}
                  onChange={(e) => setKm(e.target.value)}
                  className="rounded-2xl border border-white/10 bg-ocean px-4 py-3 text-sm text-white outline-none focus:border-gold"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Vehicle
                </span>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value as (typeof vehicles)[number]["id"])}
                  className="rounded-2xl border border-white/10 bg-ocean px-4 py-3 text-sm text-white outline-none focus:border-gold"
                >
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.label} (₹{v.rate}/km)
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Trip type
                </span>
                <select
                  value={trip}
                  onChange={(e) => setTrip(e.target.value as "1" | "2")}
                  className="rounded-2xl border border-white/10 bg-ocean px-4 py-3 text-sm text-white outline-none focus:border-gold"
                >
                  <option value="1">One way</option>
                  <option value="2">Round trip</option>
                </select>
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-gold p-6 text-ocean sm:p-8">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] uppercase">Estimated fare</p>
              <p className="mt-2 font-display text-5xl">₹{fare.toLocaleString("en-IN")}</p>
              <p className="mt-2 text-sm text-ocean/70">
                {selected?.label} • {trip === "2" ? "Round trip" : "One way"}
              </p>
            </div>
            <a
              href={waUrl(
                `${waBookPrefix()} Fare estimate request:\nDistance: ${km} km\nVehicle: ${selected?.label}\nTrip: ${trip === "2" ? "Round trip" : "One way"}\nEstimated fare: ₹${fare.toLocaleString("en-IN")}`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ocean px-5 py-3.5 text-sm font-semibold text-white hover:bg-ocean-2"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Proceed to booking
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
