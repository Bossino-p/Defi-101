import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { risks } from "../data/risks";
import RiskCard from "../components/RiskCard";

const categories = ["All", "Protocol", "Market", "Human"];
const severities = ["All", "High", "Medium", "Low"];

function FilterRow({ label, options, selected, onSelect }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[11px] font-bold uppercase tracking-wide text-risk-hover min-w-[84px]">
        {label}
      </span>
      <div className="flex gap-1.5 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150 cursor-pointer
              ${selected === opt
                ? "bg-amber-accent border-amber-accent text-white font-semibold"
                : "bg-risk-card border-risk-border text-white hover:bg-risk-base hover:border-risk-hover"
              }`}
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
    <div className="bg-risk-base min-h-screen px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-[13px] text-risk-hover hover:text-amber-tag-text transition-colors mb-7"
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">DeFi Risk 101</h1>
          <p className="text-sm text-amber-accent mt-1.5">
            Understand the risks before putting your funds to work.
          </p>

          {/* Category summary */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              { label: "Protocol risks", count: risks.filter(r => r.category === "Protocol").length, color: "bg-purple-tag-bg text-purple-tag-text" },
              { label: "Market risks", count: risks.filter(r => r.category === "Market").length, color: "bg-amber-tag-bg text-amber-tag-text" },
              { label: "Human risks", count: risks.filter(r => r.category === "Human").length, color: "bg-green-tag-bg text-green-tag-text" },
            ].map(({ label, count, color }) => (
              <span key={label} className={`text-xs font-medium px-3 py-1 rounded-full ${color}`}>
                {count} {label}
              </span>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-risk-card border border-risk-border rounded-xl p-5 mb-7 flex flex-col gap-4">
          <FilterRow label="Category" options={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
          <FilterRow label="Severity" options={severities} selected={selectedSeverity} onSelect={setSelectedSeverity} />
        </div>

        {/* Count */}
        <p className="text-xs text-risk-hover mb-4">
          {filtered.length} risk{filtered.length !== 1 ? "s" : ""} shown
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-risk-hover text-sm border border-dashed border-risk-border rounded-xl">
            No risks match these filters.
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((risk) => (
            <RiskCard key={risk.title} {...risk} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default RiskPage;
