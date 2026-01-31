"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="relative bg-[#13191d] pt-16 pb-8 overflow-hidden">
      {/* Bottom Right Glow/Blob Effect - Angled Corner Light */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-gradient-radial from-[#15803d] via-[#052e16] to-transparent opacity-50 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#22c55e] opacity-20 blur-[80px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none mix-blend-screen" />

      <div className="w-full content-padding-x relative z-10 container-ultrawide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 2xl:gap-12 mb-16">
          {/* Column 1: Branding & Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-3 lg:gap-4">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
                <Image
                  src="/footer-icon.png"
                  alt="Kraken Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-wide">
                <span className="text-[#BFF747]">{t("branding.text")}</span> {t("branding.suffix")}
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-[#BFF747] text-base font-medium">
                {t("branding.tagline_1")}
              </p>
              <p className="text-[#BFF747] text-base font-medium">
                {t("branding.tagline_2")}
              </p>
            </div>

            {/* Newsletter Form */}
            <form className="mt-8 flex w-full max-w-[420px]">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="flex-1 bg-gray-200 text-gray-800 px-5 py-3 xl:py-4 text-sm xl:text-base focus:outline-none rounded-l-xl placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="w-40 xl:w-48 py-3 xl:py-4 text-sm xl:text-base font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-r-xl hover:brightness-110 transition-all duration-200"
              >
                {t("newsletter.button")}
              </button>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-white font-semibold mb-6">{t("columns.quick_links.title")}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/shared-hosting"
                  className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors"
                >
                  {t("columns.quick_links.items.shared")}
                </Link>
              </li>
              <li>
                <Link
                  href="/vps"
                  className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors"
                >
                  {t("columns.quick_links.items.vps")}
                </Link>
              </li>
              <li>
                <Link
                  href="/managed-server"
                  className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors"
                >
                  {t("columns.quick_links.items.managed")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors"
                >
                  {t("columns.quick_links.items.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors"
                >
                  {t("columns.quick_links.items.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">{t("columns.legal.title")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms-conditions" className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors">
                  {t("columns.legal.items.terms")}
                </Link>
              </li>
              <li>
                <Link href="/acceptable-use-policy" className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors">
                  {t("columns.legal.items.aup")}
                </Link>
              </li>
              <li>
                <Link href="/service-level-agreement" className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors">
                  {t("columns.legal.items.sla")}
                </Link>
              </li>
              <li>
                <Link href="/privacy-hosting" className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors">
                  {t("columns.legal.items.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/copyright-disclaimer" className="text-gray-400 hover:text-[#BFF747] text-sm xl:text-base transition-colors">
                  {t("columns.legal.items.copyright")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Have Questions? */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">{t("columns.questions.title")}</h3>
            <div className="space-y-3 text-sm xl:text-base text-gray-400">

              <p className="mt-4">{t("columns.questions.email_label")}</p>
              <a
                href="mailto:support@krakenhosting.io"
                className="block text-white hover:text-[#BFF747]"
              >
                support@krakenhosting.io
              </a>
            </div>
          </div>

          {/* Column 5: We accept */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6">{t("columns.accept.title")}</h3>
            <div className="space-y-6">
              {/* First Row of Icons */}
              <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-full h-8 min-[400px]:h-10 sm:h-[55px] lg:h-[80px] xl:h-[80px] 2xl:h-[90px]">
                <Image
                  src="/payment-methods-row1.png"
                  alt="Payment Methods"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Second Row of Icons */}
              <div className="flex items-center gap-4 sm:gap-5 xl:gap-6">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/payment-icon-btc.png"
                    alt="Bitcoin"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/payment-icon-usdt.png"
                    alt="Tether"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/payment-icon-xmr.png"
                    alt="Monero"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-[#bff747] text-xs xl:text-sm">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
