import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { glossaryTerms } from "../data/glossary";

const categories = ["All", "Yield", "Trading", "Liquidity", "Lending", "Infrastructure", "Tokens", "Security"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

function getDifficultyStyle(difficulty) {
  if (difficulty === "Beginner") return { background: "#052e16", color: "#4ade80" };
  if (difficulty === "Intermediate") return { background: "#0c1a2e", color: "#60a5fa" };
  if (difficulty === "Advanced") return { background: "#2d0a1e", color: "#f472b6" };
  return { background: "#1e293b", color: "#94a3b8" };
}

function getCategoryStyle(category) {
  const map = {
    Yield: { bg: "#1a2e1a", color: "#86efac" },
    Trading: { bg: "#2d1a00", color: "#fbbf24" },
    Liquidity: { bg: "#0c1a2e", color: "#60a5fa" },
    Lending: { bg: "#1a0d2e", color: "#a78bfa" },
    Infrastructure: { bg: "#1a1a2e", color: "#818cf8" },
    Tokens: { bg: "#2d1a1a", color: "#fb923c" },
    Security: { bg: "#2d0a0a", color: "#fca5a5" },
  };
  return map[category] || { bg: "#1e293b", color: "#94a3b8" };
}

function TermCard({ term, full, category, difficulty, definition, usedIn, related }) {
  const [expanded, setExpanded] = useState(false);
  const catStyle = getCategoryStyle(category);
  const diffStyle = getDifficultyStyle(difficulty);

  return (
    <div
      style={{
        background: "#0d1a0d",
        border: "1px solid #1a3320",
        borderRadius: "12px",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        transition: "border-color 0.15s",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "#14532d"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1a3320"}
    >
      {/* Term + badges */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", flexWrap: "wrap" }}>
        <div>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>{term}</span>
          {full !== term && (
            <span style={{ fontSize: "11px", color: "#4b7a58", marginLeft: "8px" }}>{full}</span>
          )}
        </div>
        <div style={{ display: "flex", gap: "5px", flexShrink: 0, flexWrap: "wrap" }}>
          <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 8px", borderRadius: "20px", background: catStyle.bg, color: catStyle.color }}>
            {category}
          </span>
          <span style={{ fontSize: "10px", fontWeight: 600, padding: "2px 8px", borderRadius: "20px", ...diffStyle }}>
            {difficulty}
          </span>
        </div>
      </div>

      {/* Definition */}
      <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>
        {definition}
      </p>

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
        {expanded ? "Hide" : "See more"}
      </button>

      {expanded && (
        <div style={{ borderTop: "1px solid #1a3320", paddingTop: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Used in */}
          <div>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#14532d", marginBottom: "4px" }}>
              Used in
            </span>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {usedIn.map((p) => (
                <span key={p} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "5px", background: "#0a1f0a", color: "#4ade80", border: "1px solid #1a3320" }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
          {/* Related */}
          <div>
            <span style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", color: "#14532d", marginBottom: "4px" }}>
              Related terms
            </span>
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {related.map((r) => (
                <span key={r} style={{ fontSize: "11px", padding: "2px 8px", borderRadius: "5px", background: "#0a1f0a", color: "#94a3b8", border: "1px solid #1a3320" }}>
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    return glossaryTerms.filter((t) => {
      const searchMatch =
        search === "" ||
        t.term.toLowerCase().includes(search.toLowerCase()) ||
        t.full.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase());
      const catMatch = selectedCategory === "All" || t.category === selectedCategory;
      const diffMatch = selectedDifficulty === "All" || t.difficulty === selectedDifficulty;
      return searchMatch && catMatch && diffMatch;
    });
  }, [search, selectedCategory, selectedDifficulty]);

  // Group by first letter for alphabetical display
  const grouped = useMemo(() => {
    const sorted = [...filtered].sort((a, b) => a.term.localeCompare(b.term));
    return sorted.reduce((acc, term) => {
      const letter = term.term[0].toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(term);
      return acc;
    }, {});
  }, [filtered]);

  return (
    <div style={{
      background: "#080f08",
      minHeight: "100vh",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#14532d", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", marginBottom: "28px", transition: "color 0.15s" }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#4ade80"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#14532d"}
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.5px" }}>
            DeFi Glossary
          </h1>
          <p style={{ fontSize: "14px", color: "#16a34a", marginTop: "6px", marginBottom: 0 }}>
            {glossaryTerms.length} terms across {categories.length - 1} categories — search or filter to find what you need.
          </p>
        </div>

        {/* Search bar */}
        <div style={{ position: "relative", marginBottom: "16px" }}>
          <svg style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#14532d" }} width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search terms, definitions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px 12px 40px",
              background: "#0d1a0d",
              border: "1px solid #1a3320",
              borderRadius: "10px",
              color: "#ffffff",
              fontSize: "14px",
              fontFamily: "inherit",
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.15s",
            }}
            onFocus={(e) => e.target.style.borderColor = "#16a34a"}
            onBlur={(e) => e.target.style.borderColor = "#1a3320"}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#14532d", cursor: "pointer", fontSize: "16px", padding: 0 }}
            >
              ×
            </button>
          )}
        </div>

        {/* Filters */}
        <div style={{ background: "#0d1a0d", border: "1px solid #1a3320", borderRadius: "12px", padding: "16px 20px", marginBottom: "28px", display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Category pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#14532d", textTransform: "uppercase", letterSpacing: "0.6px", minWidth: "84px" }}>Category</span>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} style={{
                  fontSize: "12px", fontWeight: 500, padding: "5px 12px", borderRadius: "20px",
                  border: selectedCategory === cat ? "1px solid #16a34a" : "1px solid #1a3320",
                  background: selectedCategory === cat ? "#14532d" : "#0a1f0a",
                  color: "#ffffff", cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit",
                }}
                  onMouseEnter={(e) => { if (selectedCategory !== cat) { e.currentTarget.style.borderColor = "#14532d"; } }}
                  onMouseLeave={(e) => { if (selectedCategory !== cat) { e.currentTarget.style.borderColor = "#1a3320"; } }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {/* Difficulty pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#14532d", textTransform: "uppercase", letterSpacing: "0.6px", minWidth: "84px" }}>Difficulty</span>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {difficulties.map((d) => (
                <button key={d} onClick={() => setSelectedDifficulty(d)} style={{
                  fontSize: "12px", fontWeight: 500, padding: "5px 12px", borderRadius: "20px",
                  border: selectedDifficulty === d ? "1px solid #16a34a" : "1px solid #1a3320",
                  background: selectedDifficulty === d ? "#14532d" : "#0a1f0a",
                  color: "#ffffff", cursor: "pointer", transition: "all 0.15s", fontFamily: "inherit",
                }}
                  onMouseEnter={(e) => { if (selectedDifficulty !== d) { e.currentTarget.style.borderColor = "#14532d"; } }}
                  onMouseLeave={(e) => { if (selectedDifficulty !== d) { e.currentTarget.style.borderColor = "#1a3320"; } }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <p style={{ fontSize: "12px", color: "#14532d", marginBottom: "20px", marginTop: 0 }}>
          {filtered.length} term{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px", color: "#14532d", fontSize: "14px", border: "1px dashed #1a3320", borderRadius: "12px" }}>
            No terms match your search. Try different keywords.
          </div>
        )}

        {/* Grouped alphabetically */}
        {Object.entries(grouped).map(([letter, terms]) => (
          <div key={letter} style={{ marginBottom: "32px" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#14532d", marginBottom: "12px", paddingBottom: "6px", borderBottom: "1px solid #1a3320" }}>
              {letter}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "10px" }}>
              {terms.map((term) => <TermCard key={term.term} {...term} />)}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default GlossaryPage;
