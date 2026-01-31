"use client";

import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";


export const Installation = () => {
    const t = useTranslations("SslInstallation");

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-24 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-20 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                {/* Left Side: Installation Steps */}
                <FadeIn
                    direction="right"
                    duration={600}
                    className="w-full lg:w-3/5 space-y-8"
                >
                    <h2 className="text-[#89d957] text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                        {t("title")}
                    </h2>

                    {/* Step 1 */}
                    <FadeIn
                        direction="right"
                        delay={200}
                        duration={400}
                        className="space-y-2"
                    >
                        <h3 className="text-white text-lg lg:text-xl font-bold">
                            {t("steps.order.title")}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            {t("steps.order.description")}
                        </p>
                    </FadeIn>

                    {/* Step 2 */}
                    <FadeIn
                        direction="right"
                        delay={300}
                        duration={400}
                        className="space-y-2"
                    >
                        <h3 className="text-white text-lg lg:text-xl font-bold">
                            {t("steps.install.title")}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            {t("steps.install.description")}
                        </p>
                    </FadeIn>

                    {/* Step 3 */}
                    <FadeIn
                        direction="right"
                        delay={400}
                        duration={400}
                        className="space-y-2"
                    >
                        <h3 className="text-white text-lg lg:text-xl font-bold">
                            {t("steps.redirect.title")}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                            {t("steps.redirect.description")}
                        </p>
                    </FadeIn>
                </FadeIn>

                {/* Right Side: Pricing Card */}
                <FadeIn
                    direction="left"
                    delay={200}
                    duration={600}
                    className="w-full lg:w-2/5 flex justify-center lg:justify-end"
                >
                    <div className="w-full max-w-[400px] bg-[#090a19] border border-[#2a3a2a] rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">

                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#bfeb5d]/5 rounded-full blur-3xl pointer-events-none" />

                        <h3 className="text-[#bfeb5d] text-xl font-bold mb-4">
                            {t("pricing.title")}
                        </h3>

                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-gray-400 text-sm">{t("pricing.from")}</span>
                            <span className="text-white text-4xl font-bold">{t("pricing.price")}</span>
                        </div>

                        {/* Dropdown */}
                        <div className="w-full relative mb-6">
                            <button className="w-full bg-white text-black px-4 py-3 rounded-lg flex items-center justify-between font-medium text-sm">
                                <span>{t("pricing.duration")}</span>
                                <ChevronDown className="w-4 h-4 text-black" />
                            </button>
                        </div>

                        <button className="w-full bg-[#bfeb5d] hover:bg-[#aadd45] text-[#13191d] font-bold py-3.5 rounded-lg transition-colors duration-200">
                            {t("pricing.button")}
                        </button>

                    </div>
                </FadeIn>

            </div>
        </section >
    );
};
