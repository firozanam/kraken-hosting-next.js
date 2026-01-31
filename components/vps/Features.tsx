"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";


export const Features = () => {
    // We can stick to hardcoded text as per user instruction "with these given screnshot texts",
    // or use translations. Given the previous pattern, I'll use translations but I need to add them first.
    // However, for this tool call I will create the component structure.
    // I entered the text directly here based on the user prompt to be safe and precise.

    // Note: Assuming translations are handled elsewhere or this hardcoded text is desired for now.
    // I will maintain the content but add animations.

    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#13191d] overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                {/* Visual Blop - Left side - optimized for iOS */}
                <div className="absolute top-0 left-0 -translate-x-1/2 translate-y-20 w-[300px] h-[300px] bg-[#9fa3a7]/10 blur-[40px] md:blur-[100px] rounded-full pointer-events-none gpu-accelerated" />

                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-20 space-y-4">
                    <FadeIn direction="up" duration={600}>
                        <h2
                            className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white"
                        >
                            Scale Globally with High-Performance VPS Hosting
                        </h2>
                    </FadeIn>
                    <FadeIn direction="up" delay={200} duration={600}>
                        <p
                            className="text-gray-400 text-sm lg:text-base xl:text-lg max-w-3xl mx-auto leading-relaxed"
                        >
                            Achieve worldwide reach with infrastructure engineered for maximum speed and uncompromising reliability. Our flexible VPS solutions ensure a seamless digital experience for your users, no matter where they are located.
                        </p>
                    </FadeIn>
                </div>

                {/* Grid Layout */}
                <div className="flex flex-col gap-6">

                    {/* Row 1: Two Large Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Card 1: Enterprise-Grade Performance */}
                        <FadeIn
                            direction="right"
                            duration={600}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[320px]"
                        >
                            <div className="p-6 pb-0 lg:p-8 lg:pb-0 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Performance.</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-sm">
                                    We install WordPress for you! Take advantage of our automated WordPress installation and our unique and powerful servers.
                                </p>
                            </div>
                            <div className="mt-auto w-full relative h-[200px] lg:h-[200px] lg:px-8 lg:pb-8">
                                <Image
                                    src="/images/vps/VPS (1).svg"
                                    alt="Enterprise-Grade Performance"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 2: Boost Your SEO Performance */}
                        <FadeIn
                            direction="left"
                            delay={200}
                            duration={600}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[320px]"
                        >
                            <div className="p-6 pb-0 lg:p-8 lg:pb-0 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Boost Your SEO Performance</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-sm">
                                    Faster servers mean better SEO rankings, improved user experience, and more global traffic.
                                </p>
                            </div>
                            <div className="mt-auto w-full relative h-[200px] lg:h-[200px] lg:px-8 lg:pb-8">
                                <Image
                                    src="/images/vps/VPS (2).svg"
                                    alt="Boost SEO"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Row 2: Two Large Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Card 3: Unlimited Bandwidth */}
                        <FadeIn
                            direction="right"
                            duration={600}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[320px]"
                        >
                            <div className="p-6 pb-0 lg:p-8 lg:pb-0 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Unlimited Bandwidth</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-sm">
                                    There are no limits on the amount of traffic your hosted site or app can receive. All we ask is that you comply with our unlimited policy.
                                </p>
                            </div>
                            <div className="mt-auto w-full relative h-[200px] lg:h-[200px] lg:px-8 lg:pb-8">
                                <Image
                                    src="/images/vps/VPS (3).svg"
                                    alt="Unlimited Bandwidth"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 4: Blazing WordPress Performance and Speed */}
                        <FadeIn
                            direction="left"
                            delay={200}
                            duration={600}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[320px]"
                        >
                            <div className="p-6 pb-0 lg:p-8 lg:pb-0 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Blazing WordPress Performance and Speed</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-md">
                                    Get a comprehensive WordPress performance solution that dramatically speeds up your sites. powerful caching, PHP version control & more!
                                </p>
                            </div>
                            <div className="mt-auto w-full relative h-[200px] lg:h-[200px] lg:px-8 lg:pb-8">
                                <Image
                                    src="/images/vps/VPS (4).svg"
                                    alt="Blazing Performance"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Row 3: Three Cards - The "Rest 3" */}
                    <div
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                    >
                        {/* Card 5: Free SSL */}
                        <FadeIn
                            direction="up"
                            delay={0}
                            duration={600}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Free SSL Certificate</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                We provide a free &apos;Let&apos;s Encrypt&apos; SSL
                                certificate, instantly boosting SEO
                                with Google.
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/vps/ssl.svg"
                                    alt="Free SSL"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 6: Security & Updates */}
                        <FadeIn
                            direction="up"
                            delay={150}
                            duration={600}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Security & Updates</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                We automatically update your
                                instances & their plugins to the latest
                                version & patch against common
                                exploits.
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/vps/security.svg"
                                    alt="Security"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 7: Money Back */}
                        <FadeIn
                            direction="up"
                            delay={300}
                            duration={600}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Money Back Guarantee</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Try our hosting risk-free. If it’s not
                                right for you, get a full refund within
                                30 days.
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/vps/money-back.svg"
                                    alt="Money Back"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};
