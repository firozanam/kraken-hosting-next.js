import { Hero } from "@/components/homepage/Hero";
import { DomainSearch } from "@/components/homepage/DomainSearch";
import { PricingPlans } from "@/components/homepage/PricingPlans";
import { UltraFastHosting } from "@/components/homepage/UltraFastHosting";
import { MigrationServices } from "@/components/homepage/MigrationServices";
import { NextGenHosting } from "@/components/homepage/NextGenHosting";
import { VisionSection } from "@/components/homepage/VisionSection";

import { CoreFeatures } from "@/components/homepage/CoreFeatures";

export default function Home() {
  return (
    <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
      <div className="relative w-full z-10 isolate transform-gpu">
        <Hero />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <DomainSearch />
      </div>
      <div className="relative w-full z-30 isolate transform-gpu">
        <PricingPlans />
      </div>
      <div className="relative w-full z-40 isolate transform-gpu">
        <UltraFastHosting />
      </div>
      <div className="relative w-full z-30 isolate transform-gpu">
        <CoreFeatures />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <MigrationServices />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <NextGenHosting />
      </div>
      <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
        <VisionSection />
      </div>
    </main>
  );
}
