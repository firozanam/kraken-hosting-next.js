"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

import { useIsMobile } from "@/hooks/useIsMobile";

export const TLDGridSection = () => {
    const t = useTranslations("TLDGridSection");
    const isMobile = useIsMobile(1024);

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                <FadeIn direction="up" duration={600}>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 lg:mb-16"
                        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                    />
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {t.raw("tlds").map((tld: any, index: number) => (
                        <FadeIn
                            key={index}
                            direction="up"
                            delay={index * 100}
                            duration={600}
                            className={`bg-[#090a19] border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:border-[#a3e635]/50 duration-300`}
                        >
                            <h3 className="text-4xl font-bold text-[#a3e635] mb-4">
                                {tld.name}
                            </h3>

                            <p className="text-gray-300 text-sm mb-6 flex-grow min-h-[60px] leading-relaxed">
                                {tld.description}
                            </p>

                            <div className="space-y-1 mb-6">
                                <p className="text-white font-bold text-lg">{tld.price}</p>
                                {tld.renewal && (
                                    <p className="text-white text-xs">{tld.renewal}</p>
                                )}
                                <p className="text-[#a3e635] text-sm font-bold mt-2">{tld.promo}</p>
                            </div>

                            <a href="#" className="block w-full py-3 bg-gradient-to-r from-[#89d957] to-[#c9e265] text-black font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-[#a3e635]/20 hover:scale-105 active:scale-95 duration-200">
                                {t("cta_button")}
                            </a>
                        </FadeIn>
                    ))}
                </div>

            </div>
        </section>
    );
};
