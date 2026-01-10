import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
    title?: string;
    subtitle?: string;
    imageSrc?: string;
}

export default function Hero({ title, subtitle, imageSrc }: HeroProps) {
    return (
        <section className={styles.hero}>
            {imageSrc ? (
                <>
                    <Image
                        src={imageSrc}
                        alt="Hero background"
                        fill
                        style={{ objectFit: 'cover', zIndex: 0 }}
                        priority
                    />
                    <div className={styles.heroOverlay} />
                </>
            ) : (
                <div className={styles.glowBackground} />
            )}

            <div className={styles.content}>
                <div className={styles.pill}>
                    Google Optimization v2.0
                </div>
                <h1 className={styles.title}>
                    {title || "Sprawiamy, że Google częściej poleca Twoją firmę."}
                </h1>
                <p className={styles.subtitle}>
                    {subtitle || "Pracujemy na danych, intencji i zachowaniu klientów. Dla lokalnych biznesów, które chcą stabilnego napływu zapytań."}
                </p>
                <div className={styles.actions}>
                    <Link href="#features" className={styles.buttonSecondary}>
                        Zobacz, jak to działa
                    </Link>
                    <Link href="#pricing" style={{ display: 'contents' }}>
                        <button className="buttonPrimary">Wybierz pakiet</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
