"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const Hero = () => {
    const t = useTranslations("DomainHero");

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
                            <h1
                                className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left mt-8 lg:mt-12"
                                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                            />
                        </FadeIn>
                        <FadeIn direction="up" delay={300} duration={600}>
                            <p className="text-gray-300 max-w-xl text-base lg:text-lg leading-relaxed lg:mx-0">
                                {t("description")}
                            </p>
                        </FadeIn>
                    </div>
                </FadeIn>

                {/* Right Container - Image */}
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
                                src="/images/domain/hero-person.svg"
                                alt="Domain Services"
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Feature 1 */}
                    <FadeIn
                        delay={100}
                        duration={600}
                        className="flex flex-col items-center text-center gap-4 group"
                    >
                        <div className="w-16 h-16 relative transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/domain/icon-ssl.svg"
                                alt="Free SSL"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.ssl")}</p>
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
                                src="/images/domain/icon-ddos.svg"
                                alt="DDoS Protection"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.ddos")}</p>
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
                                src="/images/domain/icon-support.svg"
                                alt="24/7 Support"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">{t("bottom_features.support")}</p>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
