export default function Tickets() {
    return (
        <main className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem", textAlign: "center" }}>
            <h1 className="heading-xl animate-fade-in stagger-1" style={{ marginBottom: "1rem" }}>
                Secure Your <span className="text-gradient">Spot</span>
            </h1>
            <p className="text-lead animate-fade-in stagger-2" style={{ marginBottom: "4rem" }}>
                Choose how you want to participate in the most vital analytics hackathon in Europe.
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
                    <h3 className="heading-lg" style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Virtual Hacker</h3>
                    <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--eu-blue)", marginBottom: "2rem" }}>
                        €0
                    </div>
                    <ul style={{ textAlign: "left", marginBottom: "2rem", color: "var(--text-secondary)", flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li>✓ Full access to Discord</li>
                        <li>✓ Participate in team formation</li>
                        <li>✓ Entry to all virtual API workshops</li>
                        <li>✓ Submit to online judging</li>
                    </ul>
                    <button className="btn btn-secondary" style={{ width: "100%" }}>Register Free</button>
                </div>

                {/* Live Finals Pass */}
                <div className="glass-card" style={{ display: "flex", flexDirection: "column", border: "2px solid var(--eu-yellow)", position: "relative" }}>
                    <div style={{ position: "absolute", top: "-1rem", left: "50%", transform: "translateX(-50%)", background: "var(--eu-yellow)", color: "var(--eu-blue)", padding: "0.25rem 1rem", borderRadius: "99px", fontWeight: "bold", fontSize: "0.875rem" }}>
                        RECOMMENDED
                    </div>
                    <h3 className="heading-lg" style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Utrecht Finals</h3>
                    <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--eu-blue)", marginBottom: "2rem" }}>
                        €35
                    </div>
                    <ul style={{ textAlign: "left", marginBottom: "2rem", color: "var(--text-secondary)", flexGrow: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <li>✓ Everything in Virtual Hacker</li>
                        <li>✓ Guaranteed access to June 4 Live Finals</li>
                        <li>✓ Lunch, drinks, and snacks included</li>
                        <li>✓ Exclusive swag bag</li>
                        <li>✓ In-person networking with judges</li>
                    </ul>
                    <button className="btn btn-primary" style={{ width: "100%" }}>Buy Ticket</button>
                </div>

            </div>
        </main>
    );
}
