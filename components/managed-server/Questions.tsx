"use client";

import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";


export const Questions = () => {
    const t = useTranslations("ManagedServerQuestions");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">

            {/* White Blob - Top Left (Merging with previous section) */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 -translate-x-1/2 -translate-y-1/2 gpu-accelerated" />

            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-20 flex flex-col gap-12 lg:gap-20">

                {/* Top Center Header */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center space-y-4 max-w-4xl mx-auto"
                >
                    <h2 className="text-[#bfeb5d] text-2xl md:text-3xl lg:text-4xl font-bold">
                        {t("title")}
                    </h2>
                    <p className="text-gray-300 text-sm lg:text-base">
                        {t("subtitle")}
                    </p>
                </FadeIn>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* Left Column: Text Content */}
                    <FadeIn
                        direction="right"
                        delay={200}
                        duration={600}
                        className="w-full lg:w-3/5 space-y-6"
                    >
                        <h3 className="text-white text-xl lg:text-2xl font-bold">
                            {t("left_content.title")}
                        </h3>
                        <p className="text-gray-300 font-medium text-sm lg:text-base">
                            {t("left_content.subtitle")}
                        </p>
                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                            {t("left_content.description")}
                        </p>
                    </FadeIn>

                    {/* Right Column: Pricing Card */}
                    <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end">

                        {/* Header outside card */}
                        <FadeIn
                            direction="up"
                            delay={300}
                            duration={500}
                            className="mb-6 text-center lg:text-right w-full max-w-[400px]"
                        >
                            <p className="text-[#bfeb5d] font-semibold text-lg lg:text-xl leading-tight">
                                {t("pricing_card.header")}
                            </p>
                        </FadeIn>

                        {/* Card */}
                        <FadeIn
                            direction="zoom"
                            delay={400}
                            duration={600}
                            className="w-full max-w-[400px] bg-[#090a19] border border-[#2a3a2a] rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden transition-transform duration-300 hover:scale-105"
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
