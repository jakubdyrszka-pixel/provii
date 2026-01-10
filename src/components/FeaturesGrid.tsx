"use client";

import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    'Audyt SEO i UX',
    'Analiza słów kluczowych',
    'Optymalizacja techniczna',
    'Content Marketing',
    'Link Building',
    'Monitoring konkurencji',
    'Optymalizacja konwersji (CRO)',
    'Lokalne SEO',
    'Raportowanie wyników',
    'Konsultacje strategiczne',
];

export default function FeaturesGrid() {
    return (
        <section className="py-24 relative overflow-hidden" id="oferta">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Co <span className="text-gradient">otrzymujesz?</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg">
                        Kompleksowe podejście do Twojej widoczności w sieci. Wszystko, czego potrzebujesz, w jednym abonamencie.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-400 group-hover:scale-110 transition-transform">
                                <Check size={20} strokeWidth={3} />
                            </div>
                            <span className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">{feature}</span>
                        </motion.div>
                    ))}

                    {/* Bonus Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: features.length * 0.05 }}
                        className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-pink-600/20 border border-white/10 hover:border-white/20 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-1 justify-center md:justify-start"
                    >
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white animate-pulse-slow">
                            <Sparkles size={20} />
                        </div>
                        <span className="text-lg font-bold text-white">I wiele więcej...</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
