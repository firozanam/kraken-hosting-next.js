import { Hero } from "@/components/domain/Hero";
import { DomainSearch } from "@/components/domain/DomainSearch";
import type { Metadata } from "next";

import { ControlSection } from "@/components/domain/ControlSection";
import { FreeDomainSection } from "@/components/domain/FreeDomainSection";
import { ManagementSection } from "@/components/domain/ManagementSection";
import { HostingPlansSection } from "@/components/domain/HostingPlansSection";
import { StartupSection } from "@/components/domain/StartupSection";
import { TLDGridSection } from "@/components/domain/TLDGridSection";
import { SslCertificatesSection } from "@/components/domain/SslCertificatesSection";
import { SupportSection } from "@/components/domain/SupportSection";
import { DomainFAQ } from "@/components/domain/DomainFAQ";
import { VisionSection } from "@/components/domain/VisionSection";

export const metadata: Metadata = {
    title: "Domain Registration - Kraken Hosting",
    description: "Unlock your digital potential. Register your perfect domain name and start building your online presence.",
};

export default function DomainPage() {
    return (
        <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
            <div className="relative w-full z-10 isolate transform-gpu">
                <Hero />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <DomainSearch />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu">
                <ControlSection />
            </div>
            <div className="relative w-full z-40 isolate transform-gpu">
                <FreeDomainSection />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu">
                <ManagementSection />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <TLDGridSection />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <HostingPlansSection />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <SslCertificatesSection />
            </div>
            <div className="relative w-full z-10 isolate transform-gpu">
                <SupportSection />
            </div>
            <div className="relative w-full z-10 isolate transform-gpu">
                <DomainFAQ />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <VisionSection />
            </div>
        </main>
    );
}
