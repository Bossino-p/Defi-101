import { useState } from "react";

function getSpeedClass(speed) {
  if (speed === "Fast") return "bg-green-tag-bg text-green-tag-text";
  if (speed === "Medium") return "bg-amber-tag-bg text-amber-tag-text";
  return "bg-red-tag-bg text-red-tag-text";
}

function getFeesClass(fees) {
  if (fees === "Low") return "bg-green-tag-bg text-green-tag-text";
  if (fees === "Medium") return "bg-amber-tag-bg text-amber-tag-text";
  return "bg-red-tag-bg text-red-tag-text";
}

function getSecurityClass(security) {
  if (security === "High") return "bg-blue-tag-bg text-blue-tag-text";
  if (security === "Medium") return "bg-purple-tag-bg text-purple-tag-text";
  return "bg-pink-tag-bg text-pink-tag-text";
}

function getLayerClass(layer) {
  if (layer === "L1") return "bg-purple-tag-bg text-purple-tag-text border border-purple-border";
  if (layer === "L2") return "bg-blue-tag-bg text-blue-tag-text border border-blue-border";
  return "bg-defi-card text-white/70 border border-defi-border";
}

function getEcosystemClass(ecosystem) {
  if (ecosystem === "EVM") return "bg-chain-card text-purple-tag-text";
  if (ecosystem === "SVM") return "bg-chain-card text-green-tag-text";
  if (ecosystem === "MoveVM") return "bg-chain-card text-amber-tag-text";
  return "bg-chain-card text-white/70";
}

function ChainCard({ name, layer, ecosystem, speed, fees, security, bestFor, weaknesses, nativeToken, wallet, topProtocols, url }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-chain-card border border-chain-border rounded-xl p-5 flex flex-col gap-3 hover:border-chain-hover transition-colors duration-150">

      {/* Name + layer/ecosystem */}
      <div className="flex justify-between items-start gap-2 flex-wrap">
        <h2 className="text-[15px] font-semibold text-white leading-snug">{name}</h2>
        <div className="flex gap-1.5 flex-shrink-0">
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getLayerClass(layer)}`}>{layer}</span>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getEcosystemClass(ecosystem)}`}>{ecosystem}</span>
        </div>
      </div>

      {/* Best for */}
      <p className="text-[13px] text-purple-tag-text leading-relaxed">{bestFor}</p>

      {/* Speed / Fees / Security */}
      <div className="flex gap-1.5 flex-wrap">
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getSpeedClass(speed)}`}>⚡ {speed} speed</span>
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getFeesClass(fees)}`}>⛽ {fees} fees</span>
        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${getSecurityClass(security)}`}>🛡 {security} security</span>
      </div>

      {/* Token + wallet */}
      <div className="flex gap-1.5 flex-wrap">
        <span className="text-[11px] px-2.5 py-0.5 rounded bg-chain-base text-purple-tag-text border border-chain-border">{nativeToken}</span>
        <span className="text-[11px] px-2.5 py-0.5 rounded bg-chain-base text-white/70 border border-chain-border">🦊 {wallet}</span>
      </div>

      {/* Official link */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[12px] font-semibold text-purple-tag-text hover:opacity-70 transition-opacity no-underline w-fit"
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

      {/* Collapsible */}
      {expanded && (
        <div className="border-t border-chain-border pt-3 flex flex-col gap-3">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-chain-hover mb-1">Watch out</span>
            <span className="text-[12px] text-white leading-relaxed">{weaknesses}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-chain-hover mb-1.5">Top protocols</span>
            <div className="flex gap-1.5 flex-wrap">
              {topProtocols.map((p) => (
                <span key={p} className="text-[11px] px-2 py-0.5 rounded bg-chain-base text-purple-tag-text border border-chain-border">{p}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChainCard;
