"use client";

// Removed unused useTranslations hook
// import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Plan {
    id: string;
    name: string;
    description: string;
    price: string;
    originalPrice: string;
    features: string[];
    isPopular?: boolean;
    firstYearText?: string;
}

export const PricingPlans = () => {
    // Hardcoded text to ensure visibility without i18n debugging
    const title = "Choose the Best Managed WordPress Hosting Plan";
    const subtitle = "Grow your business with WordPress's hassle-free, reliable performance.";
    const orderNowText = "Order now";
    const isMobile = useIsMobile(1024);

    const plans: Plan[] = [
        {
            id: "webhosting_basic",
            name: "Webhosting Basic",
            description: "The ideal starting point into WordPress hosting!",
            price: "€1.00 per year",
            originalPrice: "€54.00 per year",
            firstYearText: "First Year",
            features: [
                "5 Website",
                "30 GB NVMe SSD",
                "Free WordPress Manager",
                "10 Email Accounts",
                "WordPress Acceleration",
                "WP-CLI",
                "2 Databases"
            ]
        },
        {
            id: "webhosting_starter",
            name: "Webhosting Starter",
            description: "Strong hosting built for medium businesses.",
            price: "€5.00 per year",
            originalPrice: "€110.00 per year",
            firstYearText: "First Year",
            features: [
                "50 Websites",
                "100 GB NVMe SSD",
                "Free WordPress Manager",
                "Free Emails",
                "WordPress Acceleration",
                "WordPress Multisite",
                "WP-CLI",
                "Unlimited Databases"
            ]
        },
        {
            id: "webhosting_growster",
            name: "Webhosting Growster",
            description: "Advanced resources for expanding projects.",
            price: "€32.00 per year",
            originalPrice: "€220.00 per year",
            firstYearText: "First Year",
            features: [
                "100 Websites",
                "500 GB NVMe SSD",
                "Free WordPress Manager",
                "Free Emails",
                "WordPress Acceleration",
                "WordPress Multisite",
                "WP-CLI",
                "Unlimited Databases"
            ]
        },
        {
            id: "webhosting_kraken",
            name: "Webhosting Kraken",
            description: "For those who demand peak performance – unleash the Kraken in your hosting.",
            price: "€32.00 per year",
            originalPrice: "€220.00 per year",
            firstYearText: "First Year",
            isPopular: true,
            features: [
                "300 Websites",
                "500 GB NVMe SSD",
                "Free WordPress Manager",
                "Free Emails",
                "WordPress Acceleration",
                "WordPress Multisite",
                "WP-CLI",
                "Unlimited Databases"
            ]
        }
    ];

    return (
        <section className="relative w-full bg-[#13191d] pt-20 lg:pt-32 pb-20 lg:pb-32">

            {/* Visual Blop */}
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                <div className="absolute top-0 right-0 -translate-y-1/2 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#9fa3a7]/10 blur-[50px] md:blur-[120px] rounded-full pointer-events-none gpu-accelerated" />

                {/* Section Header */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center mb-12 lg:mb-20 space-y-4 relative z-20"
                >
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base xl:text-lg max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </FadeIn>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-20"
                >
                    {plans.map((plan, index) => (
                        <FadeIn
                            key={index}
                            delay={index * 100}
                            className={`rounded-3xl p-6 flex flex-col h-full relative group transition-all duration-300 hover:-translate-y-2
                                ${plan.isPopular
                                    ? "bg-gradient-to-r from-[#BFF747] to-[#86efac] text-[#13191d]"
                                    : "bg-[#090a19] text-white"
                                }
                            `}
                        >
                            {/* Header */}
                            <div className="mb-8">
                                <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${plan.isPopular ? "text-[#13191d]" : "text-[#BFF747]"}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm lg:text-base ${plan.isPopular ? "text-[#13191d]/80" : "text-gray-400"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Pricing */}
                            <div className="mb-8">
                                {plan.firstYearText && (
                                    <p className={`text-xs mb-1 ${plan.isPopular ? "text-[#13191d]/70" : "text-gray-400"}`}>
                                        {plan.firstYearText}
                                    </p>
                                )}
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-3xl lg:text-4xl font-bold ${!plan.isPopular ? "text-[#BFF747]" : ""}`}>
                                        {plan.price}
                                    </span>
                                </div>
                                <p className={`text-sm lg:text-sm decoration-1 line-through mt-1 ${plan.isPopular ? "text-[#13191d]/60" : "text-gray-500"}`}>
                                    {plan.originalPrice}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex-grow mb-8">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm lg:text-base">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${plan.isPopular ? "bg-[#13191d]" : "bg-white"}`} />
                                            <span className={plan.isPopular ? "text-[#13191d]/90 font-medium" : "text-gray-300"}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Button */}
                            <div className="mt-auto">
                                <button
                                    className={`w-full py-3 lg:py-4 rounded-xl font-bold text-sm lg:text-base transition-all duration-200
                                        ${plan.isPopular
                                            ? "bg-[#13191d] text-[#BFF747] hover:bg-black"
                                            : "border border-[#abb1b1] bg-transparent text-[#BFF747] hover:border-[#BFF747] hover:text-[#BFF747]"
                                        }
                                    `}
                                >
                                    {orderNowText}
                                </button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
