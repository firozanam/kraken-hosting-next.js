import Image from "next/image";
import { Check } from "lucide-react";
import { Speedometer } from "./Speedometer";
import { PricingCard } from "./PricingCard";
import { SecurityCard } from "./SecurityCard";

export const Hero = () => {
    return (
        <section className="relative min-h-screen h-auto w-full text-white flex flex-col justify-center bg-[#13191d] overflow-x-hidden">
            {/* Background Blob/Gradient - Top Left */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-br from-green-500/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-[90%] lg:w-[75%] mx-auto relative z-10 lg:h-full h-auto flex flex-col lg:justify-center justify-start pt-32 lg:pt-40 pb-12 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:h-full max-h-[850px] 2xl:max-h-none">

                    {/* Left Content */}
                    <div className="space-y-4 lg:space-y-4 xl:space-y-8 flex flex-col justify-center z-20">
                        <h1 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center lg:text-left w-full">
                            Hosting <span className="bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">Without Limits</span>
                        </h1>

                        <p className="text-gray-300 max-w-2xl text-sm lg:text-base xl:text-lg leading-relaxed">
                            Take your Digital presence to the next level with our LiteSpeed Hosting plans and experience our 5x faster loading times than competing services. We love to get compared.
                        </p>

                        <h3 className="font-semibold text-white text-lg lg:text-xl xl:text-2xl">
                            Ready to join the next level of hosting?
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 xl:gap-5">
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

                        <div className="pt-0 lg:pt-0 xl:pt-2">
                            <p className="text-[#d9d9d9] text-sm lg:text-base xl:text-lg mb-1 font-medium">First year</p>
                            <div className="flex items-baseline gap-2">
                                <span className="font-bold bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-3xl lg:text-4xl xl:text-5xl">€9.00</span>
                                <span className="text-sm lg:text-base xl:text-lg text-white">per year</span>
                            </div>
                            <p className="text-white line-through text-xs lg:text-sm xl:text-base opacity-70">€54.00 per year</p>
                        </div>

                        <button className="relative inline-flex items-center justify-center w-[200px] py-3 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-2xl overflow-hidden transition-all duration-200 hover:brightness-110 shadow-[0_0_20px_rgba(137,217,87,0.3)] self-center lg:self-start">
                            <span className="relative z-10">View plans</span>
                        </button>
                    </div>

                    {/* Right Content - Images Composition */}
                    <div className="relative h-full w-full hidden lg:block border-none pointer-events-none select-none">
                        {/* Woman Image - Responsive Scaling */}
                        <div className="absolute 
                            lg:right-[-62%] lg:top-[25%] lg:w-[190%] lg:h-[190%]
                            xl:right-[calc(-28%-80px)] xl:top-[30%] xl:w-[150%] xl:h-[150%]
                            2xl:w-[55vw] 2xl:h-[55vw] 2xl:right-[-14vw] 2xl:top-[calc(40%-80px)]
                            -translate-y-1/2 z-10 transition-all duration-500 ease-out">
                            <Image
                                src="/images/home/hero-woman.png"
                                alt="Hosting Agent"
                                fill
                                className="object-contain object-right"
                                priority
                            />
                        </div>

                        {/* Speedometer - Responsive Messaging */}
                        <div className="absolute 
                            lg:top-[calc(12%-60px)] lg:left-[-10%] lg:scale-75
                            xl:top-[calc(12%-85px)] xl:left-0 xl:scale-90
                            2xl:top-[calc(5%-60px)] 2xl:left-[4vw] 2xl:scale-100
                            z-20 origin-top-left transition-all duration-500 ease-out">
                            <Speedometer />
                        </div>

                        {/* Pricing Card - Responsive Placement */}
                        <div className="absolute 
                            lg:bottom-[calc(22%-120px)] lg:left-[-10%] lg:scale-75
                            xl:bottom-[calc(15%-170px)] xl:left-[-20px] xl:scale-90
                            2xl:bottom-[2%] 2xl:left-[4vw] 2xl:scale-100
                            z-30 origin-bottom-left transition-all duration-500 ease-out">
                            <PricingCard />
                        </div>

                        {/* Security Card - Responsive Placement */}
                        <div className="absolute 
                            lg:top-[30%] lg:right-[-20%] lg:scale-75
                            xl:top-[45%] xl:-right-[56px] xl:scale-90
                            2xl:top-[45%] 2xl:-right-[4vw] 2xl:scale-100
                            z-30 text-left origin-right transition-all duration-500 ease-out">
                            <SecurityCard />
                        </div>
                    </div>
                </div>

                {/* Bottom Icons Section - Compact & Unified - Restored & Flowing Naturally */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-24 2xl:mt-32 pt-6 pb-4 relative z-40 rounded-xl">
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 flex items-center justify-center relative">
                            <Image src="/images/home/icon-bandwidth.png" alt="Unlimited Bandwidth" fill className="object-contain" />
                        </div>
                        <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">Unlimited Bandwidth & Databases</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 flex items-center justify-center relative">
                            <Image src="/images/home/icon-ddos.png" alt="DDoS Protection" fill className="object-contain" />
                        </div>
                        <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">Free DDoS Protection</p>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 flex items-center justify-center relative">
                            <Image src="/images/home/icon-wordpress.png" alt="WordPress Manager" fill className="object-contain" />
                        </div>
                        <p className="font-medium bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent text-base md:text-lg lg:text-base xl:text-lg">Free WordPress Manager & SSL</p>
                    </div>
                </div>


            </div>
        </section>
    );
};
