"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [hostingMenuOpen, setHostingMenuOpen] = useState(false);
  const [serversMenuOpen, setServersMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleHostingMenu = () => {
    setHostingMenuOpen(!hostingMenuOpen);
    if (serversMenuOpen) setServersMenuOpen(false);
  };

  const toggleServersMenu = () => {
    setServersMenuOpen(!serversMenuOpen);
    if (hostingMenuOpen) setHostingMenuOpen(false);
  };

  const closeAllMenus = () => {
    setHostingMenuOpen(false);
    setServersMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    closeAllMenus();
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#13191d]/90 backdrop-blur-md shadow-lg shadow-black/20"
        : "bg-transparent"
        }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Kraken Hosting"
              width={379}
              height={34}
              className="h-7 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Hosting Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHostingMenuOpen(true)}
              onMouseLeave={() => setHostingMenuOpen(false)}
            >
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Hosting
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
                    href="/hosting"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                  >
                    <span className="font-medium">Budget Shared Hosting</span>
                    <p className="text-xs text-gray-500 mt-1">
                      Affordable hosting for small projects
                    </p>
                  </Link>
                  <Link
                    href="/privacy-hosting"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                  >
                    <span className="font-medium">Privacy Focused Hosting</span>
                    <p className="text-xs text-gray-500 mt-1">
                      Enhanced privacy and security
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
                Servers
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
                    <span className="font-medium">Cloud VPS</span>
                    <p className="text-xs text-gray-500 mt-1">
                      Scalable virtual private servers
                    </p>
                  </Link>
                  <Link
                    href="/dedicated"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                  >
                    <span className="font-medium">Dedicated Server</span>
                    <p className="text-xs text-gray-500 mt-1">
                      Full power dedicated hardware
                    </p>
                  </Link>
                  <Link
                    href="/media-servers"
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-[#a3e635] hover:bg-[#1a2a1a] transition-colors duration-200"
                  >
                    <span className="font-medium">Media Server</span>
                    <p className="text-xs text-gray-500 mt-1">
                      Optimized for streaming content
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* VPN Link */}
            <Link
              href="/vpn"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              VPN
            </Link>
          </div>

          {/* Right Side - Client Area Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/client-area"
              className="relative inline-flex items-center justify-center w-[16.4vw] min-w-[160px] max-w-[220px] py-3 text-sm font-semibold text-[#1a1a1a] bg-gradient-to-r from-[#89D957] to-[#a8e667] rounded-2xl overflow-hidden transition-all duration-200 hover:brightness-110"
            >
              <span className="relative z-10">Client Area</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#1a2a1a] transition-colors duration-200"
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[#0a0f0a]/98 backdrop-blur-md border-t border-[#2a3a2a]">
          <div className="px-4 py-4 space-y-2">
            {/* Hosting Accordion */}
            <div className="border-b border-[#2a3a2a] pb-2">
              <button
                className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                onClick={toggleHostingMenu}
              >
                <span>Hosting</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${hostingMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${hostingMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="pl-4 space-y-1 pb-2">
                  <Link
                    href="/hosting"
                    className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Budget Shared Hosting
                  </Link>
                  <Link
                    href="/privacy-hosting"
                    className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Privacy Focused Hosting
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
                <span>Servers</span>
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
                    Cloud VPS
                  </Link>
                  <Link
                    href="/dedicated"
                    className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Dedicated Server
                  </Link>
                  <Link
                    href="/media-servers"
                    className="block px-3 py-2 text-sm text-gray-400 hover:text-[#a3e635] transition-colors duration-200"
                    onClick={closeMobileMenu}
                  >
                    Media Server
                  </Link>
                </div>
              </div>
            </div>

            {/* VPN Link */}
            <Link
              href="/vpn"
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              VPN
            </Link>

            {/* Client Area Button */}
            <div className="pt-4 pb-2">
              <Link
                href="/client-area"
                className="block w-full text-center px-6 py-3 text-base font-semibold text-[#0a0f0a] bg-gradient-to-r from-[#a3e635] to-[#84cc16] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#a3e635]/25"
                onClick={closeMobileMenu}
              >
                Client Area
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
