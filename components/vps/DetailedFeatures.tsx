"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";


export const DetailedFeatures = () => {
    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10 flex flex-col gap-12 lg:gap-20">

                {/* ROW 1: Free Migration */}
                <FadeIn
                    direction="up"
                    duration={700}
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
                        <FadeIn
                            direction="zoom"
                            delay={500}
                            duration={400}
                            className="absolute top-[25%] right-[15%] lg:right-[20%] text-white text-lg font-medium hidden lg:block"
                        >
                            Wow that was easy...
                        </FadeIn>
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

                {/* ROW 2: 24/7 Support */}
                <FadeIn
                    direction="up"
                    delay={200}
                    duration={700}
                    className="flex flex-col lg:flex-row-reverse items-stretch rounded-3xl overflow-hidden"
                >
                    {/* Right: Image (Darker BG) */}
                    <div className="w-full lg:w-1/2 bg-[#090a19] flex items-center justify-center p-0 min-h-[300px] lg:h-auto lg:min-h-[400px]">
                        <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
                            <Image
                                src="/images/vps/VPS (5).svg"
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
                            Struggling? Our hosting professionals are readily available to help you through Live Chat. No matter if it&apos;s your first time setting up or an issue needs resolving, we can assist with any VPS Hosting requirement that may arise. Reach out now and let us make the web hosting process easy!
                        </p>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
