export const tokenTypes = [
  {
    type: "Native Coin",
    emoji: "⛓️",
    description:
      "The base currency of a blockchain, used to pay gas fees and secure the network. Not issued by any protocol — it's built into the chain itself.",
    examples: ["ETH (Ethereum)", "SOL (Solana)", "BNB (BNB Chain)", "AVAX (Avalanche)", "SUI (Sui)"],
    keyProperties: [
      "Required to pay gas on its chain",
      "Most liquid asset on its chain",
      "Value tied to chain adoption and usage",
    ],
    risk: "Medium",
    usedIn: ["All protocols"],
    watchOut:
      "Always keep a small amount of the native coin in your wallet for gas. Running out of gas means you can't execute any transactions — even to move your other tokens out.",
  },
  {
    type: "Governance Token",
    emoji: "🗳️",
    description:
      "Tokens that grant voting rights over a protocol's decisions — fee changes, treasury spending, new features, and risk parameters.",
    examples: ["UNI (Uniswap)", "AAVE (Aave)", "CRV (Curve)", "ARB (Arbitrum)", "OP (Optimism)"],
    keyProperties: [
      "Voting power proportional to holdings",
      "Value tied to protocol revenue and usage",
      "Often distributed as liquidity mining rewards",
    ],
    risk: "Medium",
    usedIn: ["DEX", "Lending / Borrowing", "Yield Aggregators"],
    watchOut:
      "Governance tokens can be highly inflationary if the protocol is still distributing them as rewards. Always check emission schedules — a token with high APY paid in governance tokens may be rapidly diluting your position.",
  },
  {
    type: "Utility Token",
    emoji: "🔧",
    description:
      "Tokens that provide specific utility within a protocol or ecosystem — fee discounts, premium access, or staking for rewards.",
    examples: ["BNB (fee discounts on BNB Chain)", "GMX (staking for protocol revenue)", "PENDLE (boosted yields on Pendle)"],
    keyProperties: [
      "Value derived from actual utility demand",
      "Often has buyback or burn mechanisms",
      "Requires protocol to remain relevant",
    ],
    risk: "Medium",
    usedIn: ["DEX", "Perpetual DEX", "Yield Tokenization"],
    watchOut:
      "Utility only has value if the protocol has real usage. If the protocol loses users, demand for the utility token collapses. Always evaluate the underlying protocol health, not just the token mechanics.",
  },
  {
    type: "Stablecoin",
    emoji: "💵",
    description:
      "Tokens designed to maintain a stable value — usually $1. Backed by fiat, crypto collateral, or algorithmic mechanisms.",
    examples: ["USDC (fiat-backed)", "USDT (fiat-backed)", "DAI/USDS (crypto-backed)", "USDe (synthetic)", "FRAX (hybrid)"],
    keyProperties: [
      "Designed to hold $1 peg",
      "Backing type determines risk level",
      "Fiat-backed = lowest risk, most centralized",
    ],
    risk: "Low",
    usedIn: ["Lending / Borrowing", "Yield Aggregators", "DEX"],
    watchOut:
      "Not all stablecoins are equal. Fiat-backed (USDC, USDT) carry issuer risk. Crypto-backed (DAI) carry collateral risk. Algorithmic stablecoins (like UST) can collapse to zero. Always understand what's backing the peg.",
  },
  {
    type: "Liquid Staking Token",
    emoji: "🌊",
    description:
      "Yield-bearing tokens received when staking assets through a liquid staking protocol. Represent staked assets plus accrued rewards.",
    examples: ["stETH (Lido)", "rETH (Rocket Pool)", "wBETH (Binance)", "frxETH (Frax)"],
    keyProperties: [
      "Accrues staking rewards automatically",
      "Tradeable and usable in DeFi",
      "Should trade close to 1:1 with underlying asset",
    ],
    risk: "Low",
    usedIn: ["Liquid Staking", "Lending / Borrowing", "Yield Tokenization"],
    watchOut:
      "LSTs can depeg during market stress or mass redemptions. stETH briefly traded at a significant discount to ETH during the June 2022 market crash. If you're using LSTs as collateral in lending protocols, a depeg can trigger liquidation.",
  },
  {
    type: "LP Token",
    emoji: "🏊",
    description:
      "Tokens received when depositing assets into a DEX liquidity pool. Represent your proportional share of the pool and all accrued fees.",
    examples: ["UNI-V2 LP tokens", "Curve LP tokens", "Balancer BPT", "Aerodrome LP tokens"],
    keyProperties: [
      "Required to withdraw your liquidity",
      "Value changes with pool composition and fees",
      "Can be staked in yield aggregators for additional rewards",
    ],
    risk: "Medium",
    usedIn: ["DEX", "Yield Aggregators"],
    watchOut:
      "Never lose your LP tokens — they're the only way to reclaim your pooled assets. Also be aware that LP token value is affected by impermanent loss, not just fee earnings. Staking LP tokens in unaudited farms is a common rug pull vector.",
  },
  {
    type: "Wrapped Token",
    emoji: "🎁",
    description:
      "Tokens that represent another asset 1:1 on a different chain or in a different standard, enabling cross-chain DeFi usage.",
    examples: ["wBTC (Bitcoin on Ethereum)", "wETH (ETH as ERC-20)", "wstETH (stETH on L2s)", "cbBTC (Coinbase wrapped BTC)"],
    keyProperties: [
      "Pegged 1:1 to underlying asset",
      "Enables use of non-native assets in DeFi",
      "Requires a custodian or bridge to maintain the peg",
    ],
    risk: "Medium",
    usedIn: ["DEX", "Lending / Borrowing", "Bridges"],
    watchOut:
      "The safety of a wrapped token depends entirely on the custodian or bridge holding the underlying asset. If the bridge gets hacked, the wrapped token can become worthless. wBTC is custodied by BitGo — a centralization risk some users avoid.",
  },
  {
    type: "Memecoin",
    emoji: "🐸",
    description:
      "Tokens with no intrinsic utility, driven entirely by community sentiment, social media momentum, and speculation.",
    examples: ["DOGE", "PEPE", "WIF", "BONK", "SHIB"],
    keyProperties: [
      "No fundamental value — pure speculation",
      "Extremely high volatility",
      "Community and narrative drive price",
    ],
    risk: "High",
    usedIn: ["DEX", "Launchpads"],
    watchOut:
      "Memecoins can go up 100x and down 99% in the same week. Most memecoin traders lose money. If you participate, treat it as pure gambling with money you can afford to lose entirely. Never hold a large portion of your portfolio in memecoins.",
  },
  {
    type: "Receipt Token",
    emoji: "🧾",
    description:
      "Tokens automatically issued by lending and yield protocols to represent your deposited assets. They accrue value over time as interest accumulates.",
    examples: ["aUSDC (Aave)", "cUSDC (Compound)", "yvUSDC (Yearn)", "sDAI (Sky/Maker)"],
    keyProperties: [
      "Redeemable 1:1 (plus interest) for underlying asset",
      "Usable as collateral in some protocols",
      "Value increases over time relative to underlying",
    ],
    risk: "Low",
    usedIn: ["Lending / Borrowing", "Yield Aggregators", "Yield Tokenization"],
    watchOut:
      "Receipt tokens are only as safe as the protocol that issued them. If Aave gets exploited, aTokens could lose value. Also be careful with 'recursive' strategies using receipt tokens as collateral — they amplify both yield and risk.",
  },
];

