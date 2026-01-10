import styles from './Philosophy.module.css';

export default function Philosophy() {
    return (
        <section className={styles.section}>
            <div className={styles.bgBlur} />
            <h2 className="section-title" style={{ marginBottom: '4rem' }}>Nasze Podejście</h2>

            <div className={styles.content}>
                <div className={styles.block}>
                    <h3 className={styles.header}>
                        <span style={{ color: '#ef4444' }}>✕</span> Czego NIE robimy
                    </h3>
                    <p className={styles.text}>
                        Nie sprzedajemy "magicznych sztuczek" ani jednorazowych strzałów, które znikają po miesiącu. Nie obiecuje "pierwszego miejsca w tydzień". Nie ukrywamy naszych działań za technicznym żargonem.
                    </p>
                </div>

                <div className={styles.block}>
                    <h3 className={styles.header}>
                        <span style={{ color: '#8b5cf6' }}>⚛</span> Jak myślimy o Google
                    </h3>
                    <p className={styles.text}>
                        Traktujemy Google nie jako wyszukiwarkę, ale jako ekosystem. Liczy się reputacja, spójność danych, szybkość strony i jakość treści. <span className={styles.highlight}>Wygrywa ten, kto dostarcza najlepszą odpowiedź.</span>
                    </p>
                </div>

                <div className={styles.block}>
                    <h3 className={styles.header}>
                        <span style={{ color: '#10b981' }}>↻</span> Dlaczego abonament?
                    </h3>
                    <p className={styles.text}>
                        SEO to maraton, nie sprint. Algorytmy zmieniają się codziennie. Abonament to gwarancja, że ktoś czuwa nad Twoim biznesem non-stop, reagując na zmiany i stale budując przewagę.
                    </p>
                </div>
            </div>
        </section>
    );
}
