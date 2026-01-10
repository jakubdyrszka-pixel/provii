import styles from './CaseStudies.module.css';

const cases = [
    {
        industry: 'Usługi Lokalne (Stomatologia)',
        title: '3x więcej pacjentów z Map Google',
        problem: 'Gabinet niewidoczny w mapach poza najbliższą okolicą.',
        solution: 'Optymalizacja profilu Google, lokalne linkowanie i spójność danych NAP.',
        stat: '+214%',
        resultDesc: 'Wzrost liczby połączeń telefonicznych i zapytań o dojazd w ciągu 4 miesięcy.',
        tagline: '"Telefon dzwoni non-stop."'
    },
    {
        industry: 'B2B Tech / SaaS',
        title: 'Dominacja w niszowych frazach',
        problem: 'Wysoki koszt kampanii płatnych (Ads), niski ruch organiczny.',
        solution: 'Content marketing celowany w "long-tail" i zapytania eksperckie.',
        stat: '-40%',
        resultDesc: 'Obniżenie kosztu pozyskania leada (CPL) przy jednoczesnym wzroście jakości zapytań.',
        tagline: '"Lepsze leady za mniej."'
    },
    {
        industry: 'E-commerce Specjalistyczny',
        title: 'Widoczność poza "Kup teraz"',
        problem: 'Klienci szukali porad, trafiali do konkurencji, a tam kupowali.',
        solution: 'Rozbudowa bazy wiedzy i poradników zakupowych zintegrowanych z produktami.',
        stat: '3.5x',
        resultDesc: 'Wzrost ruchu z zapytań informacyjnych, konwertującego na sprzedaż.',
        tagline: '"Jesteśmy teraz ekspertem numer 1."'
    }
];

export default function CaseStudies() {
    return (
        <section className={styles.section}>
            <h2 className="section-title">Jak to działa w praktyce?</h2>
            <div className={styles.grid}>
                {cases.map((scenario, index) => (
                    <div key={index} className={styles.card}>
                        <span className={styles.industry}>{scenario.industry}</span>
                        <h3 className={styles.title}>{scenario.title}</h3>
                        <p className={styles.resultDesc} style={{ marginBottom: '0.5rem' }}><strong>Wyzwanie:</strong> {scenario.problem}</p>
                        <p className={styles.resultDesc}><strong>Rozwiązanie:</strong> {scenario.solution}</p>
                        <div className={styles.stat}>{scenario.stat}</div>
                        <p className={styles.resultDesc}>{scenario.resultDesc}</p>
                        <div className={styles.tagline}>{scenario.tagline}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
