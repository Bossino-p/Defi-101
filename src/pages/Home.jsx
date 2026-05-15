import { useNavigate } from "react-router-dom";

const pages = [
  {
    path: "/defi101",
    title: "DeFi 101",
    description: "Explore the main types of DeFi protocols — from DEXs and lending to restaking and prediction markets.",
    tag: "14 protocol types",
    tagBg: "bg-blue-tag-bg",
    tagText: "text-blue-tag-text",
    border: "border-blue-border",
    hover: "hover:border-blue-accent",
    accent: "text-blue-accent",
  },
  {
    path: "/risk101",
    title: "DeFi Risk 101",
    description: "Understand the risks before putting your funds to work — smart contract exploits, liquidations, phishing, and more.",
    tag: "11 risk types",
    tagBg: "bg-amber-tag-bg",
    tagText: "text-amber-tag-text",
    border: "border-amber-border",
    hover: "hover:border-amber-accent",
    accent: "text-amber-accent",
  },
  {
    path: "/wallet101",
    title: "Wallet 101",
    description: "Understand hot and cold wallets, how to use them safely, and how to avoid the most common scams and phishing attacks.",
    tag: "11 wallets covered",
    tagBg: "bg-teal-tag-bg",
    tagText: "text-teal-tag-text",
    border: "border-teal-border",
    hover: "hover:border-teal-accent",
    accent: "text-teal-accent",
  },
  {
    path: "/chain101",
    title: "Chain 101",
    description: "Learn the blockchains behind DeFi — L1s, L2s, EVM vs non-EVM, and how to choose the right chain for your needs.",
    tag: "10 chains covered",
    tagBg: "bg-purple-tag-bg",
    tagText: "text-purple-tag-text",
    border: "border-purple-border",
    hover: "hover:border-purple-accent",
    accent: "text-purple-accent",
  },
  {
    path: "/token101",
    title: "Token 101",
    description: "Understand token types, how to evaluate them before buying, and the tokenomics that determine long-term value.",
    tag: "9 token types",
    tagBg: "bg-pink-tag-bg",
    tagText: "text-pink-tag-text",
    border: "border-pink-border",
    hover: "hover:border-pink-accent",
    accent: "text-pink-accent",
  },
  {
    path: "/scamguard",
    title: "Scam Guard",
    description: "Recognize and avoid the most common DeFi scams — phishing, rug pulls, approval exploits, fake airdrops, and more.",
    tag: "10 scam types",
    tagBg: "bg-red-tag-bg",
    tagText: "text-red-tag-text",
    border: "border-red-border",
    hover: "hover:border-red-accent",
    accent: "text-red-accent",
  },
  {
    path: "/glossary",
    title: "DeFi Glossary",
    description: "Searchable reference for DeFi terms — APY, slippage, liquidation, oracles, and everything in between.",
    tag: "45 terms",
    tagBg: "bg-green-tag-bg",
    tagText: "text-green-tag-text",
    border: "border-green-border",
    hover: "hover:border-green-accent",
    accent: "text-green-accent",
  },
  {
    path: "/strategies",
    title: "DeFi Strategies",
    description: "Common yield strategies explained step by step — from stablecoin yield to delta neutral and looping.",
    tag: "8 strategies",
    tagBg: "bg-orange-tag-bg",
    tagText: "text-orange-tag-text",
    border: "border-orange-border",
    hover: "hover:border-orange-accent",
    accent: "text-orange-accent",
  },
];

const disclaimerGroups = [
  {
    label: "Market reality",
    items: [
      "Cryptocurrency is highly speculative and most participants lose money.",
      "High APY almost always comes with high risk — there is no free yield.",
      "Past returns in DeFi are not indicative of future performance.",
    ],
  },
  {
    label: "Project reality",
    items: [
      "Most tokens launched will eventually go to zero.",
      "Most projects that launched with a token didn't need one — they needed a product.",
      "Blockchain is a solution to a specific problem: trustless coordination without intermediaries. Most projects don't have that problem.",
      "A whitepaper is not a product — many projects never ship anything.",
    ],
  },
  {
    label: "Personal risk",
    items: [
      "Never invest more than you can afford to lose completely.",
      "DeFi has no customer support, no chargebacks, and no insurance.",
      "Mistakes are permanent — wrong address, lost seed phrase, bad approval.",
      "This hub is for education only — nothing here is financial advice.",
    ],
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-dark-base min-h-screen flex flex-col items-center px-6 py-12 font-sans">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs font-bold tracking-[2px] uppercase text-muted-dark mb-3">
          Learn DeFi
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          DeFi Education Hub
        </h1>
        <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
          A no-fluff guide to decentralized finance — protocols, risks, wallets, chains, tokens, strategies, and everything in between.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-5xl mb-12">
        {pages.map((page) => (
          <button
            key={page.path}
            onClick={() => navigate(page.path)}
            className={`bg-dark-card border ${page.border} ${page.hover} rounded-2xl p-6 text-left cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
          >
            <span className={`text-[10px] font-semibold px-2 py-1 rounded-full ${page.tagBg} ${page.tagText} inline-block mb-3`}>
              {page.tag}
            </span>
            <div className="text-base font-bold text-white mb-2 tracking-tight">
              {page.title}
            </div>
            <p className="text-xs text-muted leading-relaxed mb-4">
              {page.description}
            </p>
            <div className={`text-xs font-semibold ${page.accent}`}>
              Explore →
            </div>
          </button>
        ))}
      </div>

      {/* Coming soon */}
     <p className="text-xs text-muted-darker mb-8">
  More guides coming soon
</p>

{/* Related projects */}
<div className="w-full max-w-5xl mt-4 mb-16">
  <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-muted-darker mb-4">
    Also explore
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
    <a
      href="https://bossino-p.github.io/bitcoin-deepdive/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-dark-card border border-[#3d2000] hover:border-[#f7931a] rounded-2xl p-6 text-left transition-all duration-200 hover:-translate-y-0.5 no-underline group"
    >
      <span className="text-[11px] font-semibold px-2 py-1 rounded-full bg-[#2d1500] text-[#f7931a] inline-block mb-3">
        Standalone project
      </span>
      <div className="text-[18px] font-bold text-white mb-2 tracking-tight">
        Bitcoin Deep Dive
      </div>
      <p className="text-[12px] text-muted leading-relaxed mb-4">
        A dedicated guide to Bitcoin — how it works, the monetary policy, Lightning Network, self-custody, and the philosophy behind it.
      </p>
      <div className="text-[12px] font-semibold text-[#f7931a]">
        Explore ↗
      </div>
    </a>
  </div>
</div>

      {/* Disclaimer */}
      <div className="w-full max-w-5xl border-t border-dark-border pt-10 text-left">
        <p className="text-[10px] font-bold uppercase tracking-[1.5px] text-muted-darker mb-6">
          Before you dive in
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {disclaimerGroups.map(({ label, items }) => (
            <div key={label}>
              <p className="text-[10px] font-bold uppercase tracking-[0.8px] text-disclaimer mb-3">
                {label}
              </p>
              <div className="flex flex-col gap-2">
                {items.map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-muted-darker text-xs mt-0.5 shrink-0">—</span>
                    <p className="text-xs text-disclaimer leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-muted-darker text-center leading-relaxed">
          This hub is built for education. Do your own research. The space moves fast — always verify information is current before acting on it.
        </p>
      </div>

    </div>
  );
}

export default Home;
