"use client";

import { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui";
import { waBookPrefix, waUrl } from "@/lib/whatsapp";

export function HeroBooking() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `${waBookPrefix()} I would like to book a ride.

Pickup: ${pickup}
Drop: ${drop}
Date: ${date}
Passengers: ${passengers}`;
    window.open(waUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full rounded-[1.75rem] border border-white/15 bg-white/12 p-6 shadow-2xl backdrop-blur-xl sm:p-7 lg:max-w-lg lg:justify-self-end xl:max-w-xl 2xl:max-w-2xl"
    >
      <p className="font-display text-3xl text-white sm:text-[2rem]">Plan your ride</p>
      <p className="mt-2 text-base text-white/65">Instant confirmation on WhatsApp.</p>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2">
          <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 uppercase">
            <MapPin className="h-4 w-4 text-gold" /> Pickup
          </span>
          <input
            required
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Goa Airport, hotel, beach…"
            className="rounded-2xl border border-white/10 bg-ocean/45 px-4 py-3.5 text-base text-white outline-none placeholder:text-white/35 focus:border-gold"
          />
        </label>
        <label className="grid gap-2">
          <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 uppercase">
            <MapPin className="h-4 w-4 text-gold" /> Drop-off
          </span>
          <input
            required
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
            placeholder="Calangute, Panaji, Palolem…"
            className="rounded-2xl border border-white/10 bg-ocean/45 px-4 py-3.5 text-base text-white outline-none placeholder:text-white/35 focus:border-gold"
          />
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 uppercase">
              <Calendar className="h-4 w-4 text-gold" /> Date
            </span>
            <input
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-2xl border border-white/10 bg-ocean/45 px-4 py-3.5 text-base text-white outline-none focus:border-gold"
            />
          </label>
          <label className="grid gap-2">
            <span className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white/70 uppercase">
              <Users className="h-4 w-4 text-gold" /> Guests
            </span>
            <select
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              className="rounded-2xl border border-white/10 bg-ocean/45 px-4 py-3.5 text-base text-white outline-none focus:border-gold"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5-7">5–7 (SUV)</option>
              <option value="8+">8+ (Traveller)</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-4 text-base font-semibold text-ocean transition hover:bg-gold-2"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Get a WhatsApp quote
        </button>
      </div>
    </form>
  );
}
