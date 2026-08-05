import { useEffect, useState } from "react";
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import certificate from "../../assets/js.jpg";
import jscertificate from "../../assets/img.jpg";
import internship from "../../assets/internship.jpeg";

const FontImports = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
    .font-display { font-family: 'Space Grotesk', sans-serif; }
    .font-body { font-family: 'Inter', sans-serif; }
    .font-code { font-family: 'JetBrains Mono', monospace; }
  `}</style>
);

const CERTIFICATES = [
  { src: certificate, alt: "FSD certificate", label: "fsd" },
  { src: internship, alt: "Internship certificate", label: "internship" },
  { src: jscertificate, alt: "JavaScript certificate", label: "javascript" },
];

export const Certificates = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i + 1) % CERTIFICATES.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i - 1 + CERTIFICATES.length) % CERTIFICATES.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <FontImports />
      <section className="font-body bg-[#0D1117] text-[#E6EDF3] px-5 sm:px-8 py-16 md:py-24 select-none">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-3xl md:text-4xl mb-3">Certificates</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CERTIFICATES.map(({ src, alt, label }, i) => (
              <button
                key={label}
                onClick={() => setOpenIndex(i)}
                className="group text-left rounded-xl border border-[#30363D] bg-[#161B22] overflow-hidden hover:border-[#7EE787] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#30363D] bg-[#0D1117]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  <span className="font-code text-xs text-[#8B949E] ml-2">"{label}"</span>
                </div>
                <div className="relative `aspect-[4/3]` bg-[#0D1117] flex items-center justify-center">
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 font-code text-xs text-[#E6EDF3] bg-[#0D1117]/90 border border-[#30363D] rounded-md px-3 py-1.5">
                      <FiMaximize2 />

                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center px-4 py-10"
          onClick={() => setOpenIndex(null)}
        >
          <button
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 flex items-center justify-center rounded-full border border-[#30363D] text-[#E6EDF3] hover:border-[#7EE787] hover:text-[#7EE787] transition-colors font-code"
          >
            <FiX className="text-xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((openIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length);
            }}
            aria-label="Previous"
            className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full border border-[#30363D] text-[#E6EDF3] hover:border-[#7EE787] hover:text-[#7EE787] transition-colors"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((openIndex + 1) % CERTIFICATES.length);
            }}
            aria-label="Next"
            className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full border border-[#30363D] text-[#E6EDF3] hover:border-[#7EE787] hover:text-[#7EE787] transition-colors"
          >
            <FiChevronRight className="text-xl" />
          </button>

          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-xl border border-[#30363D] bg-[#161B22] overflow-hidden w-full">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#30363D] bg-[#0D1117]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="font-code text-xs text-[#8B949E] ml-2">
                  "{CERTIFICATES[openIndex].label}"
                </span>
              </div>
              <img
                src={CERTIFICATES[openIndex].src}
                alt={CERTIFICATES[openIndex].alt}
                className="w-full max-h-[75vh] object-contain bg-[#0D1117] p-4"
              />
            </div>
            <p className="font-code text-xs text-[#8B949E] mt-4">
              {openIndex + 1} / {CERTIFICATES.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

// import certificate from "../../assets/js.jpg";
// import jscertificate from "../../assets/img.jpg";
// import internship from "../../assets/internship.jpeg";

// export const Certificates = () => {
//   return (
//     <section className="px-4 py-5 md:py-10 bg-gray-100  select-none">
//       <div className="max-w-4xl mx-auto text-center">
//         <h1 className="text-3xl text-start md:text-5xl font-bold text-gray-800 mb-4">
//           Certificates
//         </h1>
//         <p className="text-gray-600 mb-8 text-start">
//           I've participated in contests and courses and earned certifications in
//           many skills.
//         </p>
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2">
//           <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//             <img
//               src={certificate}
//               alt="FSD certificates"
//               className="w-full object-cover hover:scale-105 transition duration-300"
//             />
//           </div>
//           <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//             <img
//               src={internship}
//               alt="Internship Certificates"
//               className="w-full object-cover hover:scale-105 transition duration-300"
//             />
//           </div>
//           <div className="bg-white shadow-lg rounded-xl overflow-hidden">
//             <img
//               src={jscertificate}
//               alt="JavaScript certificates"
//               className="w-full object-cover hover:scale-105 transition duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
