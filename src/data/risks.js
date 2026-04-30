export const risks = [
  // ─── PROTOCOL RISKS ───────────────────────────────────────────
  {
    title: "Smart Contract Risk",
    category: "Protocol",
    severity: "High",
    likelihood: "Medium",
    description:
      "Vulnerabilities or bugs in a protocol's code that can be exploited to drain funds. No smart contract is 100% bug-free.",
    howItHappens:
      "Attackers find logic errors, reentrancy bugs, or arithmetic flaws in the contract code and exploit them — often draining the entire protocol in a single transaction.",
    realExample:
      "Euler Finance hack (March 2023) — a flash loan exploit drained $197M due to a logic flaw in their donation mechanism.",
    howToProtect:
      "Use only audited, battle-tested protocols. Check audit reports on the protocol's docs. Avoid new unaudited protocols regardless of APY.",
    affectedProtocols: ["Lending / Borrowing", "DEX", "Yield Aggregators", "Bridges"],
  },

  {
    title: "Bridge Risk",
    category: "Protocol",
    severity: "High",
    likelihood: "High",
    description:
      "Bridges hold large amounts of locked assets making them prime targets for exploits. They are the most hacked infrastructure in DeFi.",
    howItHappens:
      "Attackers exploit bridge validation logic, compromise multi-sig signers, or find flaws in the message-passing mechanism to mint unbacked tokens or drain locked funds.",
    realExample:
      "Ronin Bridge hack (March 2022) — $625M stolen after attackers compromised 5 of 9 validator keys. Largest DeFi hack to date.",
    howToProtect:
      "Use well-audited bridges with decentralized validation. Avoid bridging large amounts at once. Prefer canonical bridges for L2 withdrawals when possible.",
    affectedProtocols: ["Bridges", "Bridge Aggregators"],
  },

  {
    title: "Oracle Manipulation",
    category: "Protocol",
    severity: "High",
    likelihood: "Medium",
    description:
      "Protocols rely on price oracles to determine asset values. If an oracle is manipulated, the protocol makes decisions based on false prices.",
    howItHappens:
      "Attackers use flash loans to temporarily distort asset prices on low-liquidity DEXs used as price oracles, then exploit the false price in lending or derivatives protocols.",
    realExample:
      "Mango Markets exploit (October 2022) — attacker manipulated MNGO token price to inflate collateral value and borrow $117M against it.",
    howToProtect:
      "Use protocols that rely on decentralized oracles like Chainlink rather than on-chain spot prices. Avoid protocols using single-source price feeds.",
    affectedProtocols: ["Lending / Borrowing", "Perpetual DEX", "Derivatives"],
  },

  {
    title: "Governance Risk",
    category: "Protocol",
    severity: "Medium",
    likelihood: "Low",
    description:
      "A protocol's governance system gets captured or manipulated to pass proposals that benefit attackers at the expense of users.",
    howItHappens:
      "An attacker accumulates enough governance tokens (sometimes via flash loan) to pass a malicious proposal, or a small group of insiders push through changes that harm the protocol.",
    realExample:
      "Beanstalk hack (April 2022) — attacker used a flash loan to acquire enough governance tokens to pass a malicious proposal and drain $182M in a single transaction.",
    howToProtect:
      "Prefer protocols with timelocks on governance execution, large and distributed token holders, and multi-sig safeguards on critical functions.",
    affectedProtocols: ["Lending / Borrowing", "DEX", "Yield Aggregators"],
  },

  // ─── MARKET RISKS ─────────────────────────────────────────────
  {
    title: "Liquidation Risk",
    category: "Market",
    severity: "High",
    likelihood: "High",
    description:
      "When borrowing against collateral, a sharp price drop can push your collateral ratio below the threshold, triggering automatic liquidation of your position.",
    howItHappens:
      "You borrow against volatile collateral. The market drops suddenly. Before you can add more collateral or repay, a liquidator bot closes your position and takes a liquidation penalty.",
    realExample:
      "During the May 2021 and November 2022 market crashes, hundreds of millions in positions were liquidated on Aave and Compound within hours.",
    howToProtect:
      "Maintain a safe collateral ratio well above the minimum. Set price alerts. Avoid using highly volatile assets as collateral. Never borrow the maximum allowed.",
    affectedProtocols: ["Lending / Borrowing", "Perpetual DEX"],
  },

  {
    title: "Impermanent Loss",
    category: "Market",
    severity: "Medium",
    likelihood: "High",
    description:
      "When providing liquidity to a DEX pool, price divergence between the two assets causes you to end up with less value than if you had simply held the tokens.",
    howItHappens:
      "AMMs automatically rebalance your pool position as prices change. If one token rises significantly, the pool sells it for the other, leaving you underexposed to the gainer.",
    realExample:
      "An LP providing ETH/USDC liquidity during a 2x ETH rally would have earned less than simply holding ETH and USDC — the pool sold ETH as it rose.",
    howToProtect:
      "Stick to stable/stable or correlated asset pairs (e.g. ETH/stETH). Only provide liquidity when you expect prices to stay range-bound. Factor in fees vs impermanent loss.",
    affectedProtocols: ["DEX"],
  },

  {
    title: "Depeg Risk",
    category: "Market",
    severity: "High",
    likelihood: "Medium",
    description:
      "A stablecoin or liquid staking token loses its intended peg, causing holders to suffer unexpected losses.",
    howItHappens:
      "Algorithmic stablecoins can enter a death spiral if confidence collapses. Fiat-backed stablecoins can depeg if the issuer faces insolvency. LSTs can depeg during mass exits or slashing events.",
    realExample:
      "UST/Luna collapse (May 2022) — UST lost its $1 peg and collapsed to near zero, wiping out ~$40B in value within days.",
    howToProtect:
      "Favor fiat-backed stablecoins (USDC, USDT) over algorithmic ones. Understand the backing mechanism before holding. Diversify across multiple stablecoins.",
    affectedProtocols: ["Stablecoins", "Liquid Staking", "Yield Tokenization"],
  },

  // ─── HUMAN RISKS ──────────────────────────────────────────────
  {
    title: "Phishing & Fake Apps",
    category: "Human",
    severity: "High",
    likelihood: "High",
    description:
      "Malicious websites, fake apps, and social engineering tricks that steal your wallet credentials or get you to sign harmful transactions.",
    howItHappens:
      "You click a fake link in Discord, Twitter, or Google ads. The site looks identical to a real protocol. You connect your wallet and sign a transaction that drains it entirely.",
    realExample:
      "Fake MetaMask apps on Google Play Store have stolen millions. Fake Uniswap phishing sites consistently appear in Google search ads above the real site.",
    howToProtect:
      "Bookmark legitimate protocol URLs and only use those. Never click links in DMs or Discord. Double-check the URL before connecting your wallet. Use a hardware wallet.",
    affectedProtocols: ["DEX", "Lending / Borrowing", "Bridges"],
  },

  {
    title: "Key Management Risk",
    category: "Human",
    severity: "High",
    likelihood: "Medium",
    description:
      "Losing access to your private key or seed phrase means permanent, irrecoverable loss of all funds in that wallet.",
    howItHappens:
      "Seed phrase stored in a cloud note gets hacked. Private key stored in a screenshot or email is exposed. Hardware wallet is lost with no backup. Someone sees your seed phrase written down.",
    realExample:
      "An estimated 20% of all Bitcoin (roughly $140B+) is permanently lost due to lost keys or forgotten passwords — and DeFi wallets face the same risk.",
    howToProtect:
      "Write your seed phrase on paper and store it in multiple secure physical locations. Never store it digitally. Use a hardware wallet for significant funds.",
    affectedProtocols: ["All protocols"],
  },

  {
    title: "Rug Pull & Exit Scam",
    category: "Human",
    severity: "High",
    likelihood: "Medium",
    description:
      "A project's team deliberately drains liquidity or abandons the project after raising funds, leaving investors with worthless tokens.",
    howItHappens:
      "Team launches a token with a flashy website and promises of high APY. Once enough liquidity is in the pool or enough investors have bought, they drain the liquidity and disappear.",
    realExample:
      "Squid Game token (November 2021) — developers drained $3.4M in liquidity and disappeared. Token price dropped 99.99% in seconds.",
    howToProtect:
      "Research the team — anonymous teams are higher risk. Check if liquidity is locked. Look for audits. Be skeptical of extremely high APY promises. Start with small amounts.",
    affectedProtocols: ["Launchpads", "DEX", "Yield Aggregators"],
  },

  {
    title: "Regulatory Risk",
    category: "Human",
    severity: "Medium",
    likelihood: "Medium",
    description:
      "Governments or regulators restrict, ban, or sanction DeFi protocols, making them inaccessible or causing token value to collapse.",
    howItHappens:
      "A protocol gets added to a sanctions list, forcing front-ends to block users and causing panic selling. Exchanges delist associated tokens. Developers face legal action.",
    realExample:
      "Tornado Cash (August 2022) — sanctioned by the US Treasury, its smart contract addresses were blacklisted, developers arrested, and TORN token price collapsed 80%.",
    howToProtect:
      "Stay informed about regulatory developments in your country. Avoid protocols with high regulatory risk profiles. Diversify across protocols to limit single-protocol exposure.",
    affectedProtocols: ["All protocols"],
  },
];
