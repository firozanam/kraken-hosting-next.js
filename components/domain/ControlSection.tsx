"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const ControlSection = () => {
    const t = useTranslations("ControlSection");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">


                <FadeIn direction="up" duration={600}>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 lg:mb-20"
                        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                    />
                </FadeIn>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-20">

                    {/* Left Side - Feature Cards */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {t.raw("features").map((feature: any, index: number) => (
                            <FadeIn
                                key={index}
                                direction="right"
                                duration={500}
                                delay={index * 100}
                                style={{ backgroundColor: '#7424e1' }}
                                className="p-6 lg:p-8 rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
                            >
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-sm lg:text-base xl:text-lg">
                                    {feature.description}
                                </p>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Right Side - Dashboard Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <FadeIn
                            direction="zoom"
                            delay={200}
                            duration={600}
                            className="relative w-full h-[250px] lg:h-auto lg:aspect-[4/3] max-w-[600px]"
                        >
                            <div
                                className="w-full h-full relative"
                            >
                                <Image
                                    src="/images/domain/control-dashboard.svg"
                                    alt="Kraken Control Dashboard"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};
