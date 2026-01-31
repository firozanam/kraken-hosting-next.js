"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CopyrightDisclaimerPage() {
  const t = useTranslations("Copyright");

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
              <p className="text-gray-400 text-lg">
                {t('revised')}
              </p>
            </div>

            {/* Overview */}
            <section className="space-y-6 text-gray-300 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{t('overview.title')}</h2>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <p>
                  {t('overview.content')}
                </p>
              </div>
            </section>

            {/* 1. Ownership of Website Content */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.1.title')}</h2>
              <p>{t('sections.1.content')}</p>
            </section>

            {/* 2. Customer-Hosted Content */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.2.title')}</h2>
              <p>{t('sections.2.content')}</p>
            </section>

            {/* 3. Copyright Complaints */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.3.title')}</h2>
              <p>{t('sections.3.content')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {t.raw('sections.3.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.3.footer')}</p>
            </section>

            {/* 4. No Legal Advice */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.4.title')}</h2>
              <p>{t('sections.4.content')}</p>
            </section>

            {/* 5. Accuracy of Information & Liability Disclaimer */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.5.title')}</h2>
              <p>{t('sections.5.content')}</p>
            </section>

            {/* 6. Trademarks & Third-Party Rights */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.6.title')}</h2>
              <p>{t('sections.6.content')}</p>
            </section>

            {/* 7. Customer Indemnification */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.7.title')}</h2>
              <p>{t('sections.7.content')}</p>
            </section>

            {/* 8. Relationship to Terms & Conditions */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.8.title')}</h2>
              <p>{t('sections.8.content')}</p>
            </section>

            {/* 9. Modifications to This Policy */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.9.title')}</h2>
              <p>{t('sections.9.content')}</p>
            </section>

            {/* 10. Contact */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.10.title')}</h2>
              <p>{t('sections.10.content')}</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:legal@krakenhosting.io" className="text-[#bff747] hover:underline hover:text-[#a8e030] transition-colors w-fit">
                  📧 legal@krakenhosting.io
                </a>
                <Link href="https://krakenhosting.io" className="text-[#bff747] hover:underline hover:text-[#a8e030] transition-colors w-fit">
                  🌍 https://krakenhosting.io
                </Link>
              </div>
            </section>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
