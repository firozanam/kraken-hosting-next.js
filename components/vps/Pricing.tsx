"use client";

import { useTranslations } from "next-intl";

import { useIsMobile } from "@/hooks/useIsMobile";
import { FadeIn } from "@/components/ui/FadeIn";

interface Plan {
    key: string;
    isPopular?: boolean;
}

export const Pricing = () => {
    const t = useTranslations("VPSPricing");
    const isMobile = useIsMobile(1024);

    const plans: Plan[] = [
        { key: "basic" },
        { key: "business" },
        { key: "growster" },
        { key: "kraken_one", isPopular: true }
    ];

    return (
        <section className="relative w-full bg-[#13191d] pt-20 lg:pt-32 pb-20 lg:pb-32">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                {/* Section Header */}
                <FadeIn direction="up" duration={600} className="text-center mb-12 lg:mb-16 space-y-4 relative z-20">
                    <h2
                        className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white"
                    >
                        {t("title")}
                    </h2>
                    <FadeIn direction="up" delay={200} duration={600}>
                        <p
                            className="text-gray-400 text-sm lg:text-base xl:text-lg max-w-2xl mx-auto"
                        >
                            {t("subtitle")}
                        </p>
                    </FadeIn>
                </FadeIn>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-20"
                >
                    {plans.map((plan, index) => {
                        const isPop = plan.isPopular;
                        const base = `plans.${plan.key}`;
                        return (
                            <FadeIn
                                key={index}
                                delay={index * 100}
                                duration={600}
                                direction="up"
                                className={`rounded-3xl p-6 flex flex-col h-full relative transition-transform duration-300 hover:translate-y-[-10px]
                                    ${isPop
                                        ? "bg-gradient-to-b from-[#BFF747] to-[#86efac] text-[#13191d]"
                                        : "bg-[#090a19] border border-gray-800 text-white"
                                    }
                                `}
                            >
                                {/* Header */}
                                <div className="mb-4">
                                    <h3 className={`text-xl font-bold mb-2 ${isPop ? "text-[#13191d]" : "text-[#BFF747]"}`}>
                                        {t(`${base}.name`)}
                                    </h3>
                                    <p className={`text-sm ${isPop ? "text-[#13191d]/80" : "text-gray-400"} h-10`}>
                                        {t(`${base}.description`)}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-3xl lg:text-4xl font-bold ${isPop ? "text-[#13191d]" : "text-[#BFF747]"}`}>
                                            {t(`${base}.price`)}
                                        </span>
                                        <span className={`text-sm ${isPop ? "text-[#13191d]/70" : "text-gray-500"}`}>{t(`${base}.period`)}</span>
                                    </div>
                                </div>

                                {/* Selection Box (Dropdown) */}
                                <div className={`mb-6 p-3 text-xs font-medium rounded-lg md:rounded-xl cursor-not-allowed
                                    bg-white text-[#13191d]
                                    }`}
                                >
                                    {t(`${base}.original_price`)}
                                </div>

                                {/* Model Name */}
                                <div className={`mb-4 text-base font-semibold ${isPop ? "text-[#13191d]" : "text-[#BFF747]"}`}>
                                    {t(`${base}.model`)}
                                </div>

                                {/* Features */}
                                <div className="flex-grow mb-8">
                                    <ul className="space-y-2">
                                        {t.raw(`${base}.features`).map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm">
                                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isPop ? "bg-[#13191d]" : "bg-white"}`} />
                                                <span className={isPop ? "text-[#13191d]" : "text-gray-300"}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bandwidth Text */}
                                <div className={`mb-6 text-xs font-bold text-center ${isPop ? "text-[#13191d]/70" : "text-[#BFF747]"}`}>
                                    {t(`${base}.bandwidth`)}
                                </div>

                                {/* Action Button */}
                                <div className="mt-auto">
                                    <button
                                        className={`w-full py-3 rounded-lg font-bold text-sm transition-all duration-200
                                            ${isPop
                                                ? "bg-[#13191d] text-[#BFF747] hover:bg-black"
                                                : "border border-[#abb1b1] bg-transparent text-[#BFF747] hover:border-[#BFF747] hover:text-[#BFF747]"
                                            }
                                        `}
                                    >
                                        {t("order_now")}
                                    </button>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>

                {/* Bottom CTA Box */}
                <FadeIn
                    direction="up"
                    delay={400}
                    duration={800}
                    className="mt-16 w-full bg-[#090a19] border border-white/5 rounded-[20px] p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 relative overflow-hidden group"
                >
                    <div className="relative z-10 text-center lg:text-left flex-1 min-w-0 w-full">
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 lg:mb-2 tracking-tight">
                            {t("bottom_cta.title")}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {t("bottom_cta.subtitle")}
                        </p>
                    </div>
                    <button
                        className="relative z-10 inline-flex items-center justify-center w-full lg:w-[200px] py-3 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-2xl overflow-hidden transition-all duration-200 hover:brightness-110 shadow-[0_0_20px_rgba(137,217,87,0.3)] flex-shrink-0 hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10">{t("bottom_cta.button")}</span>
                    </button>

                    {/* Subtle glow/gradient background effect if needed */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#BFF747]/5 to-transparent pointer-events-none opacity-50" />
                </FadeIn>

            </div>
        </section>
    );
};
