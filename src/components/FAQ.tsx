import styles from './FAQ.module.css';

const faqs = [
    {
        question: "Czy to jest SEO?",
        answer: "To więcej niż tradycyjne SEO. To kompleksowa optymalizacja obecności w Google (Google Ecosystem Optimization). Nie skupiamy się tylko na słowach kluczowych, ale na dominacji w całym ekosystemie: Search, Maps, Images i AI Overviews. Dajemy Ci przewagę, której zwykłe SEO nie zapewni."
    },
    {
        question: "Czy muszę mieć stronę?",
        answer: "Tak, strona jest sercem Twojej obecności online, ale nie musi być skomplikowana. Jeśli jej nie masz lub jest przestarzała, pomożemy Ci stworzyć lub zoptymalizować fundament, na którym zbudujemy Twoją widoczność."
    },
    {
        question: "Co jeśli zrezygnuję?",
        answer: "Jesteśmy pewni naszej wartości, dlatego nie wiążemy Cię długoterminowymi, nierozerwalnymi umowami. Możesz zrezygnować z miesięcznym wyprzedzeniem. Wszystkie wypracowane efekty i treści pozostają Twoją własnością na zawsze."
    },
    {
        question: "Czy mogę zmienić pakiet?",
        answer: "Oczywiście. Twój biznes się zmienia, a my skalujemy się razem z Tobą. Możesz płynnie przechodzić między pakietami w górę (gdy potrzebujesz szybszego wzrostu) lub w dół, w zależności od aktualnych potrzeb."
    },
    {
        question: "Czy to działa w mojej branży?",
        answer: "Nasze metody opierają się na uniwersalnych zasadach algorytmów Google, które działają w każdej branży. Od usług lokalnych po e-commerce B2B – tam, gdzie Twoi klienci szukają rozwiązań, my sprawiamy, że znajdują Ciebie."
    }
];

export default function FAQ() {
    return (
        <section className={styles.section}>
            <h2 className="section-title">Często zadawane pytania</h2>
            <div className={styles.container}>
                {faqs.map((faq, index) => (
                    <details key={index} className={styles.details}>
                        <summary className={styles.summary}>{faq.question}</summary>
                        <div className={styles.answer}>
                            <p>{faq.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
