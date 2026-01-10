import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://antigravity.pl';

    // Główne strony
    const routes = [
        '',
        '/legal/terms',
        '/legal/privacy',
        '/legal/subscription',
        '/legal/ownership',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
