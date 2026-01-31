import { ShieldCheck } from "lucide-react";

const MonitorIcon = () => (
    <svg width="48" height="40" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Monitor Stand */}
        <path d="M20 42H40V46C40 47.1046 39.1046 48 38 48H22C20.8954 48 20 47.1046 20 46V42Z" fill="#89d957" />
        <path d="M15 48H45C46.1046 48 47 47.1046 47 46V45H13V46C13 47.1046 13.8954 48 15 48Z" fill="#89d957" />

        {/* Monitor Screen Frame */}
        <rect x="2" y="2" width="56" height="38" rx="4" stroke="#89d957" strokeWidth="3" fill="none" />

        {/* Screen Content - Chart */}
        <path d="M35 30V20" stroke="#89d957" strokeWidth="3" strokeLinecap="round" />
        <path d="M42 30V15" stroke="#89d957" strokeWidth="3" strokeLinecap="round" />
        <path d="M49 30V25" stroke="#89d957" strokeWidth="3" strokeLinecap="round" />

        {/* Screen Content - Line Graph */}
        <path d="M32 15L38 10L44 14L50 8" stroke="#89d957" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="15" r="1.5" fill="#89d957" />
        <circle cx="38" cy="10" r="1.5" fill="#89d957" />
        <circle cx="44" cy="14" r="1.5" fill="#89d957" />
        <circle cx="50" cy="8" r="1.5" fill="#89d957" />

        {/* Screen Content - Doc Lines */}
        <path d="M10 12H26" stroke="#89d957" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 18H26" stroke="#89d957" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 24H22" stroke="#89d957" strokeWidth="2" strokeLinecap="round" />

        {/* Magnifying Glass with Check */}
        <circle cx="20" cy="36" r="12" fill="#1a1b26" stroke="#89d957" strokeWidth="3" />
        <path d="M28 44L34 50" stroke="#89d957" strokeWidth="4" strokeLinecap="round" />
        <path d="M16 36L19 39L24 33" stroke="#89d957" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

export const SecurityCard = () => {
    return (
        <div className="bg-[#090a19]/95 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-2xl w-[260px] relative overflow-hidden">
            {/* Top Left Icon */}
            <div className="absolute top-6 left-6">
                <ShieldCheck className="w-12 h-12 text-[#89d957]" strokeWidth={1.5} />
            </div>

            <div className="mt-12 text-center space-y-1">
                <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">Kraken 360 Security</p>
                <p className="font-bold text-xl bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">Monitoring 24/7</p>
            </div>

            {/* Bottom Right Icon */}
            <div className="flex justify-end mt-4">
                <MonitorIcon />
            </div>

            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#89d957]/5 rounded-full blur-2xl -z-10" />
        </div>
    );
};
