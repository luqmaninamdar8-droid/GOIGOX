import { BookCta } from "@/components/BookCta";
import { Compare } from "@/components/Compare";
import { Fleet } from "@/components/Fleet";
import { PageHero } from "@/components/PageHero";
import { PagePager } from "@/components/PagePager";
import { ProseSection } from "@/components/ProseSection";
import { fleetGuide } from "@/lib/content";
import { getMainPage, mainPageNeighbors } from "@/lib/main-pages";
import { pageMeta } from "@/lib/seo";

const page = getMainPage("/fleet");
const { prev, next } = mainPageNeighbors("/fleet");

export const metadata = pageMeta(page.href, page.metaTitle, page.metaDescription);

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow={page.title}
        title={page.heroTitle}
        description={page.subtitle}
        image={page.image}
      />
      <Fleet hideHeading />
      <Compare />
      <ProseSection
        title={fleetGuide.title}
        paragraphs={fleetGuide.paragraphs}
        bullets={fleetGuide.tips}
        className="bg-white"
      />
      <BookCta />
      <PagePager
        prev={prev ? { href: prev.href, label: prev.title } : undefined}
        next={next ? { href: next.href, label: next.title } : undefined}
      />
    </>
  );
}
