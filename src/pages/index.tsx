import { CallToAction } from "@/components/call-to-action";
import { CustomerSection } from "@/components/customer-section";
import FeatureSection from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SupportSection } from "@/components/support-section";

export default function Home() {
  return (
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection/>
        <CustomerSection/>
        <CallToAction/>
      </article>
  );
}
