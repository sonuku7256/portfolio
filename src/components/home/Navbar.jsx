import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FontImports = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-code { font-family: 'JetBrains Mono', monospace; }
  `}</style>
);

const NAV_ITEMS = [
  { to: "/", label: "home" },
  { to: "/About", label: "about" },
  { to: "/Skills", label: "skills" },
  { to: "/Utilities", label: "utilities" },
  { to: "/Certificates", label: "certificates" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FontImports />
      <nav className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur border-b border-[#30363D] font-body">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center h-14">
            {/* Brand mark */}
            <NavLink to="/" className="flex items-center gap-2 font-code text-sm text-[#E6EDF3] shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#7EE787]" />
              sonu
            </NavLink>

            {/* Desktop tabs */}
            <ul className="hidden md:flex items-center gap-1 font-code text-sm">
              {NAV_ITEMS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `relative flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${isActive
                        ? "text-[#7EE787] bg-[#161B22]"
                        : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? "bg-[#7EE787]" : "bg-transparent"
                            }`}
                        />
                        {label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile toggle */}
            <button
              className="md:hidden font-code text-xl text-[#E6EDF3] w-9 h-9 flex items-center justify-center rounded-md border border-[#30363D] hover:border-[#7EE787] hover:text-[#7EE787] transition-colors"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? "X" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu — editor-window styled */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-[#30363D] ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
            }`}
        >
          <div className="bg-[#161B22]">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#30363D] bg-[#0D1117]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              <span className="font-code text-xs text-[#8B949E] ml-2">menu.js</span>
            </div>
            <ul className="font-code text-sm">
              {NAV_ITEMS.map(({ to, label }) => (
                <li key={to} className="border-b border-[#30363D] last:border-b-0">
                  <NavLink
                    to={to}
                    end={to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 transition-colors ${isActive
                        ? "text-[#7EE787] bg-[#0D1117]"
                        : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#0D1117]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#7EE787]" : "bg-transparent"
                            }`}
                        />
                        {label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};