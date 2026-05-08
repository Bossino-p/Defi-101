import { useState } from "react";

function getCategoryClass(category) {
  if (category === "Protocol") return "bg-purple-tag-bg text-purple-tag-text border-purple-border";
  if (category === "Market") return "bg-amber-tag-bg text-amber-tag-text border-amber-border";
  return "bg-green-tag-bg text-green-tag-text border-green-border";
}

function getSeverityClass(severity) {
  if (severity === "High") return "bg-red-tag-bg text-red-tag-text";
  if (severity === "Medium") return "bg-amber-tag-bg text-amber-tag-text";
  return "bg-green-tag-bg text-green-tag-text";
}

function RiskCard({ title, category, severity, description, howItHappens, realExample, howToProtect, affectedProtocols }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-risk-card border border-risk-border rounded-xl p-5 flex flex-col gap-3 hover:border-risk-hover transition-colors duration-150">

      {/* Title + category */}
      <div className="flex justify-between items-start gap-2">
        <h2 className="text-[15px] font-semibold text-white leading-snug">{title}</h2>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex-shrink-0 ${getCategoryClass(category)}`}>
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="text-[13px] text-amber-tag-text leading-relaxed">{description}</p>

      {/* Severity */}
      <div className="flex gap-1.5">
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getSeverityClass(severity)}`}>
          {severity} severity
        </span>
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
        <div className="border-t border-risk-border pt-3 flex flex-col gap-3">
          {[
            { label: "How it happens", value: howItHappens },
            { label: "Real example", value: realExample },
            { label: "How to protect yourself", value: howToProtect },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-[10px] font-bold uppercase tracking-wide text-risk-hover mb-1">{label}</span>
              <span className="text-[12px] text-white leading-relaxed">{value}</span>
            </div>
          ))}

          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-risk-hover mb-1.5">Affects</span>
            <div className="flex gap-1.5 flex-wrap">
              {affectedProtocols.map((p) => (
                <span key={p} className="text-[11px] px-2 py-0.5 rounded bg-risk-base text-amber-tag-text border border-risk-border">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RiskCard;
