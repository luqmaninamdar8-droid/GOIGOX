import { BookCta } from "@/components/BookCta";
import { PageHero } from "@/components/PageHero";
import { PagePager } from "@/components/PagePager";
import { ProseSection } from "@/components/ProseSection";
import { Routes } from "@/components/Routes";
import { routeTips } from "@/lib/content";
import { getMainPage, mainPageNeighbors } from "@/lib/main-pages";
import { pageMeta } from "@/lib/seo";

const page = getMainPage("/routes");
const { prev, next } = mainPageNeighbors("/routes");

export const metadata = pageMeta(page.href, page.metaTitle, page.metaDescription);

export default function RoutesPage() {
  return (
    <>
      <PageHero
        eyebrow={page.title}
        title={page.heroTitle}
        description={page.subtitle}
        image={page.image}
      />
      <Routes hideHeading />
      <ProseSection
        title={routeTips.title}
        paragraphs={routeTips.paragraphs}
        bullets={routeTips.popularStops}
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
