import { X, Atom, RotateCw } from 'lucide-react';

export default function Philosophy() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold">Nasze Podejście</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Block 1 */}
                    <div className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500/20 transition-colors">
                                <X size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-100">Czego NIE robimy</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            Nie sprzedajemy "magicznych sztuczek" ani jednorazowych strzałów, które znikają po miesiącu. Nie obiecujemy "pierwszego miejsca w tydzień". Nie ukrywamy naszych działań za technicznym żargonem.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 group border-indigo-500/30 bg-indigo-900/10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                                <Atom size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Jak myślimy o Google</h3>
                        </div>
                        <p className="text-zinc-300 leading-relaxed text-sm">
                            Traktujemy Google nie jako wyszukiwarkę, ale jako ekosystem. Liczy się reputacja, spójność danych, szybkość strony i jakość treści. <span className="text-white font-semibold">Wygrywa ten, kto dostarcza najlepszą odpowiedź.</span>
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
                                <RotateCw size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-100">Dlaczego abonament?</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            SEO to maraton, nie sprint. Algorytmy zmieniają się codziennie. Abonament to gwarancja, że ktoś czuwa nad Twoim biznesem non-stop, reagując na zmiany i stale budując przewagę.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
