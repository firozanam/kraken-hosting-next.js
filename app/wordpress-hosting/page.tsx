import { Hero } from "@/components/wordpress-hosting/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Managed WordPress Hosting - Kraken Hosting",
    description: "Experience 5x faster loading times with our LiteSpeed WordPress Hosting.",
};

import { WordPressPackages } from "@/components/wordpress-hosting/WordPressPackages";
import { PricingPlans } from "@/components/wordpress-hosting/PricingPlans";
import { Features } from "@/components/wordpress-hosting/Features";
import { DetailedFeatures } from "@/components/wordpress-hosting/DetailedFeatures";
import { WordPressVisionSection } from "@/components/wordpress-hosting/WordPressVisionSection";
import { WordPressFAQ } from "@/components/wordpress-hosting/WordPressFAQ";

export default function WordPressHostingPage() {
    return (
        <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
            <div className="relative w-full z-10 isolate transform-gpu">
                <Hero />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <WordPressPackages />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu">
                <PricingPlans />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu">
                <Features />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <DetailedFeatures />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <WordPressVisionSection />
            </div>
            <div className="relative w-full z-10 isolate transform-gpu">
                <WordPressFAQ />
            </div>
        </main>
    );
}
