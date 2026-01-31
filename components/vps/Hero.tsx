"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export const Hero = () => {
    const t = useTranslations("VPSHero");

    return (
        <section className="relative min-h-[100dvh] h-auto w-full text-white flex flex-col bg-[#13191d] overflow-x-hidden">
            {/* Background Blob/Gradient - Top Left */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-[40px] md:blur-[100px] pointer-events-none gpu-accelerated" />

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row lg:items-center justify-between pt-32 md:pt-40 lg:pt-0 pb-12 lg:pb-0 gap-12">

                {/* Left Container - Text Content */}
                <FadeIn
                    direction="right"
                    duration={600}
                    className="w-full lg:w-1/2 flex flex-col justify-center space-y-2 lg:space-y-2 xl:space-y-3 lg:pt-0 xl:pt-4 2xl:pt-8"
                >
                    <FadeIn
                        direction="up"
                        delay={200}
                        duration={600}
                        className="w-full"
                    >
                        <h1 className="font-bold leading-tight text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center lg:text-left"
                            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                        />
                    </FadeIn>

                    <FadeIn
                        direction="up"
                        delay={300}
                        duration={600}
                    >
                        <p className="text-gray-300 max-w-2xl text-sm lg:text-base xl:text-lg leading-relaxed text-left lg:text-left">
                            {t("subtitle")}
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 xl:gap-5 mt-8 lg:mt-10 mr-auto lg:mx-0 max-w-full sm:max-w-none">
                        {t.raw("features").map((text: string, i: number) => (
                            <FadeIn
                                key={i}
                                delay={400 + (i * 100)}
                                direction="left"
                                className="flex items-center gap-2 justify-start"
                            >
                                <div className="bg-[#a855f7] rounded-full p-1 shrink-0">
                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                </div>
                                <span className="text-[#a855f7] font-medium text-sm md:text-base">{text}</span>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn
                        direction="up"
                        delay={600}
                        duration={600}
                        className="pt-4 flex flex-col items-start"
                    >
                        <p className="text-[#d9d9d9] text-sm lg:text-base xl:text-lg mb-1 font-medium">{t("starting_at")}</p>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="font-bold text-white text-3xl lg:text-4xl xl:text-5xl">{t("price")}</span>
                            <span className="text-lg lg:text-xl xl:text-2xl text-gray-400">{t("period")}</span>
                        </div>

                        <button className="relative inline-flex items-center justify-center w-full lg:w-[200px] py-3 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-2xl overflow-hidden transition-all duration-200 hover:brightness-110 shadow-[0_0_20px_rgba(137,217,87,0.3)] self-start hover:scale-105 active:scale-95">
                            <span className="relative z-10">{t("cta_button")}</span>
                        </button>
                    </FadeIn>
                </FadeIn>

                {/* Right Container - Image */}
                <div className="hidden lg:flex w-full lg:w-1/2 relative items-center justify-center lg:justify-end mt-8 lg:mt-0 lg:pl-10">
                    <div className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px] flex items-center justify-center scale-90 lg:scale-100 xl:scale-110 -mt-8 lg:-mt-20 xl:-mt-24 2xl:-mt-8 translate-x-10 lg:translate-x-0 will-change-transform">
                        <div className="relative w-full h-full z-10">
                            <Image
                                src="/images/vps/VPS.svg"
                                alt="VPS Hosting"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Icons Section */}
            <FadeIn
                direction="up"
                delay={800}
                duration={600}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 pt-10 pb-8 relative z-40 rounded-xl px-4 lg:px-0 w-full content-padding-x mx-auto"
            >
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/home/icon-bandwidth.svg"
                            alt="Unlimited Bandwidth"
                            width={64}
                            height={64}
                            className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                        />
                    </div>
                    <p className="font-medium text-[#c9e265] text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.bandwidth")}</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/home/icon-ddos.svg"
                            alt="DDoS Protection"
                            width={64}
                            height={64}
                            className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                        />
                    </div>
                    <p className="font-medium text-[#c9e265] text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.ddos")}</p>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/home/icon-wordpress.svg"
                            alt="Managed Servers"
                            width={64}
                            height={64}
                            className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                        />
                    </div>
                    <p className="font-medium text-[#c9e265] text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.managed")}</p>
                </div>
            </FadeIn>
        </section>
    );
};
