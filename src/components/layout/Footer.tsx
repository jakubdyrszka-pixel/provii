import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-900 bg-black pt-16 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            Anti<span className="text-indigo-400">gravity</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Optymalizacja widoczności w Google oparta na danych i intencji użytkownika.
                            Model subskrypcyjny bez ukrytych kosztów.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Oferta</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#oferta" className="hover:text-indigo-400 transition-colors">Co robimy</Link></li>
                            <li><Link href="#cennik" className="hover:text-indigo-400 transition-colors">Pakiety</Link></li>
                            <li><Link href="#jak-to-dziala" className="hover:text-indigo-400 transition-colors">Proces</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Firma</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="/o-nas" className="hover:text-indigo-400 transition-colors">O nas</Link></li>
                            <li><Link href="/kontakt" className="hover:text-indigo-400 transition-colors">Kontakt</Link></li>
                            <li><Link href="/kariera" className="hover:text-indigo-400 transition-colors">Kariera</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Prawne</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="/polityka-prywatnosci" className="hover:text-indigo-400 transition-colors">Polityka Prywatności</Link></li>
                            <li><Link href="/regulamin" className="hover:text-indigo-400 transition-colors">Regulamin</Link></li>
                            <li><Link href="/wlasnosc-i-prawa" className="hover:text-indigo-400 transition-colors">Własność i prawa</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} Antigravity. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex gap-4">
                        <span>Designed for Growth.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