export const evaluationChecklist = [
  {
    question: "What does this token actually do?",
    detail:
      "Can you explain in one sentence why someone needs this token? If you can't — that's a red flag. Tokens without clear utility rely entirely on speculation.",
    icon: "🔍",
  },
  {
    question: "Is there real demand for it?",
    detail:
      "Does the protocol have real users and revenue? Check TVL, daily active users, and fee revenue on DeFiLlama. Tokens from protocols with genuine usage have a more defensible value.",
    icon: "📊",
  },
  {
    question: "Who controls the supply?",
    detail:
      "Check the token distribution. If the team or early investors hold 40%+ of supply, they can dump on retail at any time. Look for community-heavy distributions and locked vesting schedules.",
    icon: "👥",
  },
  {
    question: "Is it inflationary or deflationary?",
    detail:
      "High inflation (new tokens being minted as rewards) dilutes your holdings over time. Check the emission schedule — a 100% APY paid in governance tokens often means your tokens are losing value faster than you earn them.",
    icon: "📈",
  },
  {
    question: "What's the vesting and unlock schedule?",
    detail:
      "When do team and investor tokens unlock? Large unlocks create selling pressure. Check token unlock calendars on TokenUnlocks.app — a massive unlock event can crash price regardless of project quality.",
    icon: "🔓",
  },
  {
    question: "Is the team identifiable?",
    detail:
      "Anonymous teams aren't automatically bad, but they're higher risk. Doxxed teams with verifiable track records have more reputational skin in the game. Check LinkedIn, past projects, and public presence.",
    icon: "👤",
  },
  {
    question: "Has the contract been audited?",
    detail:
      "Check the protocol's docs for audit reports from reputable firms (Trail of Bits, OpenZeppelin, Certora, Cyfrin). No audit = significantly higher smart contract risk.",
    icon: "🛡️",
  },
  {
    question: "What's the circulating vs total supply?",
    detail:
      "A token with 10% of supply in circulation and 90% locked for future release will face massive selling pressure as those tokens unlock. Always check circulating supply, not just market cap.",
    icon: "💰",
  },
];

export const tokenomicsCards = [
  {
    term: "Total Supply",
    icon: "∑",
    definition:
      "The maximum number of tokens that will ever exist. Some tokens have a fixed cap (Bitcoin: 21M), others have no cap and mint continuously.",
    example: "Bitcoin: 21M total supply — hard cap, deflationary. ETH: no hard cap, but burns offset new issuance.",
  },
  {
    term: "Circulating Supply",
    icon: "🔄",
    definition:
      "The number of tokens currently available and tradeable in the market. This is what determines real market cap — not total supply.",
    example: "A token with 100M total supply but only 5M circulating has 95M tokens that could flood the market later.",
  },
  {
    term: "Market Cap",
    icon: "💹",
    definition:
      "Price × Circulating Supply. A common measure of token size. Fully Diluted Valuation (FDV) = Price × Total Supply — shows what market cap would be if all tokens existed.",
    example: "If FDV is 10x the market cap, expect significant dilution as more tokens enter circulation.",
  },
  {
    term: "Vesting",
    icon: "⏳",
    definition:
      "A schedule that releases tokens to team members and investors gradually over time, rather than all at once. Prevents immediate dumping after launch.",
    example: "Typical: 1 year cliff (no tokens), then 3 years linear vesting. Cliff end = first major unlock event.",
  },
  {
    term: "Token Burns",
    icon: "🔥",
    definition:
      "Permanently removing tokens from circulation to reduce supply. Creates deflationary pressure. EIP-1559 introduced ETH burning — a portion of every gas fee is burned.",
    example: "BNB conducts quarterly burns using 20% of profits. Reduces supply over time, theoretically supporting price.",
  },
  {
    term: "Emissions",
    icon: "🏭",
    definition:
      "New tokens created and distributed as rewards — to liquidity providers, stakers, or users. High emissions = inflation = dilution of existing holders.",
    example: "A protocol offering 200% APY in its own token is likely emitting tokens aggressively. Early participants profit; late entrants get diluted.",
  },
];
