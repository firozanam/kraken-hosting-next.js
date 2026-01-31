"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const CTA = () => {
    const t = useTranslations("PatchmanCTA");

    return (
        <section className="relative w-full bg-[#13191d] py-24 lg:py-32 overflow-hidden">

            {/* White Blob - Merging with previous section's bottom right blob */}
            {/* Positioning it at top right to continue the flow or slightly overlapping */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 translate-x-1/3 -translate-y-1/2 gpu-accelerated" />

            <div className="container-ultrawide w-[90%] max-w-4xl mx-auto relative z-20 flex flex-col items-center text-center space-y-8">
                <FadeIn direction="up" duration={600}>
                    <h2
                        className="text-[#bfeb5d] text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold"
                    >
                        {t("title")}
                    </h2>
                </FadeIn>

                <FadeIn
                    direction="zoom"
                    duration={400}
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-12 py-4 text-base font-bold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-xl transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-[#89d957]/20 hover:scale-105"
                    >
                        {t("button")}
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};
