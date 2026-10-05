import { Container, SectionHeading } from "@/components/ui";
import { goaGuide } from "@/lib/content";
import { destinations } from "@/lib/data";

export function DestinationDetails() {
  return (
    <section className="border-t border-ink/8 bg-sand-2/50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Know before you go"
          title={goaGuide.title}
          description={goaGuide.paragraphs[0]}
        />
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted">
          {goaGuide.paragraphs[1]}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {destinations.map((place) => (
            <article
              key={place.title}
              className="rounded-[1.25rem] bg-white p-5 shadow-sm ring-1 ring-ink/5"
            >
              <h3 className="font-display text-lg text-ink">{place.title}</h3>
              <p className="mt-1 text-sm text-teal">{place.text}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{place.detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
