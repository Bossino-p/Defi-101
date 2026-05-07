import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scamTypes, checklistItems } from "../data/scams";
import ScamCard from "../components/ScamCard";

const categories = ["All", "Social Engineering", "Token Scams", "Transaction Scams", "Protocol Scams"];
const severities = ["All", "High", "Medium"];

function FilterRow({ label, options, selected, onSelect }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      <span style={{
        fontSize: "11px",
        fontWeight: 700,
        color: "#7f1d1d",
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
              border: selected === opt ? "1px solid #ef4444" : "1px solid #3d1515",
              background: selected === opt ? "#991b1b" : "#1a0a0a",
              color: "#ffffff",
              cursor: "pointer",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              if (selected !== opt) {
                e.currentTarget.style.background = "#2d0a0a";
                e.currentTarget.style.borderColor = "#7f1d1d";
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== opt) {
                e.currentTarget.style.background = "#1a0a0a";
                e.currentTarget.style.borderColor = "#3d1515";
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

function ScamPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSeverity, setSelectedSeverity] = useState("All");
  const [checked, setChecked] = useState({});
  const [checklistDone, setChecklistDone] = useState(false);
  const navigate = useNavigate();

  const allChecked = checklistItems.every((item) => checked[item.id]);

  function toggleCheck(id) {
    const updated = { ...checked, [id]: !checked[id] };
    setChecked(updated);
    if (checklistItems.every((item) => updated[item.id])) {
      setChecklistDone(true);
    } else {
      setChecklistDone(false);
    }
  }

  function resetChecklist() {
    setChecked({});
    setChecklistDone(false);
  }

  const filtered = scamTypes.filter((s) => {
    const catMatch = selectedCategory === "All" || s.category === selectedCategory;
    const sevMatch = selectedSeverity === "All" || s.severity === selectedSeverity;
    return catMatch && sevMatch;
  });

  return (
    <div style={{
      background: "#0d0808",
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
            color: "#7f1d1d",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "inherit",
            marginBottom: "28px",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#fca5a5"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#7f1d1d"}
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.5px" }}>
            Scam Guard
          </h1>
          <p style={{ fontSize: "14px", color: "#ef4444", marginTop: "6px", marginBottom: 0 }}>
            Most losses in DeFi are preventable. Learn to recognize scams before they cost you.
          </p>

          {/* Category summary */}
          <div style={{ display: "flex", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
            {[
              { label: "Social Engineering", count: scamTypes.filter(s => s.category === "Social Engineering").length, color: "#fca5a5", bg: "#2d0a0a" },
              { label: "Token Scams", count: scamTypes.filter(s => s.category === "Token Scams").length, color: "#fbbf24", bg: "#2d1a00" },
              { label: "Transaction Scams", count: scamTypes.filter(s => s.category === "Transaction Scams").length, color: "#a78bfa", bg: "#1a0d2e" },
              { label: "Protocol Scams", count: scamTypes.filter(s => s.category === "Protocol Scams").length, color: "#60a5fa", bg: "#0c1a2e" },
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

        {/* ── SECTION 1: Before you sign checklist ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            background: "#140a0a",
            border: `1px solid ${allChecked ? "#16a34a" : "#3d1515"}`,
            borderRadius: "14px",
            padding: "24px",
            transition: "border-color 0.3s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
              <div>
                <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", margin: "0 0 4px 0" }}>
                  Before you sign — checklist
                </h2>
                <p style={{ fontSize: "13px", color: "#94a3b8", margin: 0 }}>
                  Run through this before approving any transaction you're unsure about.
                </p>
              </div>
              {Object.keys(checked).length > 0 && (
                <button
                  onClick={resetChecklist}
                  style={{
                    fontSize: "12px",
                    color: "#7f1d1d",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: "inherit",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#fca5a5"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#7f1d1d"}
                >
                  Reset
                </button>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {checklistItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: checked[item.id] ? "#052e16" : "#1a0a0a",
                    border: `1px solid ${checked[item.id] ? "#166534" : "#3d1515"}`,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "4px",
                    border: `1.5px solid ${checked[item.id] ? "#4ade80" : "#7f1d1d"}`,
                    background: checked[item.id] ? "#4ade80" : "transparent",
                    flexShrink: 0,
                    marginTop: "1px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s",
                  }}>
                    {checked[item.id] && (
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#052e16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span style={{
                    fontSize: "13px",
                    color: checked[item.id] ? "#4ade80" : "#e2e8f0",
                    lineHeight: "1.5",
                    transition: "color 0.15s",
                  }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* All checked state */}
            {allChecked && (
              <div style={{
                marginTop: "16px",
                padding: "12px 16px",
                background: "#052e16",
                border: "1px solid #166534",
                borderRadius: "8px",
                fontSize: "13px",
                color: "#4ade80",
                fontWeight: 500,
                textAlign: "center",
              }}>
                ✓ All clear — you've done your checks. Stay sharp.
              </div>
            )}
          </div>
        </div>

        {/* ── SECTION 2: Filters ── */}
        <div style={{
          background: "#140a0a",
          border: "1px solid #3d1515",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <FilterRow label="Category" options={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
          <FilterRow label="Severity" options={severities} selected={selectedSeverity} onSelect={setSelectedSeverity} />
        </div>

        {/* Count */}
        <p style={{ fontSize: "12px", color: "#7f1d1d", marginBottom: "16px", marginTop: 0 }}>
          {filtered.length} scam type{filtered.length !== 1 ? "s" : ""} shown
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{
            textAlign: "center",
            padding: "48px 24px",
            color: "#7f1d1d",
            fontSize: "14px",
            border: "1px dashed #3d1515",
            borderRadius: "12px",
          }}>
            No scam types match these filters.
          </div>
        )}

        {/* ── SECTION 3: Scam cards ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "12px",
        }}>
          {filtered.map((scam) => (
            <ScamCard key={scam.title} {...scam} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default ScamPage;
