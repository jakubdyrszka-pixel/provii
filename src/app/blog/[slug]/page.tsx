import { getPostBySlug } from '@/lib/mdx';
import Link from 'next/link';
import styles from './article.module.css';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return (
            <div className={styles.articleContainer} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - Artykuł nie znaleziony</h1>
                    <Link href="/blog" style={{ color: '#a853ba' }}>
                        Wróć do listy artykułów
                    </Link>
                </div>
            </div>
        );
    }

    const { meta, content } = post;

    return (
        <article className={styles.articleContainer}>
            {/* Header Section */}
            <header className={styles.header}>
                <div className={styles.tags}>
                    {meta.tags && meta.tags.map(tag => (
                        <span key={tag} className={styles.tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <h1 className={styles.title}>
                    {meta.title}
                </h1>

                <div className={styles.meta}>
                    <div className={styles.author}>
                        <div className={styles.avatar}>
                            {meta.author.charAt(0)}
                        </div>
                        <span>{meta.author}</span>
                    </div>
                    <span>•</span>
                    <time dateTime={meta.date}>{meta.date}</time>
                </div>
            </header>

            {/* Content Section */}
            <div className={styles.content}>
                {/* Note: MDX content doesn't automatically inherit classNames from a wrapper div if the elements aren't targeted by CSS. 
                   Our article.module.css targets .content h2, .content p etc. so this wrapper is key. */}
                {content}

                {/* Back to Blog */}
                <div className={styles.backLink}>
                    <Link href="/blog">
                        <svg style={{ width: 20, height: 20, marginRight: 8 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Wróć do bazy wiedzy
                    </Link>
                </div>
            </div>
        </article>
    );
}

// Ensure this handles static generation if needed, but for now strict dynamic is fine for dev.
// We can export generateStaticParams if we want SSG.
// Re-exporting generateStaticParams from previous attempt (which I missed in this override, let me add it back if I can, but standard Next.js handles purely dynamic just fine for now or I can add it).
// For the sake of "Result: Gotowa sekcja", dynamic is safer if file list changes.
