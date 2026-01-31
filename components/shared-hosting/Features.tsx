"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export const Features = () => {
    const t = useTranslations("Features");

    return (
        <section className="relative w-full py-16 lg:py-24 bg-[#13191d] overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                {/* Visual Blob - Optimized: Replaced blur-[100px] with radial gradient */}
                <div className="absolute top-0 left-0 -translate-x-1/2 translate-y-20 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(159,163,167,0.08)_0%,transparent_70%)] pointer-events-none" />

                {/* Section Header */}
                <FadeIn className="text-center mb-12 lg:mb-20 space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        We provide Shared Hosting with <br className="hidden md:block" /> unbeatable features and benefits
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </FadeIn>

                {/* Grid Layout */}
                <div className="flex flex-col gap-6">

                    {/* Row 1: Two Large Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Card 1: 99.99% Uptime */}
                        <FadeIn
                            delay={0}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[350px] will-change-transform transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="w-full relative h-[220px] lg:h-[250px] mt-8">
                                <Image
                                    src="/images/shared-hosting/features/uptime.svg"
                                    alt={t("uptime.title")}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain px-4"
                                />
                            </div>
                            <div className="p-6 pt-2 lg:p-8 lg:pt-4 flex flex-col items-center mt-auto mb-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{t("uptime.title")}</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-2 max-w-sm">
                                    {t("uptime.description")}
                                </p>
                            </div>
                        </FadeIn>

                        {/* Card 2: Security & Updates (Large) */}
                        <FadeIn
                            delay={100}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[350px] transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="w-full relative h-[220px] lg:h-[250px] mt-8">
                                <Image
                                    src="/images/shared-hosting/features/security-updates.svg"
                                    alt={t("security_updates_large.title")}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain px-4"
                                />
                            </div>
                            <div className="p-6 pt-2 lg:p-8 lg:pt-4 flex flex-col items-center mt-auto mb-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{t("security_updates_large.title")}</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-2 max-w-sm">
                                    {t("security_updates_large.description")}
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Row 2: Two Large Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Card 3: Unlimited Bandwidth */}
                        <FadeIn
                            delay={200}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[350px] transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="w-full relative h-[220px] lg:h-[250px] mt-8">
                                <Image
                                    src="/images/shared-hosting/features/bandwidth.svg"
                                    alt={t("bandwidth.title")}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain px-4"
                                />
                            </div>
                            <div className="p-6 pt-2 lg:p-8 lg:pt-4 flex flex-col items-center mt-auto mb-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{t("bandwidth.title")}</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-2 max-w-sm">
                                    {t("bandwidth.description")}
                                </p>
                            </div>
                        </FadeIn>

                        {/* Card 4: Free Backups */}
                        <FadeIn
                            delay={300}
                            className="bg-white rounded-3xl flex flex-col items-center text-center overflow-hidden min-h-auto lg:min-h-[350px] transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="w-full relative h-[220px] lg:h-[250px] mt-8">
                                <Image
                                    src="/images/shared-hosting/features/backups.svg"
                                    alt={t("backups.title")}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain px-4"
                                />
                            </div>
                            <div className="p-6 pt-2 lg:p-8 lg:pt-4 flex flex-col items-center mt-auto mb-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{t("backups.title")}</h3>
                                <p className="text-gray-600 text-sm lg:text-base mb-2 max-w-sm">
                                    {t("backups.description")}
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Row 3: Three Cards (Reuse WordPress Images) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Card 5: Free SSL */}
                        <FadeIn
                            delay={400}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">{t("ssl.title")}</h3>
                            <p className="text-gray-600 text-sm mb-6 max-w-[250px]">
                                {t("ssl.description")}
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/wordpress-hosting/features/ssl.svg"
                                    alt="Free SSL"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 6: Security & Updates (Small) */}
                        <FadeIn
                            delay={500}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">{t("security_updates_small.title")}</h3>
                            <p className="text-gray-600 text-sm mb-6 max-w-[250px]">
                                {t("security_updates_small.description")}
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/wordpress-hosting/features/security.svg"
                                    alt="Security"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 7: Money Back */}
                        <FadeIn
                            delay={600}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">{t("money_back.title")}</h3>
                            <p className="text-gray-600 text-sm mb-6 max-w-[250px]">
                                {t("money_back.description")}
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/wordpress-hosting/features/money-back.svg"
                                    alt="Money Back"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Row 4: Three Cards (New Images) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Card 8: Powered by Plesk */}
                        <FadeIn
                            delay={700}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">{t("plesk.title")}</h3>
                            <p className="text-gray-600 text-sm mb-6 max-w-[250px]">
                                {t("plesk.description")}
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/shared-hosting/features/plesk.svg"
                                    alt="Plesk"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 9: Lightning-Fast Storage */}
                        <FadeIn
                            delay={800}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">{t("storage.title")}</h3>
                            <p className="text-gray-600 text-sm mb-6 max-w-[250px]">
                                {t("storage.description")}
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/shared-hosting/features/storage.svg"
                                    alt="Storage"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>

                        {/* Card 10: Pro-active Monitoring */}
                        <FadeIn
                            delay={900}
                            className="bg-white rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden transition-transform duration-300 hover:-translate-y-2"
                        >
                            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">{t("monitoring.title")}</h3>
                            <p className="text-gray-600 text-sm mb-6 max-w-[250px]">
                                {t("monitoring.description")}
                            </p>
                            <div className="mt-auto w-full relative h-[150px]">
                                <Image
                                    src="/images/shared-hosting/features/monitoring.svg"
                                    alt="Monitoring"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-contain object-bottom"
                                />
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};
