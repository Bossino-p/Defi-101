import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { strategies } from "../data/strategies";

const risks = ["All", "Low", "Medium", "High"];
const complexities = ["All", "Low", "Medium", "High"];

function getRiskClass(risk) {
  if (risk === "High") return "bg-red-tag-bg text-red-tag-text";
  if (risk === "Medium") return "bg-amber-tag-bg text-amber-tag-text";
  return "bg-green-tag-bg text-green-tag-text";
}

function getComplexityClass(level) {
  if (level === "High") return "bg-pink-tag-bg text-pink-tag-text";
  if (level === "Medium") return "bg-purple-tag-bg text-purple-tag-text";
  return "bg-blue-tag-bg text-blue-tag-text";
}

function StrategyCard({ title, risk, complexity, description, whyRisky, howItWorks, expectedYield, prerequisites, steps, protocols, bestMarket }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-strategy-card border border-strategy-border rounded-xl p-5 flex flex-col gap-3 hover:border-strategy-hover transition-colors duration-150">

      {/* Title */}
      <h2 className="text-[15px] font-semibold text-white leading-snug">{title}</h2>

      {/* Expected yield */}
      <span className="self-start text-[11px] px-2.5 py-1 rounded bg-strategy-base text-amber-tag-text border border-strategy-border">
        📈 {expectedYield}
      </span>

      {/* Description */}
      <p className="text-[13px] text-amber-accent leading-relaxed">{description}</p>

      {/* Risk + Complexity */}
      <div className="flex gap-1.5 flex-wrap">
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getRiskClass(risk)}`}>{risk} risk</span>
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getComplexityClass(complexity)}`}>{complexity} complexity</span>
      </div>

      {/* Why risky */}
      <div className="bg-strategy-base border-l-4 border-orange-400 rounded-r-lg px-3.5 py-2.5">
        <span className="block text-[10px] font-bold uppercase tracking-wide text-orange-400 mb-1">⚠ Why it's risky</span>
        <span className="text-[12px] text-white leading-relaxed">{whyRisky}</span>
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="self-start flex items-center gap-1.5 text-[12px] font-medium text-white hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : "rotate-0"}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {expanded ? "Hide details" : "View details"}
      </button>

      {/* Collapsible */}
      {expanded && (
        <div className="border-t border-strategy-border pt-3.5 flex flex-col gap-3.5">
          {[
            { label: "How it works", value: howItWorks },
            { label: "What you need before trying this", value: prerequisites },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-[10px] font-bold uppercase tracking-wide text-strategy-hover mb-1">{label}</span>
              <span className="text-[12px] text-white leading-relaxed">{value}</span>
            </div>
          ))}

          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-strategy-hover mb-2">Step by step</span>
            <div className="flex flex-col gap-1.5">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <span className="text-[11px] font-bold text-amber-tag-text min-w-[18px] mt-0.5">{i + 1}.</span>
                  <span className="text-[12px] text-white leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-strategy-hover mb-1">Best market</span>
            <span className="text-[12px] text-white leading-relaxed">{bestMarket}</span>
          </div>

          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-strategy-hover mb-1.5">Protocols to use</span>
            <div className="flex gap-1.5 flex-wrap">
              {protocols.map((p) => (
                <span key={p} className="text-[11px] px-2 py-0.5 rounded bg-strategy-base text-amber-tag-text border border-strategy-border">{p}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StrategiesPage() {
  const [selectedRisk, setSelectedRisk] = useState("All");
  const [selectedComplexity, setSelectedComplexity] = useState("All");
  const navigate = useNavigate();

  const filtered = strategies.filter((s) => {
    const riskMatch = selectedRisk === "All" || s.risk === selectedRisk;
    const cxMatch = selectedComplexity === "All" || s.complexity === selectedComplexity;
    return riskMatch && cxMatch;
  });

  function FilterRow({ label, options, selected, onSelect }) {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[11px] font-bold uppercase tracking-wide text-strategy-hover min-w-[84px]">{label}</span>
        <div className="flex gap-1.5 flex-wrap">
          {options.map((opt) => (
            <button key={opt} onClick={() => onSelect(opt)} className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150 cursor-pointer
              ${selected === opt
                ? "bg-amber-accent border-amber-accent text-white font-semibold"
                : "bg-strategy-card border-strategy-border text-white hover:bg-strategy-base hover:border-strategy-hover"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-strategy-base min-h-screen px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-[13px] text-strategy-hover hover:text-amber-tag-text transition-colors mb-7"
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">DeFi Strategies</h1>
          <p className="text-sm text-amber-accent mt-1.5">
            Common yield strategies explained — how they work, why they're risky, and what you need before trying them.
          </p>
        </div>

        {/* Warning */}
        <div className="bg-strategy-card border border-red-tag-bg rounded-xl px-5 py-4 mb-8 text-[13px] text-orange-200 leading-relaxed">
          <strong className="text-orange-400">Before you try any strategy:</strong> Make sure you understand the protocols involved, have read the relevant pages in this hub, and never deploy more than you can afford to lose.
        </div>

        {/* Filters */}
        <div className="bg-strategy-card border border-strategy-border rounded-xl p-5 mb-7 flex flex-col gap-4">
          <FilterRow label="Risk" options={risks} selected={selectedRisk} onSelect={setSelectedRisk} />
          <FilterRow label="Complexity" options={complexities} selected={selectedComplexity} onSelect={setSelectedComplexity} />
        </div>

        <p className="text-xs text-strategy-hover mb-4">
          {filtered.length} strateg{filtered.length !== 1 ? "ies" : "y"} shown
        </p>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-strategy-hover text-sm border border-dashed border-strategy-border rounded-xl">
            No strategies match these filters.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((s) => <StrategyCard key={s.title} {...s} />)}
        </div>

      </div>
    </div>
  );
}

export default StrategiesPage;
