"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hosting Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Hosting
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/hosting"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/dedicated"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Dedicated Server
                </Link>
              </li>
              <li>
                <Link
                  href="/vps"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Cloud Virtual (VPS)
                </Link>
              </li>
              <li>
                <Link
                  href="/media-servers"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Media Servers
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/client-area"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Client Area
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/support-ticket"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Support Ticket
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge-base"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/copyright-disclaimer"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Copyright & Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/service-level-agreement"
                  className="text-base text-muted-foreground hover:text-foreground"
                >
                  Service Level Agreement
                </Link>
              </li>
              <li>
                <Link
                  href="/acceptable-use-policy"
                  className="text-base text-muted-foreground hover:text-foreground"
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
                <span className="text-xl font-bold text-foreground">
                  Kraken Hosting
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                © Copyright 2025 | Kraken Hosting
              </p>
              <p className="text-xs text-muted-foreground">
                Operated by Northlayer Web Services LLC, a subsidiary of
                PixelPilot Holdings LLC.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom border and copyright line */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © Copyright 2025 | Kraken Hosting. Operated by Northlayer Web
            Services LLC, a subsidiary of PixelPilot Holdings LLC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
