"use client";

import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";


const Card = ({ title, description, pricePrefix, priceValue, dropdownLabel }: {
    title: string;
    description: string;
    pricePrefix: string;
    priceValue: string;
    dropdownLabel: string;
}) => (
    <div
        className="w-full h-full bg-[#090a19] border border-[#2a3a2a] rounded-xl p-6 md:p-8 flex flex-col items-center text-center shadow-lg relative overflow-hidden group hover:border-[#89d957]/50 transition-all duration-300 hover:scale-102"
    >

        <h3 className="text-lg lg:text-xl xl:text-2xl font-bold mb-4 text-[#a3e635] min-h-[3.5rem] flex items-center justify-center">
            {title}
        </h3>

        {/* Description limit height for consistency */}
        <p className="text-gray-400 text-sm mb-6 min-h-[60px]">
            {description}
        </p>

        <div className="flex items-baseline gap-2 mb-6 mt-auto">
            <span className="text-gray-400 text-sm">{pricePrefix}</span>
            <span className="text-white text-3xl md:text-4xl font-bold">{priceValue}</span>
        </div>

        {/* Dropdown-like */}
        <div className="w-full relative mb-6">
            <button className="w-full bg-white text-black px-4 py-3 rounded-lg flex items-center justify-between font-medium text-xs md:text-sm">
                <span>{dropdownLabel}</span>
                <ChevronDown className="w-4 h-4 text-black" />
            </button>
        </div>

        <button className="w-full bg-[#bfeb5d] hover:bg-[#aadd45] text-[#13191d] font-bold py-3.5 rounded-lg transition-colors duration-200 uppercase text-sm tracking-wide">
            Order now
        </button>
    </div>
);

export const ProductList = () => {
    const t = useTranslations("ProductsList");

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32">

            {/* Top Left Blob */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 -translate-x-1/2 -translate-y-1/2 gpu-accelerated" />

            {/* Bottom Right Blob (to match next section) */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[40px] md:blur-[100px] pointer-events-none z-10 translate-x-1/3 translate-y-1/3 gpu-accelerated" />

            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-20">
                <div className="text-center mb-16 lg:mb-24">
                    <FadeIn direction="up" duration={600}>
                        <h2
                            className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
                        >
                            {t("title")}
                        </h2>
                    </FadeIn>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                >
                    <FadeIn delay={0} className="h-full">
                        <Card
                            title={t("cards.sectigo_ssl.title")}
                            description={t("cards.sectigo_ssl.description")}
                            pricePrefix={t("cards.sectigo_ssl.price_prefix")}
                            priceValue={t("cards.sectigo_ssl.price_value")}
                            dropdownLabel={t("cards.sectigo_ssl.dropdown_label")}
                        />
                    </FadeIn>
                    <FadeIn delay={100} className="h-full">
                        <Card
                            title={t("cards.bitninja.title")}
                            description={t("cards.bitninja.description")}
                            pricePrefix={t("cards.bitninja.price_prefix")}
                            priceValue={t("cards.bitninja.price_value")}
                            dropdownLabel={t("cards.bitninja.dropdown_label")}
                        />
                    </FadeIn>
                    <FadeIn delay={200} className="h-full">
                        <Card
                            title={t("cards.patchman.title")}
                            description={t("cards.patchman.description")}
                            pricePrefix={t("cards.patchman.price_prefix")}
                            priceValue={t("cards.patchman.price_value")}
                            dropdownLabel={t("cards.patchman.dropdown_label")}
                        />
                    </FadeIn>
                    <FadeIn delay={300} className="h-full">
                        <Card
                            title={t("cards.managed_server.title")}
                            description={t("cards.managed_server.description")}
                            pricePrefix={t("cards.managed_server.price_prefix")}
                            priceValue={t("cards.managed_server.price_value")}
                            dropdownLabel={t("cards.managed_server.dropdown_label")}
                        />
                    </FadeIn>
                </div>

                {/* Second Row - 3 cards centered */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-6 lg:mt-8 max-w-5xl mx-auto"
                >
                    <FadeIn delay={0} className="h-full">
                        <Card
                            title={t("cards.secure_web.title")}
                            description={t("cards.secure_web.description")}
                            pricePrefix={t("cards.secure_web.price_prefix")}
                            priceValue={t("cards.secure_web.price_value")}
                            dropdownLabel={t("cards.secure_web.dropdown_label")}
                        />
                    </FadeIn>
                    <FadeIn delay={100} className="h-full">
                        <Card
                            title={t("cards.id_protection.title")}
                            description={t("cards.id_protection.description")}
                            pricePrefix={t("cards.id_protection.price_prefix")}
                            priceValue={t("cards.id_protection.price_value")}
                            dropdownLabel={t("cards.id_protection.dropdown_label")}
                        />
                    </FadeIn>
                    <FadeIn delay={200} className="h-full">
                        <Card
                            title={t("cards.secure_vpn.title")}
                            description={t("cards.secure_vpn.description")}
                            pricePrefix={t("cards.secure_vpn.price_prefix")}
                            priceValue={t("cards.secure_vpn.price_value")}
                            dropdownLabel={t("cards.secure_vpn.dropdown_label")}
                        />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
