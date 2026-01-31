"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

interface TransformedPlan {
    key: string;
    name: string;
    description: string;
    price: string;
    original_price: string;
    save_badge: string;
    features: string[];
}

interface UiText {
    title: string;
    subtitle: string;
    managed_server: string;
    order_now: string;
}

interface PricingClientProps {
    plans: TransformedPlan[];
    uiText: UiText;
}

export const PricingClient = ({ plans, uiText }: PricingClientProps) => {
    const headerRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [maxHeaderHeight, setMaxHeaderHeight] = useState<number>(0);

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
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32">
            <div className="w-[90%] md:w-[85%] lg:w-[75%] mx-auto container-ultrawide relative z-10">
                {/* Section Header */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center mb-12 lg:mb-16 space-y-4 relative z-20"
                >
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white">
                        {uiText.title}
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base xl:text-lg max-w-2xl mx-auto">
                        {uiText.subtitle}
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => {
                        return (
                            <FadeIn
                                key={index}
                                delay={index * 100}
                                direction="up"
                                className="bg-[#000000] rounded-2xl p-6 md:p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group border border-gray-800 hover:border-[#89d957]/50"
                            >
                                <div
                                    ref={el => { headerRefs.current[index] = el; }}
                                    className="mb-6"
                                    style={{ minHeight: maxHeaderHeight > 0 ? `${maxHeaderHeight}px` : 'auto' }}
                                >
                                    <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#89d957] to-[#c9e265]">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-400">
                                        {plan.description}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm font-medium text-white opacity-80 mb-1">
                                        First Year
                                    </p>
                                    <p className="text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#89d957] to-[#c9e265]">
                                        {plan.price}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="text-xs font-medium text-white opacity-70 whitespace-pre-line">
                                            {plan.original_price}
                                        </div>
                                        <span className="py-1.5 px-3 rounded-md text-xs font-bold bg-gradient-to-r from-[#89d957] to-[#c9e265] text-black">
                                            {plan.save_badge}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-grow mb-10">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm font-medium text-white">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto space-y-4 text-center pt-6">
                                    <p className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#89d957] to-[#c9e265]">
                                        {uiText.managed_server}
                                    </p>
                                    <button
                                        className="block w-full py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base border border-[#abb1b1] bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-[#89d957] to-[#c9e265] transition-colors duration-200 hover:border-[#89d957]"
                                    >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89d957] to-[#c9e265]">
                                            {uiText.order_now}
                                        </span>
                                    </button>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
