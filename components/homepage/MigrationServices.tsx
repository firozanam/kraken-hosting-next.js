import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/ui/FadeIn";

export const MigrationServices = () => {
    const t = useTranslations("MigrationServices");
    const tSupport = useTranslations("MigrationSupport");

    return (
        <section className="relative w-full bg-[#13191d] py-20 lg:py-32 overflow-hidden">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content - Image */}
                    <FadeIn
                        direction="zoom"
                        duration={800}
                        className="relative w-full flex items-center justify-center lg:justify-start"
                    >
                        {/* Floating Text - Positioned relative to the image container */}
                        <div className="absolute top-[10%] right-[10%] lg:right-[15%] z-20 pointer-events-none">
                            <p className="text-white text-lg lg:text-xl font-medium tracking-wide drop-shadow-lg" style={{ fontFamily: 'cursive' }}>
                                {t("floating_text")}
                            </p>
                        </div>

                        <div className="relative w-full max-w-[500px] aspect-square">
                            <Image
                                src="/images/home/migration-guy.png"
                                alt="Free Migration Service"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </FadeIn>

                    {/* Right Content - Text */}
                    <FadeIn direction="right" duration={600} className="space-y-8 text-center lg:text-left">

                        <div className="space-y-4">
                            <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white">
                                {t("title")}
                            </h2>
                            <p className="text-gray-400 text-sm lg:text-base xl:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {t("description")}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-white text-xl lg:text-2xl font-semibold">
                                {t("support_title")}
                            </h3>

                            <Link href="#" className="inline-flex items-center gap-3 transition-colors duration-200 group">
                                <div className="relative w-6 h-6 lg:w-8 lg:h-8">
                                    <Image
                                        src="/images/home/icon-migration.svg"
                                        alt="Migrate"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[#AC2BF1] font-medium text-base lg:text-lg group-hover:text-[#be4bf7] transition-colors">
                                    {t("cta_text")}
                                </span>
                            </Link>
                        </div>
                    </FadeIn>

                </div>

                {/* Support Section - Added below Migration */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-20 lg:mt-32">

                    {/* Left Content - Text (Support) */}
                    <FadeIn direction="right" duration={600} className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                        <div className="space-y-4">
                            <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white">
                                {tSupport("title")}
                            </h2>
                            <p className="text-gray-400 text-sm lg:text-base xl:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {tSupport("description")}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 lg:gap-8 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="relative w-8 h-8">
                                    <Image
                                        src="/images/home/icon-support-chat.svg"
                                        alt="Support"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-white text-sm lg:text-base font-medium hover:text-[#AC2BF1] transition-colors cursor-pointer">
                                    {tSupport("live_chat")}
                                </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="relative w-8 h-8">
                                    <Image
                                        src="/images/home/icon-support-ticket.svg"
                                        alt="Ticket"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-white text-sm lg:text-base font-medium hover:text-[#AC2BF1] transition-colors cursor-pointer">
                                    {tSupport("ticket")}
                                </span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Content - Image (Support) */}
                    <FadeIn
                        direction="zoom"
                        delay={200}
                        duration={800}
                        className="relative w-full flex items-center justify-center lg:justify-end order-1 lg:order-2"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#5b2bf1]/20 blur-[40px] md:blur-[100px] rounded-full pointer-events-none -z-10 gpu-accelerated" />

                        <div className="relative w-full max-w-[500px] aspect-square">
                            <Image
                                src="/images/home/support-agent.png"
                                alt="24/7 Support"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
};
