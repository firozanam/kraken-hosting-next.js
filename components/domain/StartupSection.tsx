"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const StartupSection = () => {
    const t = useTranslations("StartupSection");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[50px] md:blur-[120px] rounded-full pointer-events-none gpu-accelerated" />

            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                <FadeIn direction="up" duration={600}>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16 lg:mb-20"
                    >
                        {t("title")}
                    </h2>
                </FadeIn>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <FadeIn
                        direction="zoom"
                        duration={800}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div
                            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/domain/startups-hosting.svg"
                                alt="Startup Hosting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </FadeIn>

                    <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12">
                        <FadeIn
                            direction="right"
                            delay={200}
                            duration={500}
                        >
                            <p className="text-gray-300 text-sm lg:text-base xl:text-lg leading-relaxed">
                                {t("description")}
                            </p>
                        </FadeIn>

                        <FadeIn
                            direction="right"
                            delay={300}
                            duration={500}
                        >
                            <p className="text-xl lg:text-2xl font-bold text-white leading-tight">
                                {t("emphasis")}
                            </p>
                        </FadeIn>

                        <FadeIn
                            direction="right"
                            delay={400}
                            duration={500}
                        >
                            <p className="text-xl font-medium text-white">
                                {t("slogan")}
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
