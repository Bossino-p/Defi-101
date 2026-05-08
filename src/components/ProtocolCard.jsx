import { useState } from "react";

function getRiskClass(risk) {
  if (risk.includes("High")) return "bg-red-tag-bg text-red-tag-text";
  if (risk.includes("Medium")) return "bg-amber-tag-bg text-amber-tag-text";
  return "bg-green-tag-bg text-green-tag-text";
}

function getComplexityClass(level) {
  if (level.includes("High")) return "bg-pink-tag-bg text-pink-tag-text";
  if (level.includes("Medium")) return "bg-purple-tag-bg text-purple-tag-text";
  return "bg-blue-tag-bg text-blue-tag-text";
}

function ProtocolCard({
  title,
  description,
  examples,
  risk,
  complexity,
  useCase,
  riskReason,
  complexityReason,
  whenToUse,
  whenNotToUse,
  marketCondition,
  beginnerMode,
  nextStep,
  frequentlyUsed,
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-defi-card border border-defi-border rounded-xl p-5 flex flex-col gap-3 hover:border-defi-hover transition-colors duration-150">

      {/* Title row */}
      <div className="flex justify-between items-start gap-2 flex-wrap">
        <h2 className="text-[15px] font-semibold text-white leading-snug">
          {title}
        </h2>
        <div className="flex gap-1.5 flex-shrink-0 flex-wrap">
          {frequentlyUsed && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-tag-bg text-amber-tag-text border border-amber-border">
              Frequently used
            </span>
          )}
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-defi-base text-white/60 border border-defi-border">
            {marketCondition}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-[13px] text-white/70 leading-relaxed">{description}</p>

      {/* Risk + Complexity badges */}
      <div className="flex gap-1.5 flex-wrap">
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getRiskClass(risk)}`}>
          {risk} risk
        </span>
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getComplexityClass(complexity)}`}>
          {complexity} complexity
        </span>
      </div>

      {/* Example links */}
      <div className="flex gap-1.5 flex-wrap">
        {examples.map((ex) => (
          <a
            key={ex.name}
            href={ex.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] px-2.5 py-0.5 rounded bg-defi-base text-white border border-defi-border hover:border-defi-hover hover:bg-defi-hover transition-all duration-150 no-underline"
          >
            {ex.name} ↗
          </a>
        ))}
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="self-start flex items-center gap-1.5 text-[12px] font-medium text-white hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
      >
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          className={`transition-transform duration-200 ${expanded ? "rotate-180" : "rotate-0"}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {expanded ? "Hide details" : "View details"}
      </button>

      {/* Collapsible details */}
      {expanded && (
        <div className="border-t border-defi-border pt-3.5 flex flex-col gap-2.5">
          {[
            { label: "Use case", value: useCase },
            { label: "Why this risk", value: riskReason },
            { label: "Why this complexity", value: complexityReason },
            { label: "When to use", value: whenToUse },
            { label: "When not to use", value: whenNotToUse },
          ].map(({ label, value }) => (
            <div key={label}>
              <span className="block text-[10px] font-bold uppercase tracking-wide text-white/40 mb-0.5">
                {label}
              </span>
              <span className="text-[12px] text-white leading-relaxed">{value}</span>
            </div>
          ))}

          {beginnerMode && nextStep && (
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-wide text-hint mb-0.5">
                Next step
              </span>
              <span className="text-[12px] text-green-tag-text font-medium leading-relaxed">
                → {nextStep}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProtocolCard;
