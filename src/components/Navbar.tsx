import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <Link href="/">Antigravity</Link>
                </div>
                <div className={styles.links}>
                    <Link href="#features" className={styles.link}>Jak to działa</Link>
                    <Link href="#pricing" className={styles.link}>Cennik</Link>
                    <Link href="#contact" className={styles.link}>Kontakt</Link>
                </div>
                <Link href="#pricing" className={styles.cta}>
                    Wybierz pakiet
                </Link>
            </div>
        </nav>
    );
}
