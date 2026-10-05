import { Clock, ShieldCheck, Sparkles, Wind } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui";

const items = [
  {
    icon: Sparkles,
    title: "Honest prices",
    text: "Best rates in Goa with no hidden charges. What you see is what you pay.",
    className: "md:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Safe & verified",
    text: "Licensed, police-verified drivers who know Goa’s roads inside out.",
    className: "",
  },
  {
    icon: Clock,
    title: "24/7 dispatch",
    text: "Early flight or late-night drop? Call anytime — we are always on.",
    className: "",
  },
  {
    icon: Wind,
    title: "Clean AC cars",
    text: "Serviced, sanitized, and cooled before every trip.",
    className: "md:col-span-2",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-ocean py-20 text-white sm:py-28">
      <Container>
        <SectionHeading
          light
          eyebrow="Why GOIGOX Cabs"
          title="A calmer way to move around Goa"
          description="We’re here to make your trip easy and affordable. Here’s what makes the ride different."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className={`rounded-[1.75rem] border border-white/10 bg-white/5 p-7 ${item.className}`}
            >
              <item.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
