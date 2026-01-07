import { Hero } from "@/components/homepage/Hero";
import { DomainSearch } from "@/components/homepage/DomainSearch";
import { PricingPlans } from "@/components/homepage/PricingPlans";
import { UltraFastHosting } from "@/components/homepage/UltraFastHosting";

import { CoreFeatures } from "@/components/homepage/CoreFeatures";

export default function Home() {
  return (
    <main>
      <Hero />
      <DomainSearch />
      <PricingPlans />
      <UltraFastHosting />
      <CoreFeatures />
    </main>
  );
}
