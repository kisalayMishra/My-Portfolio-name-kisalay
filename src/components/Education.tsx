import { motion } from "motion/react";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      institution: "Oriental College of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      period: "2022 - 2026",
      scoreType: "CGPA Score",
      score: "6.7 / 10",
      description: "Specialized in structural computer science algorithms, systems design, object-oriented concepts, and relational databases. Completed multiple data analytics and BI dashboards as practical coursework.",
      icon: GraduationCap,
    },
    {
      institution: "Vidya Niketan Higher Secondary School",
      degree: "Higher Secondary Certificate (HSC) / Class XII",
      period: "2020 - 2021",
      scoreType: "Aggregate Score",
      score: "69.5%",
      description: "Completed primary focus in Physics, Chemistry, and Mathematics (PCM). Obtained key analytical abilities and mathematical logical foundations.",
      icon: BookOpen,
    },
    {
      institution: "St. Francis Co-ed School",
      degree: "Secondary School Certificate (SSC) / Class X",
      period: "2018 - 2019",
      scoreType: "Aggregate Score",
      score: "68.5%",
      description: "Obtained broad foundational education in general sciences, algebra, statistics, and computing basics with active extracurricular school presence.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#FAFAFA] border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-2">
            05 / ACADEMIC ACCREDITATIONS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-neutral-950 mt-4 rounded-full" />
        </div>

        {/* Education Timeline Grid */}
        <div className="space-y-8 max-w-4xl">
          {educationList.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-neutral-100 rounded-2xl p-6 md:p-8 shadow-xs hover:border-neutral-200 hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group"
              >
                {/* Left Part: Time and Icon (3 Columns) */}
                <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="md:hidden flex flex-col">
                      <h4 className="font-display font-bold text-neutral-950 text-sm">{edu.institution}</h4>
                      <span className="font-mono text-[10px] text-neutral-400">{edu.period}</span>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col gap-1">
                    <span className="font-mono text-xs text-neutral-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 font-bold mt-1">
                      ACCREDITED TERM
                    </span>
                  </div>
                </div>

                {/* Right Part: Main content & metrics (9 Columns) */}
                <div className="md:col-span-9 flex flex-col justify-between h-full">
                  <div className="hidden md:block">
                    <h4 className="font-display font-bold text-neutral-950 text-lg group-hover:text-neutral-800 transition-colors">
                      {edu.institution}
                    </h4>
                    <span className="font-sans text-xs md:text-sm text-neutral-500 font-semibold mt-0.5 block">
                      {edu.degree}
                    </span>
                  </div>

                  <div className="md:hidden">
                    <span className="font-sans text-xs text-neutral-500 font-semibold block">
                      {edu.degree}
                    </span>
                  </div>

                  <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light mt-4 mb-6">
                    {edu.description}
                  </p>

                  {/* Highlights Metric score chip */}
                  <div className="flex items-center gap-3 border-t border-neutral-50 pt-4">
                    <div className="flex items-center gap-1.5 bg-neutral-50 border border-neutral-200/50 px-3 py-1.5 rounded-lg">
                      <Award className="w-3.5 h-3.5 text-neutral-700" />
                      <span className="font-mono text-[10px] text-neutral-500 font-bold uppercase tracking-wider">{edu.scoreType}:</span>
                      <span className="font-display font-bold text-xs text-neutral-950">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
