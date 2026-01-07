import Image from "next/image";
import { useTranslations } from "next-intl";

export const DomainSearch = () => {
    const t = useTranslations("DomainSearch");

    return (
        <section className="relative w-full bg-[#13191d] py-24 lg:pt-48 lg:pb-20">
            <div className="w-[90%] lg:w-[75%] mx-auto relative z-10">
                <div className="absolute bottom-0 left-0 translate-y-1/2 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-[#9fa3a7]/20 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#9fa3a7]/20 blur-[120px] rounded-full pointer-events-none -z-10" />

                <div className="bg-[#1a1e22] rounded-[2.5rem] p-6 md:p-8 lg:py-10 lg:px-12 relative overflow-hidden">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center relative z-10">

                        {/* Left Content */}
                        <div className="relative z-20 space-y-6 lg:space-y-6">
                            {/* Title */}
                            <div className="space-y-3">
                                <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-white text-center lg:text-left">
                                    {t.rich("title", {
                                        span: (chunks: React.ReactNode) => <span className="bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">{chunks}</span>
                                    })}
                                </h2>
                                <p className="text-gray-300 text-sm lg:text-base xl:text-lg text-center lg:text-left max-w-xl lg:mx-0 mx-auto">
                                    {t("subtitle")}
                                </p>
                            </div>

                            {/* Mobile/Tablet Image (Visible only below lg) - Placed before search */}
                            <div className="block lg:hidden relative w-full max-w-[320px] sm:max-w-[400px] mx-auto h-[180px] sm:h-[250px] mb-6">
                                <Image
                                    src="/images/home/domain-search-bg.png"
                                    alt="Domain Search TLDs"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Search Box */}
                            <div className="relative max-w-2xl mx-auto lg:mx-0">
                                <div className="flex w-full">
                                    <input
                                        type="text"
                                        placeholder={t("placeholder")}
                                        className="flex-1 bg-gray-200 text-gray-800 px-5 py-3 xl:py-4 text-sm lg:text-base focus:outline-none rounded-l-xl placeholder:text-gray-500 min-w-0"
                                    />
                                    <button
                                        className="w-32 md:w-40 xl:w-48 py-3 xl:py-4 text-sm lg:text-base font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89D957] to-[#a8e667] rounded-r-xl hover:brightness-110 transition-all duration-200 whitespace-nowrap"
                                    >
                                        {t("cta_button")}
                                    </button>
                                </div>
                            </div>

                            {/* TLD Pricing */}
                            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto lg:mx-0">
                                <div className="space-y-1">
                                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">.se</h3>
                                    <p className="text-[#a3e635] font-bold text-sm lg:text-base">{t("tlds.se.price")}</p>
                                    <p className="text-xs lg:text-sm text-gray-400">{t("tlds.se.promo")}</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">.com</h3>
                                    <p className="text-[#a3e635] font-bold text-sm lg:text-base">{t("tlds.com.price")}</p>
                                    <p className="text-xs lg:text-sm text-gray-400">{t("tlds.com.promo")}</p>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white">.es</h3>
                                    <p className="text-[#a3e635] font-bold text-sm lg:text-base">{t("tlds.es.price")}</p>
                                    <p className="text-xs lg:text-sm text-gray-400">{t("tlds.es.promo")}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Image (Desktop only) */}
                        <div className="hidden lg:flex relative w-full max-w-full mx-auto aspect-[4/3] items-center justify-center">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/images/home/domain-search-bg.png"
                                    alt="Domain Search TLDs"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
