"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export const Features = () => {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#13191d] overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                {/* Visual Blop - Left side - optimized for iOS */}
                <div className="absolute top-0 left-0 -translate-x-1/2 translate-y-20 w-[300px] h-[300px] bg-[#9fa3a7]/10 blur-[40px] md:blur-[100px] rounded-full pointer-events-none gpu-accelerated" />

                {/* Section Header */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center mb-12 lg:mb-20 space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Powerful Managed WordPress Hosting Features
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base xl:text-lg max-w-3xl mx-auto leading-relaxed">
                        We&apos;re a powerful, yet simple, hosting provider. Start your WordPress blog on our easy-to-use
                        WordPress plan. Our 30-day money-back guarantee gives you peace of mind!
                    </p>
                </FadeIn>

                {/* Grid Layout */}
                <div className="flex flex-col gap-6">

                    {/* Row 1: Two Large Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Card 1: Instant Setup */}
                        <FadeIn
                            delay={0}
                            className="bg-[#e8eaeb] rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[320px] transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="p-6 pb-0 lg:p-8 lg:pb-0 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Instant WordPress Setup</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-sm">
                                    We install WordPress for you! Take advantage of our automated WordPress installation and our unique and powerful servers.
                                </p>
                            </div>
                            <div className="mt-auto w-full relative h-[200px] lg:h-[200px] lg:px-8 lg:pb-8">
                                <Image
                                    src="/images/wordpress-hosting/features/setup.svg"
                                    alt="Instant WordPress Setup"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 2: Automated Backups */}
                        <FadeIn
                            delay={200}
                            className="bg-[#e8eaeb] rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[320px] transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="p-6 pb-0 lg:p-8 lg:pb-0 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Automated Backups</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-sm">
                                    Kraken Hosting makes backups easy, We create backups of your WordPress website daily.
                                </p>
                            </div>
                            <div className="mt-auto w-full relative h-[200px] lg:h-[200px] lg:px-8 lg:pb-8">
                                <Image
                                    src="/images/wordpress-hosting/features/backups.svg"
                                    alt="Automated Backups"
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
                            delay={300}
                            className="bg-[#e8eaeb] rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[320px] transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="p-6 pb-0 lg:p-8 lg:pb-0 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Unlimited Bandwidth</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-sm">
                                    There are no limits on the amount of traffic your hosted site or app can receive. All we ask is that you comply with our unlimited policy.
                                </p>
                            </div>
                            <div className="mt-auto w-full relative h-[200px] lg:h-[200px] lg:px-8 lg:pb-8">
                                <Image
                                    src="/images/wordpress-hosting/features/bandwidth.svg"
                                    alt="Unlimited Bandwidth"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 4: Blazing Performance */}
                        <FadeIn
                            delay={500}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[320px] transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="p-6 pb-0 lg:p-8 lg:pb-0 flex flex-col items-center">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Blazing WordPress Performance and Speed</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-6 max-w-md">
                                    Get a comprehensive WordPress performance solution that dramatically speeds up your sites. powerful caching, PHP version control & more!
                                </p>
                            </div>
                            <div className="mt-auto w-full relative h-[200px] lg:h-[200px] lg:px-8 lg:pb-8">
                                <Image
                                    src="/images/wordpress-hosting/features/speed.svg"
                                    alt="Blazing Performance"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Row 3: Three Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Card 5: Free SSL */}
                        <FadeIn
                            delay={600}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:scale-[1.04]"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Free SSL Certificate</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                We provide a free &apos;Let&apos;s Encrypt&apos; SSL
                                certificate, instantly boosting SEO
                                with Google.
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/wordpress-hosting/features/ssl.svg"
                                    alt="Free SSL"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 6: Security & Updates */}
                        <FadeIn
                            delay={700}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:scale-[1.04]"
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
                                    src="/images/wordpress-hosting/features/security.svg"
                                    alt="Security"
                                    fill
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 7: Money Back */}
                        <FadeIn
                            delay={800}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:scale-[1.04]"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">Money Back Guarantee</h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Try our hosting risk-free. If it’s not
                                right for you, get a full refund within
                                30 days.
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/wordpress-hosting/features/money-back.svg"
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
