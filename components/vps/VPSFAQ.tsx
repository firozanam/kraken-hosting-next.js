"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";



const faqs = [
    {
        question: "What is a VPS (Virtual Private Server)?",
        answer: "A VPS is a virtualized server that acts like a dedicated server within a shared hosting environment. It gives you dedicated resources, root access, and more control than shared hosting, at a fraction of the cost of a dedicated server."
    },
    {
        question: "Should I choose VPS or shared hosting?",
        answer: "Choose VPS if you need more power, control, and dedicated resources. VPS is ideal for growing websites, resource-intensive applications, or when you need root access. Shared hosting is better for small websites with low traffic."
    },
    {
        question: "What are the advantages of a VPS over a shared hosting?",
        answer: "VPS offers dedicated resources, better performance, improved security, root access, custom software installation, and greater scalability compared to shared hosting."
    },
    {
        question: "Why should I choose a VPS over setting up my own private dedicated server?",
        answer: "VPS is more cost-effective, easier to manage, and requires no hardware maintenance. You get similar benefits to a dedicated server without the high costs and technical complexity."
    },
    {
        question: "How much does VPS hosting cost?",
        answer: "VPS hosting at Kraken Hosting starts at competitive prices and scales based on the resources you need. Check our pricing page for current plans and special offers."
    },
    {
        question: "Is monthly management included in the plan?",
        answer: "Yes! Our managed VPS plans include server monitoring, security updates, regular backups, and 24/7 technical support to keep your server running smoothly."
    },
    {
        question: "What type of VPS management does Kraken Hosting provide?",
        answer: "We offer fully managed VPS hosting which includes server setup, security hardening, software updates, monitoring, and proactive issue resolution."
    },
    {
        question: "Can I install custom software on my virtual server hosting?",
        answer: "Absolutely! With root access on your VPS, you can install and configure any software, applications, or control panels that your project requires."
    },
    {
        question: "What makes Kraken hosting the best VPS hosting provider?",
        answer: "We offer high-performance NVMe storage, enterprise-grade hardware, 99.9% uptime guarantee, free migration, 24/7 expert support, and competitive pricing."
    },
    {
        question: "What additional features should I look for in VPS providers?",
        answer: "Look for SSD/NVMe storage, scalability options, backup solutions, DDoS protection, multiple data center locations, and quality customer support."
    },
    {
        question: "What is KVM? What are the benefits of KVM?",
        answer: "KVM (Kernel-based Virtual Machine) provides full virtualization with dedicated resources, better isolation, and the ability to run any operating system. It offers superior performance and security compared to container-based virtualization."
    },
    {
        question: "Is Port 25 Open on Kraken Hosting VPS Hosting Plans?",
        answer: "For security reasons, Port 25 is blocked by default to prevent spam. If you need it for legitimate email services, contact our support team to discuss options."
    }
];

export const VPSFAQ = () => {
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
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">
                        Frequently Asked Questions About <span className="text-[#bff747]">VPS</span>
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
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
                                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed pl-0 pr-8 pb-4">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>

        </section >
    );
};
