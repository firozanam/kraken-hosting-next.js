"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const Hero = () => {
    const t = useTranslations("ProductsHero");

    return (
        <section className="relative min-h-screen h-auto w-full text-white flex flex-col justify-center bg-[#13191d] overflow-hidden">
            {/* Background Blob/Gradient - Top Left */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-[40px] md:blur-[100px] pointer-events-none gpu-accelerated" />

            {/* Background Image/Composition - Reusing the Products .svg as the main visual if it fits, or as detailed BG */}
            {/* Based on screenshot, there is a background image with lock and laptop. Assuming that's hero-bg.svg */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src="/images/products/hero-bg.svg"
                    alt="Security Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#13191d]/90 to-[#13191d]/60 lg:to-[#13191d]/20" />
            </div>

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col items-center lg:items-start pt-32 md:pt-40 lg:pt-16 pb-12 lg:pb-0">

                {/* Text Content */}
                <div className="w-full max-w-2xl flex flex-col justify-center space-y-6 text-center lg:text-left z-20">
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
                                className="text-gray-300 max-w-xl text-sm lg:text-base xl:text-lg leading-relaxed lg:mx-0"
                            >
                                {t("description")}
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Bottom Features Section (24/7, Backup, etc.) */}
                <div className="w-full mt-16 lg:mt-32">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8"
                    >
                        {/* Feature 1 */}
                        <FadeIn
                            delay={0}
                            duration={600}
                            className="flex flex-col items-center text-center gap-4 group"
                        >
                            <div className="w-20 h-20 relative flex items-center justify-center bg-white/5 rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/images/products/icon-1.svg"
                                    alt={t("features.24_7_support.title")}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-white font-bold text-lg">{t("features.24_7_support.title")}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                    {t("features.24_7_support.description")}
                                </p>
                            </div>
                        </FadeIn>

                        {/* Feature 2 */}
                        <FadeIn
                            delay={200}
                            duration={600}
                            className="flex flex-col items-center text-center gap-4 group"
                        >
                            <div className="w-20 h-20 relative flex items-center justify-center bg-white/5 rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/images/products/icon-2.svg"
                                    alt={t("features.daily_backup.title")}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-white font-bold text-lg">{t("features.daily_backup.title")}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                    {t("features.daily_backup.description")}
                                </p>
                            </div>
                        </FadeIn>

                        {/* Feature 3 */}
                        <FadeIn
                            delay={400}
                            duration={600}
                            className="flex flex-col items-center text-center gap-4 group"
                        >
                            <div className="w-20 h-20 relative flex items-center justify-center bg-white/5 rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/images/products/icon-3.svg"
                                    alt={t("features.money_back.title")}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-white font-bold text-lg">{t("features.money_back.title")}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                    {t("features.money_back.description")}
                                </p>
                            </div>
                        </FadeIn>

                        {/* Feature 4 */}
                        <FadeIn
                            delay={600}
                            duration={600}
                            className="flex flex-col items-center text-center gap-4 group"
                        >
                            <div className="w-20 h-20 relative flex items-center justify-center bg-white/5 rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/images/products/icon-4.svg"
                                    alt={t("features.24_7_monitoring.title")}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                    priority={false}
                                />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-white font-bold text-lg">{t("features.24_7_monitoring.title")}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                    {t("features.24_7_monitoring.description")}
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>

            </div>
        </section>
    );
};
