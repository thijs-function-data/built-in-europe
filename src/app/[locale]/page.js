import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main style={{ padding: "8rem 0 6rem", textAlign: "center", position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <section className="container" style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

        <div className="antigravity-badge animate-fade-in stagger-1">
          <span></span> {t('badge')}
        </div>

        <h1 className="heading-xl animate-fade-in stagger-2" style={{ maxWidth: "1000px" }}>
          {t('title1')} <br />
          <span className="text-gradient">{t('title2')}</span>
        </h1>

        <p className="text-lead animate-fade-in stagger-3">
          {t('description')}
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "6rem", flexWrap: "wrap" }} className="animate-fade-in stagger-4">
          <Link href="./tickets">
            <button className="btn btn-primary" style={{ padding: "1.125rem 2.5rem", fontSize: "1.125rem" }}>
              {t('register')} <svg style={{ marginLeft: "0.5rem" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </Link>
          <Link href="./about">
            <button className="btn btn-secondary" style={{ padding: "1.125rem 2.5rem", fontSize: "1.125rem" }}>
              {t('learn_more')}
            </button>
          </Link>
        </div>
      </section>

      <section className="container animate-fade-in stagger-4" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem", marginTop: "auto", width: "100%" }}>
        <div className="glass-card" style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(10, 54, 157, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.5rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--eu-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <h3 className="heading-lg" style={{ fontSize: "1.75rem", margin: 0 }}>{t('timeline_title')}</h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            <strong style={{ color: "var(--text-primary)" }}>{t('timeline_desc_1')}</strong><br />
            <strong style={{ color: "var(--text-primary)" }}>{t('timeline_desc_2')}</strong>
          </p>
        </div>

        <div className="glass-card" style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(255, 209, 102, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.5rem" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--eu-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          <h3 className="heading-lg" style={{ fontSize: "1.75rem", margin: 0 }}>{t('sovereignty_title')}</h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            {t('sovereignty_desc')}
          </p>
        </div>
      </section>
    </main>
  );
}
