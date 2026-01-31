"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MessageSquare, Ticket, UserCheck } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const AboutSupport = () => {
    const tSupport = useTranslations("Support");
    const tInfra = useTranslations("Infrastructure");
    const tCTA = useTranslations("CTA");

    return (
        <section className="bg-[#13191d] py-24 relative">
            {/* Support Section */}
            <div className="container-ultrawide w-full content-padding-x mx-auto mb-32">
                <FadeIn className="text-center max-w-3xl mx-auto space-y-6 mb-16">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                        dangerouslySetInnerHTML={{ __html: tSupport.raw("title") }}
                    />
                    <p className="text-gray-300 text-lg">
                        {tSupport("description")}
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12">
                    {tSupport.raw("cards").map((card: any, index: number) => {
                        const Icon = index === 0 ? UserCheck : index === 1 ? Ticket : MessageSquare;
                        return (
                            <FadeIn
                                key={index}
                                delay={index * 100}
                                className="group h-full bg-[#161b20] border border-white/5 hover:border-[#bff747]/50 rounded-2xl p-8 transition-colors duration-300"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="w-14 h-14 mb-6 rounded-xl bg-[#1f262e] border border-white/5 flex items-center justify-center group-hover:bg-[#bff747] group-hover:border-[#bff747] transition-all duration-300">
                                        <Icon className="w-7 h-7 text-[#bff747] group-hover:text-[#0e1215] transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light">{card.description}</p>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>

            {/* Infrastructure Section - World Map Placeholder */}
            <div className="container-ultrawide w-full content-padding-x mx-auto mb-32">
                <FadeIn className="text-center max-w-4xl mx-auto space-y-6 mb-16">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                        dangerouslySetInnerHTML={{ __html: tInfra.raw("title") }}
                    />
                    <p className="text-gray-300 text-lg">
                        {tInfra("description")}
                    </p>
                </FadeIn>

                <FadeIn className="relative w-full h-[400px] md:h-[600px] bg-[#0b0f11] rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden group px-4">
                    {/* Map Wrapper ensuring Aspect Ratio matches Image */}
                    <div className="relative w-full max-w-[1000px]">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                            alt="World Map"
                            className="w-full h-auto opacity-30 filter invert selection:bg-transparent pointer-events-none"
                        />

                        {/* 8 Global Datacenter Points (Beeps) with tooltips */}
                        {[
                            { top: '35%', left: '26%', title: 'USA West' }, // Adjusted slightly left for visual accuracy
                            { top: '38%', left: '16%', title: 'USA West' }, // Previously 18%
                            { top: '32%', left: '48%', title: 'Germany' },
                            { top: '30%', left: '46%', title: 'UK' },
                            { top: '33%', left: '52%', title: 'Eastern Europe' },
                            { top: '55%', left: '75%', title: 'Singapore' },
                            { top: '75%', left: '85%', title: 'Australia' },
                            { top: '65%', left: '32%', title: 'Brazil' }
                        ].map((loc, i) => (
                            <div key={i} className="absolute w-4 h-4 -ml-2 -mt-2" style={{ top: loc.top, left: loc.left }} title={loc.title}>
                                <div className="absolute inset-0 bg-[#bff747] rounded-full animate-ping opacity-75" style={{ animationDuration: `${2 + (i * 0.2)}s`, animationDelay: `${i * 0.1}s` }}></div>
                                <div className="absolute inset-1 bg-[#bff747] rounded-full shadow-[0_0_10px_#bff747]"></div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>

            {/* CTA Section */}
            <div className="container-ultrawide w-full content-padding-x mx-auto">
                <FadeIn className="relative overflow-hidden bg-[#0a0e10] rounded-3xl border border-[#2a3035] p-8 md:p-14 lg:p-20">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#bff747]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
                        <div className="space-y-6 max-w-2xl text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                {tCTA("title")}
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                                {tCTA("description")}
                            </p>
                        </div>

                        <div className="flex-shrink-0">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#89d957] to-[#c9e265] text-[#1a1a1a] text-lg font-bold rounded-2xl hover:brightness-110 transition-all duration-200 shadow-[0_0_20px_rgba(137,217,87,0.3)]"
                            >
                                {tCTA("button")}
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
