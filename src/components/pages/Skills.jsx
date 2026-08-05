import { FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { SiMysql, SiTailwindcss, SiMongodb, SiNodedotjs } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";

const FontImports = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-code { font-family: 'JetBrains Mono', monospace; }
  `}</style>
);

const SKILLS = [
  { name: "html5", Icon: FaHtml5, color: "#E44D26" },
  { name: "css3", Icon: FaCss3Alt, color: "#2965F1" },
  { name: "javascript", Icon: FaJsSquare, color: "#F0DB4F" },
  { name: "mysql", Icon: SiMysql, color: "#4479A1" },
  { name: "tailwindcss", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "java", Icon: FaJava, color: "#F58219" },
  { name: "react", Icon: RiReactjsLine, color: "#61DAFB" },
  { name: "github", Icon: FaGithub, color: "#E6EDF3" },
  { name: "mongodb", Icon: SiMongodb, color: "#47A248" },
  { name: "node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "vercel", Icon: TbBrandVercel, color: "#E6EDF3" },
];

export const Skills = () => {
  return (
    <>
      <FontImports />
      <section className="w-full bg-[#0D1117] py-10">
        <div className="font-body container mx-auto w-[90%] md:w-[80%] text-[#E6EDF3]">
          <h1 className="font-display font-bold text-2xl md:text-3xl mb-6">Skills</h1>
          <div className="rounded-xl border border-[#30363D] bg-[#161B22] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363D] bg-[#0D1117]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="font-code text-xs text-[#8B949E] ml-3">skills.json</span>
            </div>
            <div className="p-5 sm:p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {SKILLS.map(({ name, Icon, color }) => (
                  <div key={name} className="group flex items-center gap-3 p-3 rounded-lg border border-[#30363D] bg-[#0D1117] hover:border-[#7EE787] transition-colors">
                    <Icon className="text-2xl shrink-0 transition-transform group-hover:scale-110" style={{ color }} />
                    <span className="font-code text-sm text-[#8B949E] truncate">{name}</span>
                    <span >{Icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};