import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { PagePager } from "@/components/PagePager";
import { Pricing } from "@/components/Pricing";
import { ProseSection } from "@/components/ProseSection";
import { pricingPolicy } from "@/lib/content";
import { getMainPage, mainPageNeighbors } from "@/lib/main-pages";
import { pageMeta } from "@/lib/seo";

const page = getMainPage("/pricing");
const { prev, next } = mainPageNeighbors("/pricing");

export const metadata = pageMeta(page.href, page.metaTitle, page.metaDescription);

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow={page.title}
        title={page.heroTitle}
        description={page.subtitle}
        image={page.image}
      />
      <Pricing hideHeading />
      <ProseSection
        eyebrow="Policy"
        title={pricingPolicy.title}
        intro={pricingPolicy.intro}
        sections={pricingPolicy.sections}
      />
      <BookCta />
      <PagePager
        prev={prev ? { href: prev.href, label: prev.title } : undefined}
        next={next ? { href: next.href, label: next.title } : undefined}
      />
    </>
  );
}
