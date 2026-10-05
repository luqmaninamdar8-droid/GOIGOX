import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

export function PagePager({
  prev,
  next,
}: {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <nav className="border-t border-ink/10 bg-white/40 py-8" aria-label="Page">
      <Container className="flex items-center justify-between gap-4">
        {prev ? (
          <Link href={prev.href} className="group inline-flex items-center gap-2 text-sm font-semibold text-ink">
            <ArrowLeft className="h-4 w-4 text-teal transition group-hover:-translate-x-0.5" />
            <span>
              <span className="block text-[0.7rem] font-medium tracking-wide text-muted uppercase">Previous</span>
              {prev.label}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={next.href}
            className="group inline-flex items-center gap-2 text-right text-sm font-semibold text-ink"
          >
            <span>
              <span className="block text-[0.7rem] font-medium tracking-wide text-muted uppercase">Next</span>
              {next.label}
            </span>
            <ArrowRight className="h-4 w-4 text-teal transition group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <span />
        )}
      </Container>
    </nav>
  );
}
