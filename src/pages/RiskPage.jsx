import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { risks } from "../data/risks";
import RiskCard from "../components/RiskCard";

const categories = ["All", "Protocol", "Market", "Human"];
const severities = ["All", "High", "Medium", "Low"];

function FilterRow({ label, options, selected, onSelect, accentColor }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      <span style={{
        fontSize: "11px",
        fontWeight: 700,
        color: "#92400e",
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
            onClick={() => onSelect(opt)}
            style={{
              fontSize: "13px",
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: "20px",
              border: selected === opt ? "1px solid #f59e0b" : "1px solid #4a3520",
              background: selected === opt ? "#b45309" : "#1e1610",
              color: "#ffffff",
              cursor: "pointer",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              if (selected !== opt) {
                e.currentTarget.style.background = "#2d1f0e";
                e.currentTarget.style.borderColor = "#6b4c2a";
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== opt) {
                e.currentTarget.style.background = "#1e1610";
                e.currentTarget.style.borderColor = "#4a3520";
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

function RiskPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSeverity, setSelectedSeverity] = useState("All");
  const navigate = useNavigate();

  const filtered = risks.filter((r) => {
    const catMatch = selectedCategory === "All" || r.category === selectedCategory;
    const sevMatch = selectedSeverity === "All" || r.severity === selectedSeverity;
    return catMatch && sevMatch;
  });

  return (
    <div style={{
      background: "#110e0a",
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
            color: "#92400e",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "inherit",
            marginBottom: "28px",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#f59e0b"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#92400e"}
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.5px" }}>
            DeFi Risk 101
          </h1>
          <p style={{ fontSize: "14px", color: "#92400e", marginTop: "6px", marginBottom: 0 }}>
            Understand the risks before you put your funds to work.
          </p>

          {/* Category summary pills */}
          <div style={{ display: "flex", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
            {[
              { label: "Protocol risks", count: risks.filter(r => r.category === "Protocol").length, color: "#a78bfa", bg: "#1a0d2e" },
              { label: "Market risks", count: risks.filter(r => r.category === "Market").length, color: "#fbbf24", bg: "#2d1a00" },
              { label: "Human risks", count: risks.filter(r => r.category === "Human").length, color: "#34d399", bg: "#0d2217" },
            ].map(({ label, count, color, bg }) => (
              <span key={label} style={{
                fontSize: "12px",
                padding: "4px 12px",
                borderRadius: "20px",
                background: bg,
                color: color,
                fontWeight: 500,
              }}>
                {count} {label}
              </span>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div style={{
          background: "#1a1410",
          border: "1px solid #3d2e1e",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <FilterRow
            label="Category"
            options={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <FilterRow
            label="Severity"
            options={severities}
            selected={selectedSeverity}
            onSelect={setSelectedSeverity}
          />
        </div>

        {/* Count */}
        <p style={{ fontSize: "12px", color: "#6b4c2a", marginBottom: "16px", marginTop: 0 }}>
          {filtered.length} risk{filtered.length !== 1 ? "s" : ""} shown
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "48px 24px",
            color: "#6b4c2a",
            fontSize: "14px",
            border: "1px dashed #3d2e1e",
            borderRadius: "12px",
          }}>
            No risks match these filters.
          </div>
        )}

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "12px",
        }}>
          {filtered.map((risk) => (
            <RiskCard key={risk.title} {...risk} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default RiskPage;
