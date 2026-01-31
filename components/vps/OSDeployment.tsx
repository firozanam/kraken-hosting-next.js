'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FadeIn } from "@/components/ui/FadeIn";


type TabType = 'applications' | 'plainos' | 'controlpanel';

interface AppItem {
    name: string;
    icon: string;
}

// Using Simple Icons CDN (cdn.simpleicons.org) for reliable brand logos
const applications: AppItem[] = [
    { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
    { name: 'Woo Commerce', icon: 'https://cdn.simpleicons.org/woocommerce/96588A' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'N8N', icon: 'https://cdn.simpleicons.org/n8n/EA4B71' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git Lab', icon: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
    { name: 'Wordpress', icon: 'https://cdn.simpleicons.org/wordpress/21759B' },
    { name: 'Discourse', icon: 'https://cdn.simpleicons.org/discourse/FFF9AE' },
];

const plainOS: AppItem[] = [
    { name: 'Ubuntu', icon: 'https://cdn.simpleicons.org/ubuntu/E95420' },
    { name: 'Debian', icon: 'https://cdn.simpleicons.org/debian/A81D33' },
    { name: 'CentOS', icon: 'https://cdn.simpleicons.org/centos/262577' },
    { name: 'Fedora', icon: 'https://cdn.simpleicons.org/fedora/51A2DA' },
    { name: 'Rocky Linux', icon: 'https://cdn.simpleicons.org/rockylinux/10B981' },
    { name: 'Alma Linux', icon: 'https://cdn.simpleicons.org/almalinux/0F4266' },
    { name: 'Arch Linux', icon: 'https://cdn.simpleicons.org/archlinux/1793D1' },
    { name: 'OpenSUSE', icon: 'https://cdn.simpleicons.org/opensuse/73BA25' },
];

const controlPanels: AppItem[] = [
    { name: 'cPanel', icon: 'https://cdn.simpleicons.org/cpanel/FF6C2C' },
    { name: 'Plesk', icon: 'https://cdn.simpleicons.org/plesk/52BBE6' },
    { name: 'DirectAdmin', icon: 'https://cdn.simpleicons.org/directus/64F' },
    { name: 'CyberPanel', icon: 'https://cdn.simpleicons.org/cpanel/00D4AA' },
    { name: 'Webmin', icon: 'https://cdn.simpleicons.org/webmin/7DA0D0' },
    { name: 'CloudPanel', icon: 'https://cdn.simpleicons.org/icloud/3693F3' },
    { name: 'VirtualMin', icon: 'https://cdn.simpleicons.org/v/8B5CF6' },
    { name: 'HestiaCP', icon: 'https://cdn.simpleicons.org/homeassistant/A855F7' },
];

export const OSDeployment = () => {
    const [activeTab, setActiveTab] = useState<TabType>('applications');

    const getTabData = (): AppItem[] => {
        switch (activeTab) {
            case 'applications':
                return applications;
            case 'plainos':
                return plainOS;
            case 'controlpanel':
                return controlPanels;
            default:
                return applications;
        }
    };

    return (
        <section className="relative w-full py-16 lg:py-24 xl:py-32 overflow-hidden bg-[#13191d]">
            <div className="w-[90%] lg:w-[85%] mx-auto container-ultrawide relative z-10">

                {/* Section Header */}
                <FadeIn
                    direction="up"
                    duration={600}
                    className="text-center mb-12 lg:mb-16 xl:mb-20 space-y-4"
                >
                    <h2 className="font-bold leading-tight text-3xl md:text-4xl lg:text-5xl text-white">
                        Virtual Private Server with Fast OS & App Deployment
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base xl:text-lg max-w-2xl mx-auto leading-relaxed">
                        Install your preferred operating system, pre-configured apps, or control panels, or
                        upload your own ISO for complete flexibility in just a few clicks.
                    </p>
                </FadeIn>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8 lg:mb-10 xl:mb-12">
                    <FadeIn
                        direction="zoom"
                        delay={200}
                        duration={500}
                        className="inline-flex items-center rounded-full p-1 bg-[#0d1117] border border-[#7424e1]"
                    >
                        <button
                            onClick={() => setActiveTab('applications')}
                            className={`px-4 sm:px-6 lg:px-8 py-2 lg:py-2.5 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${activeTab === 'applications' ? 'bg-[#7424e1] text-white shadow-[0_10px_25px_-5px_rgba(116,36,225,0.3)]' : 'bg-transparent text-[#9ca3af]'}`}
                        >
                            Applications
                        </button>
                        <button
                            onClick={() => setActiveTab('plainos')}
                            className={`px-4 sm:px-6 lg:px-8 py-2 lg:py-2.5 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${activeTab === 'plainos' ? 'bg-[#7424e1] text-white shadow-[0_10px_25px_-5px_rgba(116,36,225,0.3)]' : 'bg-transparent text-[#9ca3af]'}`}
                        >
                            Plain OS
                        </button>
                        <button
                            onClick={() => setActiveTab('controlpanel')}
                            className={`px-4 sm:px-6 lg:px-8 py-2 lg:py-2.5 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${activeTab === 'controlpanel' ? 'bg-[#7424e1] text-white shadow-[0_10px_25px_-5px_rgba(116,36,225,0.3)]' : 'bg-transparent text-[#9ca3af]'}`}
                        >
                            Control Panel
                        </button>
                    </FadeIn>
                </div>

                {/* Apps Grid Container */}
                <div
                    className="rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 bg-[#13191d] border border-[#7424e1]"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
                        {getTabData().map((app, index) => (
                            <FadeIn
                                key={app.name}
                                duration={400}
                                delay={0}
                                className="h-full"
                            >
                                <div
                                    className="rounded-xl p-3 sm:p-4 lg:p-5 flex items-center gap-3 lg:gap-4 cursor-pointer bg-[#13191d] border border-[#7424e1] hover:scale-105 hover:-translate-y-1 hover:border-[#bfeb5d] transition-all h-full"
                                >
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 flex items-center justify-center flex-shrink-0">
                                        {/* Using img tag for external SVGs from simple icons */}
                                        <img
                                            src={app.icon}
                                            alt={app.name}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-white text-xs sm:text-sm lg:text-base font-medium">
                                        {app.name}
                                    </span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
