import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenTypes, evaluationChecklist, tokenomicsCards } from "../data/tokens";

const riskOptions = ["All", "Low", "Medium", "High"];

function getRiskClass(risk) {
  if (risk === "High") return "bg-red-tag-bg text-red-tag-text";
  if (risk === "Medium") return "bg-amber-tag-bg text-amber-tag-text";
  return "bg-green-tag-bg text-green-tag-text";
}

function TokenCard({ type, emoji, description, examples, keyProperties, risk, usedIn, watchOut }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-token-card border border-token-border rounded-xl p-5 flex flex-col gap-3 hover:border-token-hover transition-colors duration-150">
      <div className="flex justify-between items-start gap-2">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{emoji}</span>
          <h2 className="text-[15px] font-semibold text-white leading-snug">{type}</h2>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${getRiskClass(risk)}`}>
          {risk} risk
        </span>
      </div>

      <p className="text-[13px] text-pink-tag-text leading-relaxed">{description}</p>

      <div className="flex gap-1.5 flex-wrap">
        {examples.map((ex) => (
          <span key={ex} className="text-[11px] px-2 py-0.5 rounded bg-token-base text-white/70 border border-token-border">{ex}</span>
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
        <div className="border-t border-token-border pt-3 flex flex-col gap-3">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-token-hover mb-1">Key properties</span>
            <ul className="list-disc list-inside flex flex-col gap-1">
              {keyProperties.map((p, i) => (
                <li key={i} className="text-[12px] text-white leading-relaxed">{p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-token-base border-l-4 border-pink-accent rounded-r-lg px-3.5 py-2.5">
            <span className="block text-[10px] font-bold uppercase tracking-wide text-pink-accent mb-1">⚠ Watch out</span>
            <span className="text-[12px] text-white leading-relaxed">{watchOut}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wide text-token-hover mb-1.5">Used in</span>
            <div className="flex gap-1.5 flex-wrap">
              {usedIn.map((p) => (
                <span key={p} className="text-[11px] px-2 py-0.5 rounded bg-token-base text-pink-tag-text border border-token-border">{p}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TokenPage() {
  const [selectedRisk, setSelectedRisk] = useState("All");
  const navigate = useNavigate();

  const filtered = tokenTypes.filter((t) => selectedRisk === "All" || t.risk === selectedRisk);

  return (
    <div className="bg-token-base min-h-screen px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-[13px] text-token-hover hover:text-pink-tag-text transition-colors mb-7"
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">Token 101</h1>
          <p className="text-sm text-pink-accent mt-1.5">
            Understand what tokens are, how they differ, and how to evaluate them before buying.
          </p>
        </div>

        {/* ── SECTION 1: Mental model ── */}
        <div className="mb-12">
          <div className="bg-token-card border border-pink-accent rounded-2xl p-6 mb-4">
            <div className="text-[11px] font-bold uppercase tracking-widest text-pink-tag-text mb-2.5">Coins vs tokens</div>
            <p className="text-[15px] text-white leading-relaxed">
              A <strong className="text-pink-tag-text">coin</strong> is native to its own blockchain — ETH on Ethereum, SOL on Solana. A{" "}
              <strong className="text-pink-tag-text">token</strong> is built on top of an existing blockchain using a smart contract. Most DeFi assets you interact with are tokens, not coins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              { icon: "🏗️", title: "Tokens are smart contracts", body: "Every ERC-20 token is a smart contract. Token behavior is defined in code that can be audited or exploited." },
              { icon: "🌐", title: "One blockchain, many tokens", body: "Thousands of tokens exist on Ethereum alone. Any developer can create a token in minutes." },
              { icon: "💎", title: "Value is not guaranteed", body: "A token existing doesn't mean it has value. Value comes from utility, demand, and scarcity." },
              { icon: "📋", title: "Tokenomics matters", body: "How a token is distributed and how new ones are created determines whether holders gain or get diluted." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-token-card border border-token-border rounded-xl p-4 flex gap-3">
                <span className="text-[22px] flex-shrink-0">{icon}</span>
                <div>
                  <div className="text-[13px] font-bold text-white mb-1">{title}</div>
                  <div className="text-[12px] text-white/70 leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: Token types ── */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">Token types</h2>
          <p className="text-[13px] text-pink-tag-text mb-4">Not all tokens work the same way. Understanding the type tells you how it gets its value.</p>

          {/* Filter */}
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wide text-token-hover min-w-[84px]">Risk</span>
            <div className="flex gap-1.5 flex-wrap">
              {riskOptions.map((opt) => (
                <button key={opt} onClick={() => setSelectedRisk(opt)} className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150 cursor-pointer
                  ${selectedRisk === opt
                    ? "bg-pink-accent border-pink-accent text-white font-semibold"
                    : "bg-token-card border-token-border text-white hover:bg-token-base hover:border-token-hover"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-token-hover mb-3">{filtered.length} token type{filtered.length !== 1 ? "s" : ""} shown</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((t) => <TokenCard key={t.type} {...t} />)}
          </div>
        </div>

        {/* ── SECTION 3: Evaluation checklist ── */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">How to evaluate a token</h2>
          <p className="text-[13px] text-pink-tag-text mb-4">Ask these questions before buying anything. If you can't answer them — don't buy.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {evaluationChecklist.map((item, i) => (
              <div key={i} className="bg-token-card border border-token-border rounded-xl p-4 flex flex-col gap-2 hover:border-token-hover transition-colors duration-150">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[13px] font-bold text-pink-tag-text leading-snug">{item.question}</span>
                </div>
                <p className="text-[12px] text-white/70 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: Tokenomics ── */}
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">Tokenomics basics</h2>
          <p className="text-[13px] text-pink-tag-text mb-4">The six concepts that determine whether a token rewards or dilutes its holders over time.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {tokenomicsCards.map((card) => (
              <div key={card.term} className="bg-token-card border border-token-border rounded-xl p-4 flex flex-col gap-2 hover:border-token-hover transition-colors duration-150">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{card.icon}</span>
                  <span className="text-[14px] font-bold text-white">{card.term}</span>
                </div>
                <p className="text-[12px] text-white/70 leading-relaxed">{card.definition}</p>
                <div className="bg-token-base border-l-2 border-pink-accent rounded-r px-3 py-2 text-[11px] text-pink-tag-text leading-relaxed">
                  {card.example}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default TokenPage;
