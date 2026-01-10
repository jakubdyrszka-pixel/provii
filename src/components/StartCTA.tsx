'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadFormSchema, type LeadFormData, packageNames, packagePrices } from '@/lib/validations';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function StartCTA() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch
    } = useForm<LeadFormData>({
        resolver: zodResolver(leadFormSchema),
        defaultValues: {
            package: 'growth',
        }
    });

    useEffect(() => {
        const plan = searchParams.get('plan');
        if (plan && ['core', 'growth', 'dominance'].includes(plan)) {
            setValue('package', plan as 'core' | 'growth' | 'dominance');
        }
    }, [searchParams, setValue]);

    const onSubmit = async (data: LeadFormData) => {
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Wystąpił błąd');
            }

            setStatus('success');
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Wystąpił błąd. Spróbuj ponownie.');
        }
    };

    if (status === 'success') {
        return (
            <section className="py-24" id="start">
                <div className="container mx-auto px-6">
                    <div className="glass-panel p-12 max-w-xl mx-auto text-center border-green-500/30 bg-green-900/10">
                        <div className="flex justify-center mb-6 text-green-400">
                            <CheckCircle size={64} />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-white">Dziękujemy!</h2>
                        <p className="text-zinc-300 mb-8 leading-relaxed">
                            Twoje zgłoszenie zostało przyjęte. Skontaktujemy się z Tobą w ciągu 24 godzin.
                        </p>
                        <button
                            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                            onClick={() => setStatus('idle')}
                        >
                            Wyślij kolejne zgłoszenie
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 relative" id="start">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 -z-10 pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Zacznijmy Działać</h2>
                        <p className="text-zinc-400">
                            Wybierz pakiet i zostaw nam resztę. Skontaktujemy się w ciągu 24h.
                        </p>
                    </div>

                    <form className="glass-panel p-8 md:p-10 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="name">
                                Imię i Nazwisko *
                            </label>
                            <input
                                className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 transition-all ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                                    }`}
                                type="text"
                                id="name"
                                placeholder="Jan Kowalski"
                                {...register('name')}
                                disabled={status === 'loading'}
                            />
                            {errors.name && <span className="text-red-400 text-sm mt-1">{errors.name.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="email">
                                Email służbowy *
                            </label>
                            <input
                                className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 transition-all ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                                    }`}
                                type="email"
                                id="email"
                                placeholder="jan@firma.pl"
                                {...register('email')}
                                disabled={status === 'loading'}
                            />
                            {errors.email && <span className="text-red-400 text-sm mt-1">{errors.email.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="phone">
                                Telefon (opcjonalnie)
                            </label>
                            <input
                                className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 transition-all ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                                    }`}
                                type="tel"
                                id="phone"
                                placeholder="+48 123 456 789"
                                {...register('phone')}
                                disabled={status === 'loading'}
                            />
                            {errors.phone && <span className="text-red-400 text-sm mt-1">{errors.phone.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="package">
                                Interesuje mnie pakiet: *
                            </label>
                            <div className="relative">
                                <select
                                    className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white appearance-none focus:ring-2 focus:ring-indigo-500 transition-all ${errors.package ? 'border-red-500' : 'border-white/10'
                                        }`}
                                    id="package"
                                    {...register('package')}
                                    disabled={status === 'loading'}
                                >
                                    <option value="core">{packageNames.core} ({packagePrices.core} PLN/mc)</option>
                                    <option value="growth">{packageNames.growth} ({packagePrices.growth} PLN/mc)</option>
                                    <option value="dominance">{packageNames.dominance} ({packagePrices.dominance} PLN/mc)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-zinc-400">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </div>
                            </div>
                            {errors.package && <span className="text-red-400 text-sm mt-1">{errors.package.message}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-2" htmlFor="domain">
                                Domena (opcjonalnie)
                            </label>
                            <input
                                className={`w-full bg-black/40 border rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 transition-all ${errors.domain ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-indigo-500'
                                    }`}
                                type="url"
                                id="domain"
                                placeholder="https://twoja-firma.pl"
                                {...register('domain')}
                                disabled={status === 'loading'}
                            />
                            {errors.domain && <span className="text-red-400 text-sm mt-1">{errors.domain.message}</span>}
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-3 p-4 bg-red-900/20 border border-red-500/20 rounded-lg text-red-300 text-sm">
                                <AlertCircle size={20} />
                                {errorMessage}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Wysyłanie...
                                </>
                            ) : (
                                'Rozpocznij Współpracę →'
                            )}
                        </button>
                    </form>

                    <p className="text-center text-zinc-500 text-xs mt-6">
                        Bez zobowiązań. Pierwsza rozmowa i audyt są darmowe.
                    </p>
                </div>
            </div>
        </section>
    );
}
