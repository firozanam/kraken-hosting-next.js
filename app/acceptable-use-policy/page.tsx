"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AcceptableUsePolicyPage() {
  const t = useTranslations("AUP");

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

            {/* 1. General Principles */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.1.title')}</h2>
              <p>{t('sections.1.content')}</p>
            </section>

            {/* 2. Strictly Prohibited Content & Activities */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.2.title')}</h2>
              <p>{t('sections.2.content')}</p>
              <ul className="space-y-4 mt-4">
                {t.raw('sections.2.list').map((item: any, index: number) => (
                  <li key={index} className="flex gap-3 flex-col sm:flex-row">
                    <span className="text-[#bff747] font-bold min-w-[170px]">{item.title}</span>
                    <span>{item.description}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 3. High-Risk / Grey-Area Content */}
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

            {/* 4. Copyright & Abuse Handling */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.4.title')}</h2>
              <p>{t('sections.4.content')}</p>
            </section>

            {/* 5. Security Requirements */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.5.title')}</h2>
              <p>{t('sections.5.content')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {t.raw('sections.5.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.5.footer')}</p>
            </section>

            {/* 6. Resource-Use Policy */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.6.title')}</h2>
              <p>{t('sections.6.content')}</p>
            </section>

            {/* 7. Network Integrity */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.7.title')}</h2>
              <p>{t('sections.7.content')}</p>
            </section>

            {/* 8. Law-Enforcement Requests */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.8.title')}</h2>
              <p>{t('sections.8.content')}</p>
            </section>

            {/* 9. Customer Responsibility */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.9.title')}</h2>
              <p>{t('sections.9.content')}</p>
            </section>

            {/* 10. Consequences of Violations */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.10.title')}</h2>
              <p>{t('sections.10.content')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {t.raw('sections.10.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.10.footer')}</p>
            </section>

            {/* 11. Changes to this AUP */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.11.title')}</h2>
              <p>{t('sections.11.content')}</p>
            </section>

            {/* 12. Contact & Abuse Reports */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.12.title')}</h2>
              <p>{t('sections.12.content')}</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:abuse@krakenhosting.io" className="text-[#bff747] hover:underline hover:text-[#a8e030] transition-colors w-fit">
                  📧 abuse@krakenhosting.io
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
