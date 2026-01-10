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
        <section className="py-24 bg-zinc-900/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Jak to działa w praktyce?</h2>
                    <p className="text-zinc-400">Prawdziwe wyniki dla prawdziwych biznesów.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((scenario, index) => (
                        <div key={index} className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 flex flex-col h-full">
                            <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-4">{scenario.industry}</span>
                            <h3 className="text-xl font-bold text-white mb-6 leading-tight">{scenario.title}</h3>

                            <div className="space-y-4 mb-8 flex-grow">
                                <p className="text-zinc-400 text-sm">
                                    <strong className="text-zinc-200 block mb-1">Wyzwanie:</strong>
                                    {scenario.problem}
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    <strong className="text-zinc-200 block mb-1">Rozwiązanie:</strong>
                                    {scenario.solution}
                                </p>
                            </div>

                            <div className="border-t border-white/10 pt-6 mt-auto">
                                <div className="text-4xl font-bold text-white mb-2">{scenario.stat}</div>
                                <p className="text-zinc-500 text-xs mb-4">{scenario.resultDesc}</p>
                                <div className="text-indigo-300 italic text-sm">{scenario.tagline}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
