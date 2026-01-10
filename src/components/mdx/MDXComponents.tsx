import Link from 'next/link';
import React from 'react';
import styles from './mdx.module.css';

export function CallToAction({ title, text, linkText, href }: { title: string, text: string, linkText: string, href: string }) {
    return (
        <div className={styles.callToAction}>
            <div className={styles.ctaContent}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>

            <Link href={href} className={styles.ctaButton}>
                {linkText}
            </Link>
        </div>
    );
}

export function Blockquote({ children }: { children: React.ReactNode }) {
    return (
        <blockquote className={styles.blockquote}>
            {children}
        </blockquote>
    )
}

export const MDXComponents = {
    CallToAction,
    blockquote: Blockquote,
};
