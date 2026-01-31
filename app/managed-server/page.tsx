import { Hero } from "@/components/managed-server/Hero";
import { WhatYouGet } from "@/components/managed-server/WhatYouGet";
import { Questions } from "@/components/managed-server/Questions";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Managed Server - Kraken Hosting",
    description: "Kraken 360: Managed Security & Maintenance for your digital presence.",
};

export default function ManagedServerPage() {
    return (
        <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
            <div className="relative w-full z-10 isolate transform-gpu">
                <Hero />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <WhatYouGet />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <Questions />
            </div>
        </main>
    );
}
