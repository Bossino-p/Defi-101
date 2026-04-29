export const categories = [
  {
    title: "DEX (Decentralized Exchange)",
    description:
      "Platforms that allow users to swap tokens using liquidity pools (AMM model).",
    examples: [
      { name: "Uniswap", url: "https://app.uniswap.org" },
      { name: "Curve", url: "https://curve.fi" },
      { name: "Balancer", url: "https://balancer.fi" },
      { name: "Aerodrome", url: "https://aerodrome.finance" },
      { name: "Orca", url: "https://www.orca.so" },
    ],
    risk: "Medium",
    complexity: "Low",
    useCase: "Token swaps without centralized exchanges",
    riskReason:
      "Smart contract risk and impermanent loss when providing liquidity.",
    complexityReason:
      "Simple for swapping, but liquidity provision requires understanding AMMs.",
    whenToUse:
      "When you want to swap tokens quickly without relying on centralized exchanges.",
    whenNotToUse:
      "When trading large size with low liquidity or when price impact and slippage are high.",
    marketCondition: "All",
    nextStep: "Used a DEX to swap? Consider Yield Aggregators or Liquid Staking to put your idle tokens to work.",
   frequentlyUsed: true,
  },

  {
    title: "Perpetual DEX",
    description:
      "Decentralized platforms for trading perpetual futures with leverage and no expiry.",
    examples: [
      { name: "Hyperliquid", url: "https://app.hyperliquid.xyz" },
      { name: "GMX", url: "https://gmx.io" },
      { name: "dYdX", url: "https://dydx.exchange" },
      { name: "Drift", url: "https://www.drift.trade" },
      // Vertex shut down August 2025 (acquired by Ink Foundation); replaced with Ostium
      { name: "Ostium", url: "https://www.ostium.io" },
    ],
    risk: "High",
    complexity: "High",
    useCase: "Leverage trading and shorting assets",
    riskReason:
      "High liquidation risk due to leverage and volatile price movements.",
    complexityReason:
      "Requires understanding leverage, funding rates, and liquidation mechanics.",
    whenToUse:
      "When you want to trade with leverage or hedge positions in either direction.",
    whenNotToUse:
      "When you are inexperienced or cannot actively manage positions due to liquidation risk.",
    marketCondition: "All",
    nextStep: "This is an advanced protocol. Make sure you're comfortable with Lending and DEX first.",
  },

  {
    title: "Lending / Borrowing",
    description:
      "Protocols where users lend assets or borrow against collateral.",
    examples: [
      { name: "Aave", url: "https://aave.com" },
      { name: "Compound", url: "https://compound.finance" },
      { name: "Morpho", url: "https://morpho.org" },
      { name: "Euler", url: "https://www.euler.finance" },
      { name: "Spark", url: "https://spark.fi" },
    ],
    risk: "Medium",
    complexity: "Medium",
    useCase: "Earn yield or access liquidity",
    riskReason: "Risk of liquidation if collateral value drops.",
    complexityReason:
      "Users must manage collateral ratios and understand liquidation thresholds.",
    whenToUse:
      "When you want to earn passive yield or borrow without selling your assets.",
    whenNotToUse:
      "When collateral is volatile and you cannot monitor positions to avoid liquidation.",
    marketCondition: "All",
    nextStep: "Ready for more? Yield Tokenization lets you lock in fixed rates on what you're already lending.",
    frequentlyUsed: true,
  },

  {
    title: "Yield Aggregators",
    description:
      "Automatically optimize yield strategies by moving funds across protocols.",
    examples: [
      { name: "Yearn Finance", url: "https://yearn.fi" },
      { name: "Beefy", url: "https://beefy.com" },
      { name: "Superform", url: "https://www.superform.xyz" },
      { name: "Convex Finance", url: "https://www.convexfinance.com" },
      { name: "Sommelier", url: "https://www.sommelier.finance" },
    ],
    risk: "Medium",
    complexity: "Low",
    useCase: "Passive yield optimization",
    riskReason:
      "Smart contract risk and strategy risk from underlying protocols used for yield farming.",
    complexityReason:
      "Abstracts complexity for users, but underlying strategies can be difficult to understand.",
    whenToUse:
      "When you want passive yield without actively managing strategies.",
    whenNotToUse:
      "When you want full control over where your funds are deployed.",
    marketCondition: "Sideways",
    nextStep: "Comfortable here? Explore Lending/Borrowing for more control over your yield strategy.",
  },

  {
    title: "Liquid Staking",
    description:
      "Stake assets while receiving a liquid token usable in DeFi.",
    examples: [
      { name: "Lido", url: "https://lido.fi" },
      { name: "Rocket Pool", url: "https://rocketpool.net" },
      { name: "Binance staked ETH", url: "https://www.binance.com/en/wbeth" },
      { name: "Frax Ether", url: "https://frax.finance" },
      { name: "StakeWise", url: "https://stakewise.io" },
    ],
    risk: "Medium",
    complexity: "Low",
    useCase: "Earn staking rewards while staying liquid",
    riskReason:
      "Smart contract risk and potential depeg of staking derivatives from underlying asset.",
    complexityReason:
      "Simple to use, but understanding derivative tokens and staking mechanics adds complexity.",
    whenToUse:
      "When you want staking rewards while still using your assets in DeFi.",
    whenNotToUse:
      "When you are concerned about derivative tokens losing their peg.",
    marketCondition: "Bullish",
    nextStep: "Once you have liquid staking tokens (e.g. stETH), try Yield Aggregators to earn additional yield on top.",
  },

  {
    title: "Restaking",
    description:
      "Reuse staked assets to secure additional protocols and earn extra yield.",
    examples: [
      { name: "EigenLayer", url: "https://www.eigenlayer.xyz" },
      { name: "Symbiotic", url: "https://symbiotic.fi" },
      { name: "Karak", url: "https://karak.network" },
    ],
    risk: "High",
    complexity: "High",
    useCase: "Maximize yield from staked assets",
    riskReason:
      "Increased risk exposure by securing multiple protocols with the same collateral (slashing risk).",
    complexityReason:
      "Requires understanding validator mechanics, slashing conditions, and multi-layer security.",
    whenToUse:
      "When you want to maximize yield from staked assets and understand the risks.",
    whenNotToUse:
      "When you want minimal risk exposure or do not understand slashing risks.",
    marketCondition: "Bullish",
  },

  {
    title: "Yield Tokenization",
    description:
      "Protocols that split an asset into principal and yield components, allowing users to trade or lock in future yield.",
    examples: [
      { name: "Pendle", url: "https://www.pendle.finance" },
      { name: "Spectra", url: "https://www.spectra.finance" },
    ],
    risk: "Medium",
    complexity: "High",
    useCase: "Lock in fixed yield or speculate on future yield rates",
    riskReason:
      "Exposure to yield volatility, smart contract risk, and potential mispricing between principal and yield tokens.",
    complexityReason:
      "Requires understanding how yield is separated from principal, how pricing works, and how interest rate expectations affect returns.",
    whenToUse:
      "When you want to lock in a fixed yield while rates are high, or speculate that rates will rise.",
    whenNotToUse:
      "When you do not understand how yield pricing and maturity affect returns.",
    marketCondition: "Sideways",
  },

  {
    title: "Stablecoins",
    description:
      "Tokens designed to maintain a stable value, usually pegged to USD.",
    examples: [
      { name: "USDC", url: "https://www.circle.com/usdc" },
      { name: "DAI / USDS", url: "https://sky.money" },
      { name: "USDT", url: "https://tether.to" },
      { name: "USDe", url: "https://ethena.fi" },
      { name: "FRAX", url: "https://frax.finance" },
    ],
    risk: "Low",
    complexity: "Low",
    useCase: "Store value and reduce volatility",
    riskReason:
      "Depeg risk depending on collateral type (fiat-backed vs algorithmic). Fiat-backed stablecoins like USDC carry low risk.",
    complexityReason:
      "Easy to use, but understanding backing mechanisms and stability models adds complexity.",
    whenToUse:
      "When you want to reduce volatility or park funds safely in DeFi.",
    whenNotToUse:
      "When relying on poorly collateralized or algorithmic stablecoins.",
    marketCondition: "Bearish",
    nextStep: "Now that you hold stablecoins, try Yield Aggregators or Lending to put them to work passively.",
    frequentlyUsed: true,
  },

  {
    title: "Derivatives (Options / Structured Products)",
    description:
      "Protocols offering options, vaults, and structured financial strategies.",
    examples: [
      { name: "Derive (Lyra)", url: "https://www.derive.xyz" },
      // Ribbon Finance rebranded to Aevo in 2023; legacy vaults exploited and decommissioned Dec 2025
      { name: "Aevo", url: "https://www.aevo.xyz" },
      { name: "Hegic", url: "https://www.hegic.co" },
      // Dopex rebranded to Stryke
      { name: "Stryke (Dopex)", url: "https://www.stryke.xyz" },
    ],
    risk: "High",
    complexity: "High",
    useCase: "Hedging or advanced yield strategies",
    riskReason:
      "High risk due to leverage, volatility, and complex payoff structures.",
    complexityReason:
      "Requires understanding options pricing, volatility, and structured strategies.",
    whenToUse:
      "When hedging risk or executing advanced trading strategies, especially during downturns.",
    whenNotToUse:
      "When you lack experience with options or structured financial products.",
    marketCondition: "Bearish",
    nextStep: "This is an advanced protocol. Make sure you're comfortable with Lending and DEX first.",
  },

  {
    title: "Insurance",
    description:
      "Provide coverage against smart contract exploits, hacks, or depegs.",
    examples: [
      { name: "Nexus Mutual", url: "https://nexusmutual.io" },
      { name: "InsurAce", url: "https://insurace.io" },
      { name: "Unslashed Finance", url: "https://unslashed.finance" },
    ],
    risk: "Medium",
    complexity: "Medium",
    useCase: "Protect against DeFi risks",
    riskReason:
      "Coverage may fail in extreme events or claims may be disputed.",
    complexityReason:
      "Understanding policy terms, coverage limits, and claim conditions is required.",
    whenToUse:
      "When you want protection against smart contract risks or depegs.",
    whenNotToUse:
      "When coverage terms are unclear or do not match your actual risk exposure.",
    marketCondition: "All",
  },

  {
    title: "Bridges",
    description: "Enable transferring assets between different blockchains.",
    examples: [
      { name: "Stargate", url: "https://stargate.finance" },
      { name: "Across", url: "https://across.to" },
      { name: "Wormhole", url: "https://wormhole.com" },
      { name: "Synapse", url: "https://synapseprotocol.com" },
      { name: "Hop Protocol", url: "https://hop.exchange" },
    ],
    risk: "High",
    complexity: "High",
    useCase: "Move assets across chains",
    riskReason:
      "High risk due to frequent exploits and large amounts of locked funds in bridge contracts.",
    complexityReason:
      "Users must understand cross-chain mechanics, trust assumptions, and the difference between canonical and third-party bridges.",
    whenToUse:
      "When you need to move assets across chains for better opportunities.",
    whenNotToUse:
      "When holding large amounts and safer alternatives exist due to exploit risk.",
    marketCondition: "All",
    nextStep: "Once on a new chain, explore the DEX or Yield Aggregators available there.",
  },

{
  title: "Bridge Aggregators",
  description:
    "Platforms that route cross-chain transfers across multiple bridges to find the best rate, speed, or lowest fees.",
  examples: [
    { name: "Jumper", url: "https://jumper.exchange" },
    { name: "Relay", url: "https://relay.link" },
    { name: "Socket", url: "https://socket.tech" },
    { name: "Bungee", url: "https://bungee.exchange" },
    { name: "Gas.zip (refuel)", url: "https://www.gas.zip" },
  ],
  risk: "Medium",
  complexity: "Low",
  useCase: "Move assets cross-chain with best available route",
  riskReason:
    "Risk is spread across underlying bridges used, but reduced compared to committing to a single bridge.",
  complexityReason:
    "Simpler than using raw bridges directly — the aggregator handles routing automatically.",
  whenToUse:
    "When moving assets cross-chain and you want the best rate or fastest route without manually comparing bridges.",
  whenNotToUse:
    "When you need a specific bridge for canonical withdrawals, such as moving from an L2 back to Ethereum mainnet.",
  marketCondition: "All",
  nextStep: "Once on a new chain, explore the DEX or Yield Aggregators available there.",
  frequentlyUsed: true,
},

  {
    title: "Asset Management",
    description: "On-chain portfolio management and strategy execution.",
    examples: [
      { name: "Enzyme", url: "https://enzyme.finance" },
      { name: "dHEDGE", url: "https://www.dhedge.org" },
      { name: "Hyperliquid Vaults", url: "https://app.hyperliquid.xyz/vaults" },
    ],
    risk: "Medium",
    complexity: "Medium",
    useCase: "Delegate or automate investment strategies",
    riskReason:
      "Strategy risk depending on how funds are managed and underlying protocols used.",
    complexityReason:
      "Users must evaluate strategies, managers, and performance metrics.",
    whenToUse:
      "When you want to delegate strategy execution to more experienced managers.",
    whenNotToUse:
      "When you prefer full control or do not trust external strategies.",
    marketCondition: "All",
  },

  {
    title: "Launchpads",
    description:
      "Platforms for new crypto projects to raise funds and launch tokens.",
    examples: [
      { name: "DAO Maker", url: "https://daomaker.com" },
      { name: "Fjord Foundry", url: "https://fjordfoundry.com" },
      { name: "Legion", url: "https://legion.cc" },
      { name: "Echo", url: "https://www.echo.xyz" },
    ],
    risk: "High",
    complexity: "Medium",
    useCase: "Early-stage investing in new tokens",
    riskReason:
      "High risk due to early-stage projects, scams, and lack of proven track records.",
    complexityReason:
      "Simple to participate mechanically, but evaluating project quality, tokenomics, and team credibility requires significant experience.",
    whenToUse:
      "When you are comfortable with high risk and can evaluate project fundamentals.",
    whenNotToUse:
      "When you cannot properly evaluate project fundamentals or identify scams.",
    marketCondition: "Bullish",
    nextStep: "This is an advanced protocol. Make sure you're comfortable with Lending and DEX first.",
  },

  {
    title: "Prediction Markets",
    description: "Platforms where users bet on real-world event outcomes.",
    examples: [
      { name: "Polymarket", url: "https://polymarket.com" },
      // Augur original platform shut down; reboot in progress but not live as a usable product
      { name: "Seer", url: "https://seer.pm" },
      { name: "Azuro", url: "https://azuro.org" },
    ],
    risk: "High",
    complexity: "Medium",
    useCase: "Speculation or hedging event outcomes",
    riskReason: "High risk due to speculative nature and uncertain outcomes.",
    complexityReason:
      "Requires understanding probabilities, market sentiment, and event resolution rules.",
    whenToUse:
      "When you want to speculate or hedge based on real-world events.",
    whenNotToUse:
      "When you are not comfortable with uncertain or binary outcomes.",
    marketCondition: "All",
    nextStep: "This is an advanced protocol. Make sure you're comfortable with Lending and DEX first.",
  },
];
