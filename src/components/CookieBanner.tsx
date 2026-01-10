'use client';

import { useEffect, useState } from 'react';
import { enableAnalytics, disableAnalytics } from '@/lib/analytics';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('analytics_consent');

        if (!consent) {
            // Show banner after a short delay for better UX
            setTimeout(() => {
                setShowBanner(true);
                setTimeout(() => setIsVisible(true), 100);
            }, 1000);
        }
    }, []);

    const handleAccept = () => {
        enableAnalytics();
        closeBanner();

        // Reload GTM scripts after consent
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    };

    const handleReject = () => {
        disableAnalytics();
        closeBanner();
    };

    const closeBanner = () => {
        setIsVisible(false);
        setTimeout(() => setShowBanner(false), 300);
    };

    if (!showBanner) return null;

    return (
        <div className={`${styles.cookieBanner} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h3 className={styles.title}>🍪 Cenimy Twoją prywatność</h3>
                    <p className={styles.description}>
                        Używamy plików cookie i Google Analytics, aby zrozumieć, jak możemy lepiej Ci służyć.
                        Twoje dane są bezpieczne i nigdy nie sprzedajemy ich osobom trzecim.
                    </p>
                    <a href="/legal/privacy" className={styles.link}>
                        Polityka prywatności
                    </a>
                </div>

                <div className={styles.actions}>
                    <button
                        onClick={handleReject}
                        className={styles.rejectBtn}
                        aria-label="Odrzuć cookies"
                    >
                        Tylko niezbędne
                    </button>
                    <button
                        onClick={handleAccept}
                        className={styles.acceptBtn}
                        aria-label="Akceptuj cookies"
                    >
                        Akceptuję
                    </button>
                </div>
            </div>
        </div>
    );
}
