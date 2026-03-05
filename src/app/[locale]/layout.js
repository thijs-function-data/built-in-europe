import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import LanguageSwitcher from './LanguageSwitcher';
import BackgroundAnimations from './BackgroundAnimations';

const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600'] });

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale });
  return {
    title: `Built in Europe | ${locale === 'nl' ? 'Analytics Hackathon' : 'Next-Gen Analytics Hackathon'}`,
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
            padding: "1.5rem 3rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(255, 255, 255, 0.45)",
            borderBottom: "1px solid rgba(255,255,255,0.7)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
            transition: "all 0.3s ease"
          }}>
            <Link href={`/${locale}`} style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.03em", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }} className={outfit.className}>
              <div style={{ width: "24px", height: "24px", background: "var(--accent-gradient)", borderRadius: "6px" }}></div>
              Built in <span style={{ color: "var(--eu-blue)" }}>Europe</span>
            </Link>

            <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", fontWeight: "500", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              <Link href={`/${locale}`} style={{ transition: "color 0.2s" }} className="hover:text-primary">{messages?.Navigation?.home || "Home"}</Link>
              <Link href={`/${locale}/about`} style={{ transition: "color 0.2s" }} className="hover:text-primary">{messages?.Navigation?.about || "About"}</Link>
              <Link href={`/${locale}/agenda`} style={{ transition: "color 0.2s" }} className="hover:text-primary">{messages?.Navigation?.agenda || "Agenda"}</Link>
              <Link href={`/${locale}/contact`} style={{ transition: "color 0.2s" }} className="hover:text-primary">{messages?.Navigation?.contact || "Contact"}</Link>
              <Link href={`/${locale}/tickets`} className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
                {messages?.Navigation?.tickets || "Get Tickets"}
              </Link>
              <LanguageSwitcher currentLocale={locale} />
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
