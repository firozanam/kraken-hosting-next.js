"use client";

import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export const Installation = () => {
    const t = useTranslations("KrakenSecureWebInstallation");

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-24 overflow-hidden">
            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                {/* Left Side: Headline */}
                <FadeIn
                    direction="right"
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                >
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-center">
                        {t("headline_line1")}
                        <br />
                        {t.rich("headline_line2", {
                            green: (chunks) => <span className="text-[#89d957]">{chunks}</span>
                        })}
                        <br />
                        {t("headline_line3")}
                    </h2>
                </FadeIn>

                {/* Right Side: Pricing Card */}
                <FadeIn
                    direction="left"
                    delay={200}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                >
                    <div className="w-full max-w-[400px] bg-[#090a19] border border-[#2a3a2a] rounded-xl p-8 flex flex-col items-start text-left shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">

                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#bfeb5d]/5 rounded-full blur-3xl pointer-events-none" />

                        <h3 className="text-[#bfeb5d] text-xl font-bold mb-1">
                            {t("pricing.title")}
                        </h3>
                        <p className="text-white text-sm font-medium mb-6">
                            {t("pricing.subtitle")}
                        </p>

                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-white text-lg">{t("pricing.from")}</span>
                            <span className="text-white text-4xl font-bold mx-1">{t("pricing.price")}</span>
                            <span className="text-white text-sm">{t("pricing.period")}.</span>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-4 mb-8 w-full">
                            {[0, 1, 2, 3].map((index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-white text-[11px] font-bold tracking-wide uppercase leading-tight">
                                        {t(`pricing.features.${index}`)}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Dropdown */}
                        <div className="w-full relative mb-6">
                            <button className="w-full bg-white text-black px-4 py-3 rounded text-sm font-bold flex items-center justify-between">
                                <span>{t("pricing.duration_option")}</span>
                                <ChevronDown className="w-4 h-4 text-black" />
                            </button>
                        </div>

                        <button className="w-full bg-[#bfeb5d] hover:bg-[#aadd45] text-[#13191d] font-bold py-3.5 rounded transition-colors duration-200 uppercase text-sm">
                            {t("pricing.button")}
                        </button>

                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
