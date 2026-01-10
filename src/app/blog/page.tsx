import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <main className="min-h-screen pt-32 pb-24">
            {/* Header */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Baza <span className="text-gradient-primary">Wiedzy</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                    Najnowsze artykuły o SEO, marketingu i technologii. Ucz się od ekspertów i rozwijaj swój biznes.
                </p>
            </div>

            {/* Posts Grid */}
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                        <article className="h-full glass-panel overflow-hidden hover:bg-white/5 transition-all duration-300 border-white/5 hover:border-indigo-500/30 flex flex-col">
                            {/* Image Placeholder */}
                            <div className="h-48 bg-zinc-800/50 flex items-center justify-center text-zinc-600 font-mono text-sm relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <span className="relative z-10">BLOG IMAGE</span>
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                                    {post.tags && post.tags.length > 0 && (
                                        <span className="flex items-center gap-1 text-indigo-400">
                                            <Tag size={12} />
                                            {post.tags[0]}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {formatDate(post.date)}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-sm font-medium text-indigo-400 group-hover:text-indigo-300 mt-auto">
                                    Czytaj dalej
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            {/* Lead Magnet CTA */}
            <div className="container mx-auto px-6">
                <div className="glass-panel p-12 relative overflow-hidden text-center max-w-4xl mx-auto border-indigo-500/30">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/10 blur-3xl -z-10" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Chcesz wiedzieć więcej?</h2>
                    <p className="text-zinc-300 mb-8 max-w-2xl mx-auto">
                        Dołącz do naszego newslettera i otrzymuj unikalne wskazówki o SEO i marketingu, których nie znajdziesz na blogu.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Twój adres email"
                            className="bg-black/50 border border-white/10 rounded-lg px-6 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none flex-grow"
                        />
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition-colors whitespace-nowrap">
                            Zapisz się
                        </button>
                    </form>
                    <p className="text-xs text-zinc-500 mt-4">Zero spamu. Wypisz się kiedy chcesz.</p>
                </div>
            </div>
        </main>
    );
}
