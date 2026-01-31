"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const Hero = () => {
    const t = useTranslations("ManagedServerHero");

    return (
        <section className="relative min-h-screen h-auto w-full text-white flex flex-col justify-center bg-[#13191d] overflow-hidden">
            {/* iOS Performance: Inline styles for CSS animation */}


            {/* Background Blob/Gradient - Top Left */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            {/* Reduced blur on mobile for iOS performance */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-[40px] md:blur-[100px] pointer-events-none will-change-transform" style={{ transform: 'translateZ(0)' }} />

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row items-center pt-32 md:pt-40 lg:pt-16 pb-12 lg:pb-0 gap-12">

                {/* Left Container - Text Content */}
                <FadeIn
                    direction="right"
                    duration={800}
                    className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:text-left z-20 will-change-transform"
                >
                    <div className="space-y-4">
                        <FadeIn direction="up" delay={200} duration={600}>
                            <h1 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left mt-8 lg:mt-12">
                                {t("title")}
                            </h1>
                        </FadeIn>
                        <FadeIn direction="up" delay={300} duration={600}>
                            <p className="text-gray-300 max-w-xl text-base lg:text-lg leading-relaxed lg:mx-0">
                                {t("description")}
                            </p>
                        </FadeIn>
                    </div>
                </FadeIn>

                <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative z-20">
                    <div className="relative w-full aspect-square max-w-[600px] lg:max-w-[700px]">
                        {/* Glow effect - reduced blur on mobile */}
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-[40px] md:blur-[100px] rounded-full pointer-events-none"
                            style={{ transform: 'translate(-50%, -50%) translateZ(0)', willChange: 'auto' }}
                        />

                        {/* CSS animation instead of Framer Motion for iOS performance */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/managed-server/hero-image.svg"
                                alt="Managed Server"
                                fill
                                className="object-contain drop-shadow-2xl relative z-10"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Features Section */}
            <div className="w-full content-padding-x mx-auto relative z-10 pb-24 mt-12 lg:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Feature 1 */}
                    <FadeIn
                        delay={100}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/managed-server/icon-1.svg"
                                alt={t("features.managed_security.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.managed_security.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.managed_security.description")}
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
                                src="/images/managed-server/icon-2.svg"
                                alt={t("features.proactive_protection.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.proactive_protection.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.proactive_protection.description")}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Feature 3 */}
                    <FadeIn
                        delay={300}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/managed-server/icon-3.svg"
                                alt={t("features.focus_business.title")}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-white font-bold text-lg">{t("features.focus_business.title")}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {t("features.focus_business.description")}
                            </p>
                        </div>
                    </FadeIn>

                    {/* Feature 4 */}
                    <FadeIn
                        delay={400}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/managed-server/icon-4.svg"
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
