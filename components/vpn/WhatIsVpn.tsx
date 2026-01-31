"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";


export const WhatIsVpn = () => {
    const t = useTranslations("WhatIsVpn");

    return (
        <section className="relative w-full bg-[#13191d] overflow-hidden">
            {/* Top Green Banner */}
            <FadeIn
                direction="up"
                duration={600}
                className="w-full bg-[#89d957] py-4 text-center"
            >
                <h2 className="text-[#13191d] text-xl md:text-2xl lg:text-3xl font-bold">
                    {t("banner_title")}
                </h2>
            </FadeIn>

            <div className="relative py-20 lg:py-24">
                {/* Right Side Blob - requested color #9fa3a7 */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9fa3a7]/10 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 translate-x-1/3 -translate-y-1/3 gpu-accelerated" />

                <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-20 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

                    {/* Left Column: Diagram Image */}
                    <div className="w-full lg:w-3/5 relative flex items-center justify-center lg:justify-start">
                        <FadeIn
                            direction="left"
                            duration={800}
                            className="relative w-full max-w-[500px] aspect-[4/3]"
                        >
                            <Image
                                src="/images/vpn/diagram.svg"
                                alt="VPN Network Diagram"
                                fill
                                className="object-contain"
                            />
                        </FadeIn>
                    </div>

                    {/* Right Column: Text Content - Vertically Centered */}
                    <div className="w-full lg:w-2/5 flex items-center">
                        <div className="w-full space-y-6">
                            <FadeIn direction="right" duration={600}>
                                <h3
                                    className="text-[#89d957] text-lg lg:text-xl xl:text-2xl font-bold text-center lg:text-left"
                                >
                                    {t("content_title")}
                                </h3>
                            </FadeIn>
                            <FadeIn direction="right" delay={100} duration={600}>
                                <p
                                    className="text-gray-300 text-sm lg:text-base xl:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
                                >
                                    {t("content_description")}
                                </p>
                            </FadeIn>
                            <ul
                                className="space-y-3 max-w-xl mx-auto lg:mx-0"
                            >
                                {[1, 2, 3].map((num, i) => (
                                    <FadeIn direction="right" delay={(2 + i) * 100} duration={400} key={num} className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                        {t(`bullets.point_${num}`)}
                                    </FadeIn>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
