import { useState } from "react";

function getTypeClass(type) {
  if (type === "Hot") return "bg-green-tag-bg text-green-tag-text border border-green-border";
  return "bg-blue-tag-bg text-blue-tag-text border border-blue-border";
}

function WalletCard({ name, type, bestFor, chains, watchOut, beginner, url }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-wallet-card border border-wallet-border rounded-xl p-5 flex flex-col gap-3 hover:border-wallet-hover transition-colors duration-150">

      {/* Name + badges */}
      <div className="flex justify-between items-start gap-2 flex-wrap">
        <h2 className="text-[15px] font-semibold text-white leading-snug">{name}</h2>
        <div className="flex gap-1.5 flex-shrink-0 flex-wrap">
          {beginner && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-tag-bg text-amber-tag-text border border-amber-border">
              Beginner friendly
            </span>
          )}
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getTypeClass(type)}`}>
            {type} wallet
          </span>
        </div>
      </div>

      {/* Best for */}
      <p className="text-[13px] text-teal-accent leading-relaxed">{bestFor}</p>

      {/* Chains */}
      <div className="flex gap-1.5 flex-wrap">
        {chains.map((chain) => (
          <span key={chain} className="text-[11px] px-2 py-0.5 rounded bg-wallet-base text-white/70 border border-wallet-border">
            {chain}
          </span>
        ))}
      </div>

      {/* Official link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[12px] font-semibold text-teal-accent hover:opacity-70 transition-opacity no-underline w-fit"
      >
        Official site ↗
      </a>

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

      {/* Watch out */}
      {expanded && (
        <div className="border-t border-wallet-border pt-3">
          <span className="block text-[10px] font-bold uppercase tracking-wide text-amber-accent mb-1">
            ⚠ Watch out
          </span>
          <span className="text-[12px] text-white leading-relaxed">{watchOut}</span>
        </div>
      )}
    </div>
  );
}

export default WalletCard;
