/**
 * Analytics & Event Tracking Library
 * Handles Google Analytics 4 and custom event tracking
 */

// Type definitions for analytics events
export interface AnalyticsEvent {
    action: string;
    category: string;
    label?: string;
    value?: number;
    [key: string]: any;
}

// Custom event types for CRO tracking
export type CustomEventName =
    | 'view_pricing'
    | 'select_plan'
    | 'generate_lead'
    | 'page_view'
    | 'scroll_depth'
    | 'click_cta';

export interface CustomEventParams {
    event_name: CustomEventName;
    event_category?: string;
    event_label?: string;
    plan_name?: string;
    plan_price?: number;
    scroll_percentage?: number;
    cta_location?: string;
    [key: string]: any;
}

/**
 * Check if analytics is enabled (user accepted cookies)
 */
export const isAnalyticsEnabled = (): boolean => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('analytics_consent') === 'accepted';
};

/**
 * Enable analytics (set consent)
 */
export const enableAnalytics = (): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('analytics_consent', 'accepted');

    // Initialize GTM dataLayer if not exists
    window.dataLayer = window.dataLayer || [];

    // Send consent update to GTM
    window.dataLayer.push({
        event: 'consent_update',
        consent_status: 'granted'
    });
};

/**
 * Disable analytics (revoke consent)
 */
export const disableAnalytics = (): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('analytics_consent', 'rejected');

    // Clear GTM dataLayer
    window.dataLayer = [];
};

/**
 * Track custom event to Google Analytics 4 via GTM
 */
export const trackEvent = (params: CustomEventParams): void => {
    if (!isAnalyticsEnabled()) {
        console.log('[Analytics] Event blocked - no consent:', params);
        return;
    }

    if (typeof window === 'undefined') return;

    // Initialize dataLayer if not exists
    window.dataLayer = window.dataLayer || [];

    // Push event to GTM dataLayer
    window.dataLayer.push({
        event: params.event_name,
        ...params,
        timestamp: new Date().toISOString(),
    });

    console.log('[Analytics] Event tracked:', params);
};

/**
 * Track page view
 */
export const trackPageView = (url: string, title: string): void => {
    trackEvent({
        event_name: 'page_view',
        page_url: url,
        page_title: title,
    });
};

/**
 * Track pricing section view (when user scrolls to pricing)
 */
export const trackViewPricing = (): void => {
    trackEvent({
        event_name: 'view_pricing',
        event_category: 'engagement',
        event_label: 'pricing_section_viewed',
    });
};

/**
 * Track plan selection
 */
export const trackSelectPlan = (planName: string, planPrice?: number): void => {
    trackEvent({
        event_name: 'select_plan',
        event_category: 'conversion',
        event_label: planName,
        plan_name: planName,
        plan_price: planPrice,
    });
};

/**
 * Track lead generation (form submission success)
 */
export const trackGenerateLead = (planName?: string, email?: string): void => {
    trackEvent({
        event_name: 'generate_lead',
        event_category: 'conversion',
        event_label: 'form_submitted',
        plan_name: planName,
        user_email: email ? hashEmail(email) : undefined, // Hash for privacy
    });
};

/**
 * Track CTA clicks
 */
export const trackCTAClick = (ctaLocation: string, ctaText: string): void => {
    trackEvent({
        event_name: 'click_cta',
        event_category: 'engagement',
        event_label: ctaText,
        cta_location: ctaLocation,
    });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number): void => {
    trackEvent({
        event_name: 'scroll_depth',
        event_category: 'engagement',
        scroll_percentage: percentage,
    });
};

/**
 * Simple email hash for privacy (SHA-256 would be better in production)
 */
const hashEmail = (email: string): string => {
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
        const char = email.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(16);
};

/**
 * Initialize GTM
 */
export const initGTM = (gtmId: string): void => {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
};

// Extend Window interface for TypeScript
declare global {
    interface Window {
        dataLayer: any[];
        gtag?: (...args: any[]) => void;
    }
}
