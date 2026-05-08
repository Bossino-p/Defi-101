import { scamRules } from "../data/wallets";

function ScamGuard() {
  return (
    <div>
      {/* Section header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-white tracking-tight mb-1.5">What not to do</h2>
        <p className="text-[13px] text-teal-accent">
          Most losses in DeFi aren't from bad trades — they're from preventable mistakes.
        </p>
      </div>

      {/* Rules grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {scamRules.map((item, i) => (
          <div
            key={i}
            className="bg-scam-card border border-scam-border rounded-xl p-4 flex flex-col gap-2 hover:border-scam-hover transition-colors duration-150"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-xl">{item.icon}</span>
              <span className="text-[13px] font-bold text-red-tag-text leading-snug">
                {item.rule}
              </span>
            </div>
            <p className="text-[12px] text-white/70 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScamGuard;
