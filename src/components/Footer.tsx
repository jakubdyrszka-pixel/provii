import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12 mt-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
                            <span className="text-white">Anti</span>
                            <span className="text-gradient-primary">gravity</span>
                        </Link>
                        <p className="text-zinc-500 max-w-sm leading-relaxed">
                            Przekształcamy Twoją widoczność w Google Maps w dominację na lokalnym rynku.
                            System, który pracuje, gdy Ty śpisz.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Firma</h4>
                        <ul className="space-y-3">
                            <li><Link href="/#about" className="text-zinc-400 hover:text-white transition-colors">O nas</Link></li>
                            <li><Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/#contact" className="text-zinc-400 hover:text-white transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Prawne</h4>
                        <ul className="space-y-3">
                            <li><Link href="/legal/privacy" className="text-zinc-400 hover:text-white transition-colors">Polityka Prywatności</Link></li>
                            <li><Link href="/legal/terms" className="text-zinc-400 hover:text-white transition-colors">Regulamin</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
                    <p>© 2026 Antigravity. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
