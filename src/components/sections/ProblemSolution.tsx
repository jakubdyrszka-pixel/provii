import { TrendingUp, Globe, ShieldCheck } from "lucide-react";

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-zinc-950/50 border-t border-white/5">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Problem */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Masz wizytówkę i stronę, ale...
                        </h2>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                <div className="w-1 h-12 bg-red-500/50 rounded-full" />
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Brak przewidywalności</h4>
                                    <p className="text-zinc-400 text-sm">Ruch w jednym miesiącu jest, w drugim znika. Nie wiesz dlaczego.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                <div className="w-1 h-12 bg-red-500/50 rounded-full" />
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Konkurencja wygląda „lepiej”</h4>
                                    <p className="text-zinc-400 text-sm">Są wyżej w mapach, mają więcej opinii, a ich strona po prostu… sprzedaje.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Solution */}
                    <div className="space-y-8 relative">
                        <div className="absolute -inset-4 bg-indigo-500/5 blur-2xl rounded-full -z-10" />

                        <div className="space-y-2">
                            <h3 className="text-indigo-400 font-mono text-sm uppercase tracking-wider">Nasze podejście</h3>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Nie sprzedajemy SEO. <br />
                                Sprzedajemy <span className="text-white underline decoration-indigo-500 underline-offset-4">optymalizację decyzji.</span>
                            </h2>
                        </div>

                        <p className="text-zinc-400 leading-relaxed">
                            Tradycyjne agencje skupiają się na "pozycjach". My skupiamy się na tym,
                            czy Google poleca Twój biznes **właściwemu klientowi** w momencie, gdy jest gotowy do zakupu.
                        </p>

                        <ul className="grid gap-4 mt-4">
                            <li className="flex items-center gap-3 text-zinc-300">
                                <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400"><Globe size={20} /></div>
                                <span>Dominacja w wynikach lokalnych</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400"><TrendingUp size={20} /></div>
                                <span>Stały wzrost oparty na danych</span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><ShieldCheck size={20} /></div>
                                <span>Pełna własność zasobów (Bezpieczeństwo)</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
