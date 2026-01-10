import { NextRequest, NextResponse } from 'next/server';

// Typ dla danych formularza
interface LeadData {
    name: string;
    email: string;
    phone?: string;
    package: string;
    domain?: string;
}

// Prosty rate limiting (w produkcji użyj Redis)
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minut
    const maxRequests = 5;

    const requests = rateLimitMap.get(ip) || [];
    const recentRequests = requests.filter(time => now - time < windowMs);

    if (recentRequests.length >= maxRequests) {
        return false;
    }

    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);
    return true;
}

export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: 'Zbyt wiele żądań. Spróbuj ponownie za 15 minut.' },
                { status: 429 }
            );
        }

        const data: LeadData = await request.json();

        // Podstawowa walidacja
        if (!data.name || !data.email || !data.package) {
            return NextResponse.json(
                { error: 'Brakujące wymagane pola' },
                { status: 400 }
            );
        }

        // Walidacja email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            return NextResponse.json(
                { error: 'Nieprawidłowy adres email' },
                { status: 400 }
            );
        }

        // Log do konsoli (w produkcji: zapis do bazy danych)
        console.log('📧 Nowy lead:', {
            timestamp: new Date().toISOString(),
            ...data,
            ip
        });

        // Opcjonalnie: Wysłanie emaila do admina
        // await sendEmailNotification(data);

        // Opcjonalnie: Zapis do CRM/bazy danych
        // await saveToCRM(data);

        // Opcjonalnie: Integracja z backendem FastAPI
        try {
            const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
            const response = await fetch(`${backendUrl}/api/leads`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.warn('Backend API nie odpowiedział poprawnie:', response.status);
            }
        } catch (backendError) {
            // Nie blokujemy odpowiedzi jeśli backend nie działa
            console.warn('Nie udało się połączyć z backendem:', backendError);
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Dziękujemy! Skontaktujemy się z Tobą w ciągu 24 godzin.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Błąd podczas przetwarzania leada:', error);
        return NextResponse.json(
            { error: 'Wystąpił błąd serwera. Spróbuj ponownie później.' },
            { status: 500 }
        );
    }
}
