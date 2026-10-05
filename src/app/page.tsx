import { Hero } from "@/components/Hero";
import { HomeExplore } from "@/components/HomeExplore";
import { HomeIntro } from "@/components/HomeIntro";
import { PagePager } from "@/components/PagePager";
import { ProseSection } from "@/components/ProseSection";
import { WhyChoose } from "@/components/WhyChoose";
import { bookingSteps } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeExplore />
      <WhyChoose />
      <ProseSection eyebrow="How to book" title="Four steps on WhatsApp" numbered={bookingSteps} dark />
      <PagePager next={{ href: "/services", label: "Services page" }} />
    </>
  );
}
