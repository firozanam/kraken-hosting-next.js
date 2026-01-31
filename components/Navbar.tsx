"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [hostingMenuOpen, setHostingMenuOpen] = useState(false);
  const [serversMenuOpen, setServersMenuOpen] = useState(false);
  const [securityMenuOpen, setSecurityMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHostingMenu = () => {
    setHostingMenuOpen(!hostingMenuOpen);
    if (serversMenuOpen) setServersMenuOpen(false);
    if (securityMenuOpen) setSecurityMenuOpen(false);
  };

  const toggleServersMenu = () => {
    setServersMenuOpen(!serversMenuOpen);
    if (hostingMenuOpen) setHostingMenuOpen(false);
    if (securityMenuOpen) setSecurityMenuOpen(false);
  };

  const toggleSecurityMenu = () => {
    setSecurityMenuOpen(!securityMenuOpen);
    if (hostingMenuOpen) setHostingMenuOpen(false);
    if (serversMenuOpen) setServersMenuOpen(false);
  };

  const closeAllMenus = () => {
    setHostingMenuOpen(false);
    setServersMenuOpen(false);
    setSecurityMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    closeAllMenus();
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`z-50 transition-all duration-300 ease-in-out left-0 right-0 ${scrolled
          ? "fixed top-0 bg-[#13191d]/90 backdrop-blur-md shadow-lg shadow-black/20"
          : mobileMenuOpen
            ? "relative bg-[#13191d]"
            : "fixed top-0 bg-transparent"
          }`}
      >
        <div className="w-full content-padding-x container-ultrawide">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-1.5 sm:gap-3">
              <div className="relative w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                <Image
                  src="/footer-icon.png"
                  alt="Kraken Hosting"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xs min-[400px]:text-sm sm:text-2xl font-bold text-white tracking-wide">
                <span className="bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">{t("logo.text")}</span> {t("logo.suffix")}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/domain"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t("menu.domain")}
              </Link>

              {/* Hosting Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setHostingMenuOpen(true)}
                onMouseLeave={() => setHostingMenuOpen(false)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                  {t("menu.hosting.title")}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${hostingMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-1 w-64 transition-all duration-200 ${hostingMenuOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  <div className="py-2 bg-[#111811]/95 backdrop-blur-md rounded-lg border border-[#2a3a2a] shadow-xl shadow-black/30">
                    <Link
                      href="/shared-hosting"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.hosting.items.shared.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.hosting.items.shared.description")}
                      </p>
                    </Link>
                    <Link
                      href="/privacy-shared-hosting"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.hosting.items.privacy_shared.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.hosting.items.privacy_shared.description")}
                      </p>
                    </Link>
                    <Link
                      href="/wordpress-hosting"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.hosting.items.wordpress.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.hosting.items.wordpress.description")}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Servers Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServersMenuOpen(true)}
                onMouseLeave={() => setServersMenuOpen(false)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                  {t("menu.servers.title")}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${serversMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-1 w-64 transition-all duration-200 ${serversMenuOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  <div className="py-2 bg-[#111811]/95 backdrop-blur-md rounded-lg border border-[#2a3a2a] shadow-xl shadow-black/30">
                    <Link
                      href="/vps"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.servers.items.vps.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.servers.items.vps.description")}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Security Service Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSecurityMenuOpen(true)}
                onMouseLeave={() => setSecurityMenuOpen(false)}
              >
                <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                  {t("menu.security.title")}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${securityMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 mt-1 w-64 transition-all duration-200 ${securityMenuOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                    }`}
                >
                  <div className="py-2 bg-[#111811]/95 backdrop-blur-md rounded-lg border border-[#2a3a2a] shadow-xl shadow-black/30">
                    <Link
                      href="/products"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.security.items.products.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.security.items.products.description")}
                      </p>
                    </Link>
                    <Link
                      href="/kraken-secure-web"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.security.items.kraken_secure.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.security.items.kraken_secure.description")}
                      </p>
                    </Link>
                    <Link
                      href="/website-security"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.security.items.website_security.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.security.items.website_security.description")}
                      </p>
                    </Link>
                    <Link
                      href="/patchman"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.security.items.patchman.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.security.items.patchman.description")}
                      </p>
                    </Link>
                    <Link
                      href="/ssl"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.security.items.ssl.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.security.items.ssl.description")}
                      </p>
                    </Link>
                    <Link
                      href="/managed-server"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.security.items.managed.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.security.items.managed.description")}
                      </p>
                    </Link>
                    <Link
                      href="/vpn"
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                    >
                      <span className="font-medium">{t("menu.security.items.vpn.title")}</span>
                      <p className="text-xs text-gray-500 mt-1">
                        {t("menu.security.items.vpn.description")}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/about-us"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t("menu.about")}
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {t("menu.contact")}
              </Link>
            </div>

            {/* Right Side - Client Area Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/client-area"
                className="relative inline-flex items-center justify-center w-[16.4vw] min-w-[160px] max-w-[220px] py-3 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-2xl overflow-hidden transition-all duration-200 hover:brightness-110"
              >
                <span className="relative z-10">{t("client_area")}</span>
              </Link>
            </div>

            {/* Mobile Actions: Client Area + Menu Toggle */}
            <div className="flex items-center gap-2 min-[400px]:gap-3 lg:hidden">
              <Link
                href="/client-area"
                className="relative inline-flex items-center justify-center px-2.5 py-1.5 min-[400px]:px-4 min-[400px]:py-2 text-[10px] min-[400px]:text-xs font-bold min-[400px]:font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89d957] to-[#c9e265] rounded-lg min-[400px]:rounded-xl overflow-hidden transition-all duration-200 hover:brightness-110 whitespace-nowrap"
              >
                <span className="relative z-10">{t("client_area")}</span>
              </Link>

              <button
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#1a2a1a] transition-colors duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Fixed, full height scrollable container */}
      <div
        className={`lg:hidden bg-[#13191d] overflow-hidden ${scrolled
          ? `fixed left-0 right-0 top-[64px] md:top-[80px] bottom-0 z-[100] overflow-y-auto ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`
          : `relative w-full border-t border-[#2a3a2a] z-[40] overflow-y-auto ${mobileMenuOpen
            ? "max-h-[85vh] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
          }`
          }`}
        style={{
          transition: scrolled
            ? 'opacity 300ms ease-in-out'
            : mobileMenuOpen
              ? 'max-height 600ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease-out'
              : 'max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease-in'
        }}
      >
        <div className="min-h-full pb-20"> {/* Add padding bottom to ensure last items are visible */}
          <div className="border-t border-[#2a3a2a]">
            <div className="px-4 py-4 space-y-2">
              <div className="border-b border-[#2a3a2a]">
                <Link
                  href="/domain"
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  {t("menu.domain")}
                </Link>
              </div>

              {/* Hosting Accordion */}
              <div className="border-b border-[#2a3a2a] pb-2">
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={toggleHostingMenu}
                >
                  <span>{t("menu.hosting.title")}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${hostingMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${hostingMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 space-y-1 pb-2">
                    <Link
                      href="/shared-hosting"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.hosting.items.shared.title")}
                    </Link>
                    <Link
                      href="/privacy-shared-hosting"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.hosting.items.privacy_shared.title")}
                    </Link>
                    <Link
                      href="/wordpress-hosting"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.hosting.items.wordpress.title")}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Servers Accordion */}
              <div className="border-b border-[#2a3a2a] pb-2">
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={toggleServersMenu}
                >
                  <span>{t("menu.servers.title")}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${serversMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${serversMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 space-y-1 pb-2">
                    <Link
                      href="/vps"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.servers.items.vps.title")}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Security Service Accordion */}
              <div className="border-b border-[#2a3a2a] pb-2">
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={toggleSecurityMenu}
                >
                  <span>{t("menu.security.title")}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${securityMenuOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${securityMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 space-y-1 pb-2">
                    <Link
                      href="/products"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.security.items.products.title")}
                    </Link>
                    <Link
                      href="/kraken-secure-web"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.security.items.kraken_secure.title")}
                    </Link>
                    <Link
                      href="/website-security"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.security.items.website_security.title")}
                    </Link>
                    <Link
                      href="/patchman"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.security.items.patchman.title")}
                    </Link>
                    <Link
                      href="/ssl"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.security.items.ssl.title")}
                    </Link>
                    <Link
                      href="/managed-server"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.security.items.managed.title")}
                    </Link>
                    <Link
                      href="/vpn"
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                      onClick={closeMobileMenu}
                    >
                      {t("menu.security.items.vpn.title")}
                    </Link>
                  </div>
                </div>
              </div>

              {/* About Us & Contact Us Mobile Links */}
              <div className="border-b border-[#2a3a2a]">
                <Link
                  href="/about-us"
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  {t("menu.about")}
                </Link>
              </div>
              <div className="border-b border-[#2a3a2a]">
                <Link
                  href="/contact"
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  {t("menu.contact")}
                </Link>
              </div>

              {/* Client Area Button */}
              <div className="pt-4 pb-2">
                <Link
                  href="/client-area"
                  className="block w-full text-center px-6 py-3 text-base font-semibold text-[#0a0f0a] bg-gradient-to-r from-[#a3e635] to-[#84cc16] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#a3e635]/25"
                  onClick={closeMobileMenu}
                >
                  {t("client_area")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
