import styles from './FeaturesGrid.module.css';

const features = [
    'Audyt SEO i UX',
    'Analiza słów kluczowych',
    'Optymalizacja techniczna',
    'Content Marketing',
    'Link Building',
    'Monitoring konkurencji',
    'Optymalizacja konwersji (CRO)',
    'Lokalne SEO',
    'Raportowanie wyników',
    'Konsultacje strategiczne',
];

export default function FeaturesGrid() {
    return (
        <section className="section-container">
            <h2 className="section-title">Co robimy?</h2>
            <div className={styles.grid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.check}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <span className={styles.text}>{feature}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
