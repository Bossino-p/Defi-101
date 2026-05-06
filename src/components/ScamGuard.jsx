import { scamRules } from "../data/wallets";

function ScamGuard() {
  return (
    <div style={{
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      {/* Section header */}
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#ffffff",
          margin: "0 0 6px 0",
          letterSpacing: "-0.3px",
        }}>
          What not to do
        </h2>
        <p style={{ fontSize: "13px", color: "#5eead4", margin: 0 }}>
          Most losses in DeFi aren't from bad trades — they're from preventable mistakes. Learn these rules before touching any wallet.
        </p>
      </div>

      {/* Rules grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "10px",
      }}>
        {scamRules.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#1a0d0d",
              border: "1px solid #3d1515",
              borderRadius: "12px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "#7f1d1d"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "#3d1515"}
          >
            {/* Icon + rule title */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>{item.icon}</span>
              <span style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#fca5a5",
                lineHeight: "1.3",
              }}>
                {item.rule}
              </span>
            </div>

            {/* Detail */}
            <p style={{
              fontSize: "12px",
              color: "#94a3b8",
              lineHeight: "1.6",
              margin: 0,
            }}>
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScamGuard;
