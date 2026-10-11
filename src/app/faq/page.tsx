import { BookCta } from "@/components/BookCta";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/PageHero";
import { PagePager } from "@/components/PagePager";
import { getMainPage, mainPageNeighbors } from "@/lib/main-pages";
import { pageMeta } from "@/lib/seo";

const page = getMainPage("/faq");
const { prev } = mainPageNeighbors("/faq");

export const metadata = pageMeta(page.href, page.metaTitle, page.metaDescription);

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow={page.title}
        title={page.heroTitle}
        description={page.subtitle}
        image={page.image}
      />
      <FAQ hideHeading />
      <BookCta />
      <PagePager
        prev={prev ? { href: prev.href, label: prev.title } : undefined}
        next={{ href: "/reviews", label: "Reviews" }}
      />
    </>
  );
}
