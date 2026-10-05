import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container, Logo, WhatsAppIcon } from "@/components/ui";
import { extraServices } from "@/lib/data";
import { nav, site } from "@/lib/site";
import { defaultWaMessage, waUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#05141b] pt-16 pb-8 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo onDark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {site.name} — Dabolim (GOI) and Mopa (GOX) airport taxis, plus all of Goa. Verified drivers and fares without the drama.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">Quick links</h3>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/reviews" className="hover:text-gold">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-gold">
                  Book now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">Services</h3>
            <ul className="mt-4 grid gap-2 text-sm text-white/70">
              <li>
                <Link href="/services/airport" className="hover:text-gold">
                  Airport transfer
                </Link>
              </li>
              <li>
                <Link href="/services/sightseeing" className="hover:text-gold">
                  Local sightseeing
                </Link>
              </li>
              <li>
                <Link href="/services/outstation" className="hover:text-gold">
                  Outstation trips
                </Link>
              </li>
              {extraServices.map((item) => (
                <li key={item}>
                  <Link href="/services" className="capitalize hover:text-gold">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">Contact</h3>
            <ul className="mt-4 grid gap-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gold" />
                {site.address}
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`} className="flex items-center gap-2 hover:text-gold">
                  <Phone className="h-4 w-4 text-gold" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold">
                  <Mail className="h-4 w-4 text-gold" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={waUrl(defaultWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <WhatsAppIcon className="h-4 w-4 text-gold" />
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="mt-2">
            Designed &amp; developed by{" "}
            <a
              href="https://coastalcode.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/60 underline-offset-2 hover:text-gold hover:underline"
            >
              CoastalCode
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
