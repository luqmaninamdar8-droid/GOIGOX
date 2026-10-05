import { BookCta } from "@/components/BookCta";
import { ExtraServices } from "@/components/ExtraServices";
import { PageHero } from "@/components/PageHero";
import { PagePager } from "@/components/PagePager";
import { ProseSection } from "@/components/ProseSection";
import { Services } from "@/components/Services";
import { bookingSteps } from "@/lib/content";
import { getMainPage, mainPageNeighbors } from "@/lib/main-pages";
import { pageMeta } from "@/lib/seo";

const page = getMainPage("/services");
const { prev, next } = mainPageNeighbors("/services");

export const metadata = pageMeta(page.href, page.metaTitle, page.metaDescription);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={page.title}
        title={page.heroTitle}
        description={page.subtitle}
        image={page.image}
      />
      <Services hideHeading />
      <ExtraServices />
      <ProseSection eyebrow="Booking" title="How to confirm your ride" numbered={bookingSteps} />
      <BookCta />
      <PagePager
        prev={prev ? { href: prev.href, label: prev.title } : { href: "/", label: "Home" }}
        next={next ? { href: next.href, label: next.title } : undefined}
      />
    </>
  );
}
