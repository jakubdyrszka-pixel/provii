import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
    title?: string;
    subtitle?: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
            </div>

            <div className="container-custom relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-zinc-300">
                        Google Optimization v2.0
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up [animation-delay:200ms]">
                    <span className="block text-white mb-2">
                        {title || "Dominuj w wynikach"}
                    </span>
                    <span className="text-gradient-primary">
                        {title ? "" : "Google Maps & Search"}
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 animate-fade-in-up [animation-delay:400ms]">
                    {subtitle || "Pracujemy na danych, intencji i zachowaniu klientów. Dla lokalnych biznesów, które chcą stabilnego napływu zapytań."}
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:600ms]">
                    <Link href="#pricing" className="btn-primary group flex items-center gap-2">
                        Wybierz pakiet
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="#how-it-works" className="btn-secondary">
                        Zobacz jak to działa
                    </Link>
                </div>

                {/* Social Proof / Trust */}
                <div className="mt-16 pt-8 border-t border-white/5 animate-fade-in-up [animation-delay:800ms]">
                    <p className="text-sm text-zinc-500 mb-4">Zaufali nam liderzy lokalnych rynków</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale transition-all hover:grayscale-0">
                        {/* Placeholders for logos or stats */}
                        {['TechVibes', 'LocalHero', 'CityDent', 'LawPoint'].map((brand) => (
                            <span key={brand} className="text-lg font-bold text-white/40">{brand}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
