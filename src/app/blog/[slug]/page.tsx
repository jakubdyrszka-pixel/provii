import { getPostBySlug } from '@/lib/mdx';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react';

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const { meta, content } = post;

    return (
        <article className="min-h-screen pt-32 pb-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Wróć do bazy wiedzy
                </Link>

                {/* Header Section */}
                <header className="mb-16 text-center">
                    <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
                        {meta.tags && meta.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
                        {meta.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-zinc-400 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 border border-white/5">
                                <User size={14} />
                            </div>
                            <span>{meta.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
                        </div>
                    </div>
                </header>

                {/* Content Section */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-zinc-300 prose-a:text-indigo-400 hover:prose-a:text-indigo-300 prose-strong:text-white prose-code:text-pink-300 prose-pre:bg-zinc-900/50 prose-pre:border prose-pre:border-white/10 rounded-xl">
                    {content}
                </div>

                {/* Footer/CTA */}
                <div className="mt-20 pt-10 border-t border-white/10">
                    <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 md:p-12 text-center">
                        <h3 className="text-2xl font-bold mb-4">Podobał Ci się ten artykuł?</h3>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                            Zapisz się na nasz newsletter, aby otrzymywać powiadomienia o nowych treściach i unikalne porady SEO.
                        </p>
                        <Link href="/blog#newsletter">
                            <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                                Dołącz do newslettera
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

// Ensure this handles static generation if needed, but for now strict dynamic is fine for dev.
// We can export generateStaticParams if we want SSG.
// Re-exporting generateStaticParams from previous attempt (which I missed in this override, let me add it back if I can, but standard Next.js handles purely dynamic just fine for now or I can add it).
// For the sake of "Result: Gotowa sekcja", dynamic is safer if file list changes.
