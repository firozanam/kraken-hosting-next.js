"use client";

import { useLayoutEffect, useRef, useState } from "react";

import { useIsMobile } from "@/hooks/useIsMobile";
import { FadeIn } from "@/components/ui/FadeIn";

interface Plan {
    name: string;
    description: string;
    save_badge: string;
    price: string;
    renewal: string;
    features: string[];
}

interface UiText {
    first_year: string;
    billing_cycle: string;
    managed_text: string;
    cta_button: string;
}

interface HostingPlanGridProps {
    plans: Plan[];
    uiText: UiText;
}

export const HostingPlanGrid = ({ plans, uiText }: HostingPlanGridProps) => {
    const headerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [maxHeaderHeight, setMaxHeaderHeight] = useState<number>(0);
    const isMobile = useIsMobile(1024);

    useLayoutEffect(() => {
        const updateHeights = () => {
            if (headerRefs.current.length === 0) return;

            const heights = headerRefs.current.map(ref => ref?.scrollHeight || 0);
            const max = Math.max(...heights);
            if (max > 0 && max !== maxHeaderHeight) {
                setMaxHeaderHeight(max);
            }
        };

        updateHeights();
        window.addEventListener('resize', updateHeights);
        return () => window.removeEventListener('resize', updateHeights);
    }, [plans]);

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {plans.map((plan, index) => {
                        const isKraken = plan.name === "Kraken";
                        const cardBg = isKraken ? "bg-gradient-to-r from-[#89d957] to-[#c9e265]" : "bg-[#000000]";
                        const titleColor = isKraken ? "text-black" : "text-transparent bg-clip-text bg-gradient-to-r from-[#89d957] to-[#c9e265]";
                        const textColor = isKraken ? "text-[#000000]" : "text-white";
                        const priceColor = isKraken ? "text-black" : "text-transparent bg-clip-text bg-gradient-to-r from-[#89d957] to-[#c9e265]";
                        const descColor = isKraken ? "text-black/80" : "text-gray-400";
                        const badgeBg = isKraken ? "bg-[#13191d]" : "bg-gradient-to-r from-[#89d957] to-[#c9e265]";
                        const badgeText = isKraken ? "text-white" : "text-black";


                        return (
                            <FadeIn
                                key={index}
                                direction="up"
                                duration={600}
                                className={`${cardBg} rounded-2xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden group`}
                            >
                                <div
                                    ref={el => { headerRefs.current[index] = el; }}
                                    className="mb-6"
                                    style={{ minHeight: maxHeaderHeight > 0 ? `${maxHeaderHeight}px` : 'auto' }}
                                >
                                    <h3 className={`text-2xl font-bold mb-3 ${titleColor}`}>
                                        {plan.name}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${descColor}`}>
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="flex justify-end mb-6">
                                    <span className={`py-1.5 px-3 rounded-md text-xs font-bold ${badgeBg} ${badgeText}`}>
                                        {plan.save_badge}
                                    </span>
                                </div>

                                <div className="mb-8">
                                    <p className={`text-sm font-medium opacity-80 mb-1 ${textColor}`}>
                                        {uiText.first_year}
                                    </p>
                                    <p className={`text-5xl lg:text-6xl font-bold mb-2 ${priceColor}`}>
                                        {plan.price}
                                    </p>
                                    <p className={`text-xs font-medium opacity-70 ${textColor}`}>
                                        {plan.renewal}
                                    </p>
                                    <p className={`text-xs font-medium opacity-70 ${textColor}`}>
                                        {uiText.billing_cycle}
                                    </p>
                                </div>

                                <div className="flex-grow mb-10">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className={`flex items-center gap-3 text-sm font-medium ${textColor}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${isKraken ? "bg-[#000000]" : "bg-white"}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto space-y-4 text-center pt-6">
                                    <p className={`text-xs font-medium ${isKraken ? "text-black" : "text-white"}`}>
                                        {uiText.managed_text}
                                    </p>
                                    <a
                                        href="#"
                                        className={`block w-full py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base border-solid transition-colors duration-200
                                            ${isKraken
                                                ? "bg-[#000000] text-white hover:opacity-80"
                                                : "border border-[#abb1b1] bg-transparent hover:!border-[#89d957]"
                                            }
                                        `}
                                    >
                                        <span className={isKraken ? "" : "text-transparent bg-clip-text bg-gradient-to-r from-[#89d957] to-[#c9e265]"}>
                                            {uiText.cta_button}
                                        </span>
                                    </a>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
