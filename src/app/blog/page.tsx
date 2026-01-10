import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import styles from './blog.module.css';

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    Baza Wiedzy
                </h1>
                <p className={styles.subtitle}>
                    Najnowsze artykuły o SEO, marketingu i technologii. Ucz się od ekspertów i rozwijaj swój biznes.
                </p>
            </div>

            <div className={styles.grid}>
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
                        <article>
                            <div className={styles.cardImage}>
                                {/* Placeholder */}
                                <div className={styles.imagePlaceholder}>BLOG</div>
                            </div>

                            <div className={styles.cardContent}>
                                <div className={styles.meta}>
                                    {post.tags && post.tags.length > 0 && (
                                        <span className={styles.tag}>
                                            {post.tags[0]}
                                        </span>
                                    )}
                                    <span style={{ color: '#6b7280' }}>•</span>
                                    <span style={{ color: '#6b7280' }}>{post.date}</span>
                                </div>

                                <h2 className={styles.cardTitle}>
                                    {post.title}
                                </h2>

                                <p className={styles.excerpt}>
                                    {post.excerpt}
                                </p>

                                <div className={styles.readMore}>
                                    Czytaj dalej
                                    <svg className={styles.arrow} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </main>
    );
}
