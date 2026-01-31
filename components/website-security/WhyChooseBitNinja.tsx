
"use client";


import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";


export const WhyChooseBitNinja = () => {
    const t = useTranslations("WhyChoose");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">

                {/* Left Column: Text Content */}
                <FadeIn
                    direction="right"
                    duration={600}
                    className="w-full lg:w-3/5 space-y-8"
                >
                    <div>
                        <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">
                            {t("title")}
                        </h2>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            {t("description")}
                        </p>
                    </div>

                    <h3 className="text-[#bfeb5d] text-lg lg:text-xl font-bold">
                        {t("subtitle")}
                    </h3>

                    <ul className="space-y-4">
                        {[0, 1, 2, 3].map((index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                <span className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                    {t(`bullets.${index}`)}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-white text-sm lg:text-base font-medium leading-relaxed">
                        {t("closing")}
                    </p>
                </FadeIn>

                {/* Right Column: Pricing Card */}
                <FadeIn
                    direction="left"
                    delay={200}
                    duration={600}
                    className="w-full lg:w-2/5 flex flex-col items-center lg:items-end"
                >

                    {/* Header outside card */}
                    <div className="mb-6 text-center lg:text-left w-full max-w-[400px]">
                        <p className="text-[#bfeb5d] font-semibold text-lg lg:text-xl leading-tight">
                            {t("pricing_card.header")}
                        </p>
                    </div>

                    {/* Card */}
                    <div className="w-full max-w-[400px] bg-[#090a19] border border-[#2a3a2a] rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#bfeb5d]/5 rounded-full blur-3xl pointer-events-none" />

                        <h3 className="text-[#bfeb5d] text-2xl font-bold mb-2">
                            {t("pricing_card.title")}
                        </h3>
                        <p className="text-gray-400 text-sm mb-8">
                            {t("pricing_card.subtitle")}
                        </p>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-gray-400 text-sm">{t("pricing_card.price_prefix")}</span>
                            <span className="text-white text-4xl font-bold">{t("pricing_card.price_value")}</span>
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

                    </div>

                </FadeIn>

            </div>
        </section>
    );
};
