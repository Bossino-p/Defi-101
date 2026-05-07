import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenTypes, evaluationChecklist, tokenomicsCards } from "../data/tokens";

const riskOptions = ["All", "Low", "Medium", "High"];

function getRiskStyle(risk) {
  if (risk === "High") return { background: "#2d0a0a", color: "#f87171" };
  if (risk === "Medium") return { background: "#2d1a00", color: "#fbbf24" };
  return { background: "#052e16", color: "#4ade80" };
}

const badgeStyle = {
  fontSize: "11px",
  fontWeight: 600,
  padding: "3px 9px",
  borderRadius: "20px",
};

const detailLabelStyle = {
  display: "block",
  fontSize: "10px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.4px",
  color: "#9d174d",
  marginBottom: "4px",
};

const detailValueStyle = {
  fontSize: "12px",
  color: "#e2e8f0",
  lineHeight: "1.6",
};

function TokenCard({ type, emoji, description, examples, keyProperties, risk, usedIn, watchOut }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#180d14",
        border: "1px solid #4a1942",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.15s",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "#9d174d"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "#4a1942"}
    >
      {/* Type + risk */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>{emoji}</span>
          <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", margin: 0, lineHeight: "1.3" }}>
            {type}
          </h2>
        </div>
        <span style={{ ...badgeStyle, ...getRiskStyle(risk), flexShrink: 0 }}>
          {risk} risk
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "#f9a8d4", lineHeight: "1.55", margin: 0 }}>
        {description}
      </p>

      {/* Examples */}
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {examples.map((ex) => (
          <span key={ex} style={{
            fontSize: "11px",
            padding: "2px 8px",
            borderRadius: "5px",
            background: "#0d0810",
            color: "#94a3b8",
            border: "1px solid #4a1942",
          }}>
            {ex}
          </span>
        ))}
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          alignSelf: "flex-start",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "12px",
          fontWeight: 500,
          color: "#ffffff",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          fontFamily: "inherit",
          transition: "opacity 0.15s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {expanded ? "Hide details" : "View details"}
      </button>

      {/* Collapsible */}
      {expanded && (
        <div style={{ borderTop: "1px solid #4a1942", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* Key properties */}
          <div>
            <span style={detailLabelStyle}>Key properties</span>
            <ul style={{ margin: "4px 0 0 0", padding: "0 0 0 16px" }}>
              {keyProperties.map((p, i) => (
                <li key={i} style={{ fontSize: "12px", color: "#e2e8f0", lineHeight: "1.7" }}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Watch out */}
          <div style={{
            background: "#0d0810",
            border: "1px solid #4a1942",
            borderRadius: "8px",
            padding: "10px 14px",
            borderLeft: "3px solid #ec4899",
          }}>
            <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#ec4899", display: "block", marginBottom: "3px" }}>
              ⚠ Watch out
            </span>
            <span style={detailValueStyle}>{watchOut}</span>
          </div>

          {/* Used in */}
          <div>
            <span style={detailLabelStyle}>Used in</span>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {usedIn.map((p) => (
                <span key={p} style={{
                  fontSize: "11px", padding: "2px 8px", borderRadius: "5px",
                  background: "#0d0810", color: "#f9a8d4", border: "1px solid #4a1942",
                }}>
                  {p}
                </span>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

function TokenPage() {
  const [selectedRisk, setSelectedRisk] = useState("All");
  const navigate = useNavigate();

  const filtered = tokenTypes.filter((t) =>
    selectedRisk === "All" || t.risk === selectedRisk
  );

  return (
    <div style={{
      background: "#0a0810",
      minHeight: "100vh",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#9d174d", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", marginBottom: "28px", transition: "color 0.15s" }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#f9a8d4"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#9d174d"}
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.5px" }}>
            Token 101
          </h1>
          <p style={{ fontSize: "14px", color: "#ec4899", marginTop: "6px", marginBottom: 0 }}>
            Understand what tokens are, how they differ, and how to evaluate them before buying.
          </p>
        </div>

        {/* ── SECTION 1: Mental model ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            background: "#180d14",
            border: "1px solid #9d174d",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "16px",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#f9a8d4", marginBottom: "10px" }}>
              Coins vs tokens
            </div>
            <p style={{ fontSize: "15px", color: "#ffffff", lineHeight: "1.7", margin: 0 }}>
              A <strong style={{ color: "#f9a8d4" }}>coin</strong> is native to its own blockchain — ETH on Ethereum, SOL on Solana. A <strong style={{ color: "#f9a8d4" }}>token</strong> is built on top of an existing blockchain using a smart contract. Most DeFi assets you interact with are tokens, not coins. Both can be traded, held, and used in DeFi — but they have different risk profiles.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "10px",
          }}>
            {[
              { icon: "🏗️", title: "Tokens are smart contracts", body: "Every ERC-20 token is a smart contract on Ethereum. This means token behavior — supply, transfers, approvals — is defined in code that can be audited or exploited." },
              { icon: "🌐", title: "One blockchain, many tokens", body: "Thousands of tokens exist on Ethereum alone. Any developer can create a token in minutes. This is why token quality varies so dramatically." },
              { icon: "💎", title: "Value is not guaranteed", body: "A token existing doesn't mean it has value. Value comes from utility, demand, and scarcity. Most tokens trend toward zero over time." },
              { icon: "📋", title: "Tokenomics matters", body: "How a token is distributed, how many exist, and how new ones are created determines whether holders gain or get diluted. Always check tokenomics before buying." },
            ].map(({ icon, title, body }) => (
              <div key={title} style={{ background: "#180d14", border: "1px solid #4a1942", borderRadius: "12px", padding: "16px 20px", display: "flex", gap: "14px" }}>
                <span style={{ fontSize: "22px", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>{title}</div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6" }}>{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: Token types ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: "0 0 6px 0" }}>Token types</h2>
            <p style={{ fontSize: "13px", color: "#f9a8d4", margin: "0 0 16px 0" }}>
              Not all tokens work the same way. Understanding the type tells you how it gets its value.
            </p>

            {/* Risk filter */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#9d174d", textTransform: "uppercase", letterSpacing: "0.6px", minWidth: "84px" }}>Risk</span>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {riskOptions.map((opt) => (
                  <button key={opt} onClick={() => setSelectedRisk(opt)} style={{
                    fontSize: "13px", fontWeight: 500, padding: "6px 14px", borderRadius: "20px",
                    border: selectedRisk === opt ? "1px solid #ec4899" : "1px solid #4a1942",
                    background: selectedRisk === opt ? "#9d174d" : "#180d14",
                    color: "#ffffff", cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit",
                  }}
                    onMouseEnter={(e) => { if (selectedRisk !== opt) { e.currentTarget.style.background = "#2d1020"; e.currentTarget.style.borderColor = "#9d174d"; } }}
                    onMouseLeave={(e) => { if (selectedRisk !== opt) { e.currentTarget.style.background = "#180d14"; e.currentTarget.style.borderColor = "#4a1942"; } }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <p style={{ fontSize: "12px", color: "#9d174d", marginBottom: "14px" }}>
            {filtered.length} token type{filtered.length !== 1 ? "s" : ""} shown
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {filtered.map((t) => <TokenCard key={t.type} {...t} />)}
          </div>
        </div>

        {/* ── SECTION 3: How to evaluate a token ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "16px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: "0 0 6px 0" }}>How to evaluate a token</h2>
            <p style={{ fontSize: "13px", color: "#f9a8d4", margin: 0 }}>
              Ask these questions before buying anything. If you can't answer them — don't buy.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
            {evaluationChecklist.map((item, i) => (
              <div key={i} style={{
                background: "#180d14",
                border: "1px solid #4a1942",
                borderRadius: "12px",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                transition: "border-color 0.15s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "#9d174d"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "#4a1942"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px" }}>{item.icon}</span>
                  <span style={{ fontSize: "13px", fontWeight: 700, color: "#f9a8d4", lineHeight: "1.3" }}>{item.question}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: Tokenomics basics ── */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ marginBottom: "16px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: "0 0 6px 0" }}>Tokenomics basics</h2>
            <p style={{ fontSize: "13px", color: "#f9a8d4", margin: 0 }}>
              The six concepts that determine whether a token rewards or dilutes its holders over time.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
            {tokenomicsCards.map((card) => (
              <div key={card.term} style={{
                background: "#180d14",
                border: "1px solid #4a1942",
                borderRadius: "12px",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                transition: "border-color 0.15s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = "#9d174d"}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = "#4a1942"}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px" }}>{card.icon}</span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{card.term}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>{card.definition}</p>
                <div style={{
                  background: "#0d0810",
                  borderRadius: "6px",
                  padding: "8px 12px",
                  fontSize: "11px",
                  color: "#f9a8d4",
                  lineHeight: "1.5",
                  borderLeft: "2px solid #ec4899",
                }}>
                  {card.example}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default TokenPage;
