"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ServiceLevelAgreementPage() {
  const t = useTranslations("SLA");

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

            {/* 1. Purpose and Scope */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.1.title')}</h2>
              <p>{t('sections.1.content')}</p>
            </section>

            {/* 2. Uptime Guarantee */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.2.title')}</h2>
              <ul className="space-y-2 text-gray-300">
                {t.raw('sections.2.list').map((item: any, index: number) => (
                  <li key={index} className="flex gap-2">
                    <span className="font-bold text-white min-w-[150px]">{item.term}</span>
                    <span>{item.definition}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2">{t('sections.2.content')}</p>
            </section>

            {/* 3. Key Definitions */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.3.title')}</h2>
              <dl className="space-y-4">
                {t.raw('sections.3.definitions').map((item: any, index: number) => (
                  <div key={index}>
                    <dt className="text-white font-bold">{item.term}</dt>
                    <dd className="mt-1 ml-4 text-gray-400">{item.definition}</dd>
                  </div>
                ))}
                <div>
                  <dt className="text-white font-bold">{t('sections.3.support.term')}</dt>
                  <dd className="mt-1 ml-4 text-gray-400">
                    <p>{t('sections.3.support.definition')}</p>
                    <ul className="list-disc pl-6 mt-1">
                      {t.raw('sections.3.support.list').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </section>

            {/* 4. Remedies – Service Credits */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.4.title')}</h2>
              <p>{t('sections.4.content')}</p>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 max-w-lg">
                <ul className="space-y-2 text-gray-300">
                  {t.raw('sections.4.credits').map((item: any, index: number) => (
                    <li key={index} className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-0">
                      <span>{item.condition}</span>
                      <span className="font-bold text-[#bff747]">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-2 text-sm text-gray-400">{t('sections.4.footer')}</p>
            </section>

            {/* 5. Claiming Service Credits */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.5.title')}</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {t.raw('sections.5.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-white">{t('sections.5.footer')}</p>
            </section>

            {/* 6. Scheduled Maintenance */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.6.title')}</h2>
              <p>{t('sections.6.content')}</p>
            </section>

            {/* 7. Hardware Replacement */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.7.title')}</h2>
              <p>{t('sections.7.content')}</p>
            </section>

            {/* 8. Monitoring & Verification */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.8.title')}</h2>
              <p>{t('sections.8.content')}</p>
            </section>

            {/* 9. SLA Exclusions */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.9.title')}</h2>
              <p>{t('sections.9.content')}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {t.raw('sections.9.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 10. Changes to this SLA */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.10.title')}</h2>
              <p>{t('sections.10.content')}</p>
            </section>

            {/* 11. Contact */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.11.title')}</h2>
              <p>{t('sections.11.content')}</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:support@krakenhosting.io" className="text-[#bff747] hover:underline hover:text-[#a8e030] transition-colors w-fit">
                  📧 support@krakenhosting.io
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
