import { useTranslations } from 'next-intl';

export default function Agenda() {
    const t = useTranslations('Agenda');

    const day1Items = [
        { time: "10:00 CET", label: t('d1_item1') },
        { time: "11:00 CET", label: t('d1_item2') },
        { time: "Continuous", label: t('d1_item3') },
        { time: "June 3 EOD", label: t('d1_item4') },
    ];

    const day3Items = [
        { time: "13:00 CET", label: t('d3_item1') },
        { time: "14:30 CET", label: t('d3_item2') },
        { time: "16:30 CET", label: t('d3_item3') },
        { time: "17:00 CET", label: t('d3_item4') },
        { time: "18:00 CET", label: t('d3_item5') },
    ];

    return (
        <main className="container" style={{ paddingTop: "5rem", paddingBottom: "5rem", maxWidth: "860px" }}>

            <div className="animate-fade-in stagger-1" style={{ marginBottom: "3.5rem", paddingBottom: "0.25rem", overflow: "visible" }}>
                <h1 className="heading-xl" style={{ lineHeight: 1.05, paddingBottom: "0.1em" }}>
                    {t('title')} <span className="text-gradient">{t('title_grad')}</span>
                </h1>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} className="animate-fade-in stagger-2">

                {/* Day 1 & 2 — blue */}
                <div className="glass-card">
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
                        <span style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "var(--accent-light)",
                            background: "rgba(59,110,255,0.1)",
                            border: "1px solid rgba(59,110,255,0.2)",
                            padding: "0.35rem 0.85rem",
                            borderRadius: "999px"
                        }}>JUNE 2 – 3</span>
                        <div style={{ flex: 1, height: "1px", background: "rgba(59,110,255,0.15)" }}></div>
                    </div>

                    <h2 className="heading-lg" style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{t('day1_title')}</h2>
                    <p style={{ color: "var(--accent-light)", fontSize: "0.875rem", marginBottom: "1.75rem", fontFamily: "var(--font-mono)" }}>{t('day1_sub')}</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {day1Items.map((item, i) => (
                            <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--eu-blue)", minWidth: "90px", fontWeight: 600 }}>{item.time}</span>
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Day 3 — fuchsia */}
                <div className="glass-card-fuchsia">
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.75rem" }}>
                        <span style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            color: "var(--fuchsia-light)",
                            background: "rgba(232,0,111,0.1)",
                            border: "1px solid rgba(232,0,111,0.25)",
                            padding: "0.35rem 0.85rem",
                            borderRadius: "999px"
                        }}>JUNE 4</span>
                        <div style={{ flex: 1, height: "1px", background: "rgba(232,0,111,0.15)" }}></div>
                    </div>

                    <h2 className="heading-lg text-fuchsia" style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{t('day3_title')}</h2>
                    <p style={{ color: "var(--fuchsia-light)", fontSize: "0.875rem", marginBottom: "1.75rem", fontFamily: "var(--font-mono)", opacity: 0.7 }}>{t('day3_sub')}</p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {day3Items.map((item, i) => (
                            <div key={i} style={{ display: "flex", gap: "1.5rem", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid rgba(232,0,111,0.06)" }}>
                                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--fuchsia-light)", minWidth: "90px", fontWeight: 600 }}>{item.time}</span>
                                <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
