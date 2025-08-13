
import { SupportSection } from "@/components/templates/landing-page/sections/support-section"
import { CallToAction } from "./sections/call-to-action"
import { CustomerSection } from "./sections/customer-section"
import FeatureSection from "./sections/feature-section"
import { HeroSection } from "./sections/hero-section"

export const LandingPage = () => {
    return (
        <article className="flex flex-col gap-10 md:gap-20">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerSection />
            <CallToAction />
        </article>
    )
}