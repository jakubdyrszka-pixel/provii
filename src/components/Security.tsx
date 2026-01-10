import styles from './Security.module.css';

export default function Security() {
    return (
        <div className="section-container">
            <section className={styles.section}>
                <div className={styles.iconWrapper}>
                    <svg className={styles.icon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                </div>

                <h2 className={styles.title}>Twoja Własność i Bezpieczeństwo</h2>

                <div className={styles.grid}>
                    <div className={styles.item}>
                        <h3>100% Własności</h3>
                        <p>Wszystko co tworzymy - kod, treści, konta analityczne - należy do Ciebie. Od pierwszego dnia.</p>
                    </div>
                    <div className={styles.item}>
                        <h3>Brak Lock-in</h3>
                        <p>Możesz zrezygnować w każdej chwili. Przekazujemy Ci pełną dokumentację i dostępy.</p>
                    </div>
                    <div className={styles.item}>
                        <h3>Transparentność</h3>
                        <p>Pełny wgląd w podejmowane działania. Żadnych ukrytych taktyk czy "magicznych" sztuczek.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
