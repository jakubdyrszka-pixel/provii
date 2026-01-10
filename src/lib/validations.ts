import { z } from 'zod';

export const leadFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Imię musi mieć minimum 2 znaki')
        .max(100, 'Imię jest zbyt długie'),

    email: z
        .string()
        .email('Podaj prawidłowy adres email')
        .toLowerCase(),

    phone: z
        .string()
        .regex(/^[\d\s\+\-\(\)]+$/, 'Nieprawidłowy numer telefonu')
        .min(9, 'Numer telefonu jest zbyt krótki')
        .optional()
        .or(z.literal('')),

    package: z.enum(['core', 'growth', 'dominance']),

    domain: z
        .string()
        .url('Podaj prawidłowy adres URL (np. https://example.com)')
        .optional()
        .or(z.literal('')),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

// Mapowanie nazw pakietów
export const packageNames: Record<string, string> = {
    core: 'Core Presence',
    growth: 'Growth Momentum',
    dominance: 'Market Dominance'
};

export const packagePrices: Record<string, string> = {
    core: '2 500',
    growth: '5 000',
    dominance: '9 000'
};
