"use client";

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/FadeIn';

interface AppItem {
    name: string;
    icon: string;
}

// Using Simple Icons CDN for consistency
const applications: AppItem[] = [
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'Woo Commerce', icon: 'https://cdn.simpleicons.org/woocommerce/96588A' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'N8N', icon: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git Lab', icon: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
    { name: 'Wordpress', icon: 'https://cdn.simpleicons.org/wordpress/21759B' },
    { name: 'WordPress', icon: 'https://cdn.simpleicons.org/openvpn/EA7500' }, // Using OpenVPN icon but labeled WordPress as per screenshot text
];

export const SharedAppDeployment = () => {
    const t = useTranslations("AnonymousPricing.AppDeployment");

    return (
        <section className="relative w-full py-16 lg:py-24 overflow-hidden bg-[#13191d]">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                {/* Section Header */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center mb-12 lg:mb-16 space-y-4"
                >
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white">
                        {t('title')}
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base max-w-4xl mx-auto leading-relaxed">
                        {t('description')}
                    </p>
                </FadeIn>

                {/* Tab Navigation (Visual Only as per screenshot) */}
                <div className="flex justify-center mb-8 lg:mb-10">
                    <FadeIn
                        direction="zoom"
                        delay={200}
                        duration={500}
                        className="inline-flex items-center rounded-full p-1 bg-[#0d1117] border border-[#7424e1]"
                    >
                        <button
                            className="px-6 lg:px-8 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-medium bg-[#7424e1] text-white shadow-[0_10px_25px_-5px_rgba(116,36,225,0.3)]"
                        >
                            {t('tabs.applications')}
                        </button>
                    </FadeIn>
                </div>

                {/* Apps Grid Container */}
                <div
                    className="rounded-2xl p-4 sm:p-6 lg:p-8 bg-[#13191d] border border-[#7424e1]"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {applications.map((app, index) => (
                            <FadeIn
                                key={index}
                                delay={index * 50}
                                direction="up"
                                className="rounded-xl p-4 lg:p-5 flex items-center gap-4 cursor-pointer bg-[#13191d] border border-[#7424e1] hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src={app.icon}
                                        alt={app.name}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-white text-sm lg:text-base font-medium">
                                    {app.name}
                                </span>
                            </FadeIn>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
