import { useState } from "react";

function getRiskStyle(risk) {
  if (risk.includes("High")) return { background: "#2d0a0a", color: "#f87171" };
  if (risk.includes("Medium")) return { background: "#2d1a00", color: "#fbbf24" };
  if (risk.includes("Low")) return { background: "#052e16", color: "#4ade80" };
  return { background: "#1e293b", color: "#94a3b8" };
}

function getComplexityStyle(level) {
  if (level.includes("High")) return { background: "#2d0a1e", color: "#f472b6" };
  if (level.includes("Medium")) return { background: "#1a0d2e", color: "#a78bfa" };
  if (level.includes("Low")) return { background: "#0c1a2e", color: "#60a5fa" };
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
  color: "#475569",
  marginBottom: "3px",
};

const detailValueStyle = {
  fontSize: "12px",
  color: "#e2e8f0",
  lineHeight: "1.5",
};

function ProtocolCard({
  title,
  description,
  examples,
  risk,
  complexity,
  useCase,
  riskReason,
  complexityReason,
  whenToUse,
  whenNotToUse,
  marketCondition,
  beginnerMode,
  nextStep,
  frequentlyUsed,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "#161b27",
        border: "1px solid #2d3748",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.15s",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#4a5568";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#2d3748";
      }}
    >
      {/* Title + badges row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", flexWrap: "wrap" }}>
        <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", margin: 0, lineHeight: "1.3" }}>
          {title}
        </h2>

        {frequentlyUsed && (
          <span style={{
            fontSize: "10px",
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: "20px",
            background: "#2d2000",
            color: "#fbbf24",
            border: "1px solid #854d0e",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}>
            Frequently used
          </span>
        )}

        <span style={{
          fontSize: "10px",
          padding: "3px 8px",
          borderRadius: "20px",
          background: "#1e2533",
          color: "#94a3b8",
          border: "1px solid #2d3748",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          {marketCondition}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.55", margin: 0 }}>
        {description}
      </p>

      {/* Risk + Complexity badges */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        <span style={{ ...badgeStyle, ...getRiskStyle(risk) }}>{risk} risk</span>
        <span style={{ ...badgeStyle, ...getComplexityStyle(complexity) }}>{complexity} complexity</span>
      </div>

      {/* Example protocol links */}
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {examples.map((ex) => (
          <a
            key={ex.name}
            href={ex.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "11px",
              padding: "3px 9px",
              borderRadius: "5px",
              background: "#1e2533",
              color: "#ffffff",
              border: "1px solid #2d3748",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#4a5568";
              e.currentTarget.style.background = "#2d3748";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2d3748";
              e.currentTarget.style.background = "#1e2533";
            }}
          >
            {ex.name} ↗
          </a>
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
          borderTop: "1px solid #2d3748",
          paddingTop: "14px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
          {[
            { label: "Use case", value: useCase },
            { label: "Why this risk", value: riskReason },
            { label: "Why this complexity", value: complexityReason },
            { label: "When to use", value: whenToUse },
            { label: "When not to use", value: whenNotToUse },
          ].map(({ label, value }) => (
            <div key={label}>
              <span style={detailLabelStyle}>{label}</span>
              <span style={detailValueStyle}>{value}</span>
            </div>
          ))}

          {/* Next step — beginner mode only */}
          {beginnerMode && nextStep && (
            <div>
              <span style={detailLabelStyle}>Next step</span>
              <span style={{ ...detailValueStyle, color: "#4ade80", fontWeight: 500 }}>
                → {nextStep}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProtocolCard;
