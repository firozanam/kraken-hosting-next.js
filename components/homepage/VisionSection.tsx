
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export const VisionSection = () => {
    const t = useTranslations("VisionSection");

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32">
            <div className="w-full content-padding-x mx-auto container-ultrawide relative z-10">

                {/* Header Text */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center mb-16 lg:mb-24 max-w-5xl mx-auto space-y-6"
                >
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-[#bff747]">
                        {t("title")}
                    </h2>
                    <p className="text-gray-300 text-sm lg:text-base xl:text-lg leading-relaxed max-w-4xl mx-auto">
                        {t("subtitle")}
                    </p>
                </FadeIn>

                {/* Light Green CTA Box */}
                <FadeIn
                    direction="zoom"
                    duration={800}
                    className="bg-gradient-to-b from-[#89d957] to-[#c9e265] rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">

                        {/* Left Content */}
                        <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
                            <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#13191d] leading-tight">
                                {t("banner.title")}
                            </h3>
                            <p className="text-[#13191d]/80 text-sm lg:text-base xl:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                                {t("banner.description")}
                            </p>
                        </div>

                        {/* Right Content - Button */}
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-end justify-center gap-3">
                            <button className="bg-[#13191d] text-[#bff747] font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:bg-black hover:scale-105 shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] text-base lg:text-lg w-full sm:w-auto min-w-[200px]">
                                {t("banner.cta_button")}
                            </button>
                            <span className="text-[#13191d]/70 text-xs lg:text-sm font-medium">
                                {t("banner.guarantee")}
                            </span>
                        </div>

                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
