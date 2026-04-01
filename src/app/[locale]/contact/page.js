import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');

    return (
        <main className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <h1 className="heading-xl animate-fade-in stagger-1" style={{ textAlign: "center", marginBottom: "4rem" }}>
                {t('title')} <span className="text-gradient">{t('title_grad')}</span>
            </h1>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem", maxWidth: "1000px", margin: "0 auto" }} className="animate-fade-in stagger-2">

                {/* Contact Info */}
                <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    <div>
                        <h3 className="heading-lg" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{t('email_title')}</h3>
                        <p style={{ color: "var(--text-secondary)" }}>{t('email')}</p>
                    </div>

                    <div>
                        <h3 className="heading-lg" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{t('venue_title')}</h3>
                        <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: t.raw('venue_desc_html') }} />
                    </div>

                    <div>
                        <h3 className="heading-lg" style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{t('join_title')}</h3>
                        <button className="btn btn-secondary" style={{ width: "100%", marginTop: "0.5rem" }}>
                            {t('join_btn')}
                        </button>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="glass-card" style={{ padding: "1rem", display: "flex", flexDirection: "column" }}>
                    <h3 className="heading-lg" style={{ fontSize: "1.5rem", marginBottom: "1rem", paddingLeft: "1rem", paddingTop: "0.5rem" }}>{t('map_title')}</h3>
                    <div style={{ flexGrow: 1, minHeight: "350px", borderRadius: "16px", overflow: "hidden" }}>
                        <iframe
                            src="https://maps.google.com/maps?q=Relevant%20Online,%20Utrecht&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>

            </div>
        </main>
    );
}
