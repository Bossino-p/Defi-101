import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { strategies } from "../data/strategies";

const risks = ["All", "Low", "Medium", "High"];
const complexities = ["All", "Low", "Medium", "High"];

function getRiskStyle(risk) {
  if (risk === "High") return { background: "#2d0a0a", color: "#f87171" };
  if (risk === "Medium") return { background: "#2d1a00", color: "#fbbf24" };
  return { background: "#052e16", color: "#4ade80" };
}

function getComplexityStyle(level) {
  if (level === "High") return { background: "#2d0a1e", color: "#f472b6" };
  if (level === "Medium") return { background: "#1a0d2e", color: "#a78bfa" };
  return { background: "#0c1a2e", color: "#60a5fa" };
}

const badgeStyle = {
  fontSize: "11px",
  fontWeight: 600,
  padding: "3px 9px",
  borderRadius: "20px",
};

function StrategyCard({ title, risk, complexity, description, whyRisky, howItWorks, expectedYield, prerequisites, steps, protocols, bestMarket }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#130f08",
        border: "1px solid #3d2800",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.15s",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "#854d0e"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "#3d2800"}
    >
     {/* Title */}
<h2 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", margin: 0, lineHeight: "1.3" }}>
  {title}
</h2>

{/* Expected yield — full width below title */}
<span style={{
  fontSize: "11px",
  padding: "3px 10px",
  borderRadius: "6px",
  background: "#1a1000",
  color: "#f59e0b",
  border: "1px solid #3d2800",
  alignSelf: "flex-start",
}}>
  📈 {expectedYield}
</span>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "#d97706", lineHeight: "1.55", margin: 0 }}>
        {description}
      </p>

      {/* Risk + Complexity */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span style={{ ...badgeStyle, ...getRiskStyle(risk) }}>{risk} risk</span>
        <span style={{ ...badgeStyle, ...getComplexityStyle(complexity) }}>{complexity} complexity</span>
      </div>

      {/* Why risky callout */}
      <div style={{
        background: "#1a0a00",
        border: "1px solid #3d1500",
        borderRadius: "8px",
        padding: "10px 14px",
        borderLeft: "3px solid #f97316",
      }}>
        <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#f97316", display: "block", marginBottom: "3px" }}>
          ⚠ Why it's risky
        </span>
        <span style={{ fontSize: "12px", color: "#e2e8f0", lineHeight: "1.5" }}>
          {whyRisky}
        </span>
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
        <div style={{ borderTop: "1px solid #3d2800", paddingTop: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>

          {/* How it works */}
          <div>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#854d0e", marginBottom: "4px" }}>How it works</span>
            <span style={{ fontSize: "12px", color: "#e2e8f0", lineHeight: "1.6" }}>{howItWorks}</span>
          </div>

          {/* Prerequisites */}
          <div>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#854d0e", marginBottom: "4px" }}>What you need before trying this</span>
            <span style={{ fontSize: "12px", color: "#e2e8f0", lineHeight: "1.6" }}>{prerequisites}</span>
          </div>

          {/* Steps */}
          <div>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#854d0e", marginBottom: "8px" }}>Step by step</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {steps.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#f59e0b", minWidth: "18px", marginTop: "1px" }}>{i + 1}.</span>
                  <span style={{ fontSize: "12px", color: "#e2e8f0", lineHeight: "1.5" }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best market */}
          <div>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#854d0e", marginBottom: "4px" }}>Best market</span>
            <span style={{ fontSize: "12px", color: "#e2e8f0", lineHeight: "1.5" }}>{bestMarket}</span>
          </div>

          {/* Protocols */}
          <div>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#854d0e", marginBottom: "6px" }}>Protocols to use</span>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {protocols.map((p) => (
                <span key={p} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "5px", background: "#1a1000", color: "#f59e0b", border: "1px solid #3d2800" }}>
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

function StrategiesPage() {
  const [selectedRisk, setSelectedRisk] = useState("All");
  const [selectedComplexity, setSelectedComplexity] = useState("All");
  const navigate = useNavigate();

  const filtered = strategies.filter((s) => {
    const riskMatch = selectedRisk === "All" || s.risk === selectedRisk;
    const cxMatch = selectedComplexity === "All" || s.complexity === selectedComplexity;
    return riskMatch && cxMatch;
  });

  function FilterRow({ label, options, selected, onSelect }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#854d0e", textTransform: "uppercase", letterSpacing: "0.6px", minWidth: "84px" }}>
          {label}
        </span>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {options.map((opt) => (
            <button key={opt} onClick={() => onSelect(opt)} style={{
              fontSize: "13px", fontWeight: 500, padding: "6px 14px", borderRadius: "20px",
              border: selected === opt ? "1px solid #f59e0b" : "1px solid #3d2800",
              background: selected === opt ? "#92400e" : "#1a1000",
              color: "#ffffff", cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit",
            }}
              onMouseEnter={(e) => { if (selected !== opt) { e.currentTarget.style.background = "#2d1500"; e.currentTarget.style.borderColor = "#854d0e"; } }}
              onMouseLeave={(e) => { if (selected !== opt) { e.currentTarget.style.background = "#1a1000"; e.currentTarget.style.borderColor = "#3d2800"; } }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: "#0a0800",
      minHeight: "100vh",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#854d0e", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", marginBottom: "28px", transition: "color 0.15s" }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#f59e0b"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#854d0e"}
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.5px" }}>
            DeFi Strategies
          </h1>
          <p style={{ fontSize: "14px", color: "#d97706", marginTop: "6px", marginBottom: 0 }}>
            Common yield strategies explained — how they work, why they're risky, and what you need before trying them.
          </p>
        </div>

        {/* Warning banner */}
        <div style={{
          background: "#1a0a00",
          border: "1px solid #7c2d12",
          borderRadius: "12px",
          padding: "16px 20px",
          marginBottom: "32px",
          fontSize: "13px",
          color: "#fdba74",
          lineHeight: "1.6",
        }}>
          <strong style={{ color: "#f97316" }}>Before you try any strategy:</strong> Make sure you understand the protocols involved, have read the relevant pages in this hub (DeFi 101, Risk 101, Wallet 101), and never deploy more than you can afford to lose.
        </div>

        {/* Filters */}
        <div style={{ background: "#130f08", border: "1px solid #3d2800", borderRadius: "12px", padding: "20px", marginBottom: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <FilterRow label="Risk" options={risks} selected={selectedRisk} onSelect={setSelectedRisk} />
          <FilterRow label="Complexity" options={complexities} selected={selectedComplexity} onSelect={setSelectedComplexity} />
        </div>

        {/* Count */}
        <p style={{ fontSize: "12px", color: "#854d0e", marginBottom: "16px", marginTop: 0 }}>
          {filtered.length} strateg{filtered.length !== 1 ? "ies" : "y"} shown
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px", color: "#854d0e", fontSize: "14px", border: "1px dashed #3d2800", borderRadius: "12px" }}>
            No strategies match these filters.
          </div>
        )}

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
          {filtered.map((s) => <StrategyCard key={s.title} {...s} />)}
        </div>

      </div>
    </div>
  );
}

export default StrategiesPage;
