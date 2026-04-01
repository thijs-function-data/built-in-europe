'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher({ currentLocale }) {
    const pathname = usePathname();
    const router = useRouter();

    const switchLocale = (newLocale) => {
        if (newLocale === currentLocale) return;
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.push(newPath || `/${newLocale}`);
    };

    return (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginLeft: '1rem', borderLeft: '1px solid rgba(0,0,0,0.1)', paddingLeft: '1.5rem' }}>
            <button
                onClick={() => switchLocale('en')}
                style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontWeight: currentLocale === 'en' ? 700 : 400,
                    color: currentLocale === 'en' ? 'var(--eu-blue)' : 'var(--text-secondary)'
                }}
            >
                EN
            </button>
            <span style={{ color: 'var(--text-secondary)' }}>/</span>
            <button
                onClick={() => switchLocale('nl')}
                style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontWeight: currentLocale === 'nl' ? 700 : 400,
                    color: currentLocale === 'nl' ? 'var(--eu-blue)' : 'var(--text-secondary)'
                }}
            >
                NL
            </button>
        </div>
    );
}
