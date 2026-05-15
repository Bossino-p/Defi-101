import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { l1Chains, l2Chains, otherEcosystems } from "../data/chains";
import ChainCard from "../components/ChainCard";

const speeds = ["All", "Fast", "Medium", "Slow"];
const feeOptions = ["All", "Low", "Medium", "High"];

function FilterRow({ label, options, selected, onSelect }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[11px] font-bold uppercase tracking-wide text-chain-hover min-w-[84px]">{label}</span>
      <div className="flex gap-1.5 flex-wrap">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full border transition-all duration-150 cursor-pointer
              ${selected === opt
                ? "bg-purple-accent border-purple-accent text-white font-semibold"
                : "bg-chain-card border-chain-border text-white hover:bg-chain-base hover:border-chain-hover"
              }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function ChainPage() {
  const [selectedSpeed, setSelectedSpeed] = useState("All");
  const [selectedFees, setSelectedFees] = useState("All");
  const navigate = useNavigate();

  function filterChains(chains) {
    return chains.filter((c) => {
      const speedMatch = selectedSpeed === "All" || c.speed === selectedSpeed;
      const feesMatch = selectedFees === "All" || c.fees === selectedFees;
      return speedMatch && feesMatch;
    });
  }

  const filteredL1 = filterChains(l1Chains);
  const filteredL2 = filterChains(l2Chains);

  return (
    <div className="bg-chain-base min-h-screen px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-[13px] text-chain-hover hover:text-purple-tag-text transition-colors mb-7"
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">Chain 101</h1>
          <p className="text-sm text-purple-accent mt-1.5">
            Understand the blockchains behind DeFi — what they are, how they differ, and which to use.
          </p>
        </div>

        {/* ── SECTION 1: Mental model ── */}
        <div className="mb-12">
          <div className="bg-chain-card border border-purple-border rounded-2xl p-6 mb-4">
            <div className="text-[11px] font-bold uppercase tracking-widest text-purple-tag-text mb-2.5">The big picture</div>
            <p className="text-[15px] text-white leading-relaxed">
              A blockchain is a shared database that no single person controls. DeFi protocols run on top of blockchains — and different blockchains make different tradeoffs between{" "}
              <strong className="text-purple-tag-text">speed</strong>,{" "}
              <strong className="text-purple-tag-text">cost</strong>, and{" "}
              <strong className="text-purple-tag-text">security</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              { icon: "🔺", title: "The blockchain trilemma", body: "Every chain must balance security, speed, and decentralization. Improving one usually means sacrificing another." },
              { icon: "⛽", title: "Gas fees", body: "Every transaction costs a small fee paid to validators. Fees rise when the network is congested." },
              { icon: "🌐", title: "Why multiple chains exist", body: "Different chains optimize for different things. Ethereum prioritizes security. Solana prioritizes speed." },
              { icon: "🔌", title: "EVM vs non-EVM", body: "EVM chains share wallet and tool compatibility. Non-EVM chains (Solana, Sui) require different wallets entirely." },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-chain-card border border-chain-border rounded-xl p-4 flex gap-3.5">
                <span className="text-[22px] flex-shrink-0">{icon}</span>
                <div>
                  <div className="text-[13px] font-bold text-white mb-1">{title}</div>
                  <div className="text-[12px] text-white/70 leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: L1 vs L2 ── */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">L1 vs L2 — the highway analogy</h2>
          <p className="text-[13px] text-purple-tag-text mb-4">The simplest way to understand the relationship between base chains and layer 2s.</p>
          <div className="bg-chain-card border border-chain-border rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "🛣️", title: "Layer 1 — The main highway", body: "The base blockchain (e.g. Ethereum). Secure and trusted, but congested during peak hours. High security, slower speed, higher cost." },
              { icon: "🚀", title: "Layer 2 — The express lanes", body: "Built on top of L1. Bundles many transactions and settles them on L1 in batches. Much faster and cheaper, while inheriting Ethereum's security." },
              { icon: "🔄", title: "Bridging between them", body: "Moving assets from Ethereum to an L2 requires a bridge. Moving to a different L1 (e.g. Solana) requires a cross-chain bridge — higher risk." },
            ].map(({ icon, title, body }) => (
              <div key={title}>
                <div className="text-[24px] mb-2">{icon}</div>
                <div className="text-[14px] font-bold text-white mb-1.5">{title}</div>
                <p className="text-[12px] text-white/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FILTERS ── */}
        <div className="bg-chain-card border border-chain-border rounded-xl p-5 mb-7 flex flex-col gap-4">
          <FilterRow label="Speed" options={speeds} selected={selectedSpeed} onSelect={setSelectedSpeed} />
          <FilterRow label="Fees" options={feeOptions} selected={selectedFees} onSelect={setSelectedFees} />
        </div>

        {/* ── SECTION 3: L1s ── */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">Layer 1 Chains</h2>
          <p className="text-[13px] text-purple-tag-text mb-4">Base blockchains — each with their own consensus, token, and ecosystem.</p>
          {filteredL1.length === 0 ? (
            <div className="text-center py-10 text-chain-hover text-sm border border-dashed border-chain-border rounded-xl">No chains match these filters.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredL1.map((chain) => <ChainCard key={chain.name} {...chain} />)}
            </div>
          )}
        </div>

        {/* ── SECTION 4: L2s ── */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">Ethereum Layer 2s</h2>
          <p className="text-[13px] text-purple-tag-text mb-4">Built on top of Ethereum — faster and cheaper, secured by Ethereum underneath.</p>
          {filteredL2.length === 0 ? (
            <div className="text-center py-10 text-chain-hover text-sm border border-dashed border-chain-border rounded-xl">No chains match these filters.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredL2.map((chain) => <ChainCard key={chain.name} {...chain} />)}
            </div>
          )}
        </div>

        {/* ── SECTION 5: How to choose ── */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">How to choose a chain</h2>
          <p className="text-[13px] text-purple-tag-text mb-4">A simple decision guide for beginners.</p>
          <div className="bg-chain-card border border-chain-border rounded-2xl p-6 flex flex-col">
            {[
              { q: "I want maximum security and trust", a: "Use Ethereum mainnet for high-value, long-term positions." },
              { q: "I want low fees for everyday DeFi", a: "Use Arbitrum or Base — deepest liquidity among L2s." },
              { q: "I'm a Coinbase user new to DeFi", a: "Start on Base — native Coinbase Wallet support and easy onramp." },
              { q: "I'm a MetaMask user exploring L2s", a: "Try Linea — natively integrated into MetaMask, one-click setup." },
              { q: "I want high speed trading and low costs", a: "Solana — but use Phantom wallet and expect a different ecosystem." },
              { q: "I want cryptographic security proofs (ZK)", a: "zkSync or Linea — both use ZK rollup technology." },
            ].map(({ q, a }, i, arr) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-2 gap-4 py-3.5 ${i < arr.length - 1 ? "border-b border-chain-border" : ""}`}>
                <div className="text-[13px] text-purple-tag-text font-medium">"{q}"</div>
                <div className="text-[13px] text-white leading-relaxed">→ {a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 6: Other ecosystems ── */}
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">Other ecosystems</h2>
          <p className="text-[13px] text-purple-tag-text mb-4">Major blockchains outside the EVM and Solana world. Dedicated guides coming soon.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {otherEcosystems.map((eco) => (
              <div key={eco.name} className="bg-chain-card border border-chain-border rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-[22px]">{eco.emoji}</span>
                  <span className="text-[14px] font-bold text-white">{eco.name}</span>
                  {eco.url ? (
                    <a
                      href={eco.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-[#2d1500] text-[#f7931a] border border-[#3d2000] hover:border-[#f7931a] transition-colors no-underline"
                    >
                      Explore ↗
                    </a>
                  ) : (
                    <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-chain-base text-chain-hover border border-chain-border">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="text-[12px] text-white/70 leading-relaxed">{eco.summary}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ChainPage;
