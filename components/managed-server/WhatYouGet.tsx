"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export const WhatYouGet = () => {
    const t = useTranslations("ManagedServerHowItWorks");


    return (
        <section className="relative w-full text-white bg-[#13191d] overflow-hidden">
            {/* Top Green Banner */}
            <FadeIn
                direction="up"
                duration={600}
                className="w-full bg-[#89d957] py-4 text-center"
            >
                <h2 className="text-[#13191d] text-xl md:text-2xl lg:text-3xl font-bold">
                    {t("title")}
                </h2>
            </FadeIn>

            <div className="relative py-20 lg:py-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/managed-server/bg-image.svg"
                        alt="Background"
                        fill
                        className="object-cover object-right"
                    />
                    {/* Dark gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-[#13191d]/30" />
                </div>

                {/* White Blob - Bottom Left (To align with next section) */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 -translate-x-1/2 translate-y-1/2 gpu-accelerated" />

                {/* Content */}
                <div
                    className="relative z-20 w-[90%] max-w-4xl mx-auto container-ultrawide space-y-16 lg:space-y-24 text-center mt-12 lg:mt-24"
                >

                    {/* Block 1 */}
                    <FadeIn direction="up" delay={100} duration={600} className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            {t("blocks.installation_support.title")}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            {t("blocks.installation_support.description")}
                        </p>
                    </FadeIn>

                    {/* Block 2 */}
                    <FadeIn direction="up" delay={200} duration={600} className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            {t("blocks.monitoring_maintenance.title")}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            {t("blocks.monitoring_maintenance.description")}
                        </p>
                    </FadeIn>

                    {/* Block 3 */}
                    <FadeIn direction="up" delay={300} duration={600} className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            {t("blocks.software_upgrades.title")}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            {t("blocks.software_upgrades.description")}
                        </p>
                    </FadeIn>

                    {/* Block 4 */}
                    <FadeIn direction="up" delay={400} duration={600} className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            {t("blocks.support.title")}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            {t("blocks.support.description")}
                        </p>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};
