'use client';
import { useRouter } from 'next/navigation';
import styles from './Pricing.module.css';

const plans = [
    {
        id: 'core',
        name: 'Core Presence',
        price: '2 500',
        features: [
            'Audyt wstępny',
            'Optymalizacja strony głównej',
            '2 artykuły blogowe / mc',
            'Raportowanie kwartalne',
            'Wsparcie mailowe'
        ],
        highlight: false
    },
    {
        id: 'growth',
        name: 'Growth Momentum',
        price: '5 000',
        features: [
            'Wszystko z Core Presence',
            'Rozszerzona strategia contentowa',
            '4 artykuły blogowe / mc',
            'Budowanie linków (5 linków)',
            'Optymalizacja techniczna',
            'Raportowanie miesięczne',
            'Priorytetowe wsparcie'
        ],
        highlight: true
    },
    {
        id: 'dominance',
        name: 'Market Dominance',
        price: '9 000',
        features: [
            'Wszystko z Growth Momentum',
            'Personalizowana strategia ekspansji',
            '8 artykułów blogowych / mc',
            'Agresywny Link Building',
            'Analiza konkurencji real-time',
            'Konsultacje 1:1 (2h / mc)',
            'Audyt UX/CRO'
        ],
        highlight: false
    }
];

export default function Pricing() {
    const router = useRouter();

    const handleSelectPlan = (planId: string) => {
        // Przewiń do sekcji formularza z query param
        router.push(`/#start?plan=${planId}`);

        // Alternatywnie: smooth scroll do sekcji
        setTimeout(() => {
            const startSection = document.getElementById('start');
            if (startSection) {
                startSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <section className="section-container" id="pricing">
            <h2 className="section-title">Wybierz swój plan</h2>
            <div className={styles.container}>
                {plans.map((plan) => (
                    <div key={plan.name} className={`${styles.card} ${plan.highlight ? styles.highlighted : ''}`}>
                        {plan.highlight && (
                            <div className={styles.popularBadge}>Najczęściej wybierany</div>
                        )}
                        <div className={styles.header}>
                            <div className={styles.name}>{plan.name}</div>
                            <div className={styles.price}>
                                {plan.price} <span className={styles.period}>PLN/mc</span>
                            </div>
                        </div>
                        <ul className={styles.features}>
                            {plan.features.map((feature, i) => (
                                <li key={i} className={styles.featureItem}>
                                    <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={styles.button}
                            onClick={() => handleSelectPlan(plan.id)}
                        >
                            Rozpocznij współpracę
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
