"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ShieldCheck, Server, Globe, Lock, Headset, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export const AboutStats = () => {
    const tStats = useTranslations("Stats");
    const tMission = useTranslations("Mission");

    const icons = [Globe, Server, Clock]; // Mapping for Stats cards if needed, simplistic approach below

    return (
        <section className="bg-[#0b0f11] py-24 relative overflow-hidden">
            {/* Mission Section */}
            <div className="container-ultrawide w-full content-padding-x mx-auto mb-20 relative z-10">
                <FadeIn className="text-center max-w-3xl mx-auto space-y-6">
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                        dangerouslySetInnerHTML={{ __html: tMission.raw("title") }}
                    />
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {tMission("description")}
                    </p>
                </FadeIn>
            </div>

            {/* Stats Cards */}
            <div className="container-ultrawide w-full content-padding-x mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
                    {tStats.raw("cards").map((card: any, index: number) => {
                        const Icon = index === 0 ? Globe : index === 1 ? Server : Clock;
                        return (
                            <FadeIn
                                key={index}
                                delay={index * 100}
                                className="bg-[#13191d] border border-white/5 p-8 rounded-2xl hover:border-[#bff747]/50 transition-colors duration-300 group"
                            >
                                <div className="w-12 h-12 bg-[#bff747]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#bff747] transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-[#bff747] group-hover:text-black transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                <p className="text-gray-400">{card.description}</p>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
