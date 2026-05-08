import { useNavigate } from "react-router-dom";
import { hotWallets, coldWallets } from "../data/wallets";
import WalletCard from "../components/WalletCard";
import ScamGuard from "../components/ScamGuard";

function InfoCard({ icon, title, body }) {
  return (
    <div className="bg-wallet-card border border-wallet-border rounded-xl p-4 flex gap-3.5">
      <span className="text-[22px] flex-shrink-0">{icon}</span>
      <div>
        <div className="text-[13px] font-bold text-white mb-1">{title}</div>
        <div className="text-[12px] text-white/70 leading-relaxed">{body}</div>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">{title}</h2>
      {subtitle && <p className="text-[13px] text-teal-accent leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function WalletPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-wallet-base min-h-screen px-6 py-10 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-[13px] text-wallet-hover hover:text-teal-accent transition-colors mb-7"
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">Wallet 101</h1>
          <p className="text-sm text-teal-accent mt-1.5">
            Your wallet is your identity in DeFi. Understand it before using it.
          </p>
        </div>

        {/* ── SECTION 1: Mental model ── */}
        <div className="mb-12">
          <div className="bg-wallet-card border border-teal-border rounded-2xl p-6 mb-4">
            <div className="text-[11px] font-bold uppercase tracking-widest text-teal-accent mb-2.5">
              The most important concept
            </div>
            <p className="text-[16px] text-white leading-relaxed italic">
              "Your wallet doesn't hold your crypto — it holds the{" "}
              <strong className="text-teal-accent not-italic">key</strong> to it. The crypto lives on the blockchain.
              Losing your wallet app is fine. Losing your seed phrase means losing everything, forever."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            <InfoCard icon="🔑" title="Seed phrase = master key" body="A 12 or 24 word phrase that controls your entire wallet. Write it on paper. Store it safely. Never share it." />
            <InfoCard icon="📬" title="Wallet address = your inbox" body="Safe to share publicly. Anyone can send crypto to your address. Think of it like an email address." />
            <InfoCard icon="✍️" title="Private key = your signature" body="Used to approve transactions. Your wallet manages this automatically. Never export or share it." />
            <InfoCard icon="⛓️" title="The blockchain holds the funds" body="Your wallet is just an interface. Even if you delete the app, your funds are still on-chain." />
          </div>
        </div>

        {/* ── SECTION 2: Not your keys ── */}
        <div className="mb-12">
          <div className="bg-scam-card border border-scam-hover rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-[22px]">⚠️</span>
              <span className="text-[16px] font-bold text-red-tag-text">Not your keys, not your crypto</span>
            </div>
            <p className="text-[13px] text-white/70 leading-relaxed mb-4">
              Keeping crypto on an exchange (Binance, Coinbase, OKX) means the exchange holds your keys — not you.
              You have an IOU, not actual ownership. If the exchange collapses, freezes withdrawals, or gets hacked, your funds can disappear.
            </p>
            <div className="bg-red-tag-bg border-l-4 border-red-accent rounded-r-lg px-4 py-3 text-[12px] text-red-tag-text leading-relaxed">
              <strong>Real example:</strong> FTX collapse (November 2022) — over $8 billion in user funds were lost when the exchange went bankrupt overnight. Users who held in self-custody wallets were unaffected.
            </div>
          </div>
        </div>

        {/* ── SECTION 3: 4 key actions ── */}
        <div className="mb-12">
          <SectionHeader title="4 things you'll do with every wallet" subtitle="Master these actions and you're ready for DeFi." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[
              { icon: "📥", title: "Receive", body: "Share your wallet address. Nothing can go wrong here — receiving funds is always safe.", tip: null },
              { icon: "📤", title: "Send", body: "Enter the recipient's address and amount. Transactions are irreversible once confirmed.", tip: "Always verify the first and last 6 characters of the address after pasting." },
              { icon: "🔗", title: "Connect to a dApp", body: "Click 'Connect Wallet' on a DeFi protocol. This only shares your address — it does not give the site access to your funds.", tip: "Always verify you're on the correct URL before connecting." },
              { icon: "✅", title: "Sign a transaction", body: "Approving an action like a swap or deposit. This is where funds actually move — read what you're signing.", tip: "Use Rabby wallet to preview exactly what a transaction will do before signing." },
            ].map(({ icon, title, body, tip }) => (
              <div key={title} className="bg-wallet-card border border-wallet-border rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{icon}</span>
                  <span className="text-[14px] font-bold text-white">{title}</span>
                </div>
                <p className="text-[12px] text-white/70 leading-relaxed">{body}</p>
                {tip && <p className="text-[11px] text-teal-accent leading-relaxed">💡 {tip}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: Hot Wallets ── */}
        <div className="mb-12">
          <SectionHeader
            title="Hot Wallets"
            subtitle="Software wallets connected to the internet. Use for daily DeFi activity and smaller amounts."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {hotWallets.map((w) => <WalletCard key={w.name} {...w} />)}
          </div>
        </div>

        {/* ── SECTION 5: Cold Wallets ── */}
        <div className="mb-12">
          <SectionHeader
            title="Cold Wallets"
            subtitle="Hardware devices that store your keys offline. Use for long-term storage and larger holdings."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coldWallets.map((w) => <WalletCard key={w.name} {...w} />)}
          </div>
        </div>

        {/* ── SECTION 6: Seed phrase rules ── */}
        <div className="mb-12">
          <div className="bg-wallet-card border border-teal-border rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white tracking-tight mb-4">Seed phrase rules</h2>
            {[
              { rule: "Write it on paper", detail: "Never store it digitally — no photos, no cloud notes, no password managers." },
              { rule: "Store in multiple secure physical locations", detail: "A fireproof safe at home and one copy somewhere else (trusted family, safe deposit box)." },
              { rule: "Never type it into any website", detail: "No exceptions. Not even if it looks like your wallet's official site." },
              { rule: "Never share it with anyone", detail: "Not support staff, not a friend helping you, not anyone. Ever." },
              { rule: "Test your backup immediately", detail: "After setup, verify you've written the phrase correctly by doing a recovery test before adding funds." },
            ].map(({ rule, detail }, i, arr) => (
              <div key={i} className={`flex gap-3.5 py-3 ${i < arr.length - 1 ? "border-b border-teal-border" : ""}`}>
                <span className="text-[11px] font-bold text-teal-accent min-w-[20px] mt-0.5">{i + 1}.</span>
                <div>
                  <div className="text-[13px] font-bold text-white mb-0.5">{rule}</div>
                  <div className="text-[12px] text-white/70 leading-relaxed">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 7: Scam Guard ── */}
        <ScamGuard />

      </div>
    </div>
  );
}

export default WalletPage;
