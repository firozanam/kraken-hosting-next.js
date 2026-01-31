import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

interface FeatureCardProps {
    icon: string;
    translationKey: string;
    index: number;
}

const FeatureCard = ({ icon, translationKey, index }: FeatureCardProps) => {
    const t = useTranslations("NextGenHosting");
    return (
        <FadeIn
            delay={index * 100}
            direction="up"
            className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
        >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 mb-2">
                <Image
                    src={icon}
                    alt={t(`features.${translationKey}.title`)}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="text-[#8B5CF6] font-bold text-lg lg:text-xl xl:text-2xl">
                {t(`features.${translationKey}.title`)}
            </h3>
            <p className="text-[#13191d]/80 text-sm lg:text-base leading-relaxed">
                {t(`features.${translationKey}.description`)}
            </p>
        </FadeIn>
    );
};

export const NextGenHosting = () => {
    const t = useTranslations("NextGenHosting");

    const features = [
        { icon: "/images/home/icon-ssd.svg", key: "ssd" },
        { icon: "/images/home/icon-cache.svg", key: "cache" },
        { icon: "/images/home/icon-stack.svg", key: "stack" },
        { icon: "/images/home/icon-php.svg", key: "php" },
        { icon: "/images/home/icon-uptime.svg", key: "uptime" },
        { icon: "/images/home/icon-hardware.svg", key: "hardware" },
    ];

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                {/* Header */}
                <FadeIn direction="up" duration={600} className="text-center mb-12 lg:mb-20 space-y-4 max-w-5xl mx-auto">
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-white">
                        {t("title")}
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base xl:text-lg leading-relaxed max-w-3xl mx-auto">
                        {t("subtitle")}
                    </p>
                </FadeIn>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            translationKey={feature.key}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
