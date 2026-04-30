import { useState } from "react";

function getSeverityStyle(level) {
  if (level === "High") return { background: "#2d0a0a", color: "#f87171" };
  if (level === "Medium") return { background: "#2d1a00", color: "#fbbf24" };
  return { background: "#052e16", color: "#4ade80" };
}

function getLikelihoodStyle(level) {
  if (level === "High") return { background: "#2d1500", color: "#fb923c" };
  if (level === "Medium") return { background: "#1a1a00", color: "#facc15" };
  return { background: "#0a1a2d", color: "#60a5fa" };
}

function getCategoryStyle(category) {
  if (category === "Protocol") return { background: "#1a0d2e", color: "#a78bfa" };
  if (category === "Market") return { background: "#2d1a00", color: "#fbbf24" };
  return { background: "#0d2217", color: "#34d399" };
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
  color: "#92400e",
  marginBottom: "3px",
};

const detailValueStyle = {
  fontSize: "12px",
  color: "#e2e8f0",
  lineHeight: "1.6",
};

function RiskCard({ title, category, severity, likelihood, description, howItHappens, realExample, howToProtect, affectedProtocols }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#1a1410",
        border: "1px solid #3d2e1e",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.15s",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "#6b4c2a"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "#3d2e1e"}
    >
      {/* Title + category badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", margin: 0, lineHeight: "1.3" }}>
          {title}
        </h2>
        <span style={{ ...badgeStyle, ...getCategoryStyle(category), flexShrink: 0 }}>
          {category}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "#a8956f", lineHeight: "1.55", margin: 0 }}>
        {description}
      </p>

      {/* Severity + Likelihood badges */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span style={{ ...badgeStyle, ...getSeverityStyle(severity) }}>
          {severity} severity
        </span>
        <span style={{ ...badgeStyle, ...getLikelihoodStyle(likelihood) }}>
          {likelihood} likelihood
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
          color: "#f59e0b",
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
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {expanded ? "Hide details" : "View details"}
      </button>

      {/* Collapsible details */}
      {expanded && (
        <div style={{
          borderTop: "1px solid #3d2e1e",
          paddingTop: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          {[
            { label: "How it happens", value: howItHappens },
            { label: "Real example", value: realExample },
            { label: "How to protect yourself", value: howToProtect },
          ].map(({ label, value }) => (
            <div key={label}>
              <span style={detailLabelStyle}>{label}</span>
              <span style={detailValueStyle}>{value}</span>
            </div>
          ))}

          {/* Affected protocols */}
          <div>
            <span style={detailLabelStyle}>Affects</span>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", marginTop: "4px" }}>
              {affectedProtocols.map((p) => (
                <span key={p} style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "5px",
                  background: "#2d1f0e",
                  color: "#d97706",
                  border: "1px solid #3d2e1e",
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

export default RiskCard;
