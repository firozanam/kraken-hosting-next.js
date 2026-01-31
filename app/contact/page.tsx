import { ContactHero } from "@/components/contact/ContactHero";
import { ContactContent } from "@/components/contact/ContactContent";
import { useTranslations } from "next-intl";

export const metadata = {
  title: 'Contact Us | Kraken Hosting',
  description: 'Get in touch with Kraken Hosting support team. We are available 24/7/365 to assist you.',
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-[100dvh] bg-[#13191d] overflow-x-hidden">
      <div className="relative w-full z-10 isolate transform-gpu">
        <ContactHero />
      </div>
      <div className="relative w-full z-30 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
        <ContactContent />
      </div>
    </main>
  );
}
