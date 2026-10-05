import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { images } from "@/lib/data";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="This road doesn’t go there."
        description="The page is missing — but we can still drive you anywhere in Goa."
        image={images.hero}
      />
      <div className="flex justify-center gap-3 py-16">
        <Link
          href="/"
          className="rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white hover:bg-ocean-2"
        >
          Back home
        </Link>
        <Link
          href="/book"
          className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ocean hover:bg-gold-2"
        >
          Book a ride
        </Link>
      </div>
    </>
  );
}
