"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-[#13191d] pt-16 pb-8 overflow-hidden">
      {/* Bottom Right Glow/Blob Effect - Angled Corner Light */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-gradient-radial from-[#15803d] via-[#052e16] to-transparent opacity-50 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#22c55e] opacity-20 blur-[80px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none mix-blend-screen" />

      <div className="w-full px-6 sm:px-8 lg:pl-12 lg:pr-32 xl:pl-20 xl:pr-48 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Branding & Newsletter (4 cols wide) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src="/footer-icon.png"
                  alt="Kraken Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-bold text-white tracking-wide">
                <span className="text-[#BFF747]">KRAKEN</span> HOSTING
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-[#BFF747] text-base font-medium">
                Where the signal fades, we amplify.
              </p>
              <p className="text-[#BFF747] text-base font-medium">
                Kraken Media: Unlocking the unseen
              </p>
            </div>

            {/* Newsletter Form */}
            <form className="mt-8 flex w-full max-w-[420px]">
              <input
                type="email"
                placeholder="Sign up for special offers"
                className="flex-1 bg-gray-200 text-gray-800 px-5 py-3 text-sm focus:outline-none rounded-l-xl placeholder:text-gray-500"
              />
              <button
                type="submit"
                className="w-36 py-3 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89D957] to-[#a8e667] rounded-r-xl hover:brightness-110 transition-all duration-200"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Column 2: Quick Links (2 cols wide) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="text-white font-semibold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hosting"
                  className="text-gray-400 hover:text-[#BFF747] text-sm transition-colors"
                >
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/vps"
                  className="text-gray-400 hover:text-[#BFF747] text-sm transition-colors"
                >
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/dedicated"
                  className="text-gray-400 hover:text-[#BFF747] text-sm transition-colors"
                >
                  Dedicated Servers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Have Questions? (3 cols wide) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-6">Have Questions?</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Support on Telegram:</p>
              <a
                href="https://t.me/+l939t_-hZHQ1MGE0"
                target="_blank"
                rel="noreferrer"
                className="block text-white hover:text-[#BFF747] break-words"
              >
                https://t.me/+l939t_-hZHQ1MGE0
              </a>
              <p className="mt-4">E-mail:</p>
              <a
                href="mailto:info@krakenmedia.se"
                className="block text-white hover:text-[#BFF747]"
              >
                info@krakenmedia.se
              </a>
            </div>
          </div>

          {/* Column 4: We accept (2 cols wide) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-6">We accept</h3>
            <div className="space-y-6">
              {/* First Row of Icons */}
              <div className="relative w-[350px] h-[55px]">
                <Image
                  src="/payment-methods-row1.png"
                  alt="Payment Methods"
                  fill
                  className="object-contain object-left"
                />
              </div>
              {/* Second Row of Icons - matched size to first row visual weight */}
              <div className="flex items-center gap-5">
                <div className="relative w-10 h-10 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/payment-icon-btc.png"
                    alt="Bitcoin"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-10 h-10 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/payment-icon-usdt.png"
                    alt="Tether"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-10 h-10 opacity-70 hover:opacity-100 transition-opacity">
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
          <p className="text-[#BFF747] text-xs">
            Copyright © Krakenhosting{new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
