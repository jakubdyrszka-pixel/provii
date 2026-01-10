import styles from './HowItWorks.module.css';

const steps = [
    {
        step: '01',
        title: 'Start & Onboarding',
        description: 'Rozpoczynamy od głębokiego audytu Twojej sytuacji i ustalenia celów. Integrujemy narzędzia i budujemy plan działania na pierwsze 90 dni.',
        icon: '🏁',
    },
    {
        step: '02',
        title: 'Comiesięczny Delivery',
        description: 'Co miesiąc otrzymujesz konkretny zestaw działań i treści. Bez lanego wody – tylko egzekucja strategii, która buduje Twoją widoczność.',
        icon: '📦',
    },
    {
        step: '03',
        title: 'Raperty i Strategia',
        description: 'Przejrzyste raporty wyników i konsultacje strategiczne. Wiesz dokładnie, za co płacisz i jak rośnie Twój biznes.',
        icon: '📈',
    },
];

export default function HowItWorks() {
    return (
        <section className={styles.section}>
            <h2 className="section-title">Jak to działa?</h2>
            <div className={styles.grid}>
                {steps.map((item) => (
                    <div key={item.step} className={styles.card}>
                        <span className={styles.stepNumber}>{item.step}</span>
                        <div className={styles.content}>
                            <span className={styles.icon}>{item.icon}</span>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
