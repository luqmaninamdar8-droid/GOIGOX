"use client";

import { useState } from "react";
import { Clock, Mail, Phone, Shield } from "lucide-react";
import { Container, WhatsAppIcon } from "@/components/ui";
import { trackWhatsAppConversion } from "@/lib/gtag";
import { site } from "@/lib/site";
import { waBookPrefix, waUrl } from "@/lib/whatsapp";

const field =
  "w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-gold";

export function Booking({ standalone = false }: { standalone?: boolean }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passengers: "",
  });

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = `${waBookPrefix()} I would like to book a ride.

Name: ${form.name}
Phone: ${form.phone}
Pickup: ${form.pickup}
Drop-off: ${form.drop}
Date: ${form.date}
Time: ${form.time}
Passengers: ${form.passengers}`;
    trackWhatsAppConversion();
    window.open(waUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="book"
      className={`relative isolate overflow-hidden bg-ocean py-20 text-white sm:py-28 ${standalone ? "pt-32 sm:pt-36" : ""}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,193,74,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(31,184,168,0.16),transparent_35%)]" />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Book your ride
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-balance sm:text-5xl">
              Tell us where to meet you
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Fill in the details and we’ll confirm on WhatsApp. Your info is only used for booking.
            </p>

            <div className="mt-8 grid gap-3">
              <a
                href={`tel:${site.phoneTel}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Phone className="h-5 w-5 text-gold" />
                <span>
                  <span className="block text-sm text-white/55">Call us 24/7</span>
                  <span className="font-semibold">{site.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <Mail className="h-5 w-5 text-gold" />
                <span>
                  <span className="block text-sm text-white/55">Email</span>
                  <span className="font-semibold">{site.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Clock className="h-5 w-5 text-gold" />
                <span>
                  <span className="block text-sm text-white/55">Hours</span>
                  <span className="font-semibold">{site.hours} • {site.address}</span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-[1.85rem] border border-white/10 bg-white/6 p-5 shadow-2xl backdrop-blur-md sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 sm:col-span-1">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Your name *
                </span>
                <input required value={form.name} onChange={update("name")} placeholder="Full name" className={field} />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Phone number *
                </span>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+91 98765 43210"
                  className={field}
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Pickup *
                </span>
                <input
                  required
                  value={form.pickup}
                  onChange={update("pickup")}
                  placeholder="Goa Airport, hotel, beach"
                  className={field}
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Drop-off *
                </span>
                <input
                  required
                  value={form.drop}
                  onChange={update("drop")}
                  placeholder="Resort, Panaji, station"
                  className={field}
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Date *
                </span>
                <input required type="date" value={form.date} onChange={update("date")} className={field} />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Time *
                </span>
                <input required type="time" value={form.time} onChange={update("time")} className={field} />
              </label>
              <label className="grid gap-1.5 sm:col-span-2">
                <span className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                  Passengers *
                </span>
                <select required value={form.passengers} onChange={update("passengers")} className={field}>
                  <option value="">Select passengers</option>
                  <option value="1">1 passenger</option>
                  <option value="2">2 passengers</option>
                  <option value="3">3 passengers</option>
                  <option value="4">4 passengers</option>
                  <option value="5-7">5–7 passengers (SUV)</option>
                  <option value="8+">8+ passengers (Tempo Traveller)</option>
                </select>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-ocean hover:bg-gold-2"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book via WhatsApp now
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-white/50">
              <Shield className="h-3.5 w-3.5" />
              Used only to confirm your booking
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
