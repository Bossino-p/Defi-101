import { useState } from "react";

function getSpeedStyle(speed) {
  if (speed === "Fast") return { background: "#052e16", color: "#4ade80" };
  if (speed === "Medium") return { background: "#2d1a00", color: "#fbbf24" };
  return { background: "#2d0a0a", color: "#f87171" };
}

function getFeesStyle(fees) {
  if (fees === "Low") return { background: "#052e16", color: "#4ade80" };
  if (fees === "Medium") return { background: "#2d1a00", color: "#fbbf24" };
  return { background: "#2d0a0a", color: "#f87171" };
}

function getSecurityStyle(security) {
  if (security === "High") return { background: "#0c1a2e", color: "#60a5fa" };
  if (security === "Medium") return { background: "#1a0d2e", color: "#a78bfa" };
  return { background: "#2d1a2d", color: "#e879f9" };
}

function getLayerStyle(layer) {
  if (layer === "L1") return { background: "#1a0d2e", color: "#a78bfa", border: "1px solid #4c1d95" };
  if (layer === "L2") return { background: "#0c1a2e", color: "#818cf8", border: "1px solid #1e3a5f" };
  return { background: "#1e293b", color: "#94a3b8", border: "1px solid #2d3748" };
}

function getEcosystemStyle(ecosystem) {
  if (ecosystem === "EVM") return { background: "#1a1a2e", color: "#c084fc" };
  if (ecosystem === "SVM") return { background: "#1a2e1a", color: "#34d399" };
  if (ecosystem === "MoveVM") return { background: "#2e1a1a", color: "#fb923c" };
  return { background: "#1e293b", color: "#94a3b8" };
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
  color: "#6d28d9",
  marginBottom: "3px",
};

const detailValueStyle = {
  fontSize: "12px",
  color: "#e2e8f0",
  lineHeight: "1.6",
};

function ChainCard({ name, layer, ecosystem, speed, fees, security, bestFor, weaknesses, nativeToken, wallet, topProtocols, url }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#120f1a",
        border: "1px solid #2d1f45",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.15s",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "#5b21b6"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "#2d1f45"}
    >
      {/* Name + layer/ecosystem badges */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", margin: 0, lineHeight: "1.3" }}>
          {name}
        </h2>
        <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
          <span style={{ ...badgeStyle, ...getLayerStyle(layer) }}>{layer}</span>
          <span style={{ ...badgeStyle, ...getEcosystemStyle(ecosystem) }}>{ecosystem}</span>
        </div>
      </div>

      {/* Best for */}
      <p style={{ fontSize: "13px", color: "#a78bfa", lineHeight: "1.55", margin: 0 }}>
        {bestFor}
      </p>

      {/* Speed / Fees / Security badges */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span style={{ ...badgeStyle, ...getSpeedStyle(speed) }}>⚡ {speed} speed</span>
        <span style={{ ...badgeStyle, ...getFeesStyle(fees) }}>⛽ {fees} fees</span>
        <span style={{ ...badgeStyle, ...getSecurityStyle(security) }}>🛡 {security} security</span>
      </div>

      {/* Native token + wallet */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span style={{
          fontSize: "11px",
          padding: "2px 9px",
          borderRadius: "5px",
          background: "#1a1230",
          color: "#c084fc",
          border: "1px solid #2d1f45",
        }}>
          {nativeToken}
        </span>
        <span style={{
          fontSize: "11px",
          padding: "2px 9px",
          borderRadius: "5px",
          background: "#1a1230",
          color: "#94a3b8",
          border: "1px solid #2d1f45",
        }}>
          🦊 {wallet}
        </span>
      </div>

      {/* Official link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#a78bfa",
          textDecoration: "none",
          width: "fit-content",
          transition: "opacity 0.15s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
        onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
      >
        Official site ↗
      </a>

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

      {/* Collapsible details */}
      {expanded && (
        <div style={{
          borderTop: "1px solid #2d1f45",
          paddingTop: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
          <div>
            <span style={detailLabelStyle}>Watch out</span>
            <span style={detailValueStyle}>{weaknesses}</span>
          </div>

          <div>
            <span style={detailLabelStyle}>Top protocols</span>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop: "4px" }}>
              {topProtocols.map((p) => (
                <span key={p} style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "5px",
                  background: "#1a1230",
                  color: "#a78bfa",
                  border: "1px solid #2d1f45",
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

export default ChainCard;
