"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const WhyKrakenVpn = () => {
    const t = useTranslations("WhyKrakenVpn");

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

                {/* Two Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">

                    {/* Column 1 */}
                    <FadeIn
                        direction="right"
                        delay={100}
                        duration={600}
                        className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
                    >
                        <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2">
                            <Image src="/images/vpn/why-1.svg" alt="Fast VPN" fill className="object-contain" />
                        </div>
                        <h3 className="text-white text-lg lg:text-xl font-bold">{t("fast.title")}</h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            {t("fast.description")}
                        </p>
                    </FadeIn>

                    {/* Column 2 */}
                    <FadeIn
                        direction="left"
                        delay={100}
                        duration={600}
                        className="flex flex-col items-center md:items-start text-center md:text-left space-y-4"
                    >
                        <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2">
                            <Image src="/images/vpn/why-2.svg" alt="Secure Companies" fill className="object-contain" />
                        </div>
                        <h3 className="text-white text-lg lg:text-xl font-bold">{t("secure.title")}</h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            {t("secure.description")}
                        </p>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};
