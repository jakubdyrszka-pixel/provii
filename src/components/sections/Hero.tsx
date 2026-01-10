"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/20 blur-[120px] rounded-full -z-10 opacity-50 pointer-events-none" />

            <div className="container relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Nowa definicja widoczności w sieci
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-pretty">
                    Sprawiamy, że Google <br />
                    <span className="gradient-text">częściej poleca</span> Twoją firmę.
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
                    Pracujemy na danych, intencji i zachowaniu klientów. <br className="hidden md:block" />
                    Dla lokalnych biznesów, które chcą stabilnego napływu zapytań.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link href="#jak-to-dziala" className="w-full sm:w-auto">
                        <Button variant="secondary" size="lg" className="w-full" rightIcon={<ChevronRight size={16} />}>
                            Zobacz, jak to działa
                        </Button>
                    </Link>
                    <Link href="#cennik" className="w-full sm:w-auto">
                        <Button variant="primary" size="lg" className="w-full" rightIcon={<ArrowRight size={16} />}>
                            Wybierz pakiet
                        </Button>
                    </Link>
                </div>

                {/* Social Proof / Tech indicators */}
                <div className="mt-16 pt-8 border-t border-white/5 w-full max-w-sm mx-auto flex justify-between px-8 text-zinc-600 text-xs uppercase tracking-widest font-mono">
                    <span>Data-Driven</span>
                    <span>•</span>
                    <span>Google Intent</span>
                    <span>•</span>
                    <span>AI Powered</span>
                </div>
            </div>
        </section>
    );
}
