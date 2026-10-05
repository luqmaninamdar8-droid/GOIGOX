import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { images } from "@/lib/data";

export function PageHero({
  eyebrow,
  title,
  description,
  image = images.hero,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ocean">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,27,36,0.9)_0%,rgba(7,27,36,0.72)_55%,rgba(7,27,36,0.45)_100%)]" />
      <Container className="relative z-10 flex min-h-[42vh] flex-col justify-end pb-12 pt-32 sm:min-h-[46vh] sm:pb-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2 text-gold">/</span>
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-white text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
