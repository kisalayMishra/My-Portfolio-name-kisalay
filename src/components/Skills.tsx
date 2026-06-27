import { motion } from "motion/react";
import { Code2, BarChart3, Users2, ShieldCheck, Database, FileSpreadsheet, Eye, Brain, HelpCircle } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Programming & Databases",
      description: "Writing clean automation scripts, database structures, and analytical programs.",
      icon: Code2,
      skills: [
        { name: "Python", desc: "Scripting, automation & pipeline design" },
        { name: "SQL", desc: "Complex queries, joins & aggregates" },
        { name: "Pandas", desc: "DataFrame wrangling & transformation" },
        { name: "NumPy", desc: "Numerical arrays & vector mathematics" },
        { name: "Matplotlib", desc: "Static analytical visual rendering" },
        { name: "Seaborn", desc: "Statistical density & grid plots" },
        { name: "Excel", desc: "Data models, power queries & pivots" },
        { name: "Power BI", desc: "Interactive dashboards & DAX scripting" },
        { name: "DBMS", desc: "Database structures & relational schemas" },
      ],
    },
    {
      title: "Data Analytics & BI",
      description: "Deducing actionable business metrics, forecasting sales, and segmenting markets.",
      icon: BarChart3,
      skills: [
        { name: "EDA", desc: "Exploratory patterns & outlier analysis" },
        { name: "Data Cleaning", desc: "Handling missing records & type castings" },
        { name: "Data Wrangling", desc: "Aggregating & melting raw datasets" },
        { name: "Visualization", desc: "Crafting beautiful, legible charts" },
        { name: "Business Analytics", desc: "Aligning numbers with revenue objectives" },
        { name: "Market Trends", desc: "Tracking seasonal & growth shifts" },
        { name: "Sales Forecasting", desc: "Time-series projections & predictions" },
        { name: "Customer Segmentation", desc: "RFM matrices & behavior clusters" },
      ],
    },
    {
      title: "Strategic & Soft Skills",
      description: "Cohesive teamwork, problem solving, and clear insights communication.",
      icon: Users2,
      skills: [
        { name: "Problem Solving", desc: "Breaking business bottlenecks logically" },
        { name: "Communication", desc: "Explaining tech concepts to stakeholders" },
        { name: "Critical Thinking", desc: "Skeptical review of database metrics" },
        { name: "Teamwork", desc: "Collaborating in agile environments" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white border-t border-neutral-100 relative">
      {/* Background soft grids */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-2">
            02 / TECH MATRIX
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Technical & Human Skills
          </h2>
          <div className="w-16 h-1 bg-neutral-950 mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                className="bg-white border border-neutral-100 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md hover:border-neutral-200 transition-all duration-300 flex flex-col h-full group"
              >
                {/* Header info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-neutral-950 text-base md:text-lg">
                      {cat.title}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400">
                      DOMAIN {catIdx + 1}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light mb-6">
                  {cat.description}
                </p>

                {/* Separator line */}
                <div className="w-full h-[1px] bg-neutral-100 mb-6" />

                {/* Skills wrap list */}
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="relative bg-[#FAFAFA] border border-neutral-200/60 hover:bg-neutral-950 hover:text-white hover:border-neutral-950 px-3.5 py-2 rounded-lg text-xs font-medium text-neutral-700 transition-all duration-200 cursor-help flex flex-col group/pill"
                    >
                      <span>{skill.name}</span>
                      
                      {/* Premium Tooltip on hover */}
                      <div className="absolute bottom-[115%] left-1/2 -translate-x-1/2 w-48 bg-neutral-900 text-white text-[10px] leading-relaxed p-2.5 rounded-lg opacity-0 pointer-events-none group-hover/pill:opacity-100 transition-all duration-300 shadow-xl border border-neutral-800 z-30 font-light text-center">
                        <span className="font-semibold block mb-0.5 text-[11px] text-white">
                          {skill.name}
                        </span>
                        <span className="text-neutral-400">{skill.desc}</span>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-neutral-900" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
