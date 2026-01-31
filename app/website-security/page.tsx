import { Hero } from "@/components/website-security/Hero";
import { HowItWorks } from "@/components/website-security/HowItWorks";
import { WhyChooseBitNinja } from "@/components/website-security/WhyChooseBitNinja";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website Security - Kraken Hosting",
    description: "Protect your server with BitNinja AI-Powered Security.",
};

export default function WebsiteSecurityPage() {
    return (
        <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
            <div className="relative w-full z-10 isolate transform-gpu">
                <Hero />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <HowItWorks />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <WhyChooseBitNinja />
            </div>
        </main>
    );
}
