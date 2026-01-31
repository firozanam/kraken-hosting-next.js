"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export const SharedVisionSection = () => {
    const t = useTranslations("AnonymousPricing.Vision");

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32">
            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10">

                {/* Header Text */}
                <FadeIn
                    direction="up"
                    duration={800}
                    className="text-center mb-16 lg:mb-24 max-w-5xl mx-auto space-y-6"
                >
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-[#bff747]">
                        <span dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                    </h2>
                    <p className="text-gray-300 text-sm lg:text-base xl:text-lg leading-relaxed max-w-4xl mx-auto">
                        {t('description')}
                    </p>
                </FadeIn>

            </div>
        </section>
    );
};
