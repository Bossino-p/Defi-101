import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { l1Chains, l2Chains, otherEcosystems } from "../data/chains";
import ChainCard from "../components/ChainCard";

const speeds = ["All", "Fast", "Medium", "Slow"];
const feeOptions = ["All", "Low", "Medium", "High"];

function FilterRow({ label, options, selected, onSelect }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
      <span style={{
        fontSize: "11px",
        fontWeight: 700,
        color: "#7c3aed",
        textTransform: "uppercase",
        letterSpacing: "0.6px",
        minWidth: "84px",
      }}>
        {label}
      </span>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            style={{
              fontSize: "13px",
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: "20px",
              border: selected === opt ? "1px solid #7c3aed" : "1px solid #2d1f45",
              background: selected === opt ? "#5b21b6" : "#1a1230",
              color: "#ffffff",
              cursor: "pointer",
              transition: "all 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              if (selected !== opt) {
                e.currentTarget.style.background = "#2d1f45";
                e.currentTarget.style.borderColor = "#5b21b6";
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== opt) {
                e.currentTarget.style.background = "#1a1230";
                e.currentTarget.style.borderColor = "#2d1f45";
              }
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", margin: "0 0 6px 0", letterSpacing: "-0.3px" }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontSize: "13px", color: "#a78bfa", margin: 0, lineHeight: "1.5" }}>{subtitle}</p>}
    </div>
  );
}

