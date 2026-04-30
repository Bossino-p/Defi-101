import { useNavigate } from "react-router-dom";

const pages = [
  {
    path: "/defi101",
    title: "DeFi 101",
    description: "Explore the main types of DeFi protocols — from DEXs and lending to restaking and prediction markets.",
    tag: "14 protocol types",
    accent: "#2563eb",
    accentBg: "#0c1a2e",
    border: "#1e3a5f",
    hoverBorder: "#2563eb",
    tagColor: "#60a5fa",
  },
  {
    path: "/risk101",
    title: "DeFi Risk 101",
    description: "Understand the risks before putting your funds to work — smart contract exploits, liquidations, phishing, and more.",
    tag: "11 risk types",
    accent: "#f59e0b",
    accentBg: "#2d1a00",
    border: "#4a3520",
    hoverBorder: "#f59e0b",
    tagColor: "#fbbf24",
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      background: "#0d0d0f",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 24px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#475569",
          marginBottom: "12px",
        }}>
          Learn DeFi
        </div>
        <h1 style={{
          fontSize: "42px",
          fontWeight: 700,
          color: "#ffffff",
          margin: 0,
          letterSpacing: "-1px",
          lineHeight: 1.15,
        }}>
          DeFi Education Hub
        </h1>
        <p style={{
          fontSize: "16px",
          color: "#64748b",
          marginTop: "14px",
          maxWidth: "420px",
          lineHeight: "1.6",
        }}>
          A no-fluff guide to understanding decentralized finance — protocols, risks, and everything in between.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "16px",
        width: "100%",
        maxWidth: "680px",
      }}>
        {pages.map((page) => (
          <button
            key={page.path}
            onClick={() => navigate(page.path)}
            style={{
              background: "#161618",
              border: `1px solid ${page.border}`,
              borderRadius: "16px",
              padding: "28px",
              textAlign: "left",
              cursor: "pointer",
              transition: "border-color 0.2s, transform 0.15s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = page.hoverBorder;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = page.border;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Tag */}
            <span style={{
              fontSize: "11px",
              fontWeight: 600,
              padding: "3px 9px",
              borderRadius: "20px",
              background: page.accentBg,
              color: page.tagColor,
              display: "inline-block",
              marginBottom: "16px",
            }}>
              {page.tag}
            </span>

            {/* Title */}
            <div style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "10px",
              letterSpacing: "-0.3px",
            }}>
              {page.title}
            </div>

            {/* Description */}
            <p style={{
              fontSize: "13px",
              color: "#64748b",
              lineHeight: "1.6",
              margin: "0 0 20px 0",
            }}>
              {page.description}
            </p>

            {/* CTA */}
            <div style={{
              fontSize: "13px",
              fontWeight: 600,
              color: page.accent,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}>
              Explore → 
            </div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <p style={{
        fontSize: "12px",
        color: "#334155",
        marginTop: "48px",
      }}>
        More guides coming soon
      </p>
    </div>
  );
}

export default Home;
