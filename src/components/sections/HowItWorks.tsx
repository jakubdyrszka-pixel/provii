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
        title: 'Raporty i Strategia',
        description: 'Przejrzyste raporty wyników i konsultacje strategiczne. Wiesz dokładnie, za co płacisz i jak rośnie Twój biznes.',
        icon: '📈',
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 relative overflow-hidden" id="jak-to-dziala">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Jak to działa?</h2>
                    <p className="text-zinc-400 max-w-xl mx-auto">
                        Prosty i przejrzysty proces. Ty zajmujesz się biznesem, my Twoją widocznością.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((item, index) => (
                        <div key={item.step} className="group relative glass-panel p-8 hover:bg-white/5 transition-all duration-300">
                            <span className="absolute top-6 right-6 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                                {item.step}
                            </span>

                            <div className="relative z-10">
                                <span className="text-4xl mb-6 block bg-white/5 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>

                            {/* Connecting Line (Desktop) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
