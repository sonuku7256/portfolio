import React, { useState } from "react";
import image from "/src/assets/me_image.jpeg";
import { Skills } from "../pages/Skills";
import { MdFileDownload, MdOutlineMailOutline } from "react-icons/md";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

const FontImports = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-code { font-family: 'JetBrains Mono', monospace; }

    @keyframes blink-caret {
      0%, 49% { opacity: 1; }
      50%, 100% { opacity: 0; }
    }
    .caret {
      animation: blink-caret 1s step-end infinite;
    }

    @keyframes float-glow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .float-glow {
      animation: float-glow 6s ease-in-out infinite;
    }

    @media (prefers-reduced-motion: reduce) {
      .caret, .float-glow { animation: none; }
    }
  `}</style>
);

export const Home = () => {
  const [submitted, setSubmitted] = useState(false);

  const viewResume = () => {
    window.open("/Sonu (Front-end Developer).pdf", "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <FontImports />
      <div className="font-body bg-[#0D1117] text-[#E6EDF3] selection:bg-[#7EE787] selection:text-[#0D1117]">
        <section className="container mx-auto px-5 sm:px-8 pt-24 pb-20 min-h-screen flex flex-col justify-center">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative float-glow">
                <div className="absolute -inset-1 rounded-2xl `bg-gradient-to-br` from-[#7EE787]/40 to-[#FFA657]/30 blur-xl" />
                <img
                  src={image}
                  alt="Sonu Kr Pandit"
                  className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-2xl object-cover border border-[#30363D]"
                />
              </div>
            </div>
            <div className="w-full max-w-xl rounded-xl border border-[#30363D] bg-[#161B22] shadow-2xl shadow-black/40 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363D] bg-[#0D1117]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="font-code text-xs text-[#8B949E] ml-3">about.js</span>
              </div>

              {/* code body */}
              <div className="font-code text-sm sm:text-base leading-7 px-5 py-6">
                <p><span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">developer</span> = {"{"}</p>
                <p className="pl-4">
                  <span className="text-[#7EE787]">name</span>: <span className="text-[#A5D6FF]">"Sonu Kr Pandit"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#7EE787]">role</span>: <span className="text-[#A5D6FF]">"Front-end Developer"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#7EE787]">education</span>: <span className="text-[#A5D6FF]">"MCA"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-[#7EE787]">status</span>: <span className="text-[#A5D6FF]">"exploring new stacks"</span>
                  <span className="caret text-[#E6EDF3]">|</span>
                </p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={viewResume}
              className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-[#7EE787] text-[#0D1117] font-display font-semibold text-sm cursor-pointer transition-transform hover:-translate-y-0.5"
            >
              <MdFileDownload className="text-lg" />
              Resume
            </button>
            <a
              href="#connect"
              className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-[#30363D] font-display font-semibold text-sm cursor-pointer transition-colors hover:border-[#7EE787] hover:text-[#7EE787]"
            >
              Get in touch
              <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </section>
        <div className="hidden md:block container mx-auto px-5 sm:px-8">
          <Skills />
        </div>
        <section id="connect" className="container mx-auto px-5 sm:px-8 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
              Connect with me
            </h2>

          </div>
          <div className="max-w-2xl mx-auto mt-12 rounded-xl border border-[#30363D] bg-[#161B22] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363D] bg-[#0D1117]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="font-code text-xs text-[#8B949E] ml-3">message.js</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="first_name" id="FirstName" name="firstName" />
                <Field label="last_name" id="lastname" name="LastName" />
              </div>
              <Field label="email" id="email" name="Email" type="email" />
              <Field label="subject" id="subject" name="Subject" />
              <Field label="message" id="message" name="Message" textarea />

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 justify-between">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#7EE787] text-[#0D1117] font-display font-semibold text-sm cursor-pointer transition-transform hover:-translate-y-0.5"
                >
                  <MdOutlineMailOutline className="text-lg" />
                  Send message
                </button>
                {submitted && (
                  <p className="font-code text-xs text-[#7EE787]">
                    sent — thanks, I'll reply soon
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};
const Field = ({ label, id, name, type = "text", textarea = false }) => {
  const baseClasses =
    "w-full bg-[#0D1117] border border-[#30363D] rounded-lg px-4 py-3 text-sm font-body text-[#E6EDF3] placeholder:text-[#8B949E] focus:outline-none focus:border-[#7EE787] transition-colors";

  return (
    <div>
      <label htmlFor={id} className="block font-code text-xs text-[#8B949E] mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea id={id} name={name} required rows={4} className={baseClasses} />
      ) : (
        <input id={id} name={name} type={type} required className={baseClasses} />
      )}
    </div>
  );
};