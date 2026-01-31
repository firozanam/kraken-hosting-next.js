"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef } from "react";

const TypingText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [ref, isInView] = useIntersectionObserver<HTMLSpanElement>();

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                let currentIndex = 0;
                const interval = setInterval(() => {
                    if (currentIndex <= text.length) {
                        setDisplayedText(text.slice(0, currentIndex));
                        currentIndex++;
                    } else {
                        clearInterval(interval);
                    }
                }, 50); // Typing speed
                return () => clearInterval(interval);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, text, delay]);

    return <span ref={ref}>{displayedText}</span>;
};

export const SharedDetailedFeatures = () => {
    const t = useTranslations("AnonymousPricing.DetailedFeatures");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10 flex flex-col gap-12 lg:gap-20">

                {/* ROW 1: Free Migration */}
                <FadeIn
                    direction="right"
                    duration={600}
                    className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden"
                >
                    {/* Left: Image (Darker BG) */}
                    <div className="w-full lg:w-1/2 bg-[#090a19] flex items-center justify-center p-8 lg:p-12 h-[300px] lg:h-auto lg:min-h-[400px] relative">
                        <div className="relative w-full h-full max-w-[400px] aspect-square">
                            <Image
                                src="/images/home/migration-guy.png"
                                alt="Free Migration"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain"
                            />
                        </div>
                        {/* Floating Text */}
                        <FadeIn
                            direction="zoom"
                            delay={400}
                            className="absolute top-[20%] right-[10%] lg:right-[15%] text-white text-lg font-medium hidden lg:block"
                        >
                            <TypingText text={t("migration.bubble_text")} delay={0.5} />
                            <span className="animate-pulse">|</span>
                        </FadeIn>
                    </div>
                    {/* Right: Text Content (Light BG) */}
                    <div className="w-full lg:w-1/2 bg-[#e8eaeb] p-8 lg:p-16 flex flex-col justify-center text-[#13191d]">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
                            {t("migration.title")}
                        </h3>
                        <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-center lg:text-left text-gray-700">
                            {t("migration.description")}
                        </p>
                    </div>
                </FadeIn>

                {/* ROW 2: 24/7 Support */}
                <FadeIn
                    direction="left"
                    duration={600}
                    className="flex flex-col lg:flex-row-reverse items-stretch rounded-3xl overflow-hidden"
                >
                    {/* Right: Image (Darker BG) */}
                    <div className="w-full lg:w-1/2 bg-[#090a19] flex items-center justify-center p-0 lg:min-h-[400px]">
                        <div className="relative w-full h-[300px] lg:h-full lg:min-h-[400px]">
                            <Image
                                src="/images/wordpress-hosting/features/support.svg"
                                alt="24/7 Support"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover lg:object-cover"
                            />
                        </div>
                    </div>
                    {/* Left: Text Content (Light BG) */}
                    <div className="w-full lg:w-1/2 bg-[#e8eaeb] p-8 lg:p-16 flex flex-col justify-center text-[#13191d]">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
                            {t("support.title")}
                        </h3>
                        <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-center lg:text-left text-gray-700">
                            {t("support.description")}
                        </p>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
