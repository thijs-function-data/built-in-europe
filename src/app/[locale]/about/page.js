import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');

    return (
        <main className="container" style={{ paddingTop: "5rem", paddingBottom: "5rem", maxWidth: "800px" }}>

            {/* Title */}
            <div className="animate-fade-in stagger-1" style={{ marginBottom: "3rem" }}>
                <h1 className="heading-xl">
                    {t('title')} <span className="text-gradient">{t('title_grad')}</span>
                </h1>
            </div>

            {/* Intro paragraphs */}
            <div className="animate-fade-in stagger-2" style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.85, marginBottom: "3rem" }}>
                <p>
                    <strong style={{ color: "var(--text-primary)" }}>Built in Europe</strong> {t('p1')}
                </p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Core Principles */}
            <div className="animate-fade-in stagger-3">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <div className="icon-box icon-box-fuchsia" style={{ marginBottom: 0 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--fuchsia)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <h3 className="heading-lg" style={{ margin: 0, fontSize: "1.25rem" }}>
                        {t('principles_title')}
                    </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[t('principles_1'), t('principles_2'), t('principles_3')].map((p, i) => (
                        <div key={i} style={{
                            display: "flex",
                            gap: "1.25rem",
                            alignItems: "center",
                            padding: "1.1rem 1.25rem",
                            background: "rgba(255,255,255,0.02)",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.06)"
                        }}>
                            <span style={{
                                fontFamily: "var(--font-mono)",
                                fontSize: "1rem",
                                fontWeight: 700,
                                color: "var(--fuchsia-light)",
                                minWidth: "28px",
                            }}>
                                0{i + 1}
                            </span>
                            <strong style={{ color: "var(--text-primary)", lineHeight: 1.6, fontWeight: 500 }}>{p}</strong>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Organisers */}
            <div className="animate-fade-in stagger-4">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <div className="icon-box" style={{ marginBottom: 0, background: "rgba(59,110,255,0.08)", border: "1px solid rgba(59,110,255,0.18)" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h3 className="heading-lg" style={{ margin: 0, fontSize: "1.25rem" }}>
                        {t('organisers_title')}
                    </h3>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
                    {[
                        { name: t('org1_name'), org: t('org1_org'), bio: t('org1_bio') },
                        { name: t('org2_name'), org: t('org2_org'), bio: t('org2_bio') },
                        { name: t('org3_name'), org: t('org3_org'), bio: t('org3_bio') },
                    ].map((person, i) => (
                        <div key={i} className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <div style={{
                                width: "44px",
                                height: "44px",
                                borderRadius: "12px",
                                background: "var(--accent-gradient)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.1rem",
                                fontWeight: 800,
                                color: "#fff",
                                boxShadow: "0 0 14px rgba(59,110,255,0.35)"
                            }}>
                                {person.name[0]}
                            </div>
                            <div>
                                <div style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1rem" }}>{person.name}</div>
                                <div style={{ fontSize: "0.78rem", fontFamily: "var(--font-mono)", color: "var(--accent-light)", letterSpacing: "0.04em", opacity: 0.8 }}>{person.org}</div>
                            </div>
                            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{person.bio}</p>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    );
}
