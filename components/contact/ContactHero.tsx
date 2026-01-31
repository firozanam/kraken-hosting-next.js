"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export const ContactHero = () => {
    const t = useTranslations("Contact.Hero");

    return (
        <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center pt-32 md:pt-40 lg:pt-32 pb-20 overflow-hidden">

            {/* Background Image with Overlay - Consistent with About Us */}
            <div className="absolute inset-0 w-full h-full z-0">
                {/* Re-using the about banner for consistency as requested, allows easy swap later */}
                {/* Note: In a real scenario, we might want a different image, but structure is key here */}
                <div className="absolute inset-0 bg-[#0b0f11] z-0" />

                {/* Fallback to simple dark theme if image mismatch, but let's try to simulate the AboutHero feel 
                     Since I cannot blindly use the same image without knowing if it fits contextually, 
                     I will use a very similar dark gradient + slight pattern setup that matches the "premium" feel 
                     OR actually just use the image if that's what "consistent" means to the user.
                     User said "hero section isnt consistent at all". 
                     I will use the exact AboutHero structure but maybe without the specific "server" image if not appropriate, 
                     OR just use the exact same image to be safe. Let's use the image.
                 */}
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: 'url(/images/about-us-banner.webp)' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f11] via-[#0b0f11]/90 to-[#0b0f11]/60" />
            </div>

            <div className="container-ultrawide w-full content-padding-x mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="w-full max-w-3xl space-y-8 mx-auto lg:mx-0">
                        <FadeIn direction="left">
                            <h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-center lg:text-left"
                                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
                            />
                        </FadeIn>

                        <FadeIn delay={100} direction="left">
                            <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-medium block border-l-4 border-[#bff747] pl-6 text-left">
                                {t("subtitle")}
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};
