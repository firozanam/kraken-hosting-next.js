"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const HowItWorks = () => {
    const t = useTranslations("PatchmanHowItWorks");

    return (
        <section className="relative w-full text-white bg-[#13191d] overflow-hidden">
            {/* Top Green Banner */}
            <div className="w-full bg-[#89d957] py-4 text-center">
                <h2 className="text-[#13191d] text-xl md:text-2xl lg:text-3xl font-bold">
                    {t("title")}
                </h2>
            </div>

            <div className="relative py-20 lg:py-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/website-security/how-it-works-bg.png"
                        alt="Background"
                        fill
                        className="object-cover object-top"
                    />
                    {/* Dark gradient overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-[#13191d]/30" />
                </div>

                {/* Blobs */}
                {/* Right side top blob (Green) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[50px] md:blur-[120px] pointer-events-none z-10 translate-x-1/2 -translate-y-1/2 gpu-accelerated" />

                {/* Left side edge center blob (Green) */}
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 -translate-x-1/2 -translate-y-1/2 gpu-accelerated" />

                {/* Bottom right blob (White) - As requested */}
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 translate-x-1/3 translate-y-1/3 gpu-accelerated" />


                {/* Content */}
                <div className="container-ultrawide relative z-20 w-[90%] max-w-4xl mx-auto space-y-16 lg:space-y-24 text-center mt-24 lg:mt-[500px]">

                    {/* Block 1 */}
                    <FadeIn
                        delay={0}
                        duration={600}
                        className="space-y-4"
                    >
                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
                            {t("blocks.cms_protection.title")}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
                            {t("blocks.cms_protection.description")}
                        </p>
                    </FadeIn>

                    {/* Block 2 */}
                    <FadeIn
                        delay={200}
                        duration={600}
                        className="space-y-4"
                    >
                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
                            {t("blocks.malicious_code.title")}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
                            {t("blocks.malicious_code.description")}
                        </p>
                    </FadeIn>

                    {/* Block 3 */}
                    <FadeIn
                        delay={400}
                        duration={600}
                        className="space-y-4"
                    >
                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
                            {t("blocks.undo_updates.title")}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
                            {t("blocks.undo_updates.description")}
                        </p>
                    </FadeIn>

                    {/* Block 4 */}
                    <FadeIn
                        delay={600}
                        duration={600}
                        className="space-y-4"
                    >
                        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-white">
                            {t("blocks.automatic_workflows.title")}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-3xl mx-auto">
                            {t("blocks.automatic_workflows.description")}
                        </p>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};
