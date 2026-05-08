import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scamTypes, checklistItems } from "../data/scams";
import ScamCard from "../components/ScamCard";

const categories = ["All", "Social Engineering", "Token Scams", "Transaction Scams", "Protocol Scams"];
const severities = ["All", "High", "Medium"];

function FilterRow({ label, options, selected, onSelect }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[11px] font-bold uppercase tracking-wide text-scam-hover min-w-[84px]">{label}</span>
      <div className="flex gap-1.5 flex-wrap">
        {options.map((opt) => (
          <button key={opt} onClick={() => onSelect(opt)} className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150 cursor-pointer
            ${selected === opt
              ? "bg-red-accent border-red-accent text-white font-semibold"
              : "bg-scam-card border-scam-border text-white hover:bg-scam-base hover:border-scam-hover"
            }`}
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
  const navigate = useNavigate();

  const allChecked = checklistItems.every((item) => checked[item.id]);

  function toggleCheck(id) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const filtered = scamTypes.filter((s) => {
    const catMatch = selectedCategory === "All" || s.category === selectedCategory;
    const sevMatch = selectedSeverity === "All" || s.severity === selectedSeverity;
    return catMatch && sevMatch;
  });

  return (
    <div className="bg-scam-base min-h-screen px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-[13px] text-scam-hover hover:text-red-tag-text transition-colors mb-7"
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">Scam Guard</h1>
          <p className="text-sm text-red-accent mt-1.5">
            Most losses in DeFi are preventable. Learn to recognize scams before they cost you.
          </p>

          <div className="flex gap-2 mt-4 flex-wrap">
            {[
              { label: "Social Engineering", count: scamTypes.filter(s => s.category === "Social Engineering").length, cls: "bg-red-tag-bg text-red-tag-text" },
              { label: "Token Scams", count: scamTypes.filter(s => s.category === "Token Scams").length, cls: "bg-amber-tag-bg text-amber-tag-text" },
              { label: "Transaction Scams", count: scamTypes.filter(s => s.category === "Transaction Scams").length, cls: "bg-purple-tag-bg text-purple-tag-text" },
              { label: "Protocol Scams", count: scamTypes.filter(s => s.category === "Protocol Scams").length, cls: "bg-blue-tag-bg text-blue-tag-text" },
            ].map(({ label, count, cls }) => (
              <span key={label} className={`text-xs font-medium px-3 py-1 rounded-full ${cls}`}>
                {count} {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── Checklist ── */}
        <div className="mb-12">
          <div className={`bg-scam-card border rounded-2xl p-6 transition-colors duration-300 ${allChecked ? "border-green-500" : "border-scam-border"}`}>
            <div className="flex justify-between items-start mb-4 flex-wrap gap-3">
              <div>
                <h2 className="text-lg font-bold text-white mb-1">Before you sign — checklist</h2>
                <p className="text-[13px] text-white/70">Run through this before approving any transaction you're unsure about.</p>
              </div>
              {Object.keys(checked).length > 0 && (
                <button
                  onClick={() => setChecked({})}
                  className="text-[12px] text-scam-hover hover:text-red-tag-text transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="flex flex-col gap-2">
              {checklistItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`flex items-start gap-3 px-3.5 py-2.5 rounded-lg border cursor-pointer transition-all duration-150
                    ${checked[item.id] ? "bg-green-950 border-green-800" : "bg-scam-base border-scam-border hover:border-scam-hover"}`}
                >
                  <div className={`w-4.5 h-4.5 rounded flex-shrink-0 mt-0.5 border flex items-center justify-center transition-all duration-150
                    ${checked[item.id] ? "bg-green-400 border-green-400" : "border-scam-hover bg-transparent"}`}
                    style={{ width: "18px", height: "18px", borderRadius: "4px" }}
                  >
                    {checked[item.id] && (
                      <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M2 5.5l2.5 2.5 4.5-4.5" stroke="#052e16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-[13px] leading-relaxed transition-colors duration-150 ${checked[item.id] ? "text-green-400" : "text-white"}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {allChecked && (
              <div className="mt-4 px-4 py-3 bg-green-950 border border-green-800 rounded-lg text-[13px] text-green-400 font-medium text-center">
                ✓ All clear — you've done your checks. Stay sharp.
              </div>
            )}
          </div>
        </div>

        {/* ── Filters ── */}
        <div className="bg-scam-card border border-scam-border rounded-xl p-5 mb-7 flex flex-col gap-4">
          <FilterRow label="Category" options={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
          <FilterRow label="Severity" options={severities} selected={selectedSeverity} onSelect={setSelectedSeverity} />
        </div>

        <p className="text-xs text-scam-hover mb-4">
          {filtered.length} scam type{filtered.length !== 1 ? "s" : ""} shown
        </p>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-scam-hover text-sm border border-dashed border-scam-border rounded-xl">
            No scam types match these filters.
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((scam) => <ScamCard key={scam.title} {...scam} />)}
        </div>

      </div>
    </div>
  );
}

export default ScamPage;
