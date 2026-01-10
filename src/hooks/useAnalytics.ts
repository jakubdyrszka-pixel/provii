'use client';

import { useEffect, useRef } from 'react';
import { trackViewPricing } from '@/lib/analytics';

interface UseIntersectionObserverProps {
    threshold?: number;
    rootMargin?: string;
    onIntersect?: () => void;
}

/**
 * Hook to track when an element becomes visible (for view_pricing event)
 */
export function useIntersectionObserver({
    threshold = 0.5,
    rootMargin = '0px',
    onIntersect,
}: UseIntersectionObserverProps = {}) {
    const ref = useRef<HTMLElement>(null);
    const hasTracked = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTracked.current) {
                    hasTracked.current = true;
                    onIntersect?.();
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, onIntersect]);

    return ref;
}

/**
 * Hook specifically for tracking pricing section view
 */
export function usePricingViewTracking() {
    return useIntersectionObserver({
        threshold: 0.3,
        onIntersect: () => {
            trackViewPricing();
            console.log('[Analytics] Pricing section viewed');
        },
    });
}

/**
 * Hook to track scroll depth
 */
export function useScrollDepthTracking() {
    useEffect(() => {
        const thresholds = [25, 50, 75, 100];
        const tracked = new Set<number>();

        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const percentage = Math.round((scrolled / scrollHeight) * 100);

            thresholds.forEach(threshold => {
                if (percentage >= threshold && !tracked.has(threshold)) {
                    tracked.add(threshold);

                    // Import trackScrollDepth dynamically to avoid circular dependencies
                    import('@/lib/analytics').then(({ trackScrollDepth }) => {
                        trackScrollDepth(threshold);
                        console.log(`[Analytics] Scroll depth: ${threshold}%`);
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
}

/**
 * Hook to track page views
 */
export function usePageViewTracking(pageName: string) {
    useEffect(() => {
        import('@/lib/analytics').then(({ trackPageView }) => {
            trackPageView(window.location.pathname, pageName);
        });
    }, [pageName]);
}
