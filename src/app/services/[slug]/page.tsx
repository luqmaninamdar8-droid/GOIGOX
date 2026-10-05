import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Container } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { PagePager } from "@/components/PagePager";
import { services } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMeta(service.href, service.title, service.text);
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = services.findIndex((item) => item.slug === slug);
  const service = services[index];
  if (!service) notFound();

  const prev = index > 0 ? services[index - 1] : null;
  const next = index < services.length - 1 ? services[index + 1] : null;

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.text}
        image={service.image}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-lg leading-relaxed text-ink/80">{service.long}</p>
            <ul className="mt-8 grid gap-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-ink">
                  <Check className="h-5 w-5 text-teal" />
                  {point}
                </li>
              ))}
            </ul>
            {"sections" in service && service.sections ? (
              <div className="mt-10 grid gap-6">
                {service.sections.map((block) => (
                  <div key={block.heading}>
                    <h2 className="font-display text-xl text-ocean">{block.heading}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{block.body}</p>
                  </div>
                ))}
              </div>
            ) : null}
            {"itinerary" in service && service.itinerary ? (
              <div className="mt-10">
                <h2 className="font-display text-xl text-ocean">Typical flow</h2>
                <ol className="mt-4 grid gap-2 text-sm text-ink/80">
                  {service.itinerary.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-xs font-bold text-ocean">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
            <Link
              href="/book"
              className="mt-8 inline-flex rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ocean hover:bg-gold-2"
            >
              Book this service
            </Link>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-[1.75rem]">
            <Image src={service.image} alt={service.title} fill className="object-cover" sizes="50vw" />
          </div>
        </Container>
      </section>
      <PagePager
        prev={prev ? { href: prev.href, label: prev.title } : { href: "/services", label: "All services" }}
        next={next ? { href: next.href, label: next.title } : { href: "/fleet", label: "Fleet" }}
      />
    </>
  );
}
