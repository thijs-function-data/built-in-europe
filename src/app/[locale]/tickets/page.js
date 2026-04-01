import { useTranslations } from 'next-intl';

export default function Tickets() {
    const t = useTranslations('Tickets');

    return (
        <main className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem", textAlign: "center" }}>
            <h1 className="heading-xl animate-fade-in stagger-1" style={{ marginBottom: "1rem" }}>
                {t('title')} <span className="text-gradient">{t('title_grad')}</span>
            </h1>
            <p className="text-lead animate-fade-in stagger-2" style={{ marginBottom: "4rem" }}>
                {t('subtitle')}
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "2rem",
                maxWidth: "900px",
                margin: "0 auto"
            }} className="animate-fade-in stagger-3">

                {/* Online Pass */}
                <div className="glass-card" style={{ display: "flex", flexDirection: "column" }}>
                    <h3 className="heading-lg" style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{t('virtual_title')}</h3>
                    <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--eu-blue)", marginBottom: "2rem" }}>
                        {t('virtual_price')}
                    </div>
                    <ul style={{ textAlign: "left", marginBottom: "2rem", color: "var(--text-secondary)", flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li>{t('v_item1')}</li>
                        <li>{t('v_item2')}</li>
                        <li>{t('v_item3')}</li>
                        <li>{t('v_item4')}</li>
                    </ul>
                    <button className="btn btn-secondary" style={{ width: "100%" }}>{t('v_btn')}</button>
                </div>

                {/* Live Finals Pass */}
                <div className="glass-card" style={{ display: "flex", flexDirection: "column", border: "2px solid var(--eu-yellow)", position: "relative" }}>
                    <div style={{ position: "absolute", top: "-1rem", left: "50%", transform: "translateX(-50%)", background: "var(--eu-yellow)", color: "var(--eu-blue)", padding: "0.25rem 1rem", borderRadius: "99px", fontWeight: "bold", fontSize: "0.875rem" }}>
                        {t('recommended')}
                    </div>
                    <h3 className="heading-lg" style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{t('live_title')}</h3>
                    <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--eu-blue)", marginBottom: "2rem" }}>
                        {t('live_price')}
                    </div>
                    <ul style={{ textAlign: "left", marginBottom: "2rem", color: "var(--text-secondary)", flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li>{t('l_item1')}</li>
                        <li>{t('l_item2')}</li>
                        <li>{t('l_item3')}</li>
                        <li>{t('l_item4')}</li>
                        <li>{t('l_item5')}</li>
                    </ul>
                    <button className="btn btn-primary" style={{ width: "100%" }}>{t('l_btn')}</button>
                </div>

            </div>
        </main>
    );
}
