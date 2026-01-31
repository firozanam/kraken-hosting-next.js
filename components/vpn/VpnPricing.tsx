"use client";

import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";


export const VpnPricing = () => {
    const t = useTranslations("WhatIsVpn");

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-24 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-20 flex justify-end">

                {/* Pricing Card */}
                <FadeIn
                    direction="zoom"
                    duration={600}
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
        </section>
    );
};
