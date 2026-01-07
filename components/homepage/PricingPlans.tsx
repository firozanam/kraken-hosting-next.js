import Link from "next/link";
import { useTranslations } from "next-intl";

interface Plan {
    id: string; // Added ID to help with key access if needed, though mostly visual
    name: string;
    description: string;
    price: string;
    period?: string;
    originalPrice: string;
    features: string[];
    isPopular?: boolean;
    highlightBorder?: boolean; // Kept interface but logic removed in code previously
    firstYearText?: string;
}

export const PricingPlans = () => {
    const t = useTranslations("PricingPlans");

    const plans: Plan[] = [
        {
            id: "shared_starter",
            name: t("plans.shared_starter.name"),
            description: t("plans.shared_starter.description"),
            price: t("plans.shared_starter.price"),
            originalPrice: t("plans.shared_starter.original_price"),
            firstYearText: t("plans.shared_starter.first_year"),
            features: [
                t("plans.shared_starter.features.0"),
                t("plans.shared_starter.features.1"),
                t("plans.shared_starter.features.2"),
                t("plans.shared_starter.features.3"),
                t("plans.shared_starter.features.4"),
                t("plans.shared_starter.features.5"),
                t("plans.shared_starter.features.6")
            ]
        },
        {
            id: "vps_starter",
            name: t("plans.vps_starter.name"),
            description: t("plans.vps_starter.description"),
            price: t("plans.vps_starter.price"),
            period: t("plans.vps_starter.period"),
            originalPrice: t("plans.vps_starter.original_price"),
            features: [
                t("plans.vps_starter.features.0"),
                t("plans.vps_starter.features.1"),
                t("plans.vps_starter.features.2"),
                t("plans.vps_starter.features.3"),
                t("plans.vps_starter.features.4")
            ]
        },
        {
            id: "webhosting_growster",
            name: t("plans.webhosting_growster.name"),
            description: t("plans.webhosting_growster.description"),
            price: t("plans.webhosting_growster.price"),
            originalPrice: t("plans.webhosting_growster.original_price"),
            firstYearText: t("plans.webhosting_growster.first_year"),
            features: [
                t("plans.webhosting_growster.features.0"),
                t("plans.webhosting_growster.features.1"),
                t("plans.webhosting_growster.features.2"),
                t("plans.webhosting_growster.features.3"),
                t("plans.webhosting_growster.features.4"),
                t("plans.webhosting_growster.features.5"),
                t("plans.webhosting_growster.features.6"),
                t("plans.webhosting_growster.features.7")
            ]
        },
        {
            id: "kraken_web_hosting",
            name: t("plans.kraken_web_hosting.name"),
            description: t("plans.kraken_web_hosting.description"),
            price: t("plans.kraken_web_hosting.price"),
            originalPrice: t("plans.kraken_web_hosting.original_price"),
            firstYearText: t("plans.kraken_web_hosting.first_year"),
            isPopular: true,
            features: [
                t("plans.kraken_web_hosting.features.0"),
                t("plans.kraken_web_hosting.features.1"),
                t("plans.kraken_web_hosting.features.2"),
                t("plans.kraken_web_hosting.features.3"),
                t("plans.kraken_web_hosting.features.4"),
                t("plans.kraken_web_hosting.features.5"),
                t("plans.kraken_web_hosting.features.6"),
                t("plans.kraken_web_hosting.features.7")
            ]
        }
    ];

    return (
        <section className="relative w-full bg-[#13191d] pt-20 lg:pt-32 pb-20 lg:pb-32">

            {/* Left connected blop - Moved inside container for correct positioning */}
            <div className="w-[90%] lg:w-[75%] mx-auto relative z-10">
                {/* Visual Blop - Positioned to connect upwards */}
                <div className="absolute top-0 left-0 -translate-y-1/2 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#9fa3a7]/20 blur-[120px] rounded-full pointer-events-none" />

                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-20 space-y-4 relative z-20">
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-white">
                        {t("title")}
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base xl:text-lg max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-20">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-6 flex flex-col h-full relative group transition-transform duration-300 hover:-translate-y-2
                                ${plan.isPopular
                                    ? "bg-gradient-to-r from-[#BFF747] to-[#86efac] text-[#13191d]"
                                    : "bg-[#000000] text-white"
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
                                    {plan.period && <span className="text-sm lg:text-base opacity-80">{plan.period}</span>}
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

                            {/* Managed Server Text */}
                            <div className={`text-center mb-6 text-sm font-medium ${plan.isPopular ? "text-[#13191d]/80" : "text-[#BFF747]"}`}>
                                {t("managed_server")}
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
                                    {t("order_now")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
