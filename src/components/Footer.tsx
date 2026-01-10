import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>Antigravity</h3>
                        <p>
                            Przekształcamy dane w dominację na lokalnym rynku.<br />
                            Google Optimization dla ambitnych firm.
                        </p>
                    </div>
                    <div className={styles.linksColumn}>
                        <h4>Firma</h4>
                        <div className={styles.linksList}>
                            <Link href="#">O nas</Link>
                            <Link href="#">Kariera</Link>
                            <Link href="#">Kontakt</Link>
                        </div>
                    </div>
                    <div className={styles.linksColumn}>
                        <h4>Prawne</h4>
                        <div className={styles.linksList}>
                            <Link href="#">Polityka Prywatności</Link>
                            <Link href="#">Regulamin</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>© 2026 Antigravity. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
