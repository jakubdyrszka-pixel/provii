import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import nichesData from '@/data/niches.json';
import Hero from '@/components/sections/Hero';
import Philosophy from '@/components/Philosophy';
import HowItWorks from '@/components/sections/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import FeaturesGrid from '@/components/FeaturesGrid';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/FAQ';
import StartCTA from '@/components/StartCTA';
import { Metadata } from 'next';

type NicheSlug = keyof typeof nichesData;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return Object.keys(nichesData).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const niche = nichesData[slug as NicheSlug];

    if (!niche) {
        return {
            title: 'Branża nie znaleziona',
        };
    }

    return {
        title: `${niche.title} | Antigravity`,
        description: niche.problem,
    };
}

export default async function NichePage({ params }: PageProps) {
    const { slug } = await params;

    // Explicitly cast to unknown then string to inspect, or checks
    if (!Object.keys(nichesData).includes(slug)) {
        notFound();
    }

    const niche = nichesData[slug as NicheSlug];

    return (
        <div style={{ width: '100%', overflow: 'hidden' }}>
            <main>
                <Hero
                    title={niche.title}
                    subtitle={niche.problem}
                />
                <Philosophy />
                <HowItWorks />
                <CaseStudies />
                <FeaturesGrid />
                <Pricing />
                <FAQ />
                <Suspense fallback={<div>Ładowanie...</div>}>
                    <StartCTA />
                </Suspense>
            </main>
        </div>
    );
}
