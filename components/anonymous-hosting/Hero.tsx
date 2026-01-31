"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export const Hero = () => {
    const t = useTranslations("AnonymousHero");

    return (
        <section className="relative min-h-screen h-auto w-full text-white flex flex-col bg-[#13191d] overflow-hidden">
            {/* Background Blob/Gradient - Top Left (Optimized) */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(34,197,94,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row lg:items-center justify-between pt-32 md:pt-40 pb-12 lg:pt-0 lg:pb-0 gap-12">

                {/* Left Container - Text Content */}
                <FadeIn
                    direction="right"
                    duration={600}
                    className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:pt-12 xl:pt-16 2xl:pt-20"
                >
                    <h1 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left w-full"
                        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                    />

                    <p className="text-gray-300 max-w-2xl text-sm lg:text-base xl:text-lg leading-relaxed text-left">
                        {t("subtitle")}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 xl:gap-5 max-w-lg">
                        {t.raw("features").map((text: string, i: number) => (
                            <FadeIn
                                key={i}
                                delay={200 + (i * 100)}
                                direction="left"
                                className="flex items-center gap-2"
                            >
                                <div className="bg-[#a855f7] rounded-full p-1 shrink-0">
                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                </div>
                                <span className="text-[#a855f7] font-medium text-sm md:text-base">{text}</span>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="pt-4 flex flex-col items-start text-left">
                        <p className="text-[#d9d9d9] text-sm lg:text-base xl:text-lg mb-1 font-medium">{t("starting_at")}</p>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="font-bold text-[#89d957] text-3xl lg:text-4xl xl:text-5xl">{t("price")}</span>
                            <span className="text-lg lg:text-xl xl:text-2xl text-gray-400">{t("period")}</span>
                        </div>

                        <button className="relative inline-flex items-center justify-center w-full lg:w-[200px] py-3 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-2xl overflow-hidden transition-all duration-200 hover:brightness-110 shadow-[0_0_20px_rgba(137,217,87,0.3)] self-start">
                            <span className="relative z-10">{t("cta_button")}</span>
                        </button>
                    </div>
                </FadeIn>

                {/* Right Container - Image */}
                <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative mt-8 lg:mt-0 lg:pl-10">
                    <div className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px] flex items-center justify-center scale-125 lg:scale-[1.4] xl:scale-[1.5] -mt-24 lg:-mt-48 xl:-mt-56 translate-x-10 lg:translate-x-0 will-change-transform">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/privacy-shared-hosting/hero.svg"
                                alt="Anonymous Offshore Hosting"
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
            <div className="w-full content-padding-x mx-auto mt-20 mb-20 relative z-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FadeIn
                        delay={600}
                        direction="up"
                        className="flex flex-col items-center text-center gap-4"
                    >
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/privacy-shared-hosting/icon-feature-1.svg"
                                alt="Security"
                                width={64}
                                height={64}
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <p className="font-medium text-[#c9e265] text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.security")}</p>
                    </FadeIn>
                    <FadeIn
                        delay={700}
                        direction="up"
                        className="flex flex-col items-center text-center gap-4"
                    >
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/home/icon-ddos.svg"
                                alt="DDoS Protection"
                                width={64}
                                height={64}
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <p className="font-medium text-[#c9e265] text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.ddos")}</p>
                    </FadeIn>
                    <FadeIn
                        delay={800}
                        direction="up"
                        className="flex flex-col items-center text-center gap-4"
                    >
                        <div className="flex items-center justify-center">
                            <Image
                                src="/images/shared-hosting/icon-managed.svg"
                                alt="Managed Servers"
                                width={64}
                                height={64}
                                className="w-16 h-16 object-contain"
                            />
                        </div>
                        <p className="font-medium text-[#c9e265] text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.managed")}</p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
