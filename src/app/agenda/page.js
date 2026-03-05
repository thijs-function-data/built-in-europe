export default function Agenda() {
    return (
        <main className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
            <h1 className="heading-xl animate-fade-in stagger-1" style={{ textAlign: "center", marginBottom: "4rem" }}>
                Hackathon <span className="text-gradient">Agenda</span>
            </h1>

            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }} className="animate-fade-in stagger-2">
                {/* Day 1 & 2 */}
                <div className="glass-card" style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: "-1rem", top: "2rem", background: "var(--eu-blue)", color: "white", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: "bold", boxShadow: "0 4px 12px rgba(0,51,153,0.3)" }}>
                        June 2 - 3
                    </div>
                    <div style={{ paddingLeft: "5rem" }}>
                        <h2 className="heading-lg" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Global Online Collaboration</h2>
                        <p style={{ color: "var(--eu-blue)", fontWeight: 600, marginBottom: "1.5rem" }}>Virtual / Discord / GitHub</p>

                        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-secondary)" }}>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>10:00 CET</strong> Kickoff & Team Formation (Stream)</li>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>11:00 CET</strong> Hacking Begins!</li>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>Continuous</strong> Mentorship sessions and workshops on EU infrastructure APIs</li>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>June 3 EOD</strong> Initial Code Freeze and preliminary pitches</li>
                        </ul>
                    </div>
                </div>

                {/* Day 3 */}
                <div className="glass-card" style={{ position: "relative" }}>
                    <div style={{ position: "absolute", left: "-1rem", top: "2rem", background: "var(--eu-yellow)", color: "var(--eu-blue)", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: "bold", boxShadow: "0 4px 12px rgba(255,204,0,0.3)" }}>
                        June 4
                    </div>
                    <div style={{ paddingLeft: "5rem" }}>
                        <h2 className="heading-lg" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Live Finals & Celebration</h2>
                        <p style={{ color: "var(--eu-blue)", fontWeight: 600, marginBottom: "1.5rem" }}>Utrecht, The Netherlands (Relevant Online Office)</p>

                        <ul style={{ listStyleType: "none", display: "flex", flexDirection: "column", gap: "1rem", color: "var(--text-secondary)" }}>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>13:00 CET</strong> Doors Open, Lunch & Networking</li>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>14:30 CET</strong> Finalist Pitches (Top 10 Teams)</li>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>16:30 CET</strong> Jury Deliberation</li>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>17:00 CET</strong> Awards Ceremony</li>
                            <li style={{ display: "flex", gap: "1rem" }}><strong style={{ color: "var(--eu-blue)", minWidth: "80px" }}>18:00 CET</strong> Drinks & Afterparty</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
