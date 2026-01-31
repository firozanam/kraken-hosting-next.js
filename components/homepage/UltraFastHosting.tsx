import Image from "next/image";
import { Globe, Zap, HardDrive, Lock } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

const CustomGlobalIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* Globe Grid */}
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.9 3.2 17.5 5.2 19.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C14.5 5 16 8 16 12C16 16 14.5 19 12 22C9.5 19 8 16 8 12C8 8 9.5 5 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

        {/* The Swoosh Arrow */}
        <path d="M5 21C5 21 10 24 16 21C21 18 22 10 22 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6H22V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const UltraFastHosting = () => {
    const t = useTranslations("UltraFastHosting");

    return (
        <section className="relative w-full bg-[#13191d] py-24 lg:pt-32 lg:pb-32 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                {/* Section Header */}
                <FadeIn direction="up" duration={600} className="text-center mb-16 lg:mb-24 space-y-4">
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white">
                        {t("title")}
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base xl:text-lg max-w-3xl mx-auto">
                        {t("subtitle")}
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">

                    {/* Left Content - Image (Mobile: Top, Desktop: Right via Order) */}
                    <FadeIn
                        direction="zoom"
                        duration={800}
                        className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center md:order-2"
                    >
                        {/* Optional: Add a glow/blob behind the image if needed, keeping it subtle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#AC2BF1]/20 blur-[40px] md:blur-[100px] rounded-full pointer-events-none -z-10 gpu-accelerated" />

                        <div className="relative w-full h-full scale-100 md:scale-110 lg:scale-150">
                            <Image
                                src="/images/home/ultrafast-hosting.png"
                                alt="UltraFast Hosting Features"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </FadeIn>

                    {/* Right Content - Text (Mobile: Bottom, Desktop: Left via Order) */}
                    <FadeIn direction="right" duration={600} className="space-y-8 md:order-1">
                        {/* Badge */}
                        <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#AC2BF1] to-[#D54BF7]">
                            <span className="text-white font-bold text-xs lg:text-sm">{t("badge")}</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                                {t("feature_title")}
                            </h3>
                            <p className="text-gray-400 text-sm lg:text-base xl:text-lg leading-relaxed">
                                {t("feature_description")}
                            </p>
                        </div>

                        {/* Features Icons */}
                        <div className="flex flex-wrap gap-x-8 gap-y-6 pt-4">
                            <div className="flex items-center gap-3">
                                <CustomGlobalIcon className="w-6 h-6 lg:w-8 lg:h-8 text-[#AC2BF1]" />
                                <span className="text-white text-sm lg:text-base font-medium">{t("icons.global_data_centers")}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Zap className="w-6 h-6 lg:w-8 lg:h-8 text-[#AC2BF1]" strokeWidth={1.5} />
                                <span className="text-white text-sm lg:text-base font-medium">{t("icons.litespeed_servers")}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <HardDrive className="w-6 h-6 lg:w-8 lg:h-8 text-[#AC2BF1]" strokeWidth={1.5} />
                                <span className="text-white text-sm lg:text-base font-medium">{t("icons.nvme_ssds")}</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Kraken 360 Security Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content - Image (Mobile: Top, Desktop: Left - Natural) */}
                    <FadeIn
                        direction="zoom"
                        duration={800}
                        className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center"
                    >
                        {/* Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#AC2BF1]/20 blur-[40px] md:blur-[100px] rounded-full pointer-events-none -z-10 gpu-accelerated" />

                        <div className="relative w-full h-full scale-100">
                            <Image
                                src="/images/home/website-security.png"
                                alt="Kraken 360 Security"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </FadeIn>

                    {/* Right Content - Text (Mobile: Bottom, Desktop: Right - Natural) */}
                    <FadeIn direction="left" duration={600} className="space-y-8">
                        {/* Badge */}
                        <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#AC2BF1] to-[#D54BF7]">
                            <span className="text-white font-bold text-xs lg:text-sm">{t("security.badge")}</span>
                        </div>

                        {/* Heading */}
                        <div className="space-y-4">
                            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                                {t("security.title")}
                            </h3>
                            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                                {t("security.description")}
                            </p>
                        </div>

                        {/* Features Icons */}
                        <div className="flex flex-wrap gap-x-8 gap-y-6 pt-4">
                            <div className="flex items-center gap-3">
                                <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-[#AC2BF1]" strokeWidth={1.5} />
                                <span className="text-white text-sm lg:text-base font-medium">{t("security.features.ddos")}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-[#AC2BF1]" strokeWidth={1.5} />
                                <span className="text-white text-sm lg:text-base font-medium">{t("security.features.monitoring")}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Lock className="w-5 h-5 lg:w-6 lg:h-6 text-[#AC2BF1]" strokeWidth={1.5} />
                                <span className="text-white text-sm lg:text-base font-medium">{t("security.features.ssl")}</span>
                            </div>
                        </div>

                    </FadeIn>

                </div>
            </div>
        </section>
    );
};
