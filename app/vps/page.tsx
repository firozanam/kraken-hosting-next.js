import { Hero } from "@/components/vps/Hero";
import { Features } from "@/components/vps/Features";
import { Pricing } from "@/components/vps/Pricing";
import { OSDeployment } from "@/components/vps/OSDeployment";
import { DetailedFeatures } from "@/components/vps/DetailedFeatures";
import { VisionSection } from "@/components/vps/VisionSection";
import { VPSFAQ } from "@/components/vps/VPSFAQ";

export default function VpsPage() {
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
        <OSDeployment />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <DetailedFeatures />
      </div>
      <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
        <VisionSection />
      </div>
      <div className="relative w-full z-10 isolate transform-gpu">
        <VPSFAQ />
      </div>
    </main>
  );
}
