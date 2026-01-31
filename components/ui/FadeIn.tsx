"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: 'up' | 'left' | 'right' | 'none' | 'zoom' | 'zoom-rotate';
    fullWidth?: boolean;
    style?: React.CSSProperties;
}

export const FadeIn = ({
    children,
    className = "",
    delay = 0,
    duration = 600,
    direction = 'up',
    fullWidth = false,
    style
}: FadeInProps) => {
    const [ref, isVisible] = useIntersectionObserver();

    const directionClass = {
        'up': 'animate-fade-in-up',
        'left': 'animate-fade-in-left',
        'right': 'animate-fade-in-right',
        'none': 'animate-fade-in',
        'zoom': 'animate-zoom-in',
        'zoom-rotate': 'animate-zoom-rotate'
    }[direction];

    return (
        <div
            ref={ref}
            className={`${fullWidth ? "w-full" : ""} ${className} ${isVisible ? `${directionClass} opacity-100` : "opacity-0"}`}
            style={{
                animationDelay: `${delay}ms`,
                animationDuration: `${duration}ms`,
                ...style
            }}
        >
            {children}
        </div>
    );
};
