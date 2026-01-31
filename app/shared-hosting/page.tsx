import { Hero } from "@/components/shared-hosting/Hero";
import { Pricing } from "@/components/shared-hosting/Pricing";
import { Features } from "@/components/shared-hosting/Features";
import { SupportSection } from "@/components/shared-hosting/SupportSection";
import { SharedAppDeployment } from "@/components/shared-hosting/SharedAppDeployment";
import { SharedDetailedFeatures } from "@/components/shared-hosting/SharedDetailedFeatures";
import { SharedVisionSection } from "@/components/shared-hosting/SharedVisionSection";
import { SharedFAQ } from "@/components/shared-hosting/SharedFAQ";
import { useTranslations } from "next-intl";

export default function HostingPage() {
  const tFAQ = useTranslations("FAQ");

  return (
    <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
      <div className="relative w-full z-10 isolate transform-gpu">
        <Hero />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <Pricing />
      </div>
      <div className="relative w-full z-30 isolate transform-gpu">
        <Features />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <SupportSection />
      </div>
      <div className="relative w-full z-10 isolate transform-gpu">
        <SharedAppDeployment />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <SharedDetailedFeatures />
      </div>
      <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
        <SharedVisionSection />
      </div>
      <div className="relative w-full z-10 isolate transform-gpu">
        <SharedFAQ
          title={tFAQ.raw("title")}
          questions={tFAQ.raw("questions")}
        />
      </div>
    </main>
  );
}
