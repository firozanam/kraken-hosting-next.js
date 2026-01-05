"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe, DollarSign, User } from "lucide-react";

const Navbar = () => {
  const [hostingMenuOpen, setHostingMenuOpen] = useState(false);
  const [serversMenuOpen, setServersMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleHostingMenu = () => {
    setHostingMenuOpen(!hostingMenuOpen);
    // Close servers menu if opening hosting menu
    if (serversMenuOpen) setServersMenuOpen(false);
  };

  const toggleServersMenu = () => {
    setServersMenuOpen(!serversMenuOpen);
    // Close hosting menu if opening servers menu
    if (hostingMenuOpen) setHostingMenuOpen(false);
  };

  const closeAllMenus = () => {
    setHostingMenuOpen(false);
    setServersMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo on the left */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                className="text-xl font-bold text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
              >
                Kraken Hosting
              </Link>
            </div>
          </div>

          {/* Centered menu items */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {/* Hosting Menu */}
              <div className="relative">
                <button
                  onClick={toggleHostingMenu}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 dark:text-white hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Hosting
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${hostingMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {hostingMenuOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <Link
                      href="/hosting"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={closeAllMenus}
                    >
                      Budget Shared Hosting
                    </Link>
                    <Link
                      href="/privacy-hosting"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={closeAllMenus}
                    >
                      Privacy Focused Shared Hosting
                    </Link>
                  </div>
                )}
              </div>

              {/* Servers Menu */}
              <div className="relative">
                <button
                  onClick={toggleServersMenu}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 dark:text-white hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Servers
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${serversMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {serversMenuOpen && (
                  <div className="origin-top-left absolute left-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <Link
                      href="/vps"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={closeAllMenus}
                    >
                      Cloud VPS
                    </Link>
                    <Link
                      href="/dedicated"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={closeAllMenus}
                    >
                      Dedicated Server
                    </Link>
                    <Link
                      href="/media-servers"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={closeAllMenus}
                    >
                      Media Server
                    </Link>
                  </div>
                )}
              </div>

              {/* VPN Menu */}
              <Link
                href="/vpn"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-900 dark:text-white hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300"
                onClick={closeAllMenus}
              >
                VPN
              </Link>
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center">
            <div className="hidden md:flex md:items-center md:space-x-4">
              {/* Language Button */}
              <button className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 focus:outline-none">
                <Globe className="h-5 w-5" />
              </button>

              {/* Currency Button */}
              <button className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 focus:outline-none">
                <DollarSign className="h-5 w-5" />
              </button>

              {/* Client Area Button */}
              <button className="ml-4 flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                <User className="h-4 w-4 mr-2" />
                Client Area
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4">
            {/* Hosting Menu in Mobile */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                onClick={toggleHostingMenu}
              >
                <span>Hosting</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${hostingMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {hostingMenuOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/hosting"
                    className="block px-3 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => {
                      closeAllMenus();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Budget Shared Hosting
                  </Link>
                  <Link
                    href="/privacy-hosting"
                    className="block px-3 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => {
                      closeAllMenus();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Privacy Focused Hosting
                  </Link>
                </div>
              )}
            </div>

            {/* Servers Menu in Mobile */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                onClick={toggleServersMenu}
              >
                <span>Servers</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${serversMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {serversMenuOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/vps"
                    className="block px-3 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => {
                      closeAllMenus();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Cloud VPS
                  </Link>
                  <Link
                    href="/dedicated"
                    className="block px-3 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => {
                      closeAllMenus();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Dedicated Server
                  </Link>
                  <Link
                    href="/media-servers"
                    className="block px-3 py-2 text-base text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => {
                      closeAllMenus();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Media Server
                  </Link>
                </div>
              )}
            </div>

            {/* VPN Menu in Mobile */}
            <Link
              href="/vpn"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => {
                closeAllMenus();
                setMobileMenuOpen(false);
              }}
            >
              VPN
            </Link>

            {/* Right side controls in Mobile */}
            <div className="flex items-center justify-between pt-4 pb-2">
              <div className="flex space-x-4">
                <button className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                  <Globe className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-200">
                  <DollarSign className="h-5 w-5" />
                </button>
              </div>
              <button className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                <User className="h-4 w-4 mr-2" />
                Client Area
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
