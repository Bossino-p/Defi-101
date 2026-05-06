import { useNavigate } from "react-router-dom";
import { hotWallets, coldWallets } from "../data/wallets";
import WalletCard from "../components/WalletCard";
import ScamGuard from "../components/ScamGuard";

const sectionHeaderStyle = {
  fontSize: "18px",
  fontWeight: 700,
  color: "#ffffff",
  margin: "0 0 6px 0",
  letterSpacing: "-0.3px",
};

const sectionSubStyle = {
  fontSize: "13px",
  color: "#5eead4",
  margin: "0 0 16px 0",
  lineHeight: "1.5",
};

function InfoCard({ icon, title, body }) {
  return (
    <div style={{
      background: "#0f1a1a",
      border: "1px solid #1a3333",
      borderRadius: "12px",
      padding: "16px 20px",
      display: "flex",
      gap: "14px",
      alignItems: "flex-start",
    }}>
      <span style={{ fontSize: "22px", flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginBottom: "4px" }}>{title}</div>
        <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6" }}>{body}</div>
      </div>
    </div>
  );
}

function WalletPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "#080f0f",
      minHeight: "100vh",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "#2d6b6b",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            fontFamily: "inherit",
            marginBottom: "28px",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "#2dd4bf"}
          onMouseLeave={(e) => e.currentTarget.style.color = "#2d6b6b"}
        >
          ← Back to hub
        </button>

        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#ffffff", margin: 0, letterSpacing: "-0.5px" }}>
            Wallet 101
          </h1>
          <p style={{ fontSize: "14px", color: "#2dd4bf", marginTop: "6px", marginBottom: 0 }}>
            Your wallet is your identity in DeFi. Understand it before using it.
          </p>
        </div>

        {/* ── SECTION 1: Mental model ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            background: "#0a1f1f",
            border: "1px solid #134e4a",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "16px",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", color: "#2dd4bf", marginBottom: "10px" }}>
              The most important concept
            </div>
            <p style={{ fontSize: "16px", color: "#ffffff", lineHeight: "1.7", margin: 0, fontStyle: "italic" }}>
              "Your wallet doesn't hold your crypto — it holds the <strong style={{ color: "#2dd4bf" }}>key</strong> to it. The crypto lives on the blockchain. Losing your wallet app is fine. Losing your seed phrase means losing everything, forever."
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "10px",
          }}>
            <InfoCard
              icon="🔑"
              title="Seed phrase = master key"
              body="A 12 or 24 word phrase that controls your entire wallet. Write it on paper. Store it safely. Never share it with anyone."
            />
            <InfoCard
              icon="📬"
              title="Wallet address = your inbox"
              body="Safe to share publicly. Anyone can send crypto to your address. Think of it like an email address — sharing it is fine."
            />
            <InfoCard
              icon="✍️"
              title="Private key = your signature"
              body="Used to approve transactions. Your wallet manages this automatically. Never export or share it manually."
            />
            <InfoCard
              icon="⛓️"
              title="The blockchain holds the funds"
              body="Your wallet is just an interface. Even if you delete the app, your funds are still on-chain — recoverable with your seed phrase."
            />
          </div>
        </div>

        {/* ── SECTION 2: Not your keys warning ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            background: "#1a0a0a",
            border: "1px solid #7f1d1d",
            borderRadius: "14px",
            padding: "24px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ fontSize: "22px" }}>⚠️</span>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#fca5a5" }}>
                Not your keys, not your crypto
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.7", margin: "0 0 14px 0" }}>
              Keeping crypto on an exchange (Binance, Coinbase, OKX) means the exchange holds your keys — not you. You have an IOU, not actual ownership. If the exchange collapses, freezes withdrawals, or gets hacked, your funds can disappear.
            </p>
            <div style={{
              background: "#2d0a0a",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "12px",
              color: "#fca5a5",
              lineHeight: "1.6",
              borderLeft: "3px solid #ef4444",
            }}>
              <strong>Real example:</strong> FTX collapse (November 2022) — over $8 billion in user funds were lost when the exchange went bankrupt overnight. Users who held funds on FTX lost everything. Users who held in self-custody wallets were unaffected.
            </div>
          </div>
        </div>

        {/* ── SECTION 3: How to use a wallet ── */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={sectionHeaderStyle}>4 things you'll do with every wallet</h2>
          <p style={sectionSubStyle}>Master these actions and you're ready for DeFi.</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "10px",
          }}>
            {[
              {
                icon: "📥",
                title: "Receive",
                body: "Share your wallet address. Nothing can go wrong here — receiving funds is always safe.",
                tip: null,
              },
              {
                icon: "📤",
                title: "Send",
                body: "Enter the recipient's address and amount. Transactions are irreversible once confirmed.",
                tip: "Always verify the first and last 6 characters of the address after pasting.",
              },
              {
                icon: "🔗",
                title: "Connect to a dApp",
                body: "Click 'Connect Wallet' on a DeFi protocol. This only shares your address — it does not give the site any access to your funds.",
                tip: "Always verify you're on the correct URL before connecting.",
              },
              {
                icon: "✅",
                title: "Sign a transaction",
                body: "Approving an action like a swap or deposit. This is where funds actually move — read what you're signing carefully.",
                tip: "Use Rabby wallet to preview exactly what a transaction will do before signing.",
              },
            ].map(({ icon, title, body, tip }) => (
              <div key={title} style={{
                background: "#0f1a1a",
                border: "1px solid #1a3333",
                borderRadius: "12px",
                padding: "16px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "20px" }}>{icon}</span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffffff" }}>{title}</span>
                </div>
                <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.6", margin: 0 }}>{body}</p>
                {tip && (
                  <p style={{ fontSize: "11px", color: "#2dd4bf", lineHeight: "1.5", margin: 0 }}>
                    💡 {tip}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: Hot Wallets ── */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={sectionHeaderStyle}>Hot Wallets</h2>
          <p style={sectionSubStyle}>
            Software wallets connected to the internet. Use for daily DeFi activity and smaller amounts. Not recommended for large long-term holdings.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "12px",
          }}>
            {hotWallets.map((w) => <WalletCard key={w.name} {...w} />)}
          </div>
        </div>

        {/* ── SECTION 5: Cold Wallets ── */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={sectionHeaderStyle}>Cold Wallets</h2>
          <p style={sectionSubStyle}>
            Hardware devices that store your keys offline. Use for long-term storage and larger holdings. The private key never touches the internet.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "12px",
          }}>
            {coldWallets.map((w) => <WalletCard key={w.name} {...w} />)}
          </div>
        </div>

        {/* ── SECTION 6: Seed phrase rules ── */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            background: "#0a1f1f",
            border: "1px solid #134e4a",
            borderRadius: "14px",
            padding: "24px",
          }}>
            <h2 style={{ ...sectionHeaderStyle, marginBottom: "16px" }}>Seed phrase rules</h2>
            {[
              { rule: "Write it on paper", detail: "Never store it digitally — no photos, no cloud notes, no password managers." },
              { rule: "Store in multiple secure physical locations", detail: "A fireproof safe at home and one copy somewhere else (trusted family, safe deposit box)." },
              { rule: "Never type it into any website", detail: "No exceptions. Not even if it looks like your wallet's official site." },
              { rule: "Never share it with anyone", detail: "Not support staff, not a friend helping you, not anyone. Ever." },
              { rule: "Test your backup immediately", detail: "After setup, verify you've written the phrase correctly by doing a recovery test before adding funds." },
            ].map(({ rule, detail }, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "14px",
                padding: "12px 0",
                borderBottom: i < 4 ? "1px solid #134e4a" : "none",
              }}>
                <span style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#2dd4bf",
                  minWidth: "20px",
                  marginTop: "1px",
                }}>
                  {i + 1}.
                </span>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff", marginBottom: "3px" }}>{rule}</div>
                  <div style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.5" }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 7: Scam guard ── */}
        <ScamGuard />

      </div>
    </div>
  );
}

export default WalletPage;
