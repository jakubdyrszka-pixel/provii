'use client';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        id: 'core',
        name: 'Core Presence',
        price: '2 500',
        features: [
            'Audyt wstępny',
            'Optymalizacja strony głównej',
            '2 artykuły blogowe / mc',
            'Raportowanie kwartalne',
            'Wsparcie mailowe'
        ],
        highlight: false
    },
    {
        id: 'growth',
        name: 'Growth Momentum',
        price: '5 000',
        features: [
            'Wszystko z Core Presence',
            'Rozszerzona strategia contentowa',
            '4 artykuły blogowe / mc',
            'Budowanie linków (5 linków)',
            'Optymalizacja techniczna',
            'Raportowanie miesięczne',
            'Priorytetowe wsparcie'
        ],
        highlight: true
    },
    {
        id: 'dominance',
        name: 'Market Dominance',
        price: '9 000',
        features: [
            'Wszystko z Growth Momentum',
            'Personalizowana strategia ekspansji',
            '8 artykułów blogowych / mc',
            'Agresywny Link Building',
            'Analiza konkurencji real-time',
            'Konsultacje 1:1 (2h / mc)',
            'Audyt UX/CRO'
        ],
        highlight: false
    }
];

export default function Pricing() {
    const router = useRouter();

    const handleSelectPlan = (planId: string) => {
        router.push(`/#start?plan=${planId}`);
        setTimeout(() => {
            const startSection = document.getElementById('start');
            if (startSection) {
                startSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <section className="py-24 relative" id="pricing">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Wybierz swój plan</h2>
                    <p className="text-zinc-400">Inwestycja, która zwraca się w nowych klientach.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-2xl p-8 border transition-all duration-300 ${plan.highlight
                                ? 'bg-zinc-900/80 border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.15)] transform md:-translate-y-4'
                                : 'bg-zinc-950/50 border-white/10 hover:border-white/20'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Najczęściej wybierany
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-medium text-zinc-300 mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white max-lg:text-3xl">{plan.price}</span>
                                    <span className="text-zinc-500">PLN/mc</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 min-h-[280px]">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <Check className="shrink-0 text-indigo-400 mt-0.5" size={16} />
                                        <span className="leading-tight">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handleSelectPlan(plan.id)}
                                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.highlight
                                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                    }`}
                            >
                                Rozpocznij współpracę
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
