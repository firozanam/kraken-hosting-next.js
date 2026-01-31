import { Hero } from "@/components/products/Hero";
import { ProductList } from "@/components/products/ProductList";
import { VisionSection } from "@/components/products/VisionSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security Products - Kraken Hosting",
    description: "Comprehensive protection designed to neutralize threats before they reach your site.",
};

export default function ProductsPage() {
    return (
        <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
            <div className="relative w-full z-10 isolate transform-gpu">
                <Hero />
            </div>
            <div className="relative w-full z-20 isolate transform-gpu">
                <ProductList />
            </div>
            <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
                <VisionSection />
            </div>
        </main>
    );
}
