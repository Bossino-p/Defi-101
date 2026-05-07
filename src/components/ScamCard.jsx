import { useState } from "react";

function getCategoryStyle(category) {
  if (category === "Social Engineering") return { background: "#2d0a0a", color: "#fca5a5", border: "1px solid #7f1d1d" };
  if (category === "Token Scams") return { background: "#2d1a00", color: "#fbbf24", border: "1px solid #854d0e" };
  if (category === "Transaction Scams") return { background: "#1a0d2e", color: "#a78bfa", border: "1px solid #4c1d95" };
  if (category === "Protocol Scams") return { background: "#0c1a2e", color: "#60a5fa", border: "1px solid #1e3a5f" };
  return { background: "#1e293b", color: "#94a3b8", border: "1px solid #2d3748" };
}

function getSeverityStyle(severity) {
  if (severity === "High") return { background: "#2d0a0a", color: "#f87171" };
  if (severity === "Medium") return { background: "#2d1a00", color: "#fbbf24" };
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
  color: "#7f1d1d",
  marginBottom: "4px",
};

const detailValueStyle = {
  fontSize: "12px",
  color: "#e2e8f0",
  lineHeight: "1.6",
};

function ScamCard({ title, category, severity, description, howItWorks, realExample, redFlags, foundOn }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#140a0a",
        border: "1px solid #3d1515",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.15s",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "#7f1d1d"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "#3d1515"}
    >
      {/* Title + category */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", margin: 0, lineHeight: "1.3" }}>
          {title}
        </h2>
        <span style={{ ...badgeStyle, ...getCategoryStyle(category), flexShrink: 0 }}>
          {category}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "#fca5a5", lineHeight: "1.55", margin: 0 }}>
        {description}
      </p>

      {/* Severity */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span style={{ ...badgeStyle, ...getSeverityStyle(severity) }}>
          {severity} severity
        </span>
      </div>

      {/* Found on tags */}
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {foundOn.map((place) => (
          <span key={place} style={{
            fontSize: "11px",
            padding: "2px 8px",
            borderRadius: "5px",
            background: "#1a0a0a",
            color: "#94a3b8",
            border: "1px solid #3d1515",
          }}>
            {place}
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

      {/* Collapsible details */}
      {expanded && (
        <div style={{
          borderTop: "1px solid #3d1515",
          paddingTop: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          <div>
            <span style={detailLabelStyle}>How it works</span>
            <span style={detailValueStyle}>{howItWorks}</span>
          </div>

          <div>
            <span style={detailLabelStyle}>Real example</span>
            <span style={detailValueStyle}>{realExample}</span>
          </div>

          <div>
            <span style={detailLabelStyle}>Red flags</span>
            <ul style={{ margin: "4px 0 0 0", padding: "0 0 0 16px" }}>
              {redFlags.map((flag, i) => (
                <li key={i} style={{ fontSize: "12px", color: "#fca5a5", lineHeight: "1.7" }}>
                  {flag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScamCard;
