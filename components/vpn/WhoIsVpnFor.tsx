"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const WhoIsVpnFor = () => {
    const t = useTranslations("WhoIsVpnFor");

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-24 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-20">

                {/* Section Title */}
                <FadeIn direction="up" duration={600}>
                    <h2
                        className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16"
                    >
                        {t("title")}
                    </h2>
                </FadeIn>

                {/* Three Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                    {/* Column 1: Startups */}
                    <FadeIn
                        delay={100}
                        duration={600}
                        direction="up"
                        className="flex flex-col items-center text-center space-y-4"
                    >
                        <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2">
                            <Image src="/images/vpn/who-1.svg" alt="Startups" fill className="object-contain" />
                        </div>
                        <h3 className="text-white text-lg lg:text-xl font-bold">{t("startups.title")}</h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-[280px]">
                            {t("startups.description")}
                        </p>
                    </FadeIn>

                    {/* Column 2: SMBs */}
                    <FadeIn
                        delay={200}
                        duration={600}
                        direction="up"
                        className="flex flex-col items-center text-center space-y-4"
                    >
                        <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2">
                            <Image src="/images/vpn/who-2.svg" alt="SMBs" fill className="object-contain" />
                        </div>
                        <h3 className="text-white text-lg lg:text-xl font-bold">{t("smbs.title")}</h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-[280px]">
                            {t("smbs.description")}
                        </p>
                    </FadeIn>

                    {/* Column 3: Enterprises */}
                    <FadeIn
                        delay={300}
                        duration={600}
                        direction="up"
                        className="flex flex-col items-center text-center space-y-4"
                    >
                        <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2">
                            <Image src="/images/vpn/who-3.svg" alt="Enterprises" fill className="object-contain" />
                        </div>
                        <h3 className="text-white text-lg lg:text-xl font-bold">{t("enterprises.title")}</h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-[280px]">
                            {t("enterprises.description")}
                        </p>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};