function InfoCard({ icon, title, body }) {
  return (
    <div style={{
      background: "#120f1a",
      border: "1px solid #2d1f45",
      borderRadius: "12px",
      padding: "16px 20px",
      display: "flex",
      gap: "14px",
      alignItems: "flex-start",
    }}>
      <span style={{ fontSize: "22px", flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>{title}</div>
        <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6" }}>{body}</div>
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
    <div style={{
      background: "#0a0812",
      minHeight: "100vh",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "#4c1d95",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "inherit",
            marginBottom: "28px",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#a78bfa"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#4c1d95"}
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.5px" }}>
            Chain 101
          </h1>
          <p style={{ fontSize: "14px", color: "#7c3aed", marginTop: "6px", marginBottom: 0 }}>
            Understand the blockchains behind DeFi — what they are, how they differ, and which to use.
          </p>
        </div>

        {/* ── SECTION 1: Mental model ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            background: "#120f1a",
            border: "1px solid #4c1d95",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "16px",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#a78bfa", marginBottom: "10px" }}>
              The big picture
            </div>
            <p style={{ fontSize: "15px", color: "#ffffff", lineHeight: "1.7", margin: 0 }}>
              A blockchain is a shared database that no single person controls. Instead of a company storing your data, thousands of computers around the world hold identical copies. DeFi protocols run on top of blockchains — and different blockchains make different tradeoffs between <strong style={{ color: "#a78bfa" }}>speed</strong>, <strong style={{ color: "#a78bfa" }}>cost</strong>, and <strong style={{ color: "#a78bfa" }}>security</strong>.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "10px",
          }}>
            <InfoCard
              icon="🔺"
              title="The blockchain trilemma"
              body="Every chain must balance three things: security, speed, and decentralization. Improving one usually means sacrificing another. No chain has fully solved all three."
            />
            <InfoCard
              icon="⛽"
              title="Gas fees"
              body="Every transaction on a blockchain costs a small fee paid to validators. Fees rise when the network is congested — more users = higher gas."
            />
            <InfoCard
              icon="🌐"
              title="Why multiple chains exist"
              body="Different chains optimize for different things. Ethereum prioritizes security. Solana prioritizes speed. L2s try to inherit Ethereum's security while reducing costs."
            />
            <InfoCard
              icon="🔌"
              title="EVM vs non-EVM"
              body="EVM chains (Ethereum, Arbitrum, Base, BNB) all share the same wallet and tool compatibility. Non-EVM chains (Solana, Sui) require different wallets and tools entirely."
            />
          </div>
        </div>

        {/* ── SECTION 2: L1 vs L2 analogy ── */}
        <div style={{ marginBottom: "48px" }}>
          <SectionHeader
            title="L1 vs L2 — the highway analogy"
            subtitle="The simplest way to understand the relationship between base chains and layer 2s."
          />
          <div style={{
            background: "#120f1a",
            border: "1px solid #2d1f45",
            borderRadius: "14px",
            padding: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}>
            <div>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>🛣️</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>Layer 1 — The main highway</div>
              <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>
                The base blockchain (e.g. Ethereum). Secure and trusted, but congested during peak hours. Every transaction settles here. High security, slower speed, higher cost.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>🚀</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>Layer 2 — The express lanes</div>
              <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>
                Built on top of L1. Bundles many transactions together and settles them on L1 in batches. Much faster and cheaper, while inheriting Ethereum's security underneath.
              </p>
            </div>
            <div>
              <div style={{ fontSize: "24px", marginBottom: "8px" }}>🔄</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff", marginBottom: "6px" }}>Bridging between them</div>
              <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>
                Moving assets from Ethereum to an L2 (or back) requires a bridge. Moving to a completely different L1 (e.g. Solana) requires a cross-chain bridge — higher risk.
              </p>
            </div>
          </div>
        </div>

        {/* ── FILTERS ── */}
        <div style={{
          background: "#120f1a",
          border: "1px solid #2d1f45",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "28px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <FilterRow label="Speed" options={speeds} selected={selectedSpeed} onSelect={setSelectedSpeed} />
          <FilterRow label="Fees" options={feeOptions} selected={selectedFees} onSelect={setSelectedFees} />
        </div>

        {/* ── SECTION 3: L1 Chains ── */}
        <div style={{ marginBottom: "48px" }}>
          <SectionHeader
            title="Layer 1 Chains"
            subtitle="Base blockchains — each with their own consensus, token, and ecosystem."
          />
          {filteredL1.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#4c1d95", fontSize: "13px", border: "1px dashed #2d1f45", borderRadius: "12px" }}>
              No chains match these filters.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
              {filteredL1.map((chain) => <ChainCard key={chain.name} {...chain} />)}
            </div>
          )}
        </div>

        {/* ── SECTION 4: L2 Chains ── */}
        <div style={{ marginBottom: "48px" }}>
          <SectionHeader
            title="Ethereum Layer 2s"
            subtitle="Built on top of Ethereum — faster and cheaper, secured by Ethereum underneath."
          />
          {filteredL2.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#4c1d95", fontSize: "13px", border: "1px dashed #2d1f45", borderRadius: "12px" }}>
              No chains match these filters.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
              {filteredL2.map((chain) => <ChainCard key={chain.name} {...chain} />)}
            </div>
          )}
        </div>

        {/* ── SECTION 5: How to choose ── */}
        <div style={{ marginBottom: "48px" }}>
          <SectionHeader
            title="How to choose a chain"
            subtitle="A simple decision guide for beginners."
          />
          <div style={{
            background: "#120f1a",
            border: "1px solid #2d1f45",
            borderRadius: "14px",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}>
            {[
              { q: "I want maximum security and trust", a: "Use Ethereum mainnet for high-value, long-term positions." },
              { q: "I want low fees for everyday DeFi", a: "Use Arbitrum or Base — deepest liquidity among L2s." },
              { q: "I'm a Coinbase user new to DeFi", a: "Start on Base — native Coinbase Wallet support and easy onramp." },
              { q: "I'm a MetaMask user exploring L2s", a: "Try Linea — natively integrated into MetaMask, one-click setup." },
              { q: "I want high speed trading and low costs", a: "Solana — but use Phantom wallet and expect a different ecosystem." },
              { q: "I want cryptographic security proofs (ZK)", a: "zkSync or Linea — both use ZK rollup technology." },
            ].map(({ q, a }, i, arr) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                padding: "14px 0",
                borderBottom: i < arr.length - 1 ? "1px solid #2d1f45" : "none",
                alignItems: "start",
              }}>
                <div style={{ fontSize: "13px", color: "#a78bfa", fontWeight: 500 }}>"{q}"</div>
                <div style={{ fontSize: "13px", color: "#e2e8f0", lineHeight: "1.5" }}>→ {a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 6: Other ecosystems ── */}
        <div style={{ marginBottom: "16px" }}>
          <SectionHeader
            title="Other ecosystems"
            subtitle="Major blockchains outside the EVM and Solana world. Dedicated guides coming soon."
          />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "10px",
          }}>
            {otherEcosystems.map((eco) => (
              <div key={eco.name} style={{
                background: "#120f1a",
                border: "1px solid #2d1f45",
                borderRadius: "12px",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "22px" }}>{eco.emoji}</span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{eco.name}</span>
                  <span style={{
                    fontSize: "10px",
                    padding: "2px 7px",
                    borderRadius: "20px",
                    background: "#1a1230",
                    color: "#6d28d9",
                    border: "1px solid #2d1f45",
                    marginLeft: "auto",
                  }}>
                    Coming soon
                  </span>
                </div>
                <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>
                  {eco.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ChainPage;
