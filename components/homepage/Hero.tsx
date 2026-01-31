"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export const Hero = () => {

    return (
        <section className="relative min-h-[100dvh] w-full text-white flex flex-col bg-[#13191d] overflow-x-hidden">
            {/* Background Blob/Gradient - Top Left (Optimized) */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(34,197,94,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row lg:items-center justify-between pt-32 md:pt-40 pb-12 lg:pt-16 lg:pb-0 gap-12">

                {/* Left Container - Text Content */}
                <FadeIn
                    direction="right"
                    duration={600}
                    className="w-full lg:w-1/2 flex flex-col justify-center space-y-6 lg:space-y-8 z-20 lg:pt-12 xl:pt-16 2xl:pt-20"
                >
                    <h1 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left w-full">
                        Hosting <span className="bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">Without Limits</span>
                    </h1>

                    <p className="text-gray-300 max-w-2xl text-base lg:text-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                        Take your Digital presence to the next level with our LiteSpeed Hosting plans and experience our 5x faster loading times than competing services. We love to get compared.
                    </p>

                    <h3 className="font-semibold text-white text-lg lg:text-xl text-center lg:text-left">
                        Ready to join the next level of hosting?
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 max-w-lg mx-auto lg:mx-0">
                        {[
                            "99.99% Uptime Guarantee",
                            "Enjoy Unlimited Bandwidth",
                            "Free DDoS Protection",
                            "24/7 Expert Support"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="bg-[#a855f7] rounded-full p-1 shrink-0">
                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                </div>
                                <span className="text-[#a855f7] font-medium text-sm md:text-base">{text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center lg:items-start pt-4">
                        <p className="text-[#d9d9d9] text-base lg:text-lg mb-1 font-medium">First year</p>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-bold bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-4xl lg:text-5xl">€9.00</span>
                            <span className="text-lg text-white">per year</span>
                        </div>
                        <p className="text-white line-through text-sm opacity-70 mb-6">€54.00 per year</p>

                        <button className="relative inline-flex items-center justify-center w-full sm:w-auto min-w-[200px] py-4 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-2xl overflow-hidden transition-all duration-200 hover:brightness-110 shadow-[0_0_20px_rgba(137,217,87,0.3)]">
                            <span className="relative z-10">View plans</span>
                        </button>
                    </div>
                </FadeIn>

                {/* Right Container - Images & Components */}
                <div className="hidden lg:flex w-full lg:w-1/2 relative items-center justify-center lg:justify-end mt-8 lg:mt-0 lg:pl-10">
                    <div className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px] flex items-center justify-center scale-125 lg:scale-[1.4] xl:scale-[1.5] -mt-32 lg:-mt-56 xl:-mt-64 translate-x-10 lg:translate-x-0 will-change-transform">
                        {/* Woman */}
                        <div className="relative w-full h-full z-10">
                            <Image
                                src="/images/home/hero-new.svg"
                                alt="Hosting Agent"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Icons Section - Compact & Unified */}
            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-40 pb-16 pt-0 lg:pt-8 bg-[#13191d] lg:bg-transparent">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 lg:p-0 bg-[#0e1215] lg:bg-transparent rounded-2xl lg:rounded-none border border-white/5 lg:border-none">
                    <FadeIn delay={100} duration={600} direction="up" className="flex flex-col items-center text-center gap-4">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="/images/home/icon-bandwidth.svg"
                                alt="Unlimited Bandwidth"
                                width={64}
                                height={64}
                                className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                            />
                        </div>
                        <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">Unlimited Bandwidth & Databases</p>
                    </FadeIn>
                    <FadeIn delay={200} duration={600} direction="up" className="flex flex-col items-center text-center gap-4">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="/images/home/icon-ddos.svg"
                                alt="DDoS Protection"
                                width={64}
                                height={64}
                                className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                            />
                        </div>
                        <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">Free DDoS Protection</p>
                    </FadeIn>
                    <FadeIn delay={300} duration={600} direction="up" className="flex flex-col items-center text-center gap-4">
                        <div className="flex items-center justify-center relative">
                            <Image
                                src="/images/home/icon-wordpress.svg"
                                alt="WordPress Manager"
                                width={64}
                                height={64}
                                className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
                            />
                        </div>
                        <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">Free WordPress Manager & SSL</p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
