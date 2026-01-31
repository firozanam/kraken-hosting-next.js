"use client";

import { useTranslations } from "next-intl";
import { HostingPlanGrid } from "@/components/domain/HostingPlanGrid";
import { FadeIn } from "@/components/ui/FadeIn";

export const Pricing = () => {
    const t = useTranslations("Pricing");

    const uiText = {
        first_year: t("first_year"),
        billing_cycle: t("billing_cycle"),
        managed_text: t("managed_text"),
        cta_button: t("cta_button"),
    };

    return (
        <section className="bg-[#13191d]">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide text-center pt-24 pb-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        {t("title")}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </FadeIn>
            </div>

            {/* Reuse the existing HostingPlanGrid component but pass our specific plans */}
            <div className="-mt-16 lg:-mt-24">
                <HostingPlanGrid plans={t.raw("plans")} uiText={uiText} />
            </div>
        </section>
    );
};
