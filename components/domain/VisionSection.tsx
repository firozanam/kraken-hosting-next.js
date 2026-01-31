"use client";



import { FadeIn } from "@/components/ui/FadeIn";

export const VisionSection = () => {
    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32">
            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10">

                {/* Header Text */}
                <FadeIn
                    direction="up"
                    duration={800}
                    className="text-center mb-16 lg:mb-24 max-w-5xl mx-auto space-y-6"
                >
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-[#bff747]">
                        Unleash Your Vision. We Handle the Rest.
                    </h2>
                    <p className="text-gray-300 text-sm lg:text-base xl:text-lg leading-relaxed max-w-4xl mx-auto">
                        We know security and integrity are important to you. That&apos;s why Kraken Hosting has thought of absolutely
                        everything, so you, our client, can focus on what you do best: your vision, your sales, your message. Let us
                        take care of your website, web hosting and everything in between.
                    </p>
                </FadeIn>


            </div>
        </section>
    );
};
