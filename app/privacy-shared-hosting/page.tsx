import { Hero } from "@/components/anonymous-hosting/Hero";
import { Pricing } from "@/components/anonymous-hosting/Pricing";
import { Features } from "@/components/anonymous-hosting/AnonymousFeatures";
import { SharedAppDeployment } from "@/components/anonymous-hosting/AnonymousAppDeployment";
import { SupportSection } from "@/components/anonymous-hosting/AnonymousSupportSection";

import { SharedDetailedFeatures } from "@/components/anonymous-hosting/AnonymousDetailedFeatures";
import { SharedVisionSection } from "@/components/anonymous-hosting/AnonymousSharedVisionSection";
import { AnonymousFAQ } from "@/components/anonymous-hosting/AnonymousFAQ";
import { useTranslations } from "next-intl";

export default function AnonymousHostingPage() {
    const t = useTranslations("AnonymousPricing.FAQ");

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
            <div className="relative w-full z-10 isolate transform-gpu">
                <SharedDetailedFeatures />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <SharedVisionSection />
            </div>
            <div className="relative w-full z-10 isolate transform-gpu">
                <AnonymousFAQ
                    title={t.raw("title")}
                    questions={t.raw("questions")}
                />
            </div>
        </main>
    );
}
