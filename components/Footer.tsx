"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hosting Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Hosting
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hosting"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/dedicated"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Dedicated Server
                </Link>
              </li>
              <li>
                <Link
                  href="/vps"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Cloud Virtual (VPS)
                </Link>
              </li>
              <li>
                <Link
                  href="/media-servers"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Media Servers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/client-area"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Client Area
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/support-ticket"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Support Ticket
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright-disclaimer"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Copyright & Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/service-level-agreement"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Service Level Agreement
                </Link>
              </li>
              <li>
                <Link
                  href="/acceptable-use-policy"
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Acceptable Use Policy (AUP)
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo and Copyright */}
          <div>
            <div className="flex flex-col">
              <div className="mb-4">
                <span className="text-xl font-bold text-black dark:text-white">
                  Kraken Hosting
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                © Copyright 2025 | Kraken Hosting
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Operated by Northlayer Web Services LLC, a subsidiary of
                PixelPilot Holdings LLC.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright line */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © Copyright 2025 | Kraken Hosting. Operated by Northlayer Web
            Services LLC, a subsidiary of PixelPilot Holdings LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
