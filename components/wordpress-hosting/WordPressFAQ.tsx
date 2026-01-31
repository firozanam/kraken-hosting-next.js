"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
    {
        question: "Which WordPress Hosting Plan Should I Buy",
        answer: "The best plan depends on your specific needs. If you're just starting out, our starter plan is perfect. For high-traffic sites or e-commerce stores, we deliver more resources and power with our higher-tier plans."
    },
    {
        question: "Who is WordPress most suited to?",
        answer: "WordPress is perfect for everyone! From bloggers and small businesses to large enterprises and e-commerce stores, its flexibility makes it the world's most popular CMS."
    },
    {
        question: "How do I get WordPress help?",
        answer: "Our support team is available 24/7. You can also access our extensive knowledge base or join the vibrant WordPress community forums for assistance."
    },
    {
        question: "What is the difference between Web Hosting and WordPress hosting?",
        answer: "WordPress hosting is specifically optimized for WordPress sites giving you better performance and security. It often includes features like one-click installs and automatic updates that regular web hosting might not offer."
    },
    {
        question: "Why should I choose WordPress hosting?",
        answer: "Choosing WordPress hosting ensures your site runs on servers tuned for WordPress performance, providing faster load times, better security, and specialized support."
    },
    {
        question: "What are the benefits of using managed WordPress hosting?",
        answer: "Managed WordPress hosting takes care of the technical side of things - updates, backups, and security - so you can focus on creating content and growing your business."
    },
    {
        question: "Can I use WordPress hosting for e-commerce website?",
        answer: "Absolutely! WordPress with WooCommerce is a powerful combination for building online stores. Our hosting is optimized to handle the demands of e-commerce traffic."
    },
    {
        question: "What is UltaPress and how does it work?",
        answer: "UltaPress is our proprietary optimization engine designed to accelerate WordPress sites, ensuring lightning-fast load times and superior performance."
    },
    {
        question: "How does UltaPress help with design?",
        answer: "UltaPress includes tools and themes that streamline the design process, making it easier than ever to build professional-looking websites without coding knowledge."
    },
    {
        question: "What is WordPress hosting?",
        answer: "WordPress hosting is a form of web hosting specifically optimized to run WordPress websites, offering features and performance tweaks tailored to the platform."
    }
];

export const WordPressFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full bg-[#13191d] py-16 lg:py-24">
            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10">

                <div className="bg-[#0f1216] rounded-3xl p-8 lg:p-12 border border-[#7c37eb]/20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">
                        Frequently Asked Questions About <span className="text-[#bff747]">WordPress</span>
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <FadeIn
                                key={index}
                                delay={index * 50}
                                direction="up"
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
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}
                                >
                                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed pl-0 pr-8">
                                        {faq.answer}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
