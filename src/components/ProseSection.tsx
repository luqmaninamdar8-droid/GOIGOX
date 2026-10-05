import { Container } from "@/components/ui";
import { cn } from "@/lib/cn";

export function ProseSection({
  eyebrow,
  title,
  intro,
  paragraphs,
  bullets,
  sections,
  numbered,
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  sections?: readonly { heading: string; items: readonly string[] }[];
  numbered?: readonly string[];
  className?: string;
  dark?: boolean;
}) {
  return (
    <section className={cn(dark ? "bg-ocean text-white" : "bg-sand-2/40", "py-16 sm:py-20", className)}>
      <Container className="max-w-3xl">
        {eyebrow ? (
          <p
            className={cn(
              "text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
              dark ? "text-gold" : "text-teal",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
            eyebrow ? "mt-3" : "",
            dark ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
        {intro ? (
          <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-white/75" : "text-muted")}>{intro}</p>
        ) : null}
        {paragraphs?.map((p) => (
          <p
            key={p.slice(0, 40)}
            className={cn("mt-4 leading-relaxed", dark ? "text-white/70" : "text-ink/80")}
          >
            {p}
          </p>
        ))}
        {bullets ? (
          <ul className={cn("mt-6 grid gap-2", dark ? "text-white/80" : "text-ink/80")}>
            {bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className={dark ? "text-gold" : "text-teal"}>•</span>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        {numbered ? (
          <ol className={cn("mt-6 grid gap-3", dark ? "text-white/80" : "text-ink/80")}>
            {numbered.map((item, i) => (
              <li key={item} className="flex gap-3">
                <span
                  className={cn(
                    "grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold",
                    dark ? "bg-gold text-ocean" : "bg-ocean text-gold",
                  )}
                >
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        ) : null}
        {sections ? (
          <div className="mt-10 grid gap-8">
            {sections.map((block) => (
              <div key={block.heading}>
                <h3 className={cn("font-display text-xl", dark ? "text-gold" : "text-ocean")}>{block.heading}</h3>
                <ul className={cn("mt-3 grid gap-2 text-sm", dark ? "text-white/70" : "text-muted")}>
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className={dark ? "text-gold" : "text-teal"}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
