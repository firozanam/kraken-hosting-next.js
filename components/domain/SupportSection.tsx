"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const SupportSection = () => {
    const t = useTranslations("SupportSection");

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                <FadeIn
                    direction="zoom"
                    duration={800}
                    className="flex flex-col lg:flex-row-reverse items-stretch rounded-3xl overflow-hidden"
                >
                    {/* Right: Image (Darker BG) */}
                    <FadeIn
                        direction="left"
                        delay={200}
                        duration={600}
                        className="w-full lg:w-1/2 bg-[#090a19] flex items-center justify-center p-0 lg:min-h-[400px]"
                    >
                        <div className="relative w-full h-[250px] lg:h-full lg:min-h-[400px]">
                            <Image
                                src="/images/vps/VPS (5).svg"
                                alt="24/7 Support"
                                fill
                                className="object-cover lg:object-cover"
                            />
                        </div>
                    </FadeIn>
                    {/* Left: Text Content (Light BG) */}
                    <FadeIn
                        direction="right"
                        delay={200}
                        duration={600}
                        className="w-full lg:w-1/2 bg-[#e8eaeb] p-8 lg:p-16 flex flex-col justify-center text-[#13191d]"
                    >
                        <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center lg:text-left">
                            {t("title")}
                        </h3>
                        <p className="text-sm lg:text-base leading-relaxed text-center lg:text-left text-gray-700">
                            {t("description")}
                        </p>
                    </FadeIn>
                </FadeIn>
            </div>
        </section>
    );
};
