import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverArgs {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
    threshold = 0.1,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = true,
}: UseIntersectionObserverArgs = {}): [RefObject<T>, boolean] {
    const elementRef = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = elementRef.current;
        if (!node) return;

        if (freezeOnceVisible && isVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (freezeOnceVisible) {
                        observer.unobserve(node);
                    }
                } else if (!freezeOnceVisible) {
                    setIsVisible(false);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [threshold, root, rootMargin, freezeOnceVisible, isVisible]);

    return [elementRef as RefObject<T>, isVisible];
}
