"use client";

import { useEffect, useState } from "react";

export const Speedometer = () => {
    const [angle, setAngle] = useState(385);

    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly fluctuate between 90% (approx 370deg) and 100% (385deg) plus some overshoot
            // Range 365 to 395
            const randomAngle = 365 + Math.random() * 30;
            setAngle(randomAngle);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#090a19] p-4 rounded-[2rem] shadow-2xl w-[220px] h-[220px] flex items-center justify-center relative border border-white/5">
            <div className="relative w-full h-full">
                <svg viewBox="0 0 220 200" className="w-full h-full">
                    <defs>
                        <linearGradient id="needleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#84cc16" />
                            <stop offset="100%" stopColor="#a3e635" />
                        </linearGradient>
                    </defs>

                    {/* Background Dark Ticks */}
                    {[...Array(35)].map((_, i) => {
                        const totalTicks = 35;
                        const startAngle = 145;
                        const endAngle = 395;
                        const angle = startAngle + (i * (endAngle - startAngle)) / (totalTicks - 1);

                        const rad = (angle * Math.PI) / 180;
                        const cx = 110;
                        const cy = 100;
                        const rInner = 80;
                        const rOuter = 92;

                        const x1 = cx + rInner * Math.cos(rad);
                        const y1 = cy + rInner * Math.sin(rad);
                        const x2 = cx + rOuter * Math.cos(rad);
                        const y2 = cy + rOuter * Math.sin(rad);

                        // Stop drawing ticks early to leave the clean gap/green zone area as requested
                        if (i > 30) return null;

                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#2e3248"
                                strokeWidth="5"
                                strokeLinecap="butt"
                            />
                        );
                    })}

                    {/* Green Ticks for High Speed */}
                    {[...Array(35)].map((_, i) => {
                        // Only render the last few ticks green
                        if (i <= 30) return null;

                        const totalTicks = 35;
                        const startAngle = 145;
                        const endAngle = 395;
                        const angle = startAngle + (i * (endAngle - startAngle)) / (totalTicks - 1);

                        const rad = (angle * Math.PI) / 180;
                        const cx = 110;
                        const cy = 100;
                        const rInner = 78;
                        const rOuter = 94;

                        const x1 = cx + rInner * Math.cos(rad);
                        const y1 = cy + rInner * Math.sin(rad);
                        const x2 = cx + rOuter * Math.cos(rad);
                        const y2 = cy + rOuter * Math.sin(rad);

                        return (
                            <line
                                key={i}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke="#84cc16"
                                strokeWidth="5"
                                strokeLinecap="butt"
                            />
                        );
                    })}

                    {/* Labels */}
                    {[
                        { val: "0", a: 150 },
                        { val: "5", a: 175 },
                        { val: "10", a: 200 },
                        { val: "15", a: 225 },
                        { val: "20", a: 250 },
                        { val: "30", a: 285 },
                        { val: "50", a: 320 },
                        { val: "75", a: 350 },
                        { val: "100", a: 385 },
                    ].map((item, i) => {
                        const rad = (item.a * Math.PI) / 180;
                        const rText = 60;
                        const cx = 110;
                        const cy = 100;
                        const x = cx + rText * Math.cos(rad);
                        const y = cy + rText * Math.sin(rad);
                        return (
                            <text
                                key={i}
                                x={x}
                                y={y}
                                fill="#9ca3af"
                                fontSize="12"
                                fontWeight="500"
                                textAnchor="middle"
                                dominantBaseline="middle"
                            >
                                {item.val}
                            </text>
                        );
                    })}

                    {/* Animated Needle */}
                    <g
                        style={{
                            transform: `rotate(${angle}deg)`,
                            transformOrigin: "110px 100px",
                            transition: "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
                        }}
                    >
                        {/* Needle Body */}
                        {/* Drawn horizontally from center to right, corresponding to 0 degrees rotation, 
                            so it aligns with reference frame.
                            Actually, 0 degrees in SVG rotation is usually positive X axis.
                            But our scale starts at 145 deg.
                            If we draw a line to the right (0 deg), applying rotation X will point to X deg.
                            So simple horizontal line is perfect.
                         */}
                        <line x1="110" y1="100" x2="175" y2="100" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="110" cy="100" r="5" fill="#090a19" stroke="#84cc16" strokeWidth="2" />
                    </g>

                </svg>

                <div className="absolute bottom-6 w-full text-center">
                    <p className="font-bold text-lg tracking-wide bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">built for speed</p>
                </div>
            </div>
        </div>
    );
};
