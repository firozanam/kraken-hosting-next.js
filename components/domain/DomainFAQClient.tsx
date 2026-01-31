"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";


interface FAQItem {
    question: string;
    answer: string;
}

interface DomainFAQClientProps {
    title: string;
    subtitle: string;
    questions: FAQItem[];
}

export const DomainFAQClient = ({ title, subtitle, questions }: DomainFAQClientProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24">
            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10">

                <FadeIn
                    direction="up"
                    duration={600}
                    className="bg-[#0f1216] rounded-3xl p-8 lg:p-12 border border-[#7c37eb]/20"
                >
                    <div className="text-center mb-12">
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <p className="text-gray-400">
                            {subtitle}
                        </p>
                    </div>


                    <div className="max-w-4xl mx-auto space-y-4">
                        {questions.map((faq, index) => (
                            <FadeIn
                                key={index}
                                direction="up"
                                delay={index * 100}
                                duration={500}
                                className="border-b border-gray-800 last:border-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-start justify-between py-4 text-left group focus:outline-none gap-4"
                                >
                                    <span className={`text-base lg:text-lg font-medium transition-colors duration-200 ${openIndex === index ? "text-[#bff747]" : "text-gray-300 group-hover:text-white"}`}>
                                        {faq.question}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-[#bff747] mt-1 shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white mt-1 shrink-0" />
                                    )}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed pl-0 pr-8">
                                        {faq.answer}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
