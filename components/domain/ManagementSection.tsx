"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const ManagementSection = () => {
    const t = useTranslations("ManagementSection");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">

            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[40px] md:blur-[100px] rounded-full pointer-events-none gpu-accelerated" />

            {/* Left Edge White Blob */}
            <div className="absolute top-1/2 left-[-100px] lg:left-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/10 blur-[50px] md:blur-[120px] rounded-full pointer-events-none gpu-accelerated" />

            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                {/* Header */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        {t("title")}
                    </h2>
                    <p className="text-gray-300 text-sm lg:text-base xl:text-lg">
                        {t("subtitle")}
                    </p>
                </FadeIn>

                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Side - Content */}
                    <div className="w-full lg:w-3/5 space-y-8">
                        {t.raw("content").map((item: any, index: number) => (
                            <FadeIn
                                key={index}
                                direction="right"
                                delay={index * 100}
                                duration={500}
                                className="space-y-2"
                            >
                                {item.title && (
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                )}
                                <p className="text-gray-300 leading-relaxed text-sm lg:text-base xl:text-lg">
                                    {item.text}
                                </p>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Right Side - Image & Quote */}
                    <div className="w-full lg:w-2/5 flex flex-col items-center justify-center relative">
                        {/* Person Image */}
                        <FadeIn
                            direction="zoom"
                            duration={800}
                            className="relative w-full aspect-[4/5] md:h-[450px] lg:h-[600px] max-w-[500px]"
                        >
                            {/* Glow behind person - optimized for iOS */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 blur-[40px] md:blur-[80px] rounded-full pointer-events-none gpu-accelerated" />

                            <Image
                                src="/images/domain/management-person.svg"
                                alt="Domain Expert"
                                fill
                                className="object-contain"
                            />
                        </FadeIn>

                        {/* Quote Box */}
                        <FadeIn
                            direction="up"
                            delay={400}
                            duration={500}
                            className="mt-8 bg-black/40 backdrop-blur-sm border rounded-2xl p-6 text-center max-w-[350px]"
                            style={{ borderColor: '#3e2c93' }}
                        >
                            <p className="text-white font-medium text-lg">
                                {t("quote")}
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
