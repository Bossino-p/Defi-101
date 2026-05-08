import { useState } from "react";

function getCategoryClass(category) {
  if (category === "Social Engineering") return "bg-red-tag-bg text-red-tag-text border border-scam-hover";
  if (category === "Token Scams") return "bg-amber-tag-bg text-amber-tag-text border border-amber-border";
  if (category === "Transaction Scams") return "bg-purple-tag-bg text-purple-tag-text border border-purple-border";
  return "bg-blue-tag-bg text-blue-tag-text border border-blue-border";
}

function getSeverityClass(severity) {
  if (severity === "High") return "bg-red-tag-bg text-red-tag-text";
  if (severity === "Medium") return "bg-amber-tag-bg text-amber-tag-text";
  return "bg-green-tag-bg text-green-tag-text";
}

function ScamCard({ title, category, severity, description, howItWorks, realExample, redFlags, foundOn }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-scam-card border border-scam-border rounded-xl p-5 flex flex-col gap-3 hover:border-scam-hover transition-colors duration-150">

      <div className="flex justify-between items-start gap-2">
        <h2 className="text-[15px] font-semibold text-white leading-snug">{title}</h2>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${getCategoryClass(category)}`}>
          {category}
        </span>
      </div>

      <p className="text-[13px] text-red-tag-text leading-relaxed">{description}</p>

      <div className="flex gap-1.5 flex-wrap">
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getSeverityClass(severity)}`}>
          {severity} severity
        </span>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {foundOn.map((place) => (
          <span key={place} className="text-[11px] px-2 py-0.5 rounded bg-scam-base text-white/70 border border-scam-border">
            {place}
          </span>
        ))}
      </div>

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

      {expanded && (
        <div className="border-t border-scam-border pt-3 flex flex-col gap-3">
          {[
            { label: "How it works", value: howItWorks },
            { label: "Real example", value: realExample },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-[10px] font-bold uppercase tracking-wide text-scam-hover mb-1">{label}</span>
              <span className="text-[12px] text-white leading-relaxed">{value}</span>
            </div>
          ))}

          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-scam-hover mb-1.5">Red flags</span>
            <ul className="list-disc list-inside flex flex-col gap-1">
              {redFlags.map((flag, i) => (
                <li key={i} className="text-[12px] text-red-tag-text leading-relaxed">{flag}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScamCard;
