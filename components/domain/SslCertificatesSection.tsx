"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const SslCertificatesSection = () => {
    const t = useTranslations("SslCertificatesSection");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">

            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                {/* Centered Header */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center mb-16 lg:mb-20"
                >
                    <span className="text-[#89d957] font-medium tracking-wide block mb-4 text-base lg:text-lg">
                        {t("header_small")}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
                        {t("title")}
                    </h2>
                </FadeIn>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Content - Left Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <FadeIn
                            direction="right"
                            delay={100}
                            duration={500}
                        >
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {t("description")}
                            </p>
                        </FadeIn>

                        <ul className="space-y-4">
                            {(t.raw("features") as string[]).map((feature, index) => (
                                <FadeIn
                                    key={index}
                                    direction="right"
                                    delay={(2 + index) * 100}
                                    duration={300}
                                    className="flex items-start gap-3"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="text-gray-300 leading-relaxed font-medium">{feature}</span>
                                </FadeIn>
                            ))}
                        </ul>

                        <FadeIn
                            direction="up"
                            delay={500}
                            duration={500}
                            className="pt-2"
                        >
                            <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#89d957] transition-colors">
                                {t("read_more")}
                            </a>
                        </FadeIn>
                    </div>

                    {/* Image - Right Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <FadeIn
                            direction="zoom"
                            duration={800}
                            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square"
                        >
                            <Image
                                src="/images/domain/ssl-certificate.svg"
                                alt="SSL Certificate"
                                fill
                                className="object-contain"
                            />
                        </FadeIn>
                        {/* Background Blob - optimized for iOS */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#89d957] opacity-5 blur-[40px] md:blur-[100px] rounded-full pointer-events-none -z-10 gpu-accelerated" />
                    </div>
                </div>
            </div>
        </section>
    );
};
