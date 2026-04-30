import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/protocols";
import ProtocolCard from "../components/ProtocolCard";

function FilterRow({ label, options, selected, onSelect, disabled }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      <span style={{
        fontSize: "11px",
        fontWeight: 700,
        color: "#94a3b8",
        textTransform: "uppercase",
        letterSpacing: "0.6px",
        minWidth: "84px",
      }}>
        {label}
      </span>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {options.map((opt) => (
          <button
            key={opt}
            disabled={disabled}
            onClick={() => onSelect(opt)}
            style={{
              fontSize: "13px",
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: "20px",
              border: selected === opt ? "1px solid #3b82f6" : "1px solid #4a5568",
              background: selected === opt ? "#2563eb" : "#1e2533",
              color: "#ffffff",
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.35 : 1,
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              if (!disabled && selected !== opt) {
                e.currentTarget.style.background = "#2d3748";
                e.currentTarget.style.borderColor = "#718096";
              }
            }}
            onMouseLeave={(e) => {
              if (!disabled && selected !== opt) {
                e.currentTarget.style.background = "#1e2533";
                e.currentTarget.style.borderColor = "#4a5568";
              }
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function BeginnerToggle({ enabled, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 14px",
        borderRadius: "8px",
        border: enabled ? "1px solid #22c55e" : "1px solid #2d3748",
        background: enabled ? "#052e16" : "#0f1117",
        cursor: "pointer",
        fontFamily: "inherit",
        transition: "all 0.2s",
        width: "fit-content",
      }}
    >
      <div style={{
        width: "36px",
        height: "20px",
        borderRadius: "10px",
        background: enabled ? "#16a34a" : "#4a5568",
        position: "relative",
        flexShrink: 0,
        transition: "background 0.2s",
      }}>
        <div style={{
          position: "absolute",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: "#ffffff",
          top: "2px",
          left: enabled ? "18px" : "2px",
          transition: "left 0.2s",
          boxShadow: "0 1px 3px rgba(0,0,0,0.4)",
        }} />
      </div>
      <div style={{ textAlign: "left" }}>
        <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
          Beginner mode
        </div>
        <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "1px" }}>
          Show only low risk &amp; low complexity
        </div>
      </div>
    </button>
  );
}

function Defi101() {
  const [selectedRisk, setSelectedRisk] = useState("All");
  const [selectedComplexity, setSelectedComplexity] = useState("All");
  const [selectedMarket, setSelectedMarket] = useState("All");
  const [beginnerMode, setBeginnerMode] = useState(false);
  const navigate = useNavigate();

  function handleBeginnerToggle() {
    if (!beginnerMode) {
      setSelectedRisk("All");
      setSelectedComplexity("All");
      setSelectedMarket("All");
    }
    setBeginnerMode(!beginnerMode);
  }

  const filtered = categories.filter((cat) => {
    if (beginnerMode) {
      return cat.risk.includes("Low") && cat.complexity.includes("Low");
    }
    const riskMatch = selectedRisk === "All" || cat.risk.includes(selectedRisk);
    const complexityMatch = selectedComplexity === "All" || cat.complexity.includes(selectedComplexity);
    const marketMatch =
      selectedMarket === "All" ||
      cat.marketCondition === "All" ||
      cat.marketCondition.includes(selectedMarket);
    return riskMatch && complexityMatch && marketMatch;
  });

  return (
    <div style={{
      background: "#0f1117",
      minHeight: "100vh",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "#475569",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "inherit",
            marginBottom: "28px",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#94a3b8"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#475569"}
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.5px" }}>
            DeFi 101
          </h1>
          <p style={{ fontSize: "14px", color: "#94a3b8", marginTop: "6px", marginBottom: 0 }}>
            Explore decentralized finance protocols by risk, complexity, and market condition.
          </p>
        </div>

        {/* Controls */}
        <div style={{
          background: "#161b27",
          border: "1px solid #2d3748",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <BeginnerToggle enabled={beginnerMode} onToggle={handleBeginnerToggle} />
          <div style={{ height: "1px", background: "#2d3748" }} />
          <FilterRow label="Risk" options={["All", "Low", "Medium", "High"]} selected={selectedRisk} onSelect={setSelectedRisk} disabled={beginnerMode} />
          <FilterRow label="Complexity" options={["All", "Low", "Medium", "High"]} selected={selectedComplexity} onSelect={setSelectedComplexity} disabled={beginnerMode} />
          <FilterRow label="Market" options={["All", "Bullish", "Bearish", "Sideways"]} selected={selectedMarket} onSelect={setSelectedMarket} disabled={beginnerMode} />
        </div>

        {/* Count */}
        <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "16px", marginTop: 0 }}>
          {filtered.length} protocol{filtered.length !== 1 ? "s" : ""} shown
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "48px 24px",
            color: "#475569",
            fontSize: "14px",
            border: "1px dashed #2d3748",
            borderRadius: "12px",
          }}>
            No protocols match these filters. Try adjusting your selection.
          </div>
        )}

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "12px",
        }}>
          {filtered.map((cat) => (
            <ProtocolCard key={cat.title} {...cat} beginnerMode={beginnerMode} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Defi101;
