import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Antigravity - Optymalizacja Google w Abonamencie',
        short_name: 'Antigravity',
        description: 'Sprawiamy, że Google częściej poleca Twoją firmę. Kompleksowa optymalizacja Google w modelu subskrypcyjnym.',
        start_url: '/',
        display: 'standalone',
        background_color: '#03000a',
        theme_color: '#4f46e5',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
