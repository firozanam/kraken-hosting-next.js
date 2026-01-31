"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const Hero = () => {
    const t = useTranslations("WebsiteSecurityHero");

    return (
        <section className="relative min-h-screen h-auto w-full text-white flex flex-col bg-[#13191d] overflow-hidden">
            {/* Background Blob/Gradient - Top Left */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-[40px] md:blur-[100px] pointer-events-none gpu-accelerated" />

            {/* Background Dashboard Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image
                    src="/images/website-security/dashboard.png"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#13191d]/90 to-[#13191d]/40" />
            </div>

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row lg:items-center justify-between pt-32 md:pt-40 pb-12 lg:pt-0 lg:pb-0 gap-12">

                {/* Left Container - Text Content */}
                <FadeIn
                    direction="right"
                    duration={600}
                    className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:text-left z-20 lg:pt-8 xl:pt-12 2xl:pt-16"
                >
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
                                className="text-gray-300 max-w-xl text-base lg:text-lg leading-relaxed lg:mx-0"
                            >
                                {t("description")}
                            </p>
                        </FadeIn>
                    </div>
                </FadeIn>

                {/* Right Container - BitNinja Image */}
                <FadeIn
                    direction="zoom"
                    delay={400}
                    duration={800}
                    className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative mt-12 lg:mt-0 lg:ml-12 z-20"
                >
                    <div className="relative w-full aspect-square max-w-[450px] lg:max-w-[600px]">
                        {/* Glow effect - optimized for iOS */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-[40px] md:blur-[100px] rounded-full pointer-events-none gpu-accelerated" />

                        <Image
                            src="/images/website-security/bitninja.svg"
                            alt="BitNinja Security"
                            fill
                            className="object-contain drop-shadow-2xl relative z-10"
                            priority
                            style={{ animationDuration: '6s' }}
                        />
                    </div>
                </FadeIn>
            </div>

            {/* Bottom Features Section */}
            <div className="w-full content-padding-x mx-auto relative z-10 pb-24 mt-12 lg:mt-20">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                >
                    {/* Feature 1 */}
                    <FadeIn
                        delay={0}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/website-security/icon-1.svg"
                                alt={t("features.complete_security.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.complete_security.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.complete_security.description")}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Feature 2 */}
                    <FadeIn
                        delay={200}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/website-security/icon-2.svg"
                                alt={t("features.total_control.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.total_control.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.total_control.description")}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Feature 3 */}
                    <FadeIn
                        delay={400}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/website-security/icon-3.svg"
                                alt={t("features.full_visibility.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.full_visibility.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.full_visibility.description")}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Feature 4 */}
                    <FadeIn
                        delay={600}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/website-security/icon-4.svg"
                                alt={t("features.simple_interface.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.simple_interface.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.simple_interface.description")}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
