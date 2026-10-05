import { Booking } from "@/components/Booking";
import { PagePager } from "@/components/PagePager";
import { ProseSection } from "@/components/ProseSection";
import { bookingSteps } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/book",
  "Book a Taxi in Goa",
  "Book GOIGOX Cabs on WhatsApp for GOI & GOX airport pickup, local sightseeing, or outstation trips. 24/7 in Goa.",
);

export default function BookPage() {
  return (
    <>
      <Booking standalone />
      <ProseSection
        eyebrow="Before you send"
        title="What to include in your message"
        numbered={bookingSteps}
        className="bg-sand-2/40"
      />
      <PagePager prev={{ href: "/reviews", label: "Reviews" }} />
    </>
  );
}
