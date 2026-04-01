import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import BackgroundAnimations from './BackgroundAnimations';

const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600'] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return {
    title: 'Analytics Hackaton: Built in Europe',
    description: locale === 'nl'
      ? "Een premium analytics hackathon. Bouw oplossingen zonder de EU te verlaten. 2-4 Juni."
      : "A premium analytics hackathon building solutions without leaving the EU. June 2-4."
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>

          <BackgroundAnimations />

          <nav style={{
            padding: "1.25rem 3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(5, 5, 15, 0.7)",
            borderBottom: "1px solid rgba(59, 110, 255, 0.12)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            transition: "all 0.3s ease"
          }}>
            <Link href="/" style={{ fontWeight: 800, fontSize: "1.15rem", letterSpacing: "-0.03em", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.625rem" }} className={outfit.className}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                {/* 2x2 grid of blocks inside the square */}
                <rect x="0"  y="0"  width="12" height="12" rx="3" fill="url(#lb1)"/>
                <rect x="16" y="0"  width="12" height="12" rx="3" fill="url(#lb2)"/>
                <rect x="0"  y="16" width="12" height="12" rx="3" fill="url(#lb2)"/>
                <rect x="16" y="16" width="12" height="12" rx="3" fill="url(#lb1)"/>
                <defs>
                  <linearGradient id="lb1" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#6b8fff"/>
                    <stop offset="100%" stopColor="#3b6eff"/>
                  </linearGradient>
                  <linearGradient id="lb2" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="#a78bfa"/>
                    <stop offset="100%" stopColor="#7c5ef0"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ display: "flex", gap: "0.3em" }}>{"Analytics"}<span style={{ color: "var(--eu-blue)" }}>Hackaton</span></span>
            </Link>

            <div style={{ display: "flex", gap: "2rem", alignItems: "center", fontWeight: "500", fontSize: "0.875rem", color: "var(--text-secondary)", letterSpacing: "0.01em" }}>
              <Link href="/about" style={{ transition: "color 0.2s" }}>{messages?.Navigation?.about || "About"}</Link>
              <Link href="/agenda" style={{ transition: "color 0.2s" }}>{messages?.Navigation?.agenda || "Agenda"}</Link>
              <Link href="/contact" style={{ transition: "color 0.2s" }}>{messages?.Navigation?.contact || "Contact"}</Link>
              <Link href="/tickets" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem", borderRadius: "8px" }}>
                {messages?.Navigation?.tickets || "Get Tickets"}
              </Link>
            </div>
          </nav>

          <div style={{ position: "relative", zIndex: 1, minHeight: "calc(100vh - 80px)" }}>
            {children}
          </div>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
