import { Container, SectionHeading } from "@/components/ui";
import { extraServiceDetails } from "@/lib/content";

export function ExtraServices() {
  return (
    <section className="border-t border-ink/8 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Also available"
          title="More ways we can drive for you"
          description="Beyond airport and beach transfers — tell us your plan on WhatsApp."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {extraServiceDetails.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-ink/8 bg-sand/50 p-6 ring-1 ring-ink/5"
            >
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
