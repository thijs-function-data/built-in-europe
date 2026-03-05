export default function About() {
    return (
        <main className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <div className="glass-card animate-fade-in stagger-1" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h1 className="heading-xl" style={{ textAlign: "center", marginBottom: "2rem" }}>
                    About the <span className="text-gradient">Hackathon</span>
                </h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    <p>
                        <strong style={{ color: "var(--eu-blue)" }}>Built in Europe</strong> was born out of a critical need: the intersection of cutting-edge analytics and strict European data sovereignty.
                    </p>
                    <p>
                        In today's interconnected world, building powerful analytics solutions often comes at the cost of data leaving European borders. This introduces complex legal, jurisdictional, and ethical challenges for companies and institutions.
                    </p>
                    <p>
                        Our mission is simple yet ambitious: to bring together the brightest minds in data, engineering, and design to build innovative analytics platforms that are technically and jurisdictionally constrained within the European Union.
                    </p>

                    <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(37, 99, 235, 0.05)", borderRadius: "16px", borderLeft: "4px solid var(--eu-yellow)" }}>
                        <h3 className="heading-lg" style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Our Core Principles</h3>
                        <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            <li><strong>Sovereignty:</strong> Data stays in the EU. Period.</li>
                            <li><strong>Innovation:</strong> Do not compromise on power for privacy.</li>
                            <li><strong>Collaboration:</strong> Build open, transparent, and trustworthy systems together.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
