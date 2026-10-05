"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo, WhatsAppIcon } from "@/components/ui";
import { cn } from "@/lib/cn";
import { nav, site } from "@/lib/site";
import { defaultWaMessage, waUrl } from "@/lib/whatsapp";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-ink/8 bg-sand/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Logo onDark={onDark} />

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition hover:text-gold",
                  active
                    ? "text-gold"
                    : onDark
                      ? "text-white/85"
                      : "text-ink/80",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-semibold",
              onDark ? "text-white" : "text-ink",
            )}
          >
            <Phone className="h-4 w-4 text-gold" />
            {site.phoneDisplay}
          </a>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ocean shadow-lg shadow-gold/20 transition hover:-translate-y-0.5 hover:bg-gold-2"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Book now
          </Link>
        </div>

        <button
          type="button"
          className={cn(
            "grid h-10 w-10 place-items-center rounded-full lg:hidden",
            onDark ? "text-white" : "text-ink",
          )}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/8 bg-sand px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-medium hover:bg-sand-2",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "bg-sand-2 text-ocean"
                    : "text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 grid gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 px-4 py-3 font-semibold text-ink"
            >
              <Phone className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 font-semibold text-ocean"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book now
            </Link>
            <a
              href={waUrl(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-medium text-ink/70"
            >
              Chat on WhatsApp instead
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
