import Image from "next/image";
import { useTranslations } from "next-intl";

export const CoreFeatures = () => {
    const t = useTranslations("CoreFeatures");

    const features = [
        {
            key: "ssl",
            icon: "/images/home/feature-ssl.png",
            imgClass: "h-[200px] w-auto lg:w-full lg:h-auto object-contain", // Constrained height for mobile/tab
        },
        {
            key: "updates",
            icon: "/images/home/feature-updates.png",
            imgClass: "h-[160px] w-auto lg:h-auto lg:w-auto object-contain mx-auto", // Constrained mobile height
        },
        {
            key: "moneyback",
            icon: "/images/home/feature-moneyback.png",
            imgClass: "h-[160px] w-auto lg:h-auto lg:w-auto object-contain mx-auto", // Constrained mobile height
        }
    ];

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32">
            <div className="w-[90%] lg:w-[90%] xl:w-[75%] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 text-black">
                    {features.map((feature) => (
                        <div key={feature.key} className="bg-white rounded-3xl p-8 lg:p-6 xl:p-10 flex flex-col items-center text-center space-y-2 lg:space-y-2 xl:space-y-4 transition-transform hover:scale-[1.02] duration-300 h-full">

                            {/* Text Content */}
                            <div className="space-y-4">
                                <h3 className="text-xl lg:text-xl xl:text-2xl font-bold text-[#1a1a1a]">
                                    {t(`${feature.key}.title`)}
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-sm xl:text-base leading-relaxed">
                                    {t(`${feature.key}.description`)}
                                </p>
                            </div>

                            {/* Image/Graphic */}
                            <div className="relative w-full flex items-center justify-center mt-auto pt-2">
                                <div className="relative w-full">
                                    <Image
                                        src={feature.icon}
                                        alt={t(`${feature.key}.title`)}
                                        width={400}
                                        height={300}
                                        className={feature.imgClass}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
