"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";


export const Features = () => {
    const t = useTranslations("VpnFeatures");



    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32 overflow-hidden">
            {/* Background Blob - Top Right */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9fa3a7]/10 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 translate-x-1/3 -translate-y-1/3 gpu-accelerated" />

            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-20 flex flex-col gap-16 lg:gap-24">

                {/* Header (Optional, if needed for layout, otherwise just the grid) */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="space-y-4 max-w-3xl"
                >
                    <h2 className="text-[#bfeb5d] text-2xl md:text-3xl lg:text-4xl font-bold">
                        {t("title")}
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg max-w-2xl">
                        {t("description")}
                    </p>
                </FadeIn>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left Side - Features Grid */}
                    <div
                        className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12"
                    >
                        {/* Feature 1 */}
                        <FadeIn delay={100} duration={500} direction="up" className="space-y-4">
                            <div className="h-12 w-12 relative flex-shrink-0">
                                <Image src="/images/vpn/feature-1.svg" alt="Feature 1" fill className="object-contain" />
                            </div>
                            <h3 className="text-white text-lg font-bold">{t("items.feature_1.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t("items.feature_1.description")}</p>
                        </FadeIn>
                        {/* Feature 2 */}
                        <FadeIn delay={200} duration={500} direction="up" className="space-y-4">
                            <div className="h-12 w-12 relative flex-shrink-0">
                                <Image src="/images/vpn/feature-2.svg" alt="Feature 2" fill className="object-contain" />
                            </div>
                            <h3 className="text-white text-lg font-bold">{t("items.feature_2.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t("items.feature_2.description")}</p>
                        </FadeIn>
                        {/* Feature 3 */}
                        <FadeIn delay={300} duration={500} direction="up" className="space-y-4">
                            <div className="h-12 w-12 relative flex-shrink-0">
                                <Image src="/images/vpn/feature-3.svg" alt="Feature 3" fill className="object-contain" />
                            </div>
                            <h3 className="text-white text-lg font-bold">{t("items.feature_3.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t("items.feature_3.description")}</p>
                        </FadeIn>
                        {/* Feature 4 */}
                        <FadeIn delay={400} duration={500} direction="up" className="space-y-4">
                            <div className="h-12 w-12 relative flex-shrink-0">
                                <Image src="/images/vpn/feature-4.svg" alt="Feature 4" fill className="object-contain" />
                            </div>
                            <h3 className="text-white text-lg font-bold">{t("items.feature_4.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t("items.feature_4.description")}</p>
                        </FadeIn>
                        {/* Feature 5 */}
                        <FadeIn delay={500} duration={500} direction="up" className="space-y-4">
                            <div className="h-12 w-12 relative flex-shrink-0">
                                <Image src="/images/vpn/feature-5.svg" alt="Feature 5" fill className="object-contain" />
                            </div>
                            <h3 className="text-white text-lg font-bold">{t("items.feature_5.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t("items.feature_5.description")}</p>
                        </FadeIn>
                        {/* Feature 6 */}
                        <FadeIn delay={600} duration={500} direction="up" className="space-y-4">
                            <div className="h-12 w-12 relative flex-shrink-0">
                                <Image src="/images/vpn/feature-6.svg" alt="Feature 6" fill className="object-contain" />
                            </div>
                            <h3 className="text-white text-lg font-bold">{t("items.feature_6.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t("items.feature_6.description")}</p>
                        </FadeIn>
                    </div>

                    {/* Right Side - Pricing Box (from Managed Server Questions) */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-end items-center lg:items-end">
                        {/* Card */}
                        <FadeIn
                            direction="zoom"
                            delay={300}
                            duration={700}
                            className="w-full max-w-[400px] bg-[#090a19] border border-[#2a3a2a] rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                        >

                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#bfeb5d]/5 rounded-full blur-3xl pointer-events-none" />

                            <h3 className="text-[#bfeb5d] text-xl font-bold mb-4">
                                {t("pricing_card.card_title")}
                            </h3>
                            <p className="text-gray-400 text-sm mb-8">
                                {t("pricing_card.card_description")}
                            </p>

                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-gray-400 text-sm">{t("pricing_card.price_prefix")}</span>
                                <span className="text-white text-4xl font-bold">{t("pricing_card.price_value")}</span>
                                <span className="text-gray-400 text-sm">{t("pricing_card.price_suffix")}</span>
                            </div>

                            {/* Dropdown-like Selector */}
                            <div className="w-full relative mb-6">
                                <button className="w-full bg-white text-black px-4 py-3 rounded-lg flex items-center justify-between font-medium text-sm">
                                    <span>{t("pricing_card.dropdown_label")}</span>
                                    <ChevronDown className="w-4 h-4 text-black" />
                                </button>
                            </div>

                            <button className="w-full bg-[#bfeb5d] hover:bg-[#aadd45] text-[#13191d] font-bold py-3.5 rounded-lg transition-colors duration-200">
                                {t("pricing_card.button")}
                            </button>

                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
