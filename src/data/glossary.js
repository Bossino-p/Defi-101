export const glossaryTerms = [
  // ─── YIELD ────────────────────────────────────────────────────
  {
    term: "APY",
    full: "Annual Percentage Yield",
    category: "Yield",
    difficulty: "Beginner",
    definition:
      "The annual rate of return on an investment including the effect of compounding. Higher APY means more yield earned over time as returns are reinvested.",
    usedIn: ["Yield Aggregators", "Lending / Borrowing", "Liquid Staking"],
    related: ["APR", "Auto-compounding", "TVL"],
  },
  {
    term: "APR",
    full: "Annual Percentage Rate",
    category: "Yield",
    difficulty: "Beginner",
    definition:
      "The annual rate of return without compounding. APR is the base rate — APY is what you actually earn if rewards are reinvested. APR < APY when compounding.",
    usedIn: ["Lending / Borrowing", "Yield Aggregators"],
    related: ["APY", "Auto-compounding"],
  },
  {
    term: "TVL",
    full: "Total Value Locked",
    category: "Yield",
    difficulty: "Beginner",
    definition:
      "The total dollar value of assets deposited in a protocol. A common measure of protocol size and user trust. Higher TVL generally means more liquidity and usage.",
    usedIn: ["DEX", "Lending / Borrowing", "Yield Aggregators"],
    related: ["Liquidity Pool", "Liquidity"],
  },
  {
    term: "Yield Farming",
    full: "Yield Farming",
    category: "Yield",
    difficulty: "Intermediate",
    definition:
      "Actively moving funds between protocols to maximize returns. Yield farmers chase the highest APY, often across multiple platforms and chains.",
    usedIn: ["Yield Aggregators", "DEX", "Lending / Borrowing"],
    related: ["Liquidity Mining", "APY", "Auto-compounding"],
  },
  {
    term: "Liquidity Mining",
    full: "Liquidity Mining",
    category: "Yield",
    difficulty: "Intermediate",
    definition:
      "Earning a protocol's governance token as a reward for providing liquidity. A way for new protocols to incentivize early users by distributing tokens.",
    usedIn: ["DEX", "Lending / Borrowing"],
    related: ["Yield Farming", "Governance Token", "LP Token"],
  },
  {
    term: "Auto-compounding",
    full: "Auto-compounding",
    category: "Yield",
    difficulty: "Beginner",
    definition:
      "Automatically reinvesting earned rewards back into the position to generate yield on yield. Yield aggregators like Beefy auto-compound on your behalf.",
    usedIn: ["Yield Aggregators"],
    related: ["APY", "APR", "Yield Farming"],
  },

  // ─── TRADING ──────────────────────────────────────────────────
  {
    term: "Slippage",
    full: "Slippage",
    category: "Trading",
    difficulty: "Beginner",
    definition:
      "The difference between the expected price of a trade and the actual executed price. Caused by low liquidity or large trade sizes relative to pool depth.",
    usedIn: ["DEX", "Perpetual DEX"],
    related: ["Price Impact", "Liquidity Pool", "Spread"],
  },
  {
    term: "Price Impact",
    full: "Price Impact",
    category: "Trading",
    difficulty: "Beginner",
    definition:
      "How much your trade moves the market price. Large trades in small liquidity pools cause high price impact — you push the price against yourself.",
    usedIn: ["DEX"],
    related: ["Slippage", "Liquidity Pool", "Depth"],
  },
  {
    term: "Funding Rate",
    full: "Funding Rate",
    category: "Trading",
    difficulty: "Intermediate",
    definition:
      "A periodic payment between long and short traders on perpetual DEXs to keep the perpetual price close to the spot price. Positive rate = longs pay shorts. Negative rate = shorts pay longs.",
    usedIn: ["Perpetual DEX"],
    related: ["Perpetuals", "Long", "Short"],
  },
  {
    term: "Liquidation",
    full: "Liquidation",
    category: "Trading",
    difficulty: "Intermediate",
    definition:
      "When a leveraged position or loan is automatically closed because collateral value dropped below the required threshold. Results in partial or total loss of collateral.",
    usedIn: ["Perpetual DEX", "Lending / Borrowing"],
    related: ["Leverage", "Collateral Ratio", "Health Factor"],
  },
  {
    term: "Leverage",
    full: "Leverage",
    category: "Trading",
    difficulty: "Intermediate",
    definition:
      "Borrowing capital to increase position size beyond what you own. 10x leverage means a 10% price move results in a 100% gain or loss on your collateral.",
    usedIn: ["Perpetual DEX", "Lending / Borrowing"],
    related: ["Liquidation", "Long", "Short", "Funding Rate"],
  },
  {
    term: "Long",
    full: "Long Position",
    category: "Trading",
    difficulty: "Beginner",
    definition:
      "A bet that an asset's price will go up. You profit if the price rises. The most common position — simply holding an asset is being 'long' that asset.",
    usedIn: ["Perpetual DEX"],
    related: ["Short", "Leverage", "Liquidation"],
  },
  {
    term: "Short",
    full: "Short Position",
    category: "Trading",
    difficulty: "Intermediate",
    definition:
      "A bet that an asset's price will go down. You borrow the asset, sell it, and buy it back cheaper. You profit if the price falls, lose if it rises.",
    usedIn: ["Perpetual DEX"],
    related: ["Long", "Leverage", "Funding Rate"],
  },
  {
    term: "Perpetuals",
    full: "Perpetual Futures",
    category: "Trading",
    difficulty: "Intermediate",
    definition:
      "Futures contracts with no expiry date. Traders can hold leveraged long or short positions indefinitely, paying or receiving funding rates to keep the price anchored to spot.",
    usedIn: ["Perpetual DEX"],
    related: ["Funding Rate", "Leverage", "Long", "Short"],
  },
  {
    term: "Spread",
    full: "Bid-Ask Spread",
    category: "Trading",
    difficulty: "Intermediate",
    definition:
      "The difference between the best buy price and best sell price. Wider spreads mean higher transaction costs and lower liquidity.",
    usedIn: ["DEX", "Perpetual DEX"],
    related: ["Slippage", "Liquidity", "Depth"],
  },

  // ─── LIQUIDITY ────────────────────────────────────────────────
  {
    term: "Liquidity Pool",
    full: "Liquidity Pool",
    category: "Liquidity",
    difficulty: "Beginner",
    definition:
      "A smart contract holding two or more tokens that enables trading without a traditional order book. Users trade against the pool; liquidity providers earn fees.",
    usedIn: ["DEX", "Yield Aggregators"],
    related: ["AMM", "LP Token", "Impermanent Loss"],
  },
  {
    term: "AMM",
    full: "Automated Market Maker",
    category: "Liquidity",
    difficulty: "Beginner",
    definition:
      "A type of DEX that uses a mathematical formula (e.g. x*y=k) to price assets instead of a traditional order book. Enables permissionless trading and liquidity provision.",
    usedIn: ["DEX"],
    related: ["Liquidity Pool", "LP Token", "Slippage"],
  },
  {
    term: "Impermanent Loss",
    full: "Impermanent Loss",
    category: "Liquidity",
    difficulty: "Intermediate",
    definition:
      "The loss experienced by liquidity providers when the price ratio of pooled assets changes vs simply holding them. Called 'impermanent' because it reverses if prices return to the original ratio.",
    usedIn: ["DEX"],
    related: ["Liquidity Pool", "AMM", "LP Token"],
  },
  {
    term: "LP Token",
    full: "Liquidity Provider Token",
    category: "Liquidity",
    difficulty: "Intermediate",
    definition:
      "A token received when depositing assets into a liquidity pool. Represents your share of the pool and is required to withdraw your funds and earned fees.",
    usedIn: ["DEX", "Yield Aggregators"],
    related: ["Liquidity Pool", "AMM", "Impermanent Loss"],
  },
  {
    term: "Depth",
    full: "Market Depth",
    category: "Liquidity",
    difficulty: "Intermediate",
    definition:
      "How much liquidity exists at various price levels. Deep markets can absorb large trades with minimal price impact. Shallow markets move significantly on small trades.",
    usedIn: ["DEX", "Perpetual DEX"],
    related: ["Liquidity Pool", "Price Impact", "Slippage"],
  },

  // ─── LENDING ──────────────────────────────────────────────────
  {
    term: "Collateral",
    full: "Collateral",
    category: "Lending",
    difficulty: "Beginner",
    definition:
      "Assets deposited as security when borrowing. If the borrower can't repay or the collateral value drops too far, it gets liquidated to cover the debt.",
    usedIn: ["Lending / Borrowing", "Perpetual DEX"],
    related: ["Collateral Ratio", "Health Factor", "Liquidation", "LTV"],
  },
  {
    term: "Collateral Ratio",
    full: "Collateral Ratio",
    category: "Lending",
    difficulty: "Intermediate",
    definition:
      "The ratio of collateral value to borrowed value. A 150% collateral ratio means you need $150 of collateral to borrow $100. Higher ratio = safer position.",
    usedIn: ["Lending / Borrowing"],
    related: ["Collateral", "Health Factor", "LTV", "Liquidation"],
  },
  {
    term: "Health Factor",
    full: "Health Factor",
    category: "Lending",
    difficulty: "Intermediate",
    definition:
      "A numeric score representing the safety of a lending position. Used by Aave and similar protocols. Below 1.0 means the position is eligible for liquidation.",
    usedIn: ["Lending / Borrowing"],
    related: ["Collateral Ratio", "LTV", "Liquidation"],
  },
  {
    term: "LTV",
    full: "Loan-to-Value",
    category: "Lending",
    difficulty: "Intermediate",
    definition:
      "The ratio of borrowed amount to collateral value. 80% LTV means you can borrow up to $80 for every $100 of collateral. Higher LTV = more borrowing power but higher liquidation risk.",
    usedIn: ["Lending / Borrowing"],
    related: ["Collateral Ratio", "Health Factor", "Liquidation"],
  },
  {
    term: "Overcollateralized",
    full: "Overcollateralized",
    category: "Lending",
    difficulty: "Intermediate",
    definition:
      "When the value of collateral exceeds the value of the loan. Most DeFi lending is overcollateralized to protect lenders against price volatility and default.",
    usedIn: ["Lending / Borrowing", "Stablecoins"],
    related: ["Collateral", "Collateral Ratio", "LTV"],
  },

  // ─── INFRASTRUCTURE ───────────────────────────────────────────
  {
    term: "Gas",
    full: "Gas Fee",
    category: "Infrastructure",
    difficulty: "Beginner",
    definition:
      "A fee paid to validators for processing a transaction on a blockchain. Measured in the chain's native token (ETH on Ethereum). Fees rise when the network is congested.",
    usedIn: ["All protocols"],
    related: ["Gas Limit", "Nonce", "Mempool"],
  },
  {
    term: "Gas Limit",
    full: "Gas Limit",
    category: "Infrastructure",
    difficulty: "Intermediate",
    definition:
      "The maximum amount of gas you're willing to spend on a transaction. Setting it too low causes the transaction to fail. Wallets usually estimate this automatically.",
    usedIn: ["All protocols"],
    related: ["Gas", "Nonce"],
  },
  {
    term: "Nonce",
    full: "Transaction Nonce",
    category: "Infrastructure",
    difficulty: "Intermediate",
    definition:
      "A sequential number assigned to each transaction from a wallet address. Ensures transactions are processed in order and prevents double-spending.",
    usedIn: ["All protocols"],
    related: ["Gas", "Mempool"],
  },
  {
    term: "Oracle",
    full: "Price Oracle",
    category: "Infrastructure",
    difficulty: "Intermediate",
    definition:
      "A service that brings external price data onto the blockchain. DeFi protocols rely on oracles for accurate asset prices. Manipulated oracles can cause exploits.",
    usedIn: ["Lending / Borrowing", "Perpetual DEX", "Derivatives"],
    related: ["Flash Loan"],
  },
  {
    term: "Finality",
    full: "Transaction Finality",
    category: "Infrastructure",
    difficulty: "Intermediate",
    definition:
      "The point at which a transaction is considered permanent and irreversible on the blockchain. Different chains have different finality times.",
    usedIn: ["All protocols"],
    related: ["Gas", "Block"],
  },
  {
    term: "Mempool",
    full: "Memory Pool",
    category: "Infrastructure",
    difficulty: "Advanced",
    definition:
      "A waiting area for unconfirmed transactions. Validators pick transactions from the mempool to include in the next block, usually prioritizing higher gas fees.",
    usedIn: ["All protocols"],
    related: ["Gas", "Gas Limit", "Nonce"],
  },
  {
    term: "RPC",
    full: "Remote Procedure Call",
    category: "Infrastructure",
    difficulty: "Advanced",
    definition:
      "An endpoint that allows wallets and apps to communicate with a blockchain node. When you add a network to MetaMask, you're adding its RPC URL.",
    usedIn: ["All protocols"],
    related: ["Gas", "Nonce"],
  },

  // ─── TOKENS ───────────────────────────────────────────────────
  {
    term: "ERC-20",
    full: "ERC-20 Token Standard",
    category: "Tokens",
    difficulty: "Beginner",
    definition:
      "The most common token standard on Ethereum and EVM chains. Defines a set of rules all fungible tokens follow, making them compatible with wallets and protocols automatically.",
    usedIn: ["DEX", "Lending / Borrowing"],
    related: ["Fungible", "Wrapped Token", "Governance Token"],
  },
  {
    term: "Fungible",
    full: "Fungible Token",
    category: "Tokens",
    difficulty: "Beginner",
    definition:
      "A token where each unit is identical and interchangeable. 1 ETH = 1 ETH. Opposite of an NFT, where each token is unique.",
    usedIn: ["DEX", "Lending / Borrowing"],
    related: ["ERC-20", "Governance Token"],
  },
  {
    term: "Governance Token",
    full: "Governance Token",
    category: "Tokens",
    difficulty: "Intermediate",
    definition:
      "A token that grants voting rights over a protocol's decisions — fee structures, new features, treasury spending. Examples include UNI (Uniswap) and AAVE (Aave).",
    usedIn: ["DEX", "Lending / Borrowing", "Yield Aggregators"],
    related: ["Fungible", "ERC-20", "Liquidity Mining"],
  },
  {
    term: "Wrapped Token",
    full: "Wrapped Token",
    category: "Tokens",
    difficulty: "Intermediate",
    definition:
      "A token that represents another asset 1:1, making it compatible with a different chain or standard. wBTC is Bitcoin wrapped as an ERC-20 token usable in Ethereum DeFi.",
    usedIn: ["DEX", "Lending / Borrowing", "Bridges"],
    related: ["ERC-20", "Bridges"],
  },
  {
    term: "Depeg",
    full: "Depeg Event",
    category: "Tokens",
    difficulty: "Intermediate",
    definition:
      "When a stablecoin or pegged asset loses its intended price relationship. A stablecoin depegging means it trades significantly above or below $1.",
    usedIn: ["Stablecoins", "Liquid Staking"],
    related: ["Stablecoin", "Collateral"],
  },

  // ─── SECURITY ─────────────────────────────────────────────────
  {
    term: "Flash Loan",
    full: "Flash Loan",
    category: "Security",
    difficulty: "Advanced",
    definition:
      "An uncollateralized loan that must be borrowed and repaid within a single transaction block. Legitimate use cases exist, but often used by attackers to manipulate prices or governance.",
    usedIn: ["Lending / Borrowing"],
    related: ["Oracle", "Governance Token"],
  },
  {
    term: "Approval",
    full: "Token Approval",
    category: "Security",
    difficulty: "Intermediate",
    definition:
      "Permission granted to a smart contract to spend tokens from your wallet. Unlimited approvals are convenient but dangerous — a compromised contract can drain everything approved.",
    usedIn: ["DEX", "Lending / Borrowing", "Yield Aggregators"],
    related: ["Revoke", "Audit"],
  },
  {
    term: "Revoke",
    full: "Revoke Approval",
    category: "Security",
    difficulty: "Intermediate",
    definition:
      "Cancelling a previously granted token approval. Best practice is to revoke approvals for protocols you no longer use. Tools like Revoke.cash make this easy.",
    usedIn: ["All protocols"],
    related: ["Approval", "Audit"],
  },
  {
    term: "Audit",
    full: "Smart Contract Audit",
    category: "Security",
    difficulty: "Intermediate",
    definition:
      "A security review of a protocol's smart contract code by an independent firm. Audits reduce but don't eliminate the risk of exploits. Always check if a protocol has been audited.",
    usedIn: ["All protocols"],
    related: ["Bug Bounty", "Approval"],
  },
  {
    term: "Bug Bounty",
    full: "Bug Bounty Program",
    category: "Security",
    difficulty: "Intermediate",
    definition:
      "A reward program where protocols pay security researchers to find and disclose vulnerabilities. A sign of a security-conscious team. Larger bounties attract better researchers.",
    usedIn: ["All protocols"],
    related: ["Audit"],
  },
];
