import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={cn(
          "text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
          light ? "text-gold" : "text-teal",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-4 text-base leading-relaxed text-pretty sm:text-lg", light ? "text-white/70" : "text-muted")}>
        {description}
      </p>
    </div>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.76 11.76 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.16-3.41-8.43ZM12.05 21.7h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.44 4.43-9.86 9.9-9.86 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.44-4.43 9.85-9.91 9.85Zm5.42-7.39c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a8.97 8.97 0 0 1-1.66-2.06c-.17-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold text-ocean shadow-[0_10px_24px_-10px_rgba(243,193,74,0.9)] transition group-hover:rotate-[-8deg]">
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M4 20h24v3.2A2.8 2.8 0 0 1 25.2 26H6.8A2.8 2.8 0 0 1 4 23.2V20Z"
            fill="currentColor"
          />
          <path
            d="M7 20 9.4 12.8A3 3 0 0 1 12.2 11h7.6a3 3 0 0 1 2.8 1.8L25 20"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <circle cx="9.5" cy="23.5" r="2" fill="#071b24" />
          <circle cx="22.5" cy="23.5" r="2" fill="#071b24" />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-xl font-semibold tracking-tight",
            onDark ? "text-white" : "text-ink",
          )}
        >
          {site.name}
        </span>
        <span className={cn("block text-[0.7rem] tracking-wide", onDark ? "text-white/65" : "text-muted")}>
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
