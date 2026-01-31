"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const TypingText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [ref, isInView] = useIntersectionObserver();

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

    return (
        <span ref={ref}>
            {displayedText}
            <span className="inline-block ml-1 w-0.5 h-5 bg-white align-middle animate-pulse" />
        </span>
    );
};

export const DetailedFeatures = () => {
    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10 flex flex-col gap-12 lg:gap-20">

                {/* ROW 1: App Installs */}
                <FadeIn
                    direction="up"
                    duration={800}
                    className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden bg-[#090a19]"
                >
                    {/* Left: Image (Darker BG) */}
                    <div className="w-full lg:w-1/2 relative min-h-[300px] lg:h-auto lg:min-h-[400px] flex items-center justify-center">
                        <Image
                            src="/images/wordpress-hosting/features/app-installs-panel.svg"
                            alt="App Installs"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Right: Text Content (Dark Blue-ish BG #090a19) */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center text-[#d9d9d9]">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-center lg:text-left">
                            Instant WordPress Setup
                        </h3>
                        <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-center lg:text-left text-gray-400 mb-6">
                            We install WordPress for you! Take advantage of our automated WordPress installation and our unique and powerful servers.
                        </p>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-center lg:text-left">
                            Automated Backups
                        </h3>
                        <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-center lg:text-left text-gray-400 mb-6">
                            Kraken Hosting makes backups easy, We create backups of your WordPress website daily.
                        </p>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white text-center lg:text-left">
                            Unlimited Bandwidth
                        </h3>
                        <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-center lg:text-left text-gray-400">
                            There are no limits on the amount of traffic your hosted site or app can receive. All we ask is that you comply with our unlimited policy.
                        </p>
                    </div>
                </FadeIn>

                {/* ROW 2: Free Migration */}
                <FadeIn
                    direction="up"
                    duration={800}
                    className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden"
                >
                    {/* Left: Image (Darker BG) */}
                    <div className="w-full lg:w-1/2 bg-[#090a19] flex items-center justify-center p-8 lg:p-12 min-h-[300px] lg:h-auto relative">
                        <div className="relative w-full h-full min-h-[250px] lg:min-h-[350px]">
                            {/* Uses Image from Home assets */}
                            <Image
                                src="/images/home/migration-guy.png"
                                alt="Free Migration"
                                fill
                                className="object-contain"
                            />
                        </div>
                        {/* Floating Text */}
                        <div className="absolute top-[25%] right-[15%] lg:right-[20%] text-white text-lg font-medium hidden lg:block">
                            <TypingText text="Wow that was easy..." delay={0.5} />
                        </div>
                    </div>
                    {/* Right: Text Content (Light BG) */}
                    <div className="w-full lg:w-1/2 bg-[#e8eaeb] p-8 lg:p-16 flex flex-col justify-center text-[#13191d]">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
                            Free Migration Services
                        </h3>
                        <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-center lg:text-left text-gray-700">
                            Your website can now be moved for free to Kraken Hosting. You will receive individualized service from our staff. With the least amount of disruption to your website and email services, everything related to your website is flawlessly replicated, reinstalled, and reconfigured on your new server.
                        </p>
                    </div>
                </FadeIn>

                {/* ROW 3: 24/7 Support */}
                <FadeIn
                    direction="up"
                    duration={800}
                    className="flex flex-col lg:flex-row-reverse items-stretch rounded-3xl overflow-hidden"
                >
                    {/* Right: Image (Darker BG) */}
                    <div className="w-full lg:w-1/2 bg-[#090a19] flex items-center justify-center p-0 min-h-[300px] lg:h-auto lg:min-h-[400px]">
                        <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
                            <Image
                                src="/images/wordpress-hosting/features/support.svg"
                                alt="24/7 Support"
                                fill
                                className="object-cover lg:object-cover"
                            />
                        </div>
                    </div>
                    {/* Left: Text Content (Light BG) */}
                    <div className="w-full lg:w-1/2 bg-[#e8eaeb] p-8 lg:p-16 flex flex-col justify-center text-[#13191d]">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center lg:text-left">
                            24/7 Live Support
                        </h3>
                        <p className="text-sm lg:text-base xl:text-lg leading-relaxed text-center lg:text-left text-gray-700">
                            Struggling? Our hosting professionals are readily available to help you through Live Chat. No matter if it&apos;s your first time setting up or an issue needs resolving, we can assist with any Shared Hosting requirement that may arise. Reach out now and let us make the web hosting process easy!
                        </p>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
