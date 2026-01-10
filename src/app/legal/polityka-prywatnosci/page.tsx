import styles from '../legal.module.css';

export default function PrivacyPolicyPage() {
    return (
        <article className={styles.article}>
            <h1>Polityka Prywatności</h1>

            <section>
                <h2>1. Administrator Danych</h2>
                <p>
                    [Dane administratora danych osobowych...]
                </p>
            </section>

            <section>
                <h2>2. Przetwarzanie Danych i Analytics</h2>
                <p>
                    Serwis wykorzystuje narzędzia analityczne do śledzenia ruchu i zachowań użytkowników w celu optymalizacji usług. Dane są przetwarzane w sposób zanonimizowany.
                </p>
            </section>

            <section>
                <h2>3. Pliki Cookies</h2>
                <p>
                    Strona korzysta z plików cookies w celu zapewnienia poprawnego działania, personalizacji treści oraz analizy ruchu. Użytkownik może zarządzać ustawieniami cookies w swojej przeglądarce.
                </p>
            </section>
        </article>
    );
}
