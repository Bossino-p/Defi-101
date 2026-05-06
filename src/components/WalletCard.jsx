import { useState } from "react";

function getTypeStyle(type) {
  if (type === "Hot") return { background: "#1a2d1a", color: "#4ade80", border: "1px solid #166534" };
  if (type === "Cold") return { background: "#0c1a2e", color: "#60a5fa", border: "1px solid #1e3a5f" };
  return { background: "#1e293b", color: "#94a3b8", border: "1px solid #2d3748" };
}

function WalletCard({ name, type, bestFor, chains, watchOut, beginner, url }) {
  const [expanded, setExpanded] = useState(false);
  const typeStyle = getTypeStyle(type);

  return (
    <div
      style={{
        background: "#0f1a1a",
        border: "1px solid #1a3333",
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        transition: "border-color 0.15s",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "#2a5555"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1a3333"}
    >
      {/* Name + type badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
        <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", margin: 0, lineHeight: "1.3" }}>
          {name}
        </h2>
        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          {beginner && (
            <span style={{
              fontSize: "10px",
              fontWeight: 600,
              padding: "2px 8px",
              borderRadius: "20px",
              background: "#2d2000",
              color: "#fbbf24",
              border: "1px solid #854d0e",
            }}>
              Beginner friendly
            </span>
          )}
          <span style={{
            fontSize: "10px",
            fontWeight: 600,
            padding: "2px 8px",
            borderRadius: "20px",
            ...typeStyle,
          }}>
            {type} wallet
          </span>
        </div>
      </div>

      {/* Best for */}
      <p style={{ fontSize: "13px", color: "#5eead4", lineHeight: "1.55", margin: 0 }}>
        {bestFor}
      </p>

      {/* Chains */}
      <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
        {chains.map((chain) => (
          <span key={chain} style={{
            fontSize: "11px",
            padding: "2px 8px",
            borderRadius: "5px",
            background: "#0d2020",
            color: "#94a3b8",
            border: "1px solid #1a3333",
          }}>
            {chain}
          </span>
        ))}
      </div>

      {/* Official link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "12px",
          fontWeight: 600,
          color: "#2dd4bf",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          transition: "opacity 0.15s",
          width: "fit-content",
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
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {expanded ? "Hide details" : "View details"}
      </button>

      {/* Collapsible — watch out */}
      {expanded && (
        <div style={{
          borderTop: "1px solid #1a3333",
          paddingTop: "12px",
        }}>
          <span style={{
            display: "block",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.4px",
            color: "#f59e0b",
            marginBottom: "4px",
          }}>
            ⚠ Watch out
          </span>
          <span style={{ fontSize: "12px", color: "#e2e8f0", lineHeight: "1.6" }}>
            {watchOut}
          </span>
        </div>
      )}
    </div>
  );
}

export default WalletCard;
