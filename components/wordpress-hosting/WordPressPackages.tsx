"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export const WordPressPackages = () => {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#13191d] overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                <FadeIn
                    direction="left"
                    duration={800}
                    className="w-full lg:w-1/2 flex flex-col items-center mt-6 lg:mt-12"
                >
                    {/* Main SVG Image */}
                    <div className="relative w-full max-w-[500px] aspect-[16/10] mb-2 lg:mb-4">
                        <Image
                            src="/images/wordpress-hosting/packages-image.svg"
                            alt="WordPress Packages"
                            fill
                            className="object-contain"
                        />
                    </div>
                    {/* Text for badges within SVG */}
                    <div className="flex flex-row gap-8 w-full justify-center px-4">
                        <div className="flex flex-col items-center text-center w-1/2 max-w-[150px]">
                            <span className="text-[#d9d9d9] text-xs lg:text-sm">Install WordPress With</span>
                            <span className="text-[#d9d9d9] font-semibold text-sm lg:text-base">Only 1 Click</span>
                        </div>
                        <div className="flex flex-col items-center text-center w-1/2 max-w-[150px]">
                            <span className="text-[#d9d9d9] text-xs lg:text-sm">Install WordPress in</span>
                            <span className="text-[#d9d9d9] font-semibold text-sm lg:text-base">5 Seconds</span>
                        </div>
                    </div>
                </FadeIn>

                {/* Right Side: Content */}
                <FadeIn
                    direction="right"
                    duration={800}
                    className="w-full lg:w-1/2 flex flex-col items-start lg:items-start text-left lg:text-left"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d9d9d9] mb-8 w-full text-center lg:text-left">
                        Included in all <span className="text-[#d9d9d9]">WordPress Packages</span>
                    </h2>

                    <ul className="space-y-4 w-full">
                        {[
                            "WordPress is the easiest CMS in the world",
                            "Over 10.000 free themes to choose from",
                            "Install WordPress with only 1 click",
                            "Perfect tool for your blog site",
                            "Mobile responsive for both mobile and tablet device",
                            "Customize WordPress with your own code and HTML"
                        ].map((item, index) => (
                            <FadeIn
                                key={index}
                                delay={index * 100}
                                direction="left"
                                className="flex items-start gap-3"
                            >
                                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#89d957]" />
                                <span className="text-[#d9d9d9] text-sm lg:text-base xl:text-lg">{item}</span>
                            </FadeIn>
                        ))}
                    </ul>
                </FadeIn>

            </div>
        </section>
    );
};
