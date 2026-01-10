import styles from './Features.module.css';

export default function Features() {
    return (
        <section className={styles.section} id="features">
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Problem */}
                    <div className={styles.problemCard}>
                        <span className={`${styles.label} ${styles.problemLabel}`}>Problem</span>
                        <h2 className={styles.heading}>Wizytówka i strona to za mało.</h2>
                        <p className={styles.text}>
                            Masz świetny produkt, ale klienci trafiają do konkurencji, która po prostu jest wyżej.
                            Brakuje Ci przewidywalności, a algorytmy Google wydają się czarną magią.
                        </p>
                    </div>

                    {/* Solution */}
                    <div className={styles.solutionCard}>
                        <span className={`${styles.label} ${styles.solutionLabel}`}>Rozwiązanie</span>
                        <h2 className={styles.heading}>Optymalizacja decyzji.</h2>
                        <p className={styles.text}>
                            Nie sprzedajemy zwykłego SEO ani reklam. Wdrażamy system, który karmi Google tym, czego szuka:
                            zaufaniem, spójnymi danymi i aktywnością. Przejmujemy kontrolę nad tym, jak widzi Cię algorytm.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
