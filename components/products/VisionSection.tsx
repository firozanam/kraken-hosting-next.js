"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const VisionSection = () => {
    const t = useTranslations("ProductsVision");

    return (
        <section className="relative w-full bg-[#13191d] py-24 lg:py-32">

            {/* White Blob - Merging with previous section's bottom right blob */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 translate-x-1/2 -translate-y-1/2 gpu-accelerated" />

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-20">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
                    <FadeIn direction="up" duration={600}>
                        <h2
                            className="text-[#bfeb5d] text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold"
                        >
                            {t("title")}
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={200} duration={600}>
                        <p
                            className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl"
                        >
                            {t("description")}
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
