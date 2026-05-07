export const scamTypes = [
  {
    title: "Phishing Sites",
    category: "Social Engineering",
    severity: "High",
    description:
      "Fake websites that look identical to real DeFi protocols. Designed to steal your seed phrase or get you to sign a malicious transaction.",
    howItWorks:
      "Attackers clone the UI of popular protocols like Uniswap, Aave, or MetaMask pixel-for-pixel. They promote the fake site via Google Ads, Twitter, or Discord links. Once you connect your wallet and interact, they drain it.",
    realExample:
      "Fake Uniswap phishing sites consistently appear above the real site in Google search ads. Users who clicked and connected lost funds immediately upon signing.",
    redFlags: [
      "URL is slightly different (e.g. uniswvap.org, app.uniswap.co)",
      "Found via Google ad or unsolicited link",
      "Asks for your seed phrase to 'verify' or 'restore'",
      "SSL certificate doesn't match the expected domain",
    ],
    foundOn: ["Google Ads", "Twitter / X", "Discord", "Email"],
  },
  {
    title: "Fake Support / DMs",
    category: "Social Engineering",
    severity: "High",
    description:
      "Scammers impersonate protocol support staff in Discord or Telegram to trick users into revealing their seed phrase or visiting phishing sites.",
    howItWorks:
      "You post a question in a protocol's Discord. Within seconds, fake 'support' accounts DM you offering to help. They guide you to a fake support site asking for your seed phrase to 'verify your wallet'.",
    realExample:
      "Virtually every major protocol's Discord has been targeted. Fake MetaMask support accounts have stolen millions by directing users to 'wallet recovery' phishing sites.",
    redFlags: [
      "Someone DMs you first — real support never does",
      "Asks you to visit an external link for 'verification'",
      "Has a slightly different username from the real team",
      "Creates urgency ('your funds are at risk, act now')",
    ],
    foundOn: ["Discord", "Telegram", "Twitter / X"],
  },
  {
    title: "Honeypot Tokens",
    category: "Token Scams",
    severity: "High",
    description:
      "Tokens that let you buy freely but have hidden code that blocks you from ever selling. Your funds are permanently trapped.",
    howItWorks:
      "A new token launches with a flashy website and aggressive promotion. The smart contract contains hidden logic that prevents any wallet except the deployer's from selling. You buy in, price pumps, you try to sell — it fails every time.",
    realExample:
      "Thousands of honeypot tokens launch on DEXs like Uniswap and PancakeSwap daily. Tools like Honeypot.is exist specifically to detect them before you buy.",
    redFlags: [
      "Very new token with no audit",
      "Huge price pumps with no clear reason",
      "Can't find sell transactions from other wallets on-chain",
      "Promoted aggressively in Telegram groups",
    ],
    foundOn: ["DEX", "Launchpads", "Telegram", "Twitter / X"],
  },
  {
    title: "Rug Pull",
    category: "Token Scams",
    severity: "High",
    description:
      "Project developers abandon the project and drain all liquidity after raising funds, leaving investors with worthless tokens.",
    howItWorks:
      "Team launches a token with a slick website, whitepaper, and promises of revolutionary technology. Once enough liquidity is in the pool, they remove it all in a single transaction and disappear. Token price drops to zero instantly.",
    realExample:
      "Squid Game token (November 2021) — developers drained $3.4M and disappeared. Token dropped 99.99% in seconds. The team was anonymous and the contract had a hidden anti-sell mechanism.",
    redFlags: [
      "Anonymous team with no verifiable identity",
      "Liquidity not locked — check on Team.Finance or Unicrypt",
      "No smart contract audit",
      "Promises of unrealistic returns",
      "Pressure to buy quickly before 'it's too late'",
    ],
    foundOn: ["Launchpads", "DEX", "Telegram", "Twitter / X"],
  },
  {
    title: "Fake Airdrops",
    category: "Token Scams",
    severity: "High",
    description:
      "Fraudulent airdrop announcements trick users into connecting their wallet to a malicious site that drains funds when they try to claim.",
    howItWorks:
      "You see a tweet or Discord announcement saying a major protocol is airdropping tokens. You click the link, connect your wallet, and click 'claim'. The transaction you sign actually approves unlimited token spending from your wallet.",
    realExample:
      "Fake Arbitrum airdrop sites appeared hours after the real ARB airdrop announcement, draining wallets of users who rushed to claim from unofficial sources.",
    redFlags: [
      "Airdrop announced only via DMs or unofficial channels",
      "URL doesn't match the official protocol domain",
      "Requires connecting wallet before showing any claim amount",
      "Transaction approval asks for unlimited spending allowance",
    ],
    foundOn: ["Twitter / X", "Discord", "Email", "Telegram"],
  },
  {
    title: "Approval Exploit",
    category: "Transaction Scams",
    severity: "High",
    description:
      "Tricking you into signing a transaction that grants a malicious contract unlimited permission to spend your tokens — even after you leave the site.",
    howItWorks:
      "You interact with a malicious dApp that presents a seemingly normal transaction. Hidden inside is a token approval granting the attacker's contract unlimited access to your wallet. Days or weeks later, they drain all approved tokens.",
    realExample:
      "Multiple NFT projects have used malicious approvals to drain users' wallets. The Blur marketplace approval exploit in 2023 affected users who had granted broad permissions.",
    redFlags: [
      "Transaction asks to approve 'unlimited' token amount",
      "Approval request from an unknown contract address",
      "dApp you've never used before asking for broad permissions",
      "Using Revoke.cash regularly to audit your existing approvals",
    ],
    foundOn: ["Phishing sites", "Fake dApps", "Malicious NFT projects"],
  },
  {
    title: "Address Poisoning",
    category: "Transaction Scams",
    severity: "Medium",
    description:
      "Attackers send tiny transactions from an address that visually resembles your frequent contacts, hoping you'll copy the wrong address from your transaction history.",
    howItWorks:
      "You regularly send funds to a specific address. An attacker generates a wallet address with the same first and last characters and sends you a dust transaction. Next time you copy an address from your history without checking the middle characters, you send to the attacker.",
    realExample:
      "A trader lost $68M in May 2024 after copying a poisoned address from their transaction history. The attacker's address matched the first and last 4 characters of the intended recipient.",
    redFlags: [
      "Random small transactions appearing in your history from unknown addresses",
      "Address in history that looks familiar but you don't remember the transaction",
      "Only checking first and last few characters when verifying",
    ],
    foundOn: ["Your transaction history", "Etherscan", "Wallet apps"],
  },
  {
    title: "Clipboard Malware",
    category: "Transaction Scams",
    severity: "High",
    description:
      "Malware installed on your device silently replaces any cryptocurrency address you copy with the attacker's address.",
    howItWorks:
      "You download a compromised file — often disguised as a cracked app, game mod, or fake crypto tool. The malware runs in the background and monitors your clipboard. Whenever it detects a crypto address format, it replaces it instantly.",
    realExample:
      "Clipboard hijacking malware is widely distributed via pirated software and fake crypto tools on Windows. Chainalysis estimated hundreds of millions lost annually to clipboard malware.",
    redFlags: [
      "You downloaded software from unofficial sources",
      "Pasted address looks different after pasting than what you copied",
      "Running cracked or pirated software on the same device as your wallet",
    ],
    foundOn: ["Your own device", "Downloaded files", "Browser extensions"],
  },
  {
    title: "Ponzi / Fake Yield",
    category: "Protocol Scams",
    severity: "High",
    description:
      "Protocols promising extremely high and 'guaranteed' yields that are actually paying early investors with new investor deposits — until they collapse.",
    howItWorks:
      "A protocol advertises 100%+ APY with 'no risk'. Early investors get paid from new deposits, creating the illusion of a working product. Once deposits slow down, the team exits with remaining funds or the protocol implodes.",
    realExample:
      "Forsage (2020–2022) — a smart contract Ponzi that raised over $300M. The SEC charged its founders with fraud. Promised 'passive income' funded entirely by new participant deposits.",
    redFlags: [
      "APY that seems impossibly high with no clear yield source",
      "Yield described as 'guaranteed' or 'risk-free'",
      "Referral-based rewards — relies on recruiting new users",
      "No transparent explanation of where yield comes from",
      "Anonymous team with no audit",
    ],
    foundOn: ["Telegram", "Twitter / X", "Fake websites", "YouTube ads"],
  },
  {
    title: "Impersonation Scams",
    category: "Social Engineering",
    severity: "High",
    description:
      "Scammers create fake accounts impersonating founders, developers, or influencers to promote scam projects or steal funds directly.",
    howItWorks:
      "Attackers clone the profile picture, username, and bio of a well-known figure in crypto. They then reply to the real person's posts with fake giveaway links, fake project announcements, or DM followers directly asking for funds.",
    realExample:
      "Fake Vitalik Buterin and Elon Musk accounts have run ETH/BTC doubling scams for years on Twitter. 'Send 1 ETH, get 2 back' — they just keep the ETH.",
    redFlags: [
      "Account created recently with high follower count (bought followers)",
      "Offering to 'double' your crypto or guaranteed returns",
      "Replies appearing under major crypto figures' posts",
      "DMs from 'founders' asking you to participate in exclusive deals",
      "Slight username variations (e.g. @VitalikButerin_ vs @VitalikButerin)",
    ],
    foundOn: ["Twitter / X", "Discord", "Telegram", "YouTube"],
  },
];

export const checklistItems = [
  { id: 1, text: "I verified the URL manually — I didn't click a link from Discord, Twitter, or a DM" },
  { id: 2, text: "I checked the transaction is going to the correct contract address" },
  { id: 3, text: "I read what the transaction is approving — not just clicked confirm" },
  { id: 4, text: "The token approval amount is not set to 'unlimited' unless I intentionally chose that" },
  { id: 5, text: "I verified the recipient address fully — not just first and last characters" },
  { id: 6, text: "I'm not being pressured to act fast or told 'this is time-sensitive'" },
  { id: 7, text: "The yield or return being promised has a clear, logical source" },
  { id: 8, text: "I did not download any software to participate in this" },
];
