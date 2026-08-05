import React from "react";

import { Link  } from "react-router-dom";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

const FontImports = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-code { font-family: 'JetBrains Mono', monospace; }
  `}</style>
);

const QUICK_LINKS = [
  { to: "/", label: "home" },
  { to: "/About", label: "about" },
  { to: "/Skills", label: "skills" },
  { to: "/Utilities", label: "utilities" },
  { to: "/Certificates", label: "certificates" },
];

const SOCIALS = [
  { href: "https://www.linkedin.com/in/sonu-kr-pandit/", label: "LinkedIn", Icon: FiLinkedin },
  { href: "https://github.com/sonuku7256", label: "GitHub", Icon: FiGithub },
];

export const Footer = () => {
  return (
    <>
      <FontImports />
      <footer className="font-body bg-[#0D1117] border-t border-[#30363D] text-[#8B949E]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="col-span-2 md:col-span-1">
              <p className="font-code text-sm text-[#E6EDF3] flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#7EE787]" />
                sonu
              </p>
             
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-display font-semibold text-sm text-[#E6EDF3] mb-4 tracking-wide">Quick Links</h3>
              <ul className="space-y-2.5 font-code text-sm">
                {QUICK_LINKS.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="inline-flex items-center gap-2 hover:text-[#7EE787] -colors">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow */}
            <div>
              <h3 className="font-display font-semibold text-sm text-[#E6EDF3] mb-4 tracking-wide">Follow Me</h3>
              <ul className="space-y-2.5 font-code text-sm">
                {SOCIALS.map(({ href, label, Icon}) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 hover:text-[#7EE787] transition-colors"
                    >
                      <Icon className="text-base" />
                      {label}
                      <FiArrowUpRight className="text-xs opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#30363D]">
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 font-code text-xs">
            <span>© Sonu Kr Pandit. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};
