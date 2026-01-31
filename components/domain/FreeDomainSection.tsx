"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const FreeDomainSection = () => {
    const t = useTranslations("FreeDomainSection");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24">

            <div className="absolute inset-0 opacity-100 pointer-events-none">
                <Image
                    src="/images/domain/free-domain-bg.svg"
                    alt="Background Pattern"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                <FadeIn
                    direction="zoom"
                    duration={600}
                    className="bg-[#000000] border border-white/5 rounded-[2.5rem] p-8 lg:p-12 relative overflow-visible"
                >
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-12">

                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 space-y-8 z-10">
                            <FadeIn
                                direction="right"
                                delay={200}
                                duration={500}
                                className="space-y-4"
                            >
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                    {t("title")}
                                </h2>
                                <p className="text-gray-300 text-sm lg:text-base xl:text-lg">
                                    {t("subtitle")}
                                </p>
                            </FadeIn>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <FadeIn
                                    delay={400}
                                    direction="up"
                                    className="space-y-1"
                                >
                                    <h3 className="text-2xl font-bold text-white">.se</h3>
                                    <p className="text-white font-medium">{t("tlds.se.price")}</p>
                                    <p className="text-white text-sm font-bold">{t("tlds.se.promo")}</p>
                                </FadeIn>
                                <FadeIn
                                    delay={500}
                                    direction="up"
                                    className="space-y-1"
                                >
                                    <h3 className="text-2xl font-bold text-white">.com</h3>
                                    <p className="text-white font-medium">{t("tlds.com.price")}</p>
                                    <p className="text-white text-sm font-bold">{t("tlds.com.promo")}</p>
                                </FadeIn>
                            </div>
                        </div>

                        {/* Right Content - Image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
                            <FadeIn
                                direction="left"
                                delay={300}
                                duration={600}
                                className="relative w-full h-[300px] lg:h-[400px]"
                            >
                                {/* Glow behind image - optimized for iOS */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/10 blur-[30px] md:blur-[50px] rounded-full pointer-events-none gpu-accelerated" />

                                <Image
                                    src="/images/domain/free-domain-image.svg"
                                    alt="Free Domain Offer"
                                    fill
                                    className="object-contain"
                                />
                            </FadeIn>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
