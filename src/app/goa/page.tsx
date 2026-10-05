import { BookCta } from "@/components/BookCta";
import { DestinationDetails } from "@/components/DestinationDetails";
import { Destinations } from "@/components/Destinations";
import { PageHero } from "@/components/PageHero";
import { PagePager } from "@/components/PagePager";
import { getMainPage, mainPageNeighbors } from "@/lib/main-pages";
import { pageMeta } from "@/lib/seo";

const page = getMainPage("/goa");
const { prev, next } = mainPageNeighbors("/goa");

export const metadata = pageMeta(page.href, page.metaTitle, page.metaDescription);

export default function GoaPage() {
  return (
    <>
      <PageHero
        eyebrow={page.title}
        title={page.heroTitle}
        description={page.subtitle}
        image={page.image}
      />
      <Destinations hideHeading />
      <DestinationDetails />
      <BookCta />
      <PagePager
        prev={prev ? { href: prev.href, label: prev.title } : undefined}
        next={next ? { href: next.href, label: next.title } : undefined}
      />
    </>
  );
}
