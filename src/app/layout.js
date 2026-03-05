import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '600', '700', '800'] });
const inter = Inter({ subsets: ["latin"], weight: ['400', '500', '600'] });

export const metadata = {
  title: "Built in Europe | Next-Gen Analytics Hackathon",
  description: "A premium analytics hackathon building solutions without leaving the EU. June 2-4.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sleek Aura Background */}
        <div className="aura-container">
          <div className="aura aura-blue"></div>
          <div className="aura aura-yellow"></div>
          <div className="aura aura-light"></div>
        </div>

        {/* Antigravity Floating Spheres */}
        <div className="molecule m1"></div>
        <div className="molecule m2"></div>
        <div className="molecule m3"></div>
        <div className="molecule m4"></div>

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
          <Link href="/" style={{ fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.03em", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "0.5rem" }} className={outfit.className}>
            <div style={{ width: "24px", height: "24px", background: "var(--accent-gradient)", borderRadius: "6px" }}></div>
            Built in <span style={{ color: "var(--eu-blue)" }}>Europe</span>
          </Link>
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center", fontWeight: "500", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
            <Link href="/" style={{ transition: "color 0.2s" }} className="hover:text-primary">Home</Link>
            <Link href="/about" style={{ transition: "color 0.2s" }} className="hover:text-primary">About</Link>
            <Link href="/agenda" style={{ transition: "color 0.2s" }} className="hover:text-primary">Agenda</Link>
            <Link href="/contact" style={{ transition: "color 0.2s" }} className="hover:text-primary">Contact</Link>
            <Link href="/tickets" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
              Get Tickets
            </Link>
          </div>
        </nav>

        <div style={{ position: "relative", zIndex: 1, minHeight: "calc(100vh - 80px)" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
