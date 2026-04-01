import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>

      {/* Hero Section */}
      <section style={{
        padding: "7rem 0 5rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }} className="container">

        <div className="antigravity-badge animate-fade-in stagger-1">
          <span></span> {t('badge')}
        </div>

        <h1 className="heading-xl animate-fade-in stagger-2" style={{ maxWidth: "900px", fontSize: "clamp(2.5rem, 5.5vw, 5rem)" }}>
          {t('title1')} <br />
          <span className="text-gradient">{t('title2')}</span>
        </h1>

        <p className="text-lead animate-fade-in stagger-3">
          {t('description')}
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "5rem", flexWrap: "wrap" }} className="animate-fade-in stagger-4">
          <Link href="./tickets">
            <button className="btn btn-primary" style={{ padding: "1rem 2.25rem", fontSize: "1rem", gap: "0.5rem" }}>
              {t('register')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </Link>
          <Link href="./about">
            <button className="btn btn-secondary" style={{ padding: "1rem 2.25rem", fontSize: "1rem" }}>
              {t('learn_more')}
            </button>
          </Link>
        </div>

        {/* Stats row */}
        <div className="animate-fade-in stagger-4" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          width: "100%",
          maxWidth: "640px",
          background: "rgba(59, 110, 255, 0.1)",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid rgba(59, 110, 255, 0.15)"
        }}>
          {[
            { num: "48h", label: "HACKING TIME" },
            { num: "20+", label: "EXPERTS" },
            { num: "EU", label: "DATA ZONE" },
          ].map((s) => (
            <div key={s.label} style={{
              padding: "1.5rem 1rem",
              background: "rgba(5, 5, 15, 0.6)",
              textAlign: "center"
            }}>
              <div className="stat-number text-gradient" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
                {s.num}
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider"></div>
      </div>

      {/* Cards Section */}
      <section className="container animate-fade-in stagger-4" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.5rem",
        paddingBottom: "6rem"
      }}>
        <div className="glass-card" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="icon-box icon-box-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--eu-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <h3 className="heading-lg">{t('timeline_title')}</h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem" }}>
            <span style={{ color: "var(--accent-light)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>// june 2–3</span><br />
            <strong style={{ color: "var(--text-primary)" }}>{t('timeline_desc_1')}</strong>
            <br /><br />
            <span style={{ color: "var(--accent-light)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>// june 4</span><br />
            <strong style={{ color: "var(--text-primary)" }}>{t('timeline_desc_2')}</strong>
          </p>
        </div>

        <div className="glass-card-fuchsia" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="icon-box icon-box-fuchsia">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--fuchsia)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="heading-lg text-fuchsia">{t('sovereignty_title')}</h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem" }}>
            {t('sovereignty_desc')}
          </p>
          <Link href="./about" style={{
            marginTop: "auto",
            fontSize: "0.8rem",
            fontFamily: "var(--font-mono)",
            color: "var(--fuchsia-light)",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem"
          }}>
            LEARN_MORE →
          </Link>
        </div>
      </section>

    </main>
  );
}
