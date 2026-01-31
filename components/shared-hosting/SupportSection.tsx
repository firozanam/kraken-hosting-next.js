"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export const SupportSection = () => {
    const t = useTranslations("SupportSection");

    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#13191d]">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10 border border-[#7c37eb] rounded-3xl p-8 lg:p-12 overflow-hidden bg-[#13191d]/50">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative">

                    {/* Left Column: All Text Content */}
                    <div className="flex flex-col relative z-20 lg:pr-12">
                        {/* Top Content */}
                        <div className="space-y-8">
                            <FadeIn direction="right">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                                    {t("title")}
                                </h2>
                                <p className="text-gray-300 text-sm lg:text-base xl:text-lg leading-relaxed">
                                    {t("description")}
                                </p>
                            </FadeIn>

                            <ul className="space-y-4">
                                {t.raw("benefits").map((benefit: string, index: number) => (
                                    <FadeIn
                                        key={index}
                                        delay={200 + (index * 100)}
                                        direction="right"
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                        <span className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                            {benefit}
                                        </span>
                                    </FadeIn>
                                ))}
                            </ul>
                        </div>

                        {/* Migration Text - Properly Integrated */}
                        <FadeIn
                            delay={500}
                            direction="up"
                            className="mt-12 pt-8 border-t border-gray-800 lg:border-none lg:pt-8"
                        >
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                {t("migration_title")}
                            </h3>
                            <p className="text-gray-400 text-sm max-w-xl">
                                {t("migration_description")}
                            </p>
                        </FadeIn>
                    </div>

                    {/* Right Column: Image & CTA */}
                    <div className="flex flex-col justify-end items-center lg:items-end relative mt-8 lg:mt-0">

                        {/* Image - Large & Connected */}
                        <FadeIn
                            direction="left"
                            className="relative w-[calc(100%+4rem)] -mx-8 lg:w-[130%] lg:mx-0 h-[500px] lg:h-[600px] lg:absolute lg:bottom-16 lg:right-0 lg:-mr-20 pointer-events-none -mt-12 lg:mt-0 z-10"
                        >
                            <Image
                                src="/images/shared-hosting/support_guy.svg"
                                alt="Support Team"
                                fill
                                className="object-cover object-top lg:object-contain lg:object-right-bottom"
                                priority
                            />
                        </FadeIn>

                        {/* CTA Button Group - Anchored relative to image flow */}
                        <FadeIn
                            delay={600}
                            direction="zoom"
                            className="flex flex-col items-center lg:items-end gap-2 shrink-0 relative z-30 -mt-12 lg:mt-0"
                        >
                            <a href="#" className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#7c37eb] text-[#89d957] font-bold text-sm transition-colors hover:bg-[#7c37eb]/10 bg-[#13191d]">
                                {t("cta_button")}
                            </a>
                            <span className="text-xs text-white font-medium">
                                {t("guarantee")}
                            </span>
                        </FadeIn>
                    </div>
                </div>

            </div>
        </section>
    );
};
