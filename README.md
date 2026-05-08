# DeFi Education Hub

A no-fluff educational resource for understanding decentralized finance — protocols, risks, wallets, chains, tokens, strategies, and more.

**Live site:** https://bossino-p.github.io/Defi-101/

---

## Pages

### 🔵 DeFi 101
An overview of 14 DeFi protocol types with filters by risk, complexity, and market condition.
- Beginner mode — shows only low risk & low complexity protocols
- Collapsible detail cards with use cases, risk reasons, and when to use
- "Frequently used" badges on the most common protocol types
- "Next step" hints in beginner mode to guide progression
- Linked examples for each protocol (up to 5 per type)

### 🟡 DeFi Risk 101
11 DeFi risks grouped into three categories: Protocol, Market, and Human.
- Filter by category and severity
- Each risk card includes how it happens, a real-world example, and how to protect yourself
- Covers smart contract exploits, liquidation, oracle manipulation, phishing, rug pulls, and more

### 🩵 Wallet 101
A complete guide to self-custody wallets — 6 hot wallets and 5 cold wallets.
- Mental model section explaining seed phrases, addresses, and private keys
- "Not your keys, not your crypto" warning with the FTX collapse as a real example
- 4 key wallet actions explained: Receive, Send, Connect, Sign
- Seed phrase rules
- Scam Guard section built in at the bottom

### 🟣 Chain 101
10 blockchains covered — 5 L1s and 5 Ethereum L2s.
- L1 vs L2 explained with the highway analogy
- EVM vs non-EVM explained
- Filter by speed and fees
- "How to choose a chain" decision guide
- Bitcoin, Cosmos, and TON covered as brief ecosystem mentions

### 🩷 Token 101
9 token types explained — from native coins to memecoins and receipt tokens.
- Coins vs tokens mental model
- Filter token types by risk level
- "How to evaluate a token" checklist — 8 questions to ask before buying
- Tokenomics basics — total supply, circulating supply, vesting, emissions, burns, market cap

### 🔴 Scam Guard
10 scam types across 4 categories: Social Engineering, Token Scams, Transaction Scams, Protocol Scams.
- Interactive "Before you sign" checklist — turns green when all items are checked
- Filter by category and severity
- Each scam card includes how it works, a real example, red flags, and where you'll encounter it
- Covers phishing, fake support, honeypots, rug pulls, approval exploits, clipboard malware, and more

### 🟢 DeFi Glossary
45 DeFi terms across 7 categories: Yield, Trading, Liquidity, Lending, Infrastructure, Tokens, Security.
- Live search — filter by typing any term or keyword
- Filter by category and difficulty (Beginner / Intermediate / Advanced)
- Terms grouped alphabetically
- Each term shows definition, related terms, and which protocol types it applies to

### 🟠 DeFi Strategies
8 yield strategies from beginner to advanced.
- Filter by risk and complexity
- Each strategy shows expected yield range, why it's risky, how it works, prerequisites, step-by-step instructions, best market condition, and protocols to use
- Covers stablecoin yield, liquid staking, lending, LP, yield tokenization, leveraged staking, delta neutral, and looping

---

## Tech stack

- **React 19** with Vite
- **React Router** (HashRouter for GitHub Pages compatibility)
- **Inline styles** — no CSS framework or external styling dependencies
- **No external UI libraries** — all components built from scratch

---

## Project structure

```
src/
├── App.jsx                  # Router controller
├── pages/
│   ├── Home.jsx             # Landing page
│   ├── Defi101.jsx          # DeFi 101 page
│   ├── RiskPage.jsx         # DeFi Risk 101 page
│   ├── WalletPage.jsx       # Wallet 101 page
│   ├── ChainPage.jsx        # Chain 101 page
│   ├── TokenPage.jsx        # Token 101 page
│   ├── ScamPage.jsx         # Scam Guard page
│   ├── GlossaryPage.jsx     # DeFi Glossary page
│   └── StrategiesPage.jsx   # DeFi Strategies page
├── components/
│   ├── ProtocolCard.jsx     # Card for DeFi 101
│   ├── RiskCard.jsx         # Card for Risk 101
│   ├── WalletCard.jsx       # Card for Wallet 101
│   ├── ScamGuard.jsx        # Scam rules component (used in Wallet 101)
│   ├── ScamCard.jsx         # Card for Scam Guard
│   ├── ChainCard.jsx        # Card for Chain 101
│   └── WalletCard.jsx       # Card for Wallet 101
└── data/
    ├── protocols.js         # 14 DeFi protocol types
    ├── risks.js             # 11 DeFi risk types
    ├── wallets.js           # 11 wallets + scam rules + checklist
    ├── chains.js            # 10 chains + other ecosystems
    ├── tokens.js            # 9 token types + evaluation checklist + tokenomics
    ├── scams.js             # 10 scam types + before-you-sign checklist
    ├── glossary.js          # 45 DeFi terms
    └── strategies.js        # 8 DeFi strategies
```

---

## Design

Each page has its own dark theme with a distinct accent color:

| Page | Accent |
|---|---|
| DeFi 101 | Blue |
| DeFi Risk 101 | Amber |
| Wallet 101 | Teal |
| Chain 101 | Purple |
| Token 101 | Pink |
| Scam Guard | Red |
| DeFi Glossary | Green |
| DeFi Strategies | Orange |

---

## Running locally

```bash
npm install
npm run dev
```

## Deploying to GitHub Pages

```bash
npm run deploy
```

---

## Disclaimer

This hub is for educational purposes only. Nothing here is financial advice. Cryptocurrency is highly speculative — always do your own research and never invest more than you can afford to lose completely.
