import type { Metadata } from 'next';
import styles from './legal.module.css';

export const metadata: Metadata = {
    title: 'Informacje Prawne | Provi',
    description: 'Dokumenty prawne i regulaminy serwisu Provi.',
};

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                {children}
            </div>
        </div>
    );
}
