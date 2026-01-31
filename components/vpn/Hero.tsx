"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const Hero = () => {
    const t = useTranslations("VPNHero");

    return (
        <section className="relative min-h-screen h-auto w-full text-white flex flex-col justify-center bg-[#13191d] overflow-hidden">
            {/* Background Blob/Gradient - Top Left */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-[40px] md:blur-[100px] pointer-events-none gpu-accelerated" />

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row items-center pt-32 md:pt-40 lg:pt-24 pb-12 lg:pb-0 gap-12">

                {/* Left Container - Text Content */}
                {/* User requested alignment on top -> justify-start? The previous one was justify-center */}
                <div className="w-full lg:w-1/2 flex flex-col justify-start space-y-6 lg:text-left z-20 h-full">
                    <div className="space-y-4">
                        <FadeIn direction="up" duration={600}>
                            <h1
                                className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left mt-8 lg:mt-0"
                            >
                                {t("title")}
                            </h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={200} duration={600}>
                            <p
                                className="text-gray-300 max-w-xl text-base lg:text-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0"
                            >
                                {t("description")}
                            </p>
                        </FadeIn>
                    </div>
                </div>

                <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative z-20">
                    <div className="relative w-full aspect-square max-w-[600px] lg:max-w-[800px]">
                        {/* Glow effect - optimized for iOS */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-[40px] md:blur-[100px] rounded-full pointer-events-none gpu-accelerated" />

                        <Image
                            src="/images/vpn/hero-image.svg"
                            alt="Kraken Secure VPN"
                            fill
                            className="object-contain drop-shadow-2xl relative z-10 duration-500"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Features Section */}
            <div className="w-full content-padding-x mx-auto relative z-10 pb-24 mt-12 lg:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Feature 1 - Managed Server Icon 1 */}
                    {/* Feature 1 - Managed Server Icon 1 */}
                    {/* Feature 1 - Managed Server Icon 1 */}
                    {/* Feature 1 - Managed Server Icon 1 */}
                    <FadeIn
                        delay={100}
                        duration={500}
                        direction="up"
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/managed-server/icon-1.svg"
                                alt={t("features.security.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.security.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.security.description")}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Feature 2 - New VPN Icon */}
                    {/* Feature 2 - New VPN Icon */}
                    <FadeIn
                        delay={200}
                        duration={500}
                        direction="up"
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/vpn/icon-2.svg"
                                alt={t("features.privacy.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.privacy.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.privacy.description")}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Feature 3 - Managed Server Icon 4 (Last one) */}
                    {/* Feature 3 - Managed Server Icon 4 (Last one) */}
                    <FadeIn
                        delay={300}
                        duration={500}
                        direction="up"
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/managed-server/icon-4.svg"
                                alt={t("features.simplicity.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.simplicity.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.simplicity.description")}
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};
