'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadFormSchema, type LeadFormData, packageNames, packagePrices } from '@/lib/validations';
import styles from './StartCTA.module.css';

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
            package: 'growth', // Domyślnie Growth Momentum
        }
    });

    // Obsługa query params - automatyczne zaznaczenie pakietu
    useEffect(() => {
        const plan = searchParams.get('plan');
        if (plan && ['core', 'growth', 'dominance'].includes(plan)) {
            setValue('package', plan as 'core' | 'growth' | 'dominance');
        }
    }, [searchParams, setValue]);

    const selectedPackage = watch('package');

    const onSubmit = async (data: LeadFormData) => {
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Wystąpił błąd');
            }

            setStatus('success');

            // Opcjonalnie: Reset formularza po 5 sekundach
            setTimeout(() => {
                setStatus('idle');
            }, 5000);

        } catch (error) {
            setStatus('error');
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : 'Wystąpił błąd. Spróbuj ponownie.'
            );
        }
    };

    if (status === 'success') {
        return (
            <section className={styles.section} id="start">
                <div className={styles.container}>
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="16 8 10 14 8 12"></polyline>
                            </svg>
                        </div>
                        <h2 className={styles.successTitle}>Dziękujemy!</h2>
                        <p className={styles.successText}>
                            Twoje zgłoszenie zostało przyjęte. Skontaktujemy się z Tobą w ciągu 24 godzin.
                        </p>
                        <button
                            className={styles.button}
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
        <section className={styles.section} id="start">
            <div className={styles.container}>
                <h2 className={styles.title}>Zacznijmy Działać</h2>
                <p className={styles.subtitle}>
                    Wybierz pakiet i zostaw nam resztę. Skontaktujemy się w ciągu 24h.
                </p>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className={styles.label} htmlFor="name">
                            Imię i Nazwisko *
                        </label>
                        <input
                            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                            type="text"
                            id="name"
                            placeholder="Jan Kowalski"
                            {...register('name')}
                            disabled={status === 'loading'}
                        />
                        {errors.name && (
                            <span className={styles.error}>{errors.name.message}</span>
                        )}
                    </div>

                    <div>
                        <label className={styles.label} htmlFor="email">
                            Email służbowy *
                        </label>
                        <input
                            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                            type="email"
                            id="email"
                            placeholder="jan@firma.pl"
                            {...register('email')}
                            disabled={status === 'loading'}
                        />
                        {errors.email && (
                            <span className={styles.error}>{errors.email.message}</span>
                        )}
                    </div>

                    <div>
                        <label className={styles.label} htmlFor="phone">
                            Telefon (opcjonalnie)
                        </label>
                        <input
                            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                            type="tel"
                            id="phone"
                            placeholder="+48 123 456 789"
                            {...register('phone')}
                            disabled={status === 'loading'}
                        />
                        {errors.phone && (
                            <span className={styles.error}>{errors.phone.message}</span>
                        )}
                    </div>

                    <div>
                        <label className={styles.label} htmlFor="package">
                            Interesuje mnie pakiet: *
                        </label>
                        <select
                            className={`${styles.select} ${errors.package ? styles.inputError : ''}`}
                            id="package"
                            {...register('package')}
                            disabled={status === 'loading'}
                        >
                            <option value="core">
                                {packageNames.core} ({packagePrices.core} PLN/mc)
                            </option>
                            <option value="growth">
                                {packageNames.growth} ({packagePrices.growth} PLN/mc)
                            </option>
                            <option value="dominance">
                                {packageNames.dominance} ({packagePrices.dominance} PLN/mc)
                            </option>
                        </select>
                        {errors.package && (
                            <span className={styles.error}>{errors.package.message}</span>
                        )}
                    </div>

                    <div>
                        <label className={styles.label} htmlFor="domain">
                            Domena (opcjonalnie)
                        </label>
                        <input
                            className={`${styles.input} ${errors.domain ? styles.inputError : ''}`}
                            type="url"
                            id="domain"
                            placeholder="https://twoja-firma.pl"
                            {...register('domain')}
                            disabled={status === 'loading'}
                        />
                        {errors.domain && (
                            <span className={styles.error}>{errors.domain.message}</span>
                        )}
                    </div>

                    {status === 'error' && (
                        <div className={styles.errorMessage}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            {errorMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        className={styles.button}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? (
                            <>
                                <span className={styles.spinner}></span>
                                Wysyłanie...
                            </>
                        ) : (
                            'Rozpocznij Współpracę →'
                        )}
                    </button>
                </form>

                <p className={styles.disclaimer}>
                    Bez zobowiązań. Pierwsza rozmowa i audyt są darmowe.
                </p>
            </div>
        </section>
    );
}
