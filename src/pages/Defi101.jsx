import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/protocols";
import ProtocolCard from "../components/ProtocolCard";

const filterOptions = {
  risk: ["All", "Low", "Medium", "High"],
  complexity: ["All", "Low", "Medium", "High"],
  market: ["All", "Bullish", "Bearish", "Sideways"],
};

function FilterRow({ label, options, selected, onSelect, disabled }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[11px] font-bold uppercase tracking-wide text-white/70 min-w-[84px]">
        {label}
      </span>
      <div className="flex gap-1.5 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt}
            disabled={disabled}
            onClick={() => onSelect(opt)}
            className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150
              ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
              ${selected === opt
                ? "bg-blue-accent border-blue-accent text-white font-semibold"
                : "bg-defi-card border-defi-hover text-white hover:bg-defi-hover hover:border-divider"
              }`}
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
      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg border cursor-pointer transition-all duration-200 w-fit
        ${enabled ? "border-green-500 bg-green-950" : "border-defi-border bg-defi-base"}`}
    >
      <div className={`w-9 h-5 rounded-full relative flex-shrink-0 transition-colors duration-200
        ${enabled ? "bg-green-600" : "bg-defi-hover"}`}>
        <div className={`absolute w-4 h-4 rounded-full bg-white top-0.5 transition-all duration-200 shadow-sm
          ${enabled ? "left-[18px]" : "left-0.5"}`} />
      </div>
      <div className="text-left">
        <div className="text-[13px] font-semibold text-white">Beginner mode</div>
        <div className="text-[11px] text-white/60 mt-0.5">Show only low risk &amp; low complexity</div>
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
    if (beginnerMode) return cat.risk.includes("Low") && cat.complexity.includes("Low");
    const riskMatch = selectedRisk === "All" || cat.risk.includes(selectedRisk);
    const complexityMatch = selectedComplexity === "All" || cat.complexity.includes(selectedComplexity);
    const marketMatch = selectedMarket === "All" || cat.marketCondition === "All" || cat.marketCondition.includes(selectedMarket);
    return riskMatch && complexityMatch && marketMatch;
  });

  return (
    <div className="bg-defi-base min-h-screen px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-[13px] text-blue-300 hover:text-blue-100 transition-colors mb-7"
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">DeFi 101</h1>
          <p className="text-sm text-white/70 mt-1.5">
            Explore decentralized finance protocols by risk, complexity, and market condition.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-defi-card border border-defi-border rounded-xl p-5 mb-7 flex flex-col gap-4">
          <BeginnerToggle enabled={beginnerMode} onToggle={handleBeginnerToggle} />
          <div className="h-px bg-defi-border" />
          <FilterRow label="Risk" options={filterOptions.risk} selected={selectedRisk} onSelect={setSelectedRisk} disabled={beginnerMode} />
          <FilterRow label="Complexity" options={filterOptions.complexity} selected={selectedComplexity} onSelect={setSelectedComplexity} disabled={beginnerMode} />
          <FilterRow label="Market" options={filterOptions.market} selected={selectedMarket} onSelect={setSelectedMarket} disabled={beginnerMode} />
        </div>

        {/* Count */}
        <p className="text-xs text-muted-dark mb-4">
          {filtered.length} protocol{filtered.length !== 1 ? "s" : ""} shown
        </p>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-hint text-sm border border-dashed border-defi-border rounded-xl">
            No protocols match these filters. Try adjusting your selection.
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((cat) => (
            <ProtocolCard key={cat.title} {...cat} beginnerMode={beginnerMode} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Defi101;
