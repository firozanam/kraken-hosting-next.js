import { Hero } from "@/components/patchman/Hero";
import { HowItWorks } from "@/components/patchman/HowItWorks";
import { CTA } from "@/components/patchman/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Patchman Security - Kraken Hosting",
    description: "Automate your application security with Kraken Patchman.",
};

export default function PatchmanPage() {
    return (
        <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
            <div className="relative w-full z-10 isolate transform-gpu">
                <Hero />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <HowItWorks />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <CTA />
            </div>
        </main>
    );
}
