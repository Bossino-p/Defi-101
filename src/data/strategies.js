export const strategies = [
  {
    title: "Stablecoin Yield",
    risk: "Low",
    complexity: "Low",
    description:
      "Deposit stablecoins into a lending protocol or yield aggregator to earn passive yield without any price exposure.",
    whyRisky:
      "Smart contract risk only. No price exposure since you're holding stablecoins throughout. The main risk is the protocol itself getting exploited.",
    howItWorks:
      "Deposit USDC, USDT, or DAI into Aave, Compound, or a yield aggregator like Yearn. Earn interest from borrowers or auto-compounded yield strategies. Withdraw anytime.",
    expectedYield: "3% – 15% APY",
    prerequisites: "A wallet, stablecoins, and basic familiarity with connecting to a DeFi protocol.",
    steps: [
      "Acquire stablecoins (USDC recommended for beginners)",
      "Bridge to your preferred chain if needed",
      "Connect wallet to Aave or Yearn Finance",
      "Deposit stablecoins and receive interest-bearing tokens",
      "Monitor occasionally — no active management needed",
    ],
    protocols: ["Aave", "Yearn Finance", "Superform", "Compound"],
    bestMarket: "Any — works regardless of market conditions",
  },
  {
    title: "ETH Liquid Staking",
    risk: "Low",
    complexity: "Low",
    description:
      "Stake ETH through a liquid staking protocol to earn Ethereum network rewards while keeping your assets liquid and usable in DeFi.",
    whyRisky:
      "Depeg risk — your staked ETH token (e.g. stETH) could temporarily trade below ETH. Smart contract risk from the staking protocol. Otherwise one of the safest DeFi strategies.",
    howItWorks:
      "Deposit ETH into Lido or Rocket Pool. Receive a liquid staking token (stETH, rETH) that accrues staking rewards automatically. Hold it, use it in DeFi, or sell it anytime.",
    expectedYield: "3% – 5% APY",
    prerequisites: "ETH in a self-custody wallet. No minimum for Lido; 0.01 ETH minimum for Rocket Pool.",
    steps: [
      "Hold ETH in a self-custody wallet",
      "Go to lido.fi or rocketpool.net",
      "Stake ETH and receive stETH or rETH",
      "Rewards accrue automatically — no claiming needed",
      "Optionally use stETH as collateral in Aave for additional yield",
    ],
    protocols: ["Lido", "Rocket Pool", "StakeWise", "Frax Ether"],
    bestMarket: "Bullish or sideways — benefits from holding ETH long term",
  },
  {
    title: "Lending & Borrowing",
    risk: "Medium",
    complexity: "Medium",
    description:
      "Deposit assets as collateral to earn lending yield, then borrow against them to access liquidity without selling — enabling more advanced capital efficiency.",
    whyRisky:
      "Liquidation risk — if your collateral value drops below the required threshold, your position gets automatically liquidated. Volatile collateral + market downturns are the main danger.",
    howItWorks:
      "Deposit an asset (e.g. ETH or stETH) as collateral on Aave. Borrow a stablecoin against it. Use the borrowed stablecoin for other strategies while your collateral earns yield. Repay the loan to unlock collateral.",
    expectedYield: "Variable — depends on collateral yield minus borrow cost",
    prerequisites:
      "Comfortable with wallet usage. Understand liquidation thresholds and health factor. Willing to monitor position regularly.",
    steps: [
      "Deposit collateral asset on Aave or Morpho",
      "Check your health factor and max borrowable amount",
      "Borrow stablecoins — keep LTV well below the maximum",
      "Deploy borrowed stablecoins into a yield strategy",
      "Monitor health factor — add collateral or repay if it drops",
    ],
    protocols: ["Aave", "Morpho", "Compound", "Spark"],
    bestMarket: "Any — but avoid volatile collateral in bear markets",
  },
  {
    title: "Liquidity Providing",
    risk: "Medium",
    complexity: "Medium",
    description:
      "Deposit two assets into a DEX liquidity pool to earn trading fees from every swap that passes through your pool position.",
    whyRisky:
      "Impermanent loss — if the two assets diverge significantly in price, you end up with less value than simply holding them. Works best with correlated pairs or stablecoin pairs where impermanent loss is minimal.",
    howItWorks:
      "Choose a trading pair (e.g. ETH/USDC or USDC/USDT). Deposit equal value of both tokens into the pool on a DEX. Earn a share of all trading fees proportional to your pool share. Withdraw anytime.",
    expectedYield: "5% – 50%+ APY depending on pool volume and fees",
    prerequisites:
      "Understand impermanent loss before depositing. Have both tokens in the pair. Comfortable with DEX interfaces.",
    steps: [
      "Choose a pair — stablecoin pairs for low risk, volatile pairs for higher yield",
      "Acquire equal value of both tokens",
      "Go to Uniswap, Aerodrome, or Curve",
      "Select fee tier and price range (for concentrated liquidity)",
      "Deposit and monitor — rebalance if price moves out of range",
    ],
    protocols: ["Uniswap", "Curve", "Aerodrome", "Balancer"],
    bestMarket: "Sideways — minimal impermanent loss when prices stay stable",
  },
  {
    title: "Yield Tokenization",
    risk: "Medium",
    complexity: "High",
    description:
      "Split a yield-bearing asset into its principal and yield components on Pendle to either lock in a fixed yield or speculate on future yield rates.",
    whyRisky:
      "Yield pricing complexity — the value of yield tokens fluctuates with interest rate expectations. Maturity risk if you need to exit early at a discount. Smart contract risk from an additional protocol layer.",
    howItWorks:
      "Deposit a yield-bearing asset (e.g. stETH, aUSDC) into Pendle. Receive Principal Tokens (PT) and Yield Tokens (YT). Sell YT to lock in a fixed yield on PT, or buy YT to speculate that yields will rise.",
    expectedYield: "Fixed yield varies — typically 5% – 20% APY depending on asset and maturity",
    prerequisites:
      "Already earning yield (have stETH, aUSDC, or similar). Understand the difference between fixed and variable yield. Comfortable with more complex DeFi interfaces.",
    steps: [
      "Hold a yield-bearing asset (e.g. stETH from Lido)",
      "Go to pendle.finance and find your asset's market",
      "Deposit to receive PT and YT tokens",
      "Sell YT to lock in fixed APY, or hold YT to capture yield upside",
      "At maturity, redeem PT for the full underlying asset",
    ],
    protocols: ["Pendle", "Spectra"],
    bestMarket: "Sideways — most useful when yield rates are elevated and expected to fall",
  },
  {
    title: "Leveraged Staking",
    risk: "High",
    complexity: "High",
    description:
      "Borrow against your liquid staking tokens to buy more staking tokens, amplifying your staking yield — but also amplifying your liquidation risk.",
    whyRisky:
      "Amplified liquidation risk — you're borrowing against stETH to buy more stETH. A depeg event or sharp ETH price drop can push your health factor below 1.0 rapidly, causing liquidation of your entire position.",
    howItWorks:
      "Deposit stETH on Aave as collateral. Borrow ETH against it. Swap borrowed ETH for more stETH. Deposit the new stETH back as collateral. Repeat to desired leverage. Net yield = staking yield minus borrow rate.",
    expectedYield: "8% – 20%+ APY depending on leverage level",
    prerequisites:
      "Must understand liquidation mechanics completely. Comfortable with Aave and Lido. Have a plan for monitoring and adding collateral in a downturn.",
    steps: [
      "Stake ETH on Lido to get stETH",
      "Deposit stETH on Aave as collateral",
      "Borrow ETH — keep LTV conservative (below 70%)",
      "Swap borrowed ETH to stETH on a DEX",
      "Deposit new stETH to Aave — repeat 1-2 more times maximum",
      "Monitor health factor daily — set alerts",
    ],
    protocols: ["Lido", "Aave", "Uniswap", "Morpho"],
    bestMarket: "Bullish — dangerous in bear markets when ETH drops sharply",
  },
  {
    title: "Delta Neutral",
    risk: "High",
    complexity: "High",
    description:
      "A strategy designed to earn yield while being market-neutral — hedging price exposure so your portfolio value stays roughly the same regardless of whether ETH goes up or down.",
    whyRisky:
      "Requires active management — funding rates can flip negative, turning your hedge into a cost rather than income. Multiple protocol exposures compound smart contract risk. Hard to execute correctly without experience.",
    howItWorks:
      "Hold a spot asset (e.g. stETH) while simultaneously opening an equal short position on a perpetual DEX. Positive funding rates (longs paying shorts) mean you earn from the hedge. Net yield = staking yield + funding rate income.",
    expectedYield: "10% – 30%+ APY when funding rates are favorable",
    prerequisites:
      "Understand funding rates deeply. Experienced with perpetual DEXs. Able to actively monitor and rebalance. Not suitable as a first DeFi strategy.",
    steps: [
      "Stake ETH to get stETH — hold spot exposure",
      "Open an equivalent short ETH position on Hyperliquid or GMX",
      "Monitor funding rates — positive rates mean you're earning on the short",
      "If funding goes negative, close the short or reduce position",
      "Rebalance regularly as stETH accrues and position sizes drift",
    ],
    protocols: ["Lido", "Hyperliquid", "GMX", "Aave"],
    bestMarket: "Sideways — best when funding rates are positive and sustained",
  },
  {
    title: "Looping",
    risk: "High",
    complexity: "High",
    description:
      "Recursively borrowing and redepositing to maximize yield on a single asset — amplifying both the yield and the risk of a lending position.",
    whyRisky:
      "Recursive borrowing amplifies liquidation risk dramatically. A single price drop cascades through all loop layers simultaneously. Even a small market move can liquidate a heavily looped position before you can react.",
    howItWorks:
      "Deposit collateral on Aave. Borrow stablecoins. Deposit borrowed stablecoins. Borrow again. Repeat 3-5 times. Each loop amplifies your exposure to the lending yield and any incentive rewards — but also amplifies liquidation speed.",
    expectedYield: "20% – 50%+ APY during high incentive periods",
    prerequisites:
      "Must be very comfortable with lending protocols. Understand cascading liquidation risk. Only use assets where supply and borrow rates are favorable. Always model the break-even and liquidation price before entering.",
    steps: [
      "Identify an asset with favorable supply APY vs borrow rate",
      "Deposit initial collateral on Aave or Morpho",
      "Borrow at a conservative LTV (50-60%)",
      "Redeposit borrowed amount as new collateral",
      "Repeat 2-4 times — stop well before max leverage",
      "Monitor health factor continuously — one liquidation unwinds everything",
    ],
    protocols: ["Aave", "Morpho", "Compound", "Spark"],
    bestMarket: "Sideways — best during high incentive periods with stable asset prices",
  },
];
