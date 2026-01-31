"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function TermsConditionsPage() {
  const t = useTranslations("Terms");

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
                <p className="font-bold text-white mb-4">
                  {t('overview.content')}
                </p>
                <p>
                  {t('overview.agreement')}
                </p>
              </div>
            </section>

            {/* 1. Service Nature */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.1.title')}</h2>
              <p>{t('sections.1.content')}</p>
            </section>

            {/* 2. Account Registration */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.2.title')}</h2>
              <p>{t('sections.2.content')}</p>
            </section>

            {/* 3. Acceptable Use Policy (AUP) */}
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

            {/* 4. Customer Responsibilities */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.4.title')}</h2>
              <p>{t('sections.4.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.4.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.4.footer')}</p>
            </section>

            {/* 5. Payment Terms */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.5.title')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.5.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-white">{t('sections.5.footer')}</p>
            </section>

            {/* 6. Service Level Agreement (SLA) */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.6.title')}</h2>
              <p>{t('sections.6.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.6.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.6.footer')}</p>
            </section>

            {/* 7. Abuse & Notice Handling */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.7.title')}</h2>
              <p>{t('sections.7.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.7.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.7.footer')}</p>
            </section>

            {/* 8. Intellectual Property Rights */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.8.title')}</h2>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.8.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 9. Privacy & Data Protection */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.9.title')}</h2>
              <p>{t('sections.9.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.9.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.9.footer')}</p>
            </section>

            {/* 10. Suspension & Termination */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.10.title')}</h2>
              <p>{t('sections.10.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.10.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.10.footer')}</p>
            </section>

            {/* 11. Limitation of Liability */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.11.title')}</h2>
              <p>{t('sections.11.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.11.list').map((item: string, index: number) => (
                  <li key={index} className="whitespace-pre-line">{item}</li>
                ))}
              </ul>
            </section>

            {/* 12. Indemnification */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.12.title')}</h2>
              <p>{t('sections.12.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.12.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 13. Force Majeure */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.13.title')}</h2>
              <p>{t('sections.13.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.13.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.13.footer')}</p>
            </section>

            {/* 14. Governing Law & Dispute Resolution */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.14.title')}</h2>
              <p className="whitespace-pre-line">{t('sections.14.content')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {t.raw('sections.14.list').map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">{t('sections.14.footer')}</p>
            </section>

            {/* 15. Modifications to Terms */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.15.title')}</h2>
              <p>{t('sections.15.content')}</p>
            </section>

            {/* 16. Corporate Entity Information */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.16.title')}</h2>
              <p>{t('sections.16.content')}</p>
            </section>

            {/* 17. Contact */}
            <section className="space-y-4 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-[#bff747]">{t('sections.17.title')}</h2>
              <p className="font-semibold text-white">{t('sections.17.content')}</p>
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
