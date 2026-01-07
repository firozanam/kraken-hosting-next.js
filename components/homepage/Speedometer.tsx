export const Speedometer = () => {
    return (
        <div className="bg-[#1a1b26] p-4 rounded-[2rem] shadow-2xl w-[220px] h-[220px] flex items-center justify-center relative border border-white/5">
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
                        // The user wants to remove the "extra part green type from 50-90".
                        // Assuming they mean the visual ticks/arc before the solid green part finishes.
                        // Adjusted to stop earlier.
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

                    {/* Green Zone - Solid Arc Block */}
                    {/* Adjusted to be only at the very end to signify 100% */}
                    {/* Rotating it slightly to match 100 on the dial */}
                    <path
                        d="M 179.28 60 A 92 92 0 0 1 190.16 116.03 L 178.16 116.03 A 80 80 0 0 0 168.89 67.32 Z"
                        fill="#84cc16"
                        transform="rotate(-5 110 100)"
                        opacity="0" // Hiding the block shape if they want just ticks
                    />

                    {/* 
                User request: "remove green type from 50-90"
                So effectively just keeping the end ticks green or even less.
                Let's make only the last 3-4 ticks green to indicate high speed.
             */}
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
                        { val: "75", a: 350 }, // Keeping 75 label but removing green decoration near it
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

                    {/* Needle - Pointing strictly to 100 */}
                    <g transform="rotate(385 110 100)"> {/* Angle 385 is where 100 is */}
                        <line x1="110" y1="100" x2="165" y2="100" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" /> {/* Adjusted line for rotation */}
                        <circle cx="110" cy="100" r="5" fill="#1a1b26" stroke="#84cc16" strokeWidth="2" />
                    </g>

                    {/* Correct Needle Drawing Logic for Rotate Transform 
                 If we rotate around (110,100), a horizontal line from (110,100) to Right is 0 degrees.
                 So to point to 385 degrees (which is 25 degrees past 360, i.e., slightly down-right), 
                 we can use basic rotation.
             */}
                    <defs>
                        <linearGradient id="needle-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#84cc16" />
                            <stop offset="100%" stopColor="#a3e635" />
                        </linearGradient>
                    </defs>
                    {/* Needle Redraw - explicit coordinates for 100 mark without group rotate for precision */}
                    {/* 100 mark is at ~385 degrees. cos(385) = 0.906, sin(385) = 0.422.  */}
                    {/* x = 110 + 60 * 0.906 = 164. y = 100 + 60 * 0.422 = 125 */}
                    <line x1="110" y1="100" x2="164" y2="125" stroke="#84cc16" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="110" cy="100" r="5" fill="#1a1b26" stroke="#84cc16" strokeWidth="2" />

                </svg>

                <div className="absolute bottom-6 w-full text-center">
                    <p className="font-bold text-lg tracking-wide bg-gradient-to-r from-[#89d957] to-[#c9e265] bg-clip-text text-transparent">built for speed</p>
                </div>
            </div>
        </div>
    );
};
