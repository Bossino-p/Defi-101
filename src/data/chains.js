export const l1Chains = [
  {
    name: "Ethereum",
    layer: "L1",
    ecosystem: "EVM",
    speed: "Slow",
    fees: "High",
    security: "High",
    bestFor:
      "The most trusted and decentralized chain. Home to the largest DeFi ecosystem. Best for high-value transactions where security matters most.",
    weaknesses:
      "Expensive gas fees during peak usage. Slow confirmation times compared to newer chains.",
    nativeToken: "ETH",
    wallet: "MetaMask or Rabby",
    topProtocols: ["Uniswap", "Aave", "Lido", "MakerDAO"],
    url: "https://ethereum.org",
  },
  {
    name: "Solana",
    layer: "L1",
    ecosystem: "SVM",
    speed: "Fast",
    fees: "Low",
    security: "Medium",
    bestFor:
      "High-speed trading and low-cost transactions. Most active non-EVM DeFi ecosystem. Popular for perps, memecoins, and NFTs.",
    weaknesses:
      "Has experienced multiple network outages. Less decentralized than Ethereum. Requires a separate wallet (Phantom, Backpack).",
    nativeToken: "SOL",
    wallet: "Phantom or Backpack",
    topProtocols: ["Jupiter", "Raydium", "Drift", "Marinade"],
    url: "https://solana.com",
  },
  {
    name: "BNB Chain",
    layer: "L1",
    ecosystem: "EVM",
    speed: "Fast",
    fees: "Low",
    security: "Low",
    bestFor:
      "Low-cost EVM transactions. Large user base especially in Asia. Compatible with MetaMask — easy to switch from Ethereum.",
    weaknesses:
      "Highly centralized — only 21 validators controlled by Binance. Higher risk of censorship and centralized failure.",
    nativeToken: "BNB",
    wallet: "MetaMask or Trust Wallet",
    topProtocols: ["PancakeSwap", "Venus", "Lista DAO"],
    url: "https://www.bnbchain.org",
  },
  {
    name: "Avalanche",
    layer: "L1",
    ecosystem: "EVM",
    speed: "Fast",
    fees: "Medium",
    security: "Medium",
    bestFor:
      "Fast finality and EVM compatibility. Popular for gaming and institutional DeFi. Subnet architecture allows custom chains.",
    weaknesses:
      "Smaller DeFi ecosystem than Ethereum or Solana. AVAX token required for gas even on subnets.",
    nativeToken: "AVAX",
    wallet: "MetaMask or Core Wallet",
    topProtocols: ["Trader Joe", "Aave", "Benqi"],
    url: "https://www.avax.network",
  },
  {
    name: "Sui",
    layer: "L1",
    ecosystem: "MoveVM",
    speed: "Fast",
    fees: "Low",
    security: "Medium",
    bestFor:
      "High throughput and low latency. Growing DeFi ecosystem. Unique object-based model enables powerful on-chain applications.",
    weaknesses:
      "Newer chain with less battle-tested security. Requires a dedicated wallet (Sui Wallet, Suiet). Different programming model from EVM.",
    nativeToken: "SUI",
    wallet: "Sui Wallet or Suiet",
    topProtocols: ["Cetus", "Navi Protocol", "Aftermath Finance"],
    url: "https://sui.io",
  },
];

export const l2Chains = [
  {
    name: "Arbitrum",
    layer: "L2",
    ecosystem: "EVM",
    speed: "Fast",
    fees: "Low",
    security: "High",
    bestFor:
      "The largest L2 by TVL. Deepest DeFi liquidity outside Ethereum mainnet. Best starting point for users moving from Ethereum to L2.",
    weaknesses:
      "Centralized sequencer — Arbitrum controls transaction ordering. Full decentralization still in progress.",
    nativeToken: "ETH (gas) / ARB (governance)",
    wallet: "MetaMask or Rabby",
    topProtocols: ["GMX", "Uniswap", "Aave", "Pendle"],
    url: "https://arbitrum.io",
  },
  {
    name: "Optimism",
    layer: "L2",
    ecosystem: "EVM",
    speed: "Fast",
    fees: "Low",
    security: "High",
    bestFor:
      "Strong developer ecosystem. Powers the Superchain (Base, etc). Good for users who want an established L2 with strong governance.",
    weaknesses:
      "Slightly lower TVL than Arbitrum. Fraud proof system still maturing.",
    nativeToken: "ETH (gas) / OP (governance)",
    wallet: "MetaMask or Rabby",
    topProtocols: ["Velodrome", "Uniswap", "Aave", "Synthetix"],
    url: "https://www.optimism.io",
  },
  {
    name: "Base",
    layer: "L2",
    ecosystem: "EVM",
    speed: "Fast",
    fees: "Low",
    security: "High",
    bestFor:
      "Built by Coinbase. Fastest growing L2 by user activity. Best onramp for Coinbase users moving into DeFi for the first time.",
    weaknesses:
      "Controlled by Coinbase — more centralized than Arbitrum or Optimism. No native governance token.",
    nativeToken: "ETH (gas)",
    wallet: "MetaMask, Rabby, or Coinbase Wallet",
    topProtocols: ["Aerodrome", "Uniswap", "Aave", "Morpho"],
    url: "https://base.org",
  },
  {
    name: "zkSync",
    layer: "L2",
    ecosystem: "EVM",
    speed: "Fast",
    fees: "Low",
    security: "High",
    bestFor:
      "ZK rollup with strong security guarantees. Transactions are cryptographically proven rather than relying on fraud proofs.",
    weaknesses:
      "Smaller ecosystem than Arbitrum or Base. Some EVM compatibility quirks that can cause issues with certain dApps.",
    nativeToken: "ETH (gas) / ZK (governance)",
    wallet: "MetaMask or Rabby",
    topProtocols: ["SyncSwap", "Uniswap", "ZKsync native dApps"],
    url: "https://zksync.io",
  },
  {
    name: "Linea",
    layer: "L2",
    ecosystem: "EVM",
    speed: "Fast",
    fees: "Low",
    security: "High",
    bestFor:
      "Built by ConsenSys, the team behind MetaMask. Natively integrated into MetaMask making it the easiest L2 to access for MetaMask users.",
    weaknesses:
      "Newer and smaller ecosystem compared to Arbitrum or Base. Still growing TVL and protocol depth.",
    nativeToken: "ETH (gas)",
    wallet: "MetaMask (native support)",
    topProtocols: ["Nile Exchange", "Uniswap", "Stargate"],
    url: "https://linea.build",
  },
];

export const otherEcosystems = [
  {
    name: "Bitcoin",
    emoji: "₿",
    summary: "The original blockchain. Limited smart contract capability natively, but DeFi is growing through layers like Lightning Network and Stacks. Not EVM compatible — requires a Bitcoin-specific wallet.",
    url: "https://bossino-p.github.io/bitcoin-deepdive/",
  },
  {
    name: "Cosmos",
    emoji: "⚛️",
    summary: "An ecosystem of interconnected app-chains that communicate via IBC (Inter-Blockchain Communication). Each chain is sovereign but interoperable. Requires Cosmos-specific wallets like Keplr or Leap.",
    url: null,  // coming soon
  },
  {
    name: "TON",
    emoji: "💎",
    summary: "Telegram-native blockchain with a massive potential user base through Telegram's 900M+ users. Growing DeFi ecosystem but very early stage. Uses Telegram wallet for onboarding.",
    url: null,  // coming soon
  },
];
