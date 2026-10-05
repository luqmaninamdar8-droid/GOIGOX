import { PageHero } from "@/components/PageHero";
import { PagePager } from "@/components/PagePager";
import { Testimonials } from "@/components/Testimonials";
import { images } from "@/lib/data";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/reviews",
  "GOIGOX Cabs Reviews",
  "What travellers from Mumbai, Delhi, and Bangalore say about GOIGOX Cabs in Goa.",
);

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What our guests say."
        description="On-time pickups, clean cars, and fares that feel fair."
        image={images.south}
      />
      <Testimonials hideHeading />
      <PagePager
        prev={{ href: "/faq", label: "FAQ" }}
        next={{ href: "/book", label: "Book now" }}
      />
    </>
  );
}
