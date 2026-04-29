# Defi-101
Defi 101 : Beginner's Guide to Types Defi Protocol
git clone https://github.com/Bossino-p/defi-protocol-map.git
cd defi-protocol-map
npm create vite@latest
# choose React
cd defi-protocol-map
npm install
npm run dev
src/
├── components/
│   ├── ProtocolCard.jsx
│   ├── CategorySection.jsx
├── data/
│   └── protocols.js
├── pages/
│   └── Home.jsx
├── App.jsx
// src/data/protocols.js

export const categories = [
  {
    title: "DEX (Decentralized Exchange)",
    description: "Platforms that allow users to swap tokens without intermediaries.",
    examples: ["Uniswap", "SushiSwap"]
  },
  {
    title: "Perpetual DEX",
    description: "Trading platforms for perpetual futures without expiry, using leverage.",
    examples: ["dYdX", "GMX"]
  },
  {
    title: "Lending / Borrowing",
    description: "Protocols where users lend assets to earn yield or borrow against collateral.",
    examples: ["Aave", "Compound"]
  },
  {
    title: "Yield Tokenization",
    description: "Protocols that split yield from principal for advanced strategies.",
    examples: ["Pendle"]
  },
  {
    title: "Liquid Staking",
    description: "Stake assets while maintaining liquidity via derivative tokens.",
    examples: ["Lido"]
  }
];
// src/components/ProtocolCard.jsx

export default function ProtocolCard({ title, description, examples }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "12px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <strong>Examples:</strong>
      <ul>
        {examples.map((ex, i) => (
          <li key={i}>{ex}</li>
        ))}
      </ul>
    </div>
  );
}
