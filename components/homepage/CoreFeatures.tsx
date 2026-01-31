"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export const CoreFeatures = () => {
    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Free SSL */}
                    <FadeIn
                        delay={100}
                        duration={500}
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
                                src="/images/wordpress-hosting/features/ssl.svg"
                                alt="Free SSL"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-contain object-bottom"
                            />
                        </div>
                    </FadeIn>

                    {/* Security & Updates */}
                    <FadeIn
                        delay={200}
                        duration={500}
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
                                src="/images/wordpress-hosting/features/security.svg"
                                alt="Security"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-contain object-bottom"
                            />
                        </div>
                    </FadeIn>

                    {/* Money Back Guarantee */}
                    <FadeIn
                        delay={300}
                        duration={500}
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
                                src="/images/wordpress-hosting/features/money-back.svg"
                                alt="Money Back"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-contain object-bottom"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
