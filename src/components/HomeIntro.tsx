import { ProseSection } from "@/components/ProseSection";
import { homeIntro } from "@/lib/content";

export function HomeIntro() {
  return (
    <ProseSection
      eyebrow="About GOIGOX Cabs"
      title={homeIntro.title}
      paragraphs={homeIntro.paragraphs}
      bullets={homeIntro.bullets}
    />
  );
}
