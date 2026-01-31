"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Check } from "lucide-react";
import Image from "next/image"; // Import Image for the background
import { useTranslations } from "next-intl";

export const AboutHero = () => {
    const t = useTranslations("Hero");

    return (
        <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pt-32 md:pt-40 lg:pt-32 pb-20 overflow-hidden">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/about-us-banner.webp"
                    alt="KrakenHosting Data Center"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/70 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>

            <div className="container-ultrawide w-full content-padding-x mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-24">

                    {/* Text Content - Now Full Width / Centered contextually or Left aligned against the image */}
                    <div className="w-full max-w-3xl space-y-8 mx-auto lg:mx-0">
                        <FadeIn direction="left">
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center lg:text-left"
                                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                            />
                        </FadeIn>

                        <FadeIn delay={100} direction="left">
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium text-left">
                                {t("description")}
                            </p>
                        </FadeIn>

                        <FadeIn delay={200} direction="left" className="space-y-4">
                            <h3 className="text-2xl font-semibold text-white border-b border-[#bff747]/30 pb-2 inline-block">
                                {t("why_choose_title")}
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                {t.raw("features").map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center gap-3 justify-start">
                                        <div className="bg-[#bff747] p-1 rounded-full shrink-0">
                                            <Check className="w-3 h-3 text-black" strokeWidth={3} />
                                        </div>
                                        <span className="text-white font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Right side removed as requested */}
                </div>
            </div>
        </section>
    );
};
