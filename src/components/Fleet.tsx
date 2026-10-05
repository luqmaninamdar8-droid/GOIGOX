"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Users } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";
import { vehicles, type VehicleCategory } from "@/lib/data";
import { cn } from "@/lib/cn";

const filters: Array<{ id: "all" | VehicleCategory; label: string }> = [
  { id: "all", label: "All vehicles" },
  { id: "sedan", label: "Sedans" },
  { id: "suv", label: "SUVs" },
  { id: "hatchback", label: "Hatchbacks" },
  { id: "traveller", label: "Traveller" },
];

const labels: Record<VehicleCategory, string> = {
  sedan: "Sedan",
  suv: "SUV",
  hatchback: "Hatchback",
  traveller: "Tempo Traveller",
};

export function Fleet({ hideHeading = false }: { hideHeading?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const list = useMemo(
    () => (filter === "all" ? vehicles : vehicles.filter((v) => v.category === filter)),
    [filter],
  );

  return (
    <section id="fleet" className={cn(hideHeading ? "pb-20 pt-10 sm:pb-28 sm:pt-12" : "py-20 sm:py-28")}>
      <Container>
        {hideHeading ? null : (
          <SectionHeading
            eyebrow="The fleet"
            title="Clean cars for every kind of Goa trip"
            description="Well-maintained, regularly serviced and sanitized. Pick a sedan for two, an SUV for the family, or a traveller for the whole group."
          />
        )}

        <div className={hideHeading ? "flex flex-wrap justify-center gap-2" : "mt-10 flex flex-wrap justify-center gap-2"}>
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition",
                filter === item.id
                  ? "bg-ocean text-white"
                  : "bg-white text-ink ring-1 ring-ink/10 hover:bg-sand-2",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((car) => (
            <article
              key={car.name}
              className="overflow-hidden rounded-[1.6rem] bg-white shadow-[var(--shadow-card)] ring-1 ring-ink/5"
            >
              <div className="relative h-44">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <span className="absolute top-3 right-3 rounded-full bg-ocean/85 px-3 py-1 text-xs font-semibold text-gold backdrop-blur-sm">
                  ₹{car.rate}/km
                </span>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">
                  {car.note ?? labels[car.category]}
                </p>
                <h3 className="mt-1 font-display text-2xl text-ink">{car.name}</h3>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                  <Users className="h-4 w-4" />
                  {car.passengers} passengers
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          All vehicles are regularly sanitized and serviced for your safety and comfort.
        </p>
      </Container>
    </section>
  );
}
