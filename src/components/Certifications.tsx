import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, Download, ChevronRight } from "lucide-react";

export default function Certifications() {
  const certificationsList = [
    {
      title: "Microsoft Excel for Data",
      issuer: "Coursera & Macquarie University",
      date: "2023",
      credentialId: "EXCEL-CR-2023-8902",
      skillsLearned: ["Advanced formulas", "Data modeling", "Power Query ETL", "Pivot charting"],
    },
    {
      title: "Certified Associate in Full Stack (MERN)",
      issuer: "Full Stack Academy Certification",
      date: "2023",
      credentialId: "MERN-ASSOC-5671",
      skillsLearned: ["MongoDB database design", "Express server APIs", "React interfaces", "Node backend"],
    },
    {
      title: "Power BI for Business Analytics",
      issuer: "Microsoft Business Intelligence Partners",
      date: "2024",
      credentialId: "PBI-BA-9942",
      skillsLearned: ["DAX functions", "Interactive visualizations", "KPI metrics", "Sales forecasting"],
    },
    {
      title: "Python for Data Analysis",
      issuer: "Data Science Institute Academic Board",
      date: "2024",
      credentialId: "PY-DA-4412",
      skillsLearned: ["Pandas DataFrames", "NumPy arrays", "Matplotlib static charts", "Seaborn grids"],
    },
  ];

  const [selectedCert, setSelectedCert] = useState<typeof certificationsList[0] | null>(null);

  return (
    <section id="certifications" className="py-24 bg-white border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-2">
            06 / QUALIFIED CREDENTIALS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-neutral-950 mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAFAFA] border border-neutral-200/60 rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-neutral-950 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-neutral-950 text-sm md:text-base">
                        {cert.title}
                      </h4>
                      <p className="font-sans text-[11px] text-neutral-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-neutral-400 font-bold">{cert.date}</span>
                </div>

                {/* Skills metrics tags */}
                <div className="space-y-2 mb-6">
                  <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-bold block">Certified Competencies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="font-sans text-[10px] bg-white border border-neutral-100 text-neutral-600 px-2.5 py-1 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="border-t border-neutral-100 pt-4 flex justify-between items-center">
                <span className="font-mono text-[9px] text-neutral-400">ID: {cert.credentialId}</span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1 text-xs font-semibold text-neutral-950 hover:text-neutral-700 cursor-pointer transition-colors group-hover:translate-x-1 duration-200"
                >
                  View Certificate
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Certificate Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-2xl w-full max-w-2xl p-8 border border-neutral-100 shadow-2xl relative z-10 flex flex-col items-center text-center"
            >
              {/* Seal details decoration */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-neutral-400 hover:text-neutral-950 p-2 cursor-pointer rounded-full hover:bg-neutral-50"
                >
                  ✕
                </button>
              </div>

              {/* Digital Certificate frame wrapper */}
              <div className="w-full border-4 border-double border-neutral-950 p-6 md:p-10 bg-[#FAFAFA] rounded-xl flex flex-col items-center relative select-none">
                {/* Certificate Background watermark decoration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-2 pointer-events-none">
                  <Award className="w-64 h-64 text-neutral-950" />
                </div>

                {/* Issuer head */}
                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-4">
                  OFFICIAL ACADEMIC CREDENTIAL
                </span>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-1">
                  Certificate of Completion
                </h3>
                <p className="font-sans text-xs text-neutral-400 italic mb-8">This is proudly presented to</p>

                <h2 className="font-display text-xl md:text-3xl font-black text-neutral-950 border-b border-neutral-950/20 pb-2 px-12 tracking-tight mb-8">
                  Kisalay Kumar Mishra
                </h2>

                <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed max-w-md font-light mb-8">
                  for successfully satisfying all terms, coursework, and evaluations to achieve professional accreditation in
                  <span className="font-bold block text-neutral-950 text-sm md:text-base mt-1">
                    {selectedCert.title}
                  </span>
                  granted by <span className="font-medium text-neutral-900">{selectedCert.issuer}</span>.
                </p>

                {/* Signatures & verification footer */}
                <div className="grid grid-cols-2 gap-8 w-full border-t border-neutral-200 pt-6">
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">VERIFIED DATE</span>
                    <span className="font-sans text-xs font-bold text-neutral-800 mt-1">{selectedCert.date}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">CREDENTIAL ID</span>
                    <span className="font-mono text-xs font-semibold text-neutral-800 mt-1">{selectedCert.credentialId}</span>
                  </div>
                </div>

                {/* Stamped security badge */}
                <div className="mt-8 flex items-center gap-1.5 text-[9px] font-mono text-green-600 font-bold bg-green-50 border border-green-200/50 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED ACCREDITATION SYSTEM
                </div>
              </div>

              {/* Download trigger */}
              <button
                onClick={() => {
                  alert(`Starting download for ${selectedCert.title} accreditation PDF package...`);
                  setSelectedCert(null);
                }}
                className="mt-6 flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-950 text-white font-medium text-xs hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4" />
                Download Certificate Bundle (PDF)
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
