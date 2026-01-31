import { Hero } from "@/components/kraken-secure-web/Hero";
import { Benefits } from "@/components/kraken-secure-web/Benefits";
import { Installation } from "@/components/kraken-secure-web/Installation";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kraken Secure Web - Kraken Hosting",
    description: "Secure your website with Kraken Secure Web SSL/TLS certificates. Enhanced security, better SEO, and increased trust.",
};

export default function KrakenSecureWebPage() {
    return (
        <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
            <div className="relative w-full z-10 isolate transform-gpu">
                <Hero />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <Benefits />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <Installation />
            </div>
        </main>
    );
}
