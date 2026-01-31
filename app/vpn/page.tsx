import { Hero } from "@/components/vpn/Hero";
import { WhatIsVpn } from "@/components/vpn/WhatIsVpn";
import { WhoIsVpnFor } from "@/components/vpn/WhoIsVpnFor";
import { WhyKrakenVpn } from "@/components/vpn/WhyKrakenVpn";
import { VpnPricing } from "@/components/vpn/VpnPricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kraken Secure VPN - Anonymous & Secure",
  description: "Protect your digital identity with Kraken Secure VPN. Enterprise-grade encryption, zero logs, and total freedom.",
};

export default function VPNPage() {
  return (
    <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden">
      <div className="relative w-full z-10 isolate transform-gpu">
        <Hero />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <WhatIsVpn />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <WhoIsVpnFor />
      </div>
      <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
        <WhyKrakenVpn />
      </div>
      <div className="relative w-full z-20 isolate transform-gpu">
        <VpnPricing />
      </div>
    </main>
  );
}
