import React from "react";
import { SiTailwindcss, SiMysql, SiBrave, SiJavascript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub, FaWindows } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";

const FontImports = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-code { font-family: 'JetBrains Mono', monospace; }
  `}</style>
);

// Brand colors kept true-to-source, same rule as Skills.jsx —
// the icons stay recognizable, only the surrounding chrome is themed.
const SYSTEM = [
  { name: "windows", Icon: FaWindows, color: "#00A4EF" },
  { name: "vscode", Icon: VscVscode, color: "#38BDF8" },
  { name: "github", Icon: FaGithub, color: "#E6EDF3" },
  { name: "brave", Icon: SiBrave, color: "#FB542B" },
];

const SOFTWARE = [
  { name: "javascript", Icon: SiJavascript, color: "#F0DB4F" },
  { name: "react", Icon: RiReactjsLine, color: "#61DAFB" },
  { name: "tailwindcss", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "mysql", Icon: SiMysql, color: "#4479A1" },
];

const ToolGrid = ({ items }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pl-4 md:pl-6">
    {items.map(({ name, Icon, color }) => (
      <div
        key={name}
        className="group flex flex-col items-center gap-2 px-3 py-4 rounded-lg border border-[#30363D] bg-[#0D1117] hover:border-[#7EE787] transition-colors"
      >
        <Icon
          className="w-7 h-7 transition-transform group-hover:scale-110"
          style={{ color }}
        />
        <p className="font-code text-xs text-[#8B949E] truncate">{name}</p>
        <span >{Icon}</span>
      </div>
    ))}
  </div>
);

export const Utilities = () => {
  return (
    <>
      <FontImports />
      <section className="font-body bg-[#0D1117] text-[#E6EDF3] px-5 sm:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">Utilities</h1>
          <div className="rounded-xl border border-[#30363D] bg-[#161B22] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363D] bg-[#0D1117]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="p-5 sm:p-6 space-y-8">
              <ToolGrid items={SYSTEM} />
              <ToolGrid items={SOFTWARE} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};