import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    return (
        <main className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <div className="glass-card animate-fade-in stagger-1" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h1 className="heading-xl" style={{ textAlign: "center", marginBottom: "2rem" }}>
                    {t('title')} <span className="text-gradient">{t('title_grad')}</span>
                </h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    <p>
                        <strong style={{ color: "var(--eu-blue)" }}>Built in Europe</strong> {t('p1')}
                    </p>
                    <p>
                        {t('p2')}
                    </p>
                    <p>
                        {t('p3')}
                    </p>

                    <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(37, 99, 235, 0.05)", borderRadius: "16px", borderLeft: "4px solid var(--eu-yellow)" }}>
                        <h3 className="heading-lg" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{t('principles_title')}</h3>
                        <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <li><strong>{t('principles_1')}</strong></li>
                            <li><strong>{t('principles_2')}</strong></li>
                            <li><strong>{t('principles_3')}</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
