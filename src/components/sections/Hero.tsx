"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
}

export default function Hero({ title, subtitle }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full -z-10 opacity-50 pointer-events-none" />

            {/* Additional Ambient Glows */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

            <div className="container relative z-10 flex flex-col items-center text-center px-4">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Nowa definicja widoczności w sieci
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-5xl text-pretty"
                >
                    {title || (
                        <>
                            Sprawiamy, że Google <br />
                            <span className="text-gradient-primary">częściej poleca</span> Twoją firmę.
                        </>
                    )}
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
                >
                    {subtitle || (
                        <>
                            Pracujemy na danych, intencji i zachowaniu klientów. <br className="hidden md:block" />
                            Dla lokalnych biznesów, które chcą stabilnego napływu zapytań.
                        </>
                    )}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link href="#jak-to-dziala" className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" className="w-full justify-center bg-white/5 border border-white/10 hover:bg-white/10" rightIcon={<ChevronRight size={16} />}>
                            Zobacz, jak to działa
                        </Button>
                    </Link>
                    <Link href="#start" className="w-full sm:w-auto">
                        <Button variant="primary" size="lg" className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]" rightIcon={<ArrowRight size={16} />}>
                            Wybierz pakiet
                        </Button>
                    </Link>
                </motion.div>

                {/* Social Proof / Tech indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 pt-8 border-t border-white/5 w-full max-w-2xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 text-zinc-600 text-xs uppercase tracking-widest font-mono"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        Data-Driven
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        Google Intent
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        AI Powered
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
