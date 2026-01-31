"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PrivacyHostingPage() {
  const t = useTranslations("Privacy");

  return (
    <main className="w-full bg-[#13191d] min-h-[100dvh] overflow-x-hidden pt-32 md:pt-40 pb-20">
      <div className="relative w-full z-10 isolate transform-gpu [transform:translate3d(0,0,0)] [backface-visibility:hidden] pt-px clear-both">
        <div className="container-ultrawide mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
          <FadeIn className="space-y-8">
            {/* Header */}
            <div className="space-y-4 text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#bff747]">
                {t('title')}
              </h1>
            </div>

            <section className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">{t('content')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {t.raw('list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                {t('footer')}
              </p>
            </section>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
