export default function SubscriptionPolicyPage() {
    return (
        <article>
            <h1>Polityka Subskrypcji</h1>

            <section>
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-lg text-indigo-200">
                    <p style={{ marginBottom: 0, color: 'inherit' }}>
                        Przejrzystość jest dla nas kluczowa. Poniżej znajdziesz szczegóły dotyczące działania naszego modelu subskrypcyjnego.
                    </p>
                </div>
            </section>

            <section>
                <h2>Płatności i Cykl Rozliczeń</h2>
                <p>
                    Subskrypcja jest pobierana z góry na początku każdego okresu rozliczeniowego. Akceptujemy płatności kartą oraz szybkie przelewy online. Faktury są generowane automatycznie i wysyłane na adres email.
                </p>
            </section>

            <section>
                <h2>Zmiany Pakietów (Upgrade/Downgrade)</h2>
                <p>
                    Możesz zmienić swój plan w dowolnym momencie.
                </p>
                <ul>
                    <li><strong>Upgrade:</strong> Zmiana na wyższy pakiet jest realizowana natychmiastowo z dopłatą różnicy ceny.</li>
                    <li><strong>Downgrade:</strong> Zmiana na niższy pakiet wchodzi w życie od nowego okresu rozliczeniowego.</li>
                </ul>
            </section>

            <section>
                <h2>Rezygnacja i Status "Po Wyjściu"</h2>
                <p>
                    Po rezygnacji z usługi konto pozostaje aktywne do końca opłaconego okresu. Po jego zakończeniu:
                </p>
                <ul>
                    <li>Tracisz dostęp do panelu klienta i narzędzi premium.</li>
                    <li>Twoje dane i konfiguracje są przechowywane przez 30 dni (okres karencji), po czym mogą zostać trwale usunięte.</li>
                    <li>Wizytówki i strony stworzone w ramach usługi pozostają Twoją własnością (zgodnie z sekcją Własność i Prawa).</li>
                </ul>
            </section>
        </article>
    );
}
