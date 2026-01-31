import { AboutHero } from "@/components/about-us/AboutHero";
import { AboutStats } from "@/components/about-us/AboutStats";
import { AboutSupport } from "@/components/about-us/AboutSupport";

export default function AboutUsPage() {
    return (
        <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
            <div className="relative w-full z-10 isolate transform-gpu">
                <AboutHero />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <AboutStats />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <AboutSupport />
            </div>
        </main>
    );
}
