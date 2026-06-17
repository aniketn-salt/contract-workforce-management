import { StickyBanner } from "@/components/contract-workforce/StickyBanner";
import { Navbar } from "@/components/contract-workforce/Navbar";
import { HeroSection } from "@/components/contract-workforce/HeroSection";
import { TrustedBySection } from "@/components/contract-workforce/TrustedBySection";
import { BusinessRisksSection } from "@/components/contract-workforce/BusinessRisksSection";
import { WhyEilisysSection } from "@/components/contract-workforce/WhyEilisysSection";
import { KeyCapabilitiesSection } from "@/components/contract-workforce/KeyCapabilitiesSection";
import { OperationalImpactSection } from "@/components/contract-workforce/OperationalImpactSection";
import { WhoItHelpsSection } from "@/components/contract-workforce/WhoItHelpsSection";
import { IndustriesServedSection } from "@/components/contract-workforce/IndustriesServedSection";
import { TestimonialsSection } from "@/components/contract-workforce/TestimonialsSection";
import { WhyAscentSection } from "@/components/contract-workforce/WhyAscentSection";
import { ImplementationSection } from "@/components/contract-workforce/ImplementationSection";
import { FAQSection } from "@/components/contract-workforce/FAQSection";
import { CTASection } from "@/components/contract-workforce/CTASection";
import { Footer } from "@/components/contract-workforce/Footer";

/**
 * Contract Workforce Management landing page sections.
 * Source: Figma node 2523:21111 — "Contract Workforce Management"
 */
export function ContractWorkforcePage() {
  return (
    <>
      <StickyBanner />
      <Navbar />
      <main className="min-h-screen bg-eilisys-white">
        <HeroSection />
        <TrustedBySection />
        <BusinessRisksSection />
        <WhyEilisysSection />
        <KeyCapabilitiesSection />
        <OperationalImpactSection />
        <WhoItHelpsSection />
        <IndustriesServedSection />
        <TestimonialsSection />
        <WhyAscentSection />
        <ImplementationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

