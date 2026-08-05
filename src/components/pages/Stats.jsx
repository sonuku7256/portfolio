import React from "react";

const FontImports = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-code { font-family: 'JetBrains Mono', monospace; }
  `}</style>
);

const STATS = [
  { label: "repos", value: 4 },
  { label: "gists", value: 0 },
  { label: "followers", value: 0 },
  { label: "stars", value: 0 },
];

export const Stats = () => {
  return (
    <>
      <FontImports />
      <section className="font-body bg-[#0D1117] text-[#E6EDF3] px-5 sm:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="font-display font-bold text-3xl md:text-4xl">Statistics</h1>
            <p className="text-[#8B949E] mt-3 text-sm md:text-base">
              Pulled straight from GitHub — updates as the work does.
            </p>
          </div>

          {/* Terminal-output panel */}
          <div className="rounded-xl border border-[#30363D] bg-[#161B22] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363D] bg-[#0D1117]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="font-code text-xs text-[#8B949E] ml-3">stats.sh</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#30363D]">
              {STATS.map(({ label, value }) => {
                const active = value > 0;
                return (
                  <div
                    key={label}
                    className="p-6 md:p-8 text-center group"
                  >
                    <h2
                      className={`font-code font-medium text-3xl md:text-4xl tabular-nums transition-colors ${
                        active ? "text-[#7EE787]" : "text-[#30363D]"
                      }`}
                    >
                      {String(value).padStart(2, "0")}
                    </h2>
                    <p
                      className={`font-code text-xs mt-3 tracking-wide ${
                        active ? "text-[#8B949E]" : "text-[#484F58]"
                      }`}
                    >
                      // {label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
