"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] h-auto w-full text-white flex flex-col justify-center bg-[#13191d] overflow-x-hidden">
            {/* Background Blob/Gradient - Top Left */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-[40px] md:blur-[100px] pointer-events-none gpu-accelerated" />

            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row lg:items-center justify-between pt-32 md:pt-40 pb-12 lg:pt-0 lg:pb-0 gap-12">

                {/* Left Container - Text Content */}
                <FadeIn
                    direction="right"
                    duration={600}
                    className="w-full lg:w-1/2 px-6 lg:px-12 flex flex-col justify-center space-y-2 lg:space-y-2 xl:space-y-3 lg:pt-12 xl:pt-16 2xl:pt-20"
                >
                    <FadeIn
                        direction="up"
                        delay={200}
                        duration={600}
                        className="w-full"
                    >
                        <h1 className="font-bold leading-tight text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center lg:text-left">
                            Managed WordPress<span className="hidden lg:inline">&nbsp;</span><span className="lg:hidden"> </span><span className="bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">Hosting</span>
                        </h1>
                    </FadeIn>

                    <FadeIn
                        direction="up"
                        delay={300}
                        duration={600}
                    >
                        <p className="text-gray-300 max-w-2xl text-sm lg:text-base xl:text-lg leading-relaxed text-left lg:text-left">
                            Take your website to the next level with our LiteSpeed WordPress Hosting plans and experience our 5x faster loading times than competing services. our WP hosting solutions are precisely built to maximize speed and performance.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 xl:gap-5 mt-8 lg:mt-10 mr-auto lg:mx-0 max-w-full sm:max-w-none">
                        {[
                            "99.99% Uptime Guarantee",
                            "Enjoy Unlimited Bandwidth",
                            "Free DDoS Protection",
                            "24/7 Expert Support"
                        ].map((text, i) => (
                            <FadeIn
                                key={i}
                                delay={400 + (i * 100)}
                                direction="left"
                                className="flex items-center gap-2 justify-start"
                            >
                                <div className="bg-[#a855f7] rounded-full p-1 shrink-0">
                                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                                </div>
                                <span className="text-[#a855f7] font-medium text-sm md:text-base">{text}</span>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn
                        direction="up"
                        delay={600}
                        duration={600}
                        className="pt-4 flex flex-col items-start"
                    >
                        <p className="text-[#d9d9d9] text-sm lg:text-base xl:text-lg mb-1 font-medium">First year</p>
                        <div className="flex items-baseline gap-2 mb-1">
                            <span className="font-bold bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl">€11.00</span>
                            <span className="text-sm lg:text-base xl:text-lg text-white">per year</span>
                        </div>
                        <p className="text-white line-through text-xs lg:text-sm xl:text-base opacity-70 mb-3">€54.00 per year</p>

                        <button className="relative inline-flex items-center justify-center w-full lg:w-[200px] py-3 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-2xl overflow-hidden transition-all duration-200 hover:brightness-110 shadow-[0_0_20px_rgba(137,217,87,0.3)]">
                            <span className="relative z-10">View plans</span>
                        </button>
                    </FadeIn>
                </FadeIn>

                {/* Right Container - SVG Image - Hidden on Mobile/Tablet */}
                <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center relative z-20">
                    <div className="relative w-full aspect-square max-w-[600px] lg:max-w-[700px] lg:-translate-y-12 origin-center">
                        {/* Glow effect - optimized for iOS */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 blur-[40px] md:blur-[100px] rounded-full pointer-events-none gpu-accelerated" />

                        <Image
                            src="/images/wordpress-hosting/hero-image.svg"
                            alt="WordPress Hosting"
                            fill
                            className="object-contain drop-shadow-2xl relative z-10"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Icons Section */}
            <FadeIn
                direction="up"
                delay={800}
                duration={600}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 pt-10 pb-8 relative z-40 rounded-xl px-4 lg:px-0 w-full content-padding-x mx-auto"
            >
                <div className="flex flex-col items-center text-center gap-4">
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
                </div>
                <div className="flex flex-col items-center text-center gap-4">
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
                </div>
                <div className="flex flex-col items-center text-center gap-4">
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
                </div>
            </FadeIn>
        </section>
    );
};
