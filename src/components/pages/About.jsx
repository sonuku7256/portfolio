import React from "react";

const FontImports = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-code { font-family: 'JetBrains Mono', monospace; }
  `}</style>
);

export const About = () => {
  return (
    <>
      <FontImports />
      <section className="font-body bg-[#0D1117] text-[#E6EDF3] px-5 sm:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl border border-[#30363D] bg-[#161B22] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363D] bg-[#0D1117]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="font-code text-xs text-[#8B949E] ml-3">about.md</span>
            </div>

            <div className="px-6 sm:px-10 py-10">
              <h1 className="font-display font-bold text-3xl md:text-4xl mb-8 flex items-baseline gap-3">
                About me
              </h1>
              <div className="space-y-5 text-[#8B949E] text-base md:text-lg leading-relaxed">
                <p>
                  I'm Sonu Kumar Pandit, a full-stack web developer currently
                  completed my Master of Computer Applications (MCA). I've built
                  a strong foundation in HTML, CSS, JavaScript, and React.js,
                  along with backend development using Node.js, Express.js and mongoDB.
                </p>

                <p>
                  I enjoy building responsive, user-friendly web applications
                  that solve real problems — projects like an online e-paan
                  store and a travel booking platform reflect my ability to
                  turn ideas into practical, scalable solutions.
                </p>

                <p>
                  I'm a quick learner with strong time-management and teamwork
                  skills, always eager to explore new technologies. My goal is
                  to contribute to innovative projects while continuously
                  growing as a developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
