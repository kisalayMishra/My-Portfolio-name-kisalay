import { motion } from "motion/react";
import { BarChart3, LayoutDashboard, FileSpreadsheet, Cpu, Sparkles, TrendingUp, ChevronRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Data Analysis",
      description: "Deducing mathematical patterns, trends, and correlations across complex datasets to solve operational constraints.",
      icon: BarChart3,
      perks: ["Exploratory Data Analysis", "Statistical Hypothesis Testing", "Data Slicing & Pivot Analytics"],
    },
    {
      title: "Dashboard Development",
      description: "Crafting real-time, custom performance monitors to keep critical KPIs central to executive stakeholders.",
      icon: LayoutDashboard,
      perks: ["Dynamic Visual Layouts", "Custom Metric Trackers", "Multi-source Data Integration"],
    },
    {
      title: "Power BI Reports",
      description: "Building production-grade Microsoft BI reports powered by advanced DAX query scripting and data modeling.",
      icon: Sparkles,
      perks: ["Advanced DAX Measures", "Interactive Filter Slicers", "Automatic Scheduled Refreshes"],
    },
    {
      title: "Excel Automation",
      description: "Writing robust formulas, Power Queries, and VBA macros to eliminate repetitive spreadsheet tasks and manual logs.",
      icon: FileSpreadsheet,
      perks: ["Power Query ETL Pipelines", "Complex Pivot Charting", "Macro Automation Scripting"],
    },
    {
      title: "Python Data Cleaning",
      description: "Utilizing Pandas, NumPy, and scripting routines to cleanse, normalise, and structure unstructured messy datasets.",
      icon: Cpu,
      perks: ["Automated Outlier Isolation", "Null Value Standardisation", "Schema Normalisation Arrays"],
    },
    {
      title: "Business Insights",
      description: "Converting cold rows of database metrics into structured, human-readable growth suggestions and reports.",
      icon: TrendingUp,
      perks: ["Executive Summaries", "Market Competitor Mapping", "Sales Funnel Leak Analysis"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-2">
            04 / BUSINESS METRIC VALUE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Services & Expertise
          </h2>
          <div className="w-16 h-1 bg-neutral-950 mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, index) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-neutral-100 rounded-2xl p-6 md:p-8 shadow-xs hover:shadow-md hover:border-neutral-200/80 transition-all duration-300 flex flex-col justify-between group cursor-default"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FAFAFA] border border-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950 transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-300 group-hover:text-neutral-400 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-neutral-950 text-lg mb-3 tracking-tight">
                    {svc.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light mb-6">
                    {svc.description}
                  </p>
                </div>

                {/* perks / sub-items */}
                <div className="border-t border-neutral-100 pt-4 mt-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold block mb-2.5">Scope of Delivery</span>
                  <div className="space-y-1.5">
                    {svc.perks.map((perk, perkIdx) => (
                      <div key={perkIdx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-neutral-900 group-hover:scale-125 transition-transform" />
                        <span className="font-sans text-[11px] text-neutral-600 font-light group-hover:text-neutral-800 transition-colors">
                          {perk}
                        </span>
                      </div>
                    ))}
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
