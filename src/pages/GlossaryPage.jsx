import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { glossaryTerms } from "../data/glossary";

const categories = ["All", "Yield", "Trading", "Liquidity", "Lending", "Infrastructure", "Tokens", "Security"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

function getCategoryClass(category) {
  const map = {
    Yield: "bg-green-tag-bg text-green-tag-text",
    Trading: "bg-amber-tag-bg text-amber-tag-text",
    Liquidity: "bg-blue-tag-bg text-blue-tag-text",
    Lending: "bg-purple-tag-bg text-purple-tag-text",
    Infrastructure: "bg-chain-card text-blue-tag-text",
    Tokens: "bg-orange-tag-bg text-orange-tag-text",
    Security: "bg-red-tag-bg text-red-tag-text",
  };
  return map[category] || "bg-defi-card text-soft";
}

function getDifficultyClass(difficulty) {
  if (difficulty === "Beginner") return "bg-green-tag-bg text-green-tag-text";
  if (difficulty === "Intermediate") return "bg-blue-tag-bg text-blue-tag-text";
  return "bg-pink-tag-bg text-pink-tag-text";
}

function TermCard({ term, full, category, difficulty, definition, usedIn, related }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-glossary-card border border-glossary-border rounded-xl p-4 flex flex-col gap-2.5 hover:border-glossary-hover transition-colors duration-150">
      <div className="flex justify-between items-start gap-2 flex-wrap">
        <div>
          <span className="text-[16px] font-bold text-white">{term}</span>
          {full !== term && (
            <span className="text-[11px] text-glossary-hover ml-2">{full}</span>
          )}
        </div>
        <div className="flex gap-1.5 flex-shrink-0 flex-wrap">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getCategoryClass(category)}`}>{category}</span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getDifficultyClass(difficulty)}`}>{difficulty}</span>
        </div>
      </div>

      <p className="text-[13px] text-white/70 leading-relaxed">{definition}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="self-start flex items-center gap-1.5 text-[12px] font-medium text-white hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : "rotate-0"}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {expanded ? "Hide" : "See more"}
      </button>

      {expanded && (
        <div className="border-t border-glossary-border pt-2.5 flex flex-col gap-2.5">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-glossary-hover mb-1.5">Used in</span>
            <div className="flex gap-1.5 flex-wrap">
              {usedIn.map((p) => (
                <span key={p} className="text-[11px] px-2 py-0.5 rounded bg-glossary-base text-green-tag-text border border-glossary-border">{p}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-glossary-hover mb-1.5">Related terms</span>
            <div className="flex gap-1.5 flex-wrap">
              {related.map((r) => (
                <span key={r} className="text-[11px] px-2 py-0.5 rounded bg-glossary-base text-white/70 border border-glossary-border">{r}</span>
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
      const searchMatch = search === "" || t.term.toLowerCase().includes(search.toLowerCase()) || t.full.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase());
      const catMatch = selectedCategory === "All" || t.category === selectedCategory;
      const diffMatch = selectedDifficulty === "All" || t.difficulty === selectedDifficulty;
      return searchMatch && catMatch && diffMatch;
    });
  }, [search, selectedCategory, selectedDifficulty]);

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
    <div className="bg-glossary-base min-h-screen px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-[13px] text-glossary-hover hover:text-green-tag-text transition-colors mb-7"
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">DeFi Glossary</h1>
          <p className="text-sm text-green-accent mt-1.5">
            {glossaryTerms.length} terms across {categories.length - 1} categories — search or filter to find what you need.
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-glossary-hover" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search terms, definitions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-glossary-card border border-glossary-border rounded-xl text-white text-[14px] outline-none focus:border-green-accent transition-colors placeholder:text-soft"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-glossary-hover hover:text-white bg-transparent border-none cursor-pointer text-lg leading-none"
            >
              ×
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="bg-glossary-card border border-glossary-border rounded-xl p-4 mb-7 flex flex-col gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wide text-glossary-hover min-w-[84px]">Category</span>
            <div className="flex gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`text-[12px] font-medium px-3 py-1 rounded-full border transition-all duration-150 cursor-pointer
                  ${selectedCategory === cat ? "bg-green-accent border-green-accent text-white" : "bg-glossary-base border-glossary-border text-white hover:border-glossary-hover"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold uppercase tracking-wide text-glossary-hover min-w-[84px]">Difficulty</span>
            <div className="flex gap-1.5 flex-wrap">
              {difficulties.map((d) => (
                <button key={d} onClick={() => setSelectedDifficulty(d)} className={`text-[12px] font-medium px-3 py-1 rounded-full border transition-all duration-150 cursor-pointer
                  ${selectedDifficulty === d ? "bg-green-accent border-green-accent text-white" : "bg-glossary-base border-glossary-border text-white hover:border-glossary-hover"}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs text-glossary-hover mb-5">{filtered.length} term{filtered.length !== 1 ? "s" : ""} found</p>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-glossary-hover text-sm border border-dashed border-glossary-border rounded-xl">
            No terms match your search. Try different keywords.
          </div>
        )}

        {Object.entries(grouped).map(([letter, terms]) => (
          <div key={letter} className="mb-8">
            <div className="text-[13px] font-bold text-glossary-hover mb-3 pb-1.5 border-b border-glossary-border">
              {letter}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {terms.map((term) => <TermCard key={term.term} {...term} />)}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default GlossaryPage;
