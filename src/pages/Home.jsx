import { useNavigate } from "react-router-dom";

const pages = [
  {
    path: "/defi101",
    title: "DeFi 101",
    description: "Explore the main types of DeFi protocols — from DEXs and lending to restaking and prediction markets.",
    tag: "14 protocol types",
    accentBg: "#0c1a2e",
    border: "#1e3a5f",
    hoverBorder: "#2563eb",
    tagColor: "#60a5fa",
    accent: "#2563eb",
  },
  {
    path: "/risk101",
    title: "DeFi Risk 101",
    description: "Understand the risks before putting your funds to work — smart contract exploits, liquidations, phishing, and more.",
    tag: "11 risk types",
    accentBg: "#2d1a00",
    border: "#4a3520",
    hoverBorder: "#f59e0b",
    tagColor: "#fbbf24",
    accent: "#f59e0b",
  },
  {
    path: "/wallet101",
    title: "Wallet 101",
    description: "Understand hot and cold wallets, how to use them safely, and how to avoid the most common scams and phishing attacks.",
    tag: "11 wallets covered",
    accentBg: "#0a1f1f",
    border: "#134e4a",
    hoverBorder: "#2dd4bf",
    tagColor: "#2dd4bf",
    accent: "#2dd4bf",
  },
  {
    path: "/chain101",
    title: "Chain 101",
    description: "Learn the blockchains behind DeFi — L1s, L2s, EVM vs non-EVM, and how to choose the right chain for your needs.",
    tag: "10 chains covered",
    accentBg: "#1a1230",
    border: "#2d1f45",
    hoverBorder: "#7c3aed",
    tagColor: "#a78bfa",
    accent: "#a78bfa",
  },
  {
    path: "/token101",
    title: "Token 101",
    description: "Understand token types, how to evaluate them before buying, and the tokenomics that determine long-term value.",
    tag: "9 token types",
    accentBg: "#1a0d14",
    border: "#4a1942",
    hoverBorder: "#ec4899",
    tagColor: "#f9a8d4",
    accent: "#ec4899",
  },
  {
    path: "/scamguard",
    title: "Scam Guard",
    description: "Recognize and avoid the most common DeFi scams — phishing, rug pulls, approval exploits, fake airdrops, and more.",
    tag: "10 scam types",
    accentBg: "#2d0a0a",
    border: "#3d1515",
    hoverBorder: "#ef4444",
    tagColor: "#fca5a5",
    accent: "#ef4444",
  },
  {
    path: "/glossary",
    title: "DeFi Glossary",
    description: "Searchable reference for DeFi terms — APY, slippage, liquidation, oracles, and everything in between.",
    tag: "45 terms",
    accentBg: "#0a1f0a",
    border: "#1a3320",
    hoverBorder: "#16a34a",
    tagColor: "#4ade80",
    accent: "#16a34a",
  },
  {
    path: "/strategies",
    title: "DeFi Strategies",
    description: "Common yield strategies explained step by step — from stablecoin yield to delta neutral and looping.",
    tag: "8 strategies",
    accentBg: "#1a1000",
    border: "#3d2800",
    hoverBorder: "#f59e0b",
    tagColor: "#fbbf24",
    accent: "#f59e0b",
  },
];

const disclaimerGroups = [
  {
    label: "Market reality",
    items: [
      "Cryptocurrency is highly speculative and most participants lose money.",
      "High APY almost always comes with high risk — there is no free yield.",
      "Past returns in DeFi are not indicative of future performance.",
    ],
  },
  {
    label: "Project reality",
    items: [
      "Most tokens launched will eventually go to zero.",
      "Most projects that launched with a token didn't need one — they needed a product.",
      "Blockchain is a solution to a specific problem: trustless coordination without intermediaries. Most projects don't have that problem.",
      "A whitepaper is not a product — many projects never ship anything.",
    ],
  },
  {
    label: "Personal risk",
    items: [
      "Never invest more than you can afford to lose completely.",
      "DeFi has no customer support, no chargebacks, and no insurance.",
      "Mistakes are permanent — wrong address, lost seed phrase, bad approval.",
      "This hub is for education only — nothing here is financial advice.",
    ],
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "#0d0d0f",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>

      {/* Spacer to push content to center */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#475569", marginBottom: "12px" }}>
            Learn DeFi
          </div>
          <h1 style={{ fontSize: "42px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-1px", lineHeight: 1.15 }}>
            DeFi Education Hub
          </h1>
          <p style={{ fontSize: "16px", color: "#64748b", marginTop: "14px", maxWidth: "480px", lineHeight: "1.6", margin: "14px auto 0" }}>
            A no-fluff guide to decentralized finance — protocols, risks, wallets, chains, tokens, strategies, and everything in between.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "14px",
          width: "100%",
          maxWidth: "1100px",
        }}>
          {pages.map((page) => (
            <button
              key={page.path}
              onClick={() => navigate(page.path)}
              style={{
                background: "#161618",
                border: `1px solid ${page.border}`,
                borderRadius: "16px",
                padding: "24px",
                textAlign: "left",
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.15s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = page.hoverBorder;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = page.border;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 9px", borderRadius: "20px", background: page.accentBg, color: page.tagColor, display: "inline-block", marginBottom: "14px" }}>
                {page.tag}
              </span>
              <div style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", marginBottom: "8px", letterSpacing: "-0.3px" }}>
                {page.title}
              </div>
              <p style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.6", margin: "0 0 18px 0" }}>
                {page.description}
              </p>
              <div style={{ fontSize: "12px", fontWeight: 600, color: page.accent }}>
                Explore →
              </div>
            </button>
          ))}
        </div>

        <p style={{ fontSize: "12px", color: "#334155", marginTop: "48px" }}>
          More guides coming soon
        </p>

      </div>

      {/* ── DISCLAIMER SECTION ── */}
      <div style={{
        width: "100%",
        maxWidth: "1100px",
        marginTop: "80px",
        borderTop: "1px solid #1e1e22",
        paddingTop: "40px",
      }}>
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: "#334155", margin: 0 }}>
            Before you dive in
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px",
        }}>
          {disclaimerGroups.map(({ label, items }) => (
            <div key={label}>
              <p style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                color: "#475569",
                margin: "0 0 12px 0",
              }}>
                {label}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#334155", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>—</span>
                    <p style={{ fontSize: "12px", color: "#475569", lineHeight: "1.6", margin: 0 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final line */}
        <p style={{
          fontSize: "11px",
          color: "#2d3748",
          marginTop: "32px",
          textAlign: "center",
          lineHeight: "1.6",
        }}>
          This hub is built for education. Do your own research. The space moves fast — always verify information is current before acting on it.
        </p>
      </div>

    </div>
  );
}

export default Home;
