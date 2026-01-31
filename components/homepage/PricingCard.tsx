import Image from "next/image";

export const PricingCard = () => {
    const competitors = [
        { name: "Miss Hosting", price: "€10.23", logo: "/images/home/misshosting.png", isLocal: true },
        { name: "One.com", price: "€23.88", logo: "/images/home/onecom.png", isLocal: true },
        { name: "Ultahost", price: "€38.89", logo: "/images/home/ultahost.png", isLocal: true },
        { name: "HOSTINGER", price: "€39.88", logo: "/images/home/hostinger.png", isLocal: true },
        { name: "Loopia", price: "€43.32", logo: "/images/home/loopia.png", isLocal: true },
    ];

    return (
        <div className="bg-[#090a19] rounded-xl shadow-2xl w-[290px] overflow-hidden border border-white/5 font-sans z-50">

            {/* Header - Kraken */}
            <div className="bg-white/[0.03] p-3 flex items-center justify-between border-b border-white/5 relative overflow-hidden">
                {/* Gradient glow top left for Kraken branding */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-[#89d957]/10 blur-xl -z-10" />

                <div className="flex items-center gap-2">
                    {/* Kraken Logo Icon - Using Footer Icon */}
                    <div className="w-8 h-8 relative">
                        <Image
                            src="/footer-icon.png"
                            alt="Kraken Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-bold tracking-wide text-xs">
                        <span className="bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">KRAKEN</span> <span className="text-white">HOSTING</span>
                    </span>
                </div>
                <div className="flex items-baseline gap-1">
                    <span className="font-bold text-lg bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">€9.00</span>
                    <span className="text-white uppercase tracking-wider text-[10px]">per year</span>
                </div>
            </div>

            {/* Competitors List */}
            <div className="flex flex-col bg-[#090a19]">
                {competitors.map((comp, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 px-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className={`w-32 h-10 relative flex items-center justify-start transition-opacity ${comp.name === "Ultahost" ? "bg-white/90 rounded-md px-2 py-1" : "opacity-80 group-hover:opacity-100"}`}>
                                <Image
                                    src={comp.logo}
                                    alt={`${comp.name} logo`}
                                    fill
                                    className="object-contain object-center"
                                    unoptimized={!comp.isLocal}
                                />
                            </div>
                        </div>

                        <div className="flex items-baseline gap-1 min-w-[60px] justify-end">
                            <span className="text-white font-semibold text-sm whitespace-nowrap">
                                {comp.price}
                            </span>
                            <span className="text-white text-[10px] whitespace-nowrap">per year</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
