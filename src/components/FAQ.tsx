'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24" id="faq">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Często zadawane pytania</h2>
                    <p className="text-zinc-400">
                        Wszystko, co musisz wiedzieć przed rozpoczęciem współpracy.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`glass-panel border transition-all duration-300 ${openIndex === index ? 'bg-white/5 border-white/20' : 'bg-transparent border-transparent hover:bg-white/5'
                                }`}
                        >
                            <button
                                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-white' : 'text-zinc-300'}`}>
                                    {faq.question}
                                </span>
                                <span className={`shrink-0 transition-colors ${openIndex === index ? 'text-indigo-400' : 'text-zinc-500'}`}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-0 text-zinc-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
