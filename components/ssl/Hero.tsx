"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const Hero = () => {
    const t = useTranslations("SslHero");

    return (
        <section className="relative min-h-screen h-auto w-full text-white flex flex-col justify-center bg-[#13191d] overflow-hidden">
            {/* Background Blob/Gradient - Top Left */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-[40px] md:blur-[100px] pointer-events-none gpu-accelerated" />

            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src="/images/website-security/dashboard.png"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#13191d]/90 to-[#13191d]/40" />
            </div>

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col items-center lg:items-start pt-32 md:pt-40 lg:pt-16 pb-12 lg:pb-0">
                {/* Text Content */}
                <div className="w-full max-w-4xl flex flex-col justify-center space-y-6 lg:text-left z-20">
                    <div className="space-y-4">
                        <FadeIn direction="up" delay={200} duration={600}>
                            <h1
                                className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left mt-8 lg:mt-12"
                            >
                                {t("title")}
                            </h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={300} duration={600}>
                            <p
                                className="text-gray-300 max-w-2xl text-base lg:text-lg leading-relaxed lg:mx-0"
                            >
                                {t("description")}
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Bottom Features Section - 3 icons */}
            <div className="w-full content-padding-x mx-auto relative z-10 pb-24 mt-12 lg:mt-20">
                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                >
                    {/* Feature 1: Higher security */}
                    <FadeIn
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/managed-server/icon-1.svg"
                                alt={t("features.security.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.security.title")}</h3>
                        </div>
                    </FadeIn>

                    {/* Feature 2: Better SEO */}
                    <FadeIn
                        delay={200}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/managed-server/icon-2.svg"
                                alt={t("features.seo.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.seo.title")}</h3>
                        </div>
                    </FadeIn>

                    {/* Feature 3: Padlock icon */}
                    <FadeIn
                        delay={400}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-12 h-12 lg:w-16 lg:h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/managed-server/icon-4.svg"
                                alt={t("features.padlock.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.padlock.title")}</h3>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
