import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Database, FileSpreadsheet, Eye, ChevronRight, BarChart3, TrendingUp, CheckCircle, Smartphone, HelpCircle } from "lucide-react";

export default function Projects() {
  // Mini interactive state for Project 1 (Mobile Sales Dashboard region selector)
  const [activeRegion, setActiveRegion] = useState<"North" | "South" | "East" | "West">("North");

  // Region metrics for Project 1
  const regionMetrics = {
    North: { revenue: "$485K", brand: "Samsung (S24)", forecast: "+14.2% Next Mo", activeUsers: "12,400" },
    South: { revenue: "$620K", brand: "Apple (iPhone 15)", forecast: "+18.5% Next Mo", activeUsers: "18,900" },
    East: { revenue: "$310K", brand: "Xiaomi (Redmi 13)", forecast: "+8.9% Next Mo", activeUsers: "9,100" },
    West: { revenue: "$440K", brand: "Apple (iPhone 15)", forecast: "+11.4% Next Mo", activeUsers: "11,500" },
  };

  // Mini interactive state for Project 2 (Blinkit Sales outlet selector)
  const [selectedOutlet, setSelectedOutlet] = useState<"Tier 1" | "Tier 2" | "Tier 3">("Tier 1");

  // SQL & KPI metrics for Project 2
  const outletMetrics = {
    "Tier 1": {
      sales: "$1.2M",
      items: "Fruits & Vegetables",
      count: "840 Outlets",
      sql: "SELECT outlet_id, SUM(sales) FROM blinkit_data WHERE outlet_tier = 'Tier 1' GROUP BY outlet_id ORDER BY SUM(sales) DESC LIMIT 1;"
    },
    "Tier 2": {
      sales: "$850K",
      items: "Snack Foods",
      count: "520 Outlets",
      sql: "SELECT outlet_id, SUM(sales) FROM blinkit_data WHERE outlet_tier = 'Tier 2' GROUP BY outlet_id ORDER BY SUM(sales) DESC LIMIT 1;"
    },
    "Tier 3": {
      sales: "$610K",
      items: "Household Supplies",
      count: "380 Outlets",
      sql: "SELECT outlet_id, SUM(sales) FROM blinkit_data WHERE outlet_tier = 'Tier 3' GROUP BY outlet_id ORDER BY SUM(sales) DESC LIMIT 1;"
    },
  };

  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-2">
            03 / PROFESSIONAL CASE STUDIES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-neutral-950 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* PROJECT 1: Mobile Sales Analysis Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 shadow-xs hover:shadow-lg hover:border-neutral-200/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header badges */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] bg-neutral-100 text-neutral-800 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  Power BI & SQL Dashboard
                </span>
                <span className="font-mono text-xs text-neutral-400">2024</span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-black text-neutral-950 tracking-tight mb-3">
                Mobile Sales Analysis Dashboard
              </h3>
              <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed mb-6 font-light">
                Developed a Power BI dashboard to analyze regional sales, top-performing brands, pricing trends, and KPIs using Python, SQL, Excel, and Power BI.
              </p>

              {/* Live Interactive Power BI Mockup Widget */}
              <div className="bg-neutral-950 text-white rounded-2xl p-5 mb-8 border border-neutral-800 shadow-inner">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-neutral-400" />
                    <span className="font-display font-bold text-xs tracking-tight text-white">Live Regional Sales BI Widget</span>
                  </div>
                  <div className="flex gap-1.5">
                    {(["North", "South", "East", "West"] as const).map((region) => (
                      <button
                        key={region}
                        onClick={() => setActiveRegion(region)}
                        className={`px-2 py-0.5 rounded-md font-mono text-[9px] font-bold transition-all ${
                          activeRegion === region ? "bg-white text-neutral-950" : "bg-neutral-900 text-neutral-400 hover:text-white"
                        }`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800/40">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-400">REVENUE (KPI)</span>
                    <motion.p
                      key={activeRegion + "rev"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="font-display text-lg font-black text-white mt-1"
                    >
                      {regionMetrics[activeRegion].revenue}
                    </motion.p>
                  </div>
                  <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800/40">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-400">TOP BRAND MODEL</span>
                    <motion.p
                      key={activeRegion + "brand"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="font-sans text-[11px] font-medium text-white truncate mt-1"
                    >
                      {regionMetrics[activeRegion].brand}
                    </motion.p>
                  </div>
                  <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800/40">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-400">SALES FORECAST</span>
                    <motion.p
                      key={activeRegion + "forecast"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="font-mono text-[11px] text-green-400 font-bold mt-1"
                    >
                      {regionMetrics[activeRegion].forecast}
                    </motion.p>
                  </div>
                  <div className="bg-neutral-900/60 p-3 rounded-lg border border-neutral-800/40">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-400">ACTIVE CLIENT CONTEXT</span>
                    <motion.p
                      key={activeRegion + "clients"}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="font-mono text-[11px] text-neutral-300 mt-1"
                    >
                      {regionMetrics[activeRegion].activeUsers}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div className="mb-6">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mb-3">Key Features Implemented</span>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    "Revenue Analysis",
                    "Brand Comparison",
                    "Sales Forecast",
                    "Interactive Dashboard",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-neutral-900" />
                      <span className="font-sans text-xs text-neutral-700 font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Tech stack badges */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {["Python", "Power BI", "SQL", "Excel"].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] bg-neutral-50 text-neutral-600 px-3 py-1 rounded-md border border-neutral-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4 border-t border-neutral-100">
              <button
                onClick={() => setActiveDemo("powerbi")}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-neutral-950 text-white font-medium text-xs hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
              >
                <Eye className="w-3.5 h-3.5" />
                Live Demo Widget
              </button>
              <button
                onClick={() => window.open("https://github.com/kisalay7974854943", "_blank")}
                className="px-4 py-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-950 transition-all cursor-pointer shadow-xs"
              >
                <Github className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* PROJECT 2: Blinkit Sales Data Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 shadow-xs hover:shadow-lg hover:border-neutral-200/80 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header badges */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-mono text-[10px] bg-neutral-100 text-neutral-800 px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  Python & SQL EDA Study
                </span>
                <span className="font-mono text-xs text-neutral-400">2024</span>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-black text-neutral-950 tracking-tight mb-3">
                Blinkit Sales Data Analysis
              </h3>
              <p className="font-sans text-neutral-600 text-xs md:text-sm leading-relaxed mb-6 font-light">
                Performed comprehensive sales analysis using Python (Pandas/Seaborn) and SQL to identify outlet performance, sales trends, customer demand, and business insights.
              </p>

              {/* Live Interactive SQL Mockup Widget */}
              <div className="bg-neutral-950 text-white rounded-2xl p-5 mb-8 border border-neutral-800 shadow-inner">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-neutral-400" />
                    <span className="font-display font-bold text-xs tracking-tight text-white">Interactive PostgreSQL Query</span>
                  </div>
                  <div className="flex gap-1.5">
                    {(["Tier 1", "Tier 2", "Tier 3"] as const).map((tier) => (
                      <button
                        key={tier}
                        onClick={() => setSelectedOutlet(tier)}
                        className={`px-2 py-0.5 rounded-md font-mono text-[9px] font-bold transition-all ${
                          selectedOutlet === tier ? "bg-white text-neutral-950" : "bg-neutral-900 text-neutral-400 hover:text-white"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="font-mono text-[8px] text-neutral-400 block mb-1">SQL EXECUTED:</span>
                  <div className="bg-black/40 p-2 rounded-lg font-mono text-[10px] text-neutral-300 overflow-x-auto leading-relaxed border border-neutral-800/50">
                    {outletMetrics[selectedOutlet].sql}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/40">
                    <span className="font-mono text-[8px] text-neutral-400">TOTAL SALES</span>
                    <motion.p key={selectedOutlet + "sales"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-display text-sm font-bold mt-0.5">{outletMetrics[selectedOutlet].sales}</motion.p>
                  </div>
                  <div className="bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/40">
                    <span className="font-mono text-[8px] text-neutral-400">TOP CATEGORY</span>
                    <motion.p key={selectedOutlet + "items"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-sans text-[10px] font-medium text-white truncate mt-0.5">{outletMetrics[selectedOutlet].items}</motion.p>
                  </div>
                  <div className="bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/40">
                    <span className="font-mono text-[8px] text-neutral-400">OUTLETS</span>
                    <motion.p key={selectedOutlet + "count"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-[10px] text-neutral-300 mt-0.5">{outletMetrics[selectedOutlet].count}</motion.p>
                  </div>
                </div>
              </div>

              {/* Core Features */}
              <div className="mb-6">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mb-3">Key Features Implemented</span>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    "EDA (Exploratory Analysis)",
                    "Visualizations",
                    "Advanced SQL Queries",
                    "Performance Analysis",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-neutral-900" />
                      <span className="font-sans text-xs text-neutral-700 font-light">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Tech stack badges */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "Pandas", "Matplotlib", "Seaborn"].map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] bg-neutral-50 text-neutral-600 px-3 py-1 rounded-md border border-neutral-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-4 border-t border-neutral-100">
              <button
                onClick={() => window.open("https://github.com/kisalay7974854943", "_blank")}
                className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-neutral-950 text-white font-medium text-xs hover:bg-neutral-800 transition-all cursor-pointer shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                View GitHub Code
              </button>
              <button
                onClick={() => setActiveDemo("blinkit_case")}
                className="px-4 py-3 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-950 transition-all cursor-pointer shadow-xs flex items-center gap-1"
              >
                <FileSpreadsheet className="w-4 h-4 text-neutral-500" />
                <span className="font-sans text-xs font-semibold text-neutral-700">Case Study</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Embedded High Fidelity Modal for Projects (Power BI / Case Study views) */}
      <AnimatePresence>
        {activeDemo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDemo(null)}
              className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl w-full max-w-2xl p-6 md:p-8 border border-neutral-100 shadow-2xl relative z-10 flex flex-col max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDemo(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-950 p-2 cursor-pointer rounded-full hover:bg-neutral-50"
              >
                ✕
              </button>

              {activeDemo === "powerbi" && (
                <div>
                  <span className="font-mono text-[9px] bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md uppercase font-bold tracking-wider mb-2 inline-block">
                    POWER BI REPORT DEMO VIEW
                  </span>
                  <h4 className="font-display text-xl md:text-2xl font-black text-neutral-950 tracking-tight mb-4">
                    Mobile Sales Executive Summary
                  </h4>

                  <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed font-light mb-6">
                    A comprehensive simulated executive representation of the Power BI Mobile sales dashboard. Explore critical retail metrics across regional and global scales.
                  </p>

                  <div className="border border-neutral-100 bg-neutral-50 rounded-xl p-5 mb-6">
                    <h5 className="font-display font-bold text-xs text-neutral-900 mb-3 uppercase tracking-wider">REVENUE BREAKDOWN BY COUNTRY</h5>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-neutral-600 font-mono mb-1">
                          <span>India (Primary)</span>
                          <span>$540K (55% Share)</span>
                        </div>
                        <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-neutral-950 h-full w-[55%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-neutral-600 font-mono mb-1">
                          <span>United States</span>
                          <span>$240K (24% Share)</span>
                        </div>
                        <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-neutral-950 h-full w-[24%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-neutral-600 font-mono mb-1">
                          <span>Germany</span>
                          <span>$110K (11% Share)</span>
                        </div>
                        <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-neutral-950 h-full w-[11%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1 bg-neutral-50 p-3 rounded-lg border border-neutral-100 text-center">
                      <span className="text-[10px] font-mono text-neutral-400">TOTAL UNITS</span>
                      <p className="font-display text-lg font-bold text-neutral-950">28,450 Units</p>
                    </div>
                    <div className="flex-1 bg-neutral-50 p-3 rounded-lg border border-neutral-100 text-center">
                      <span className="text-[10px] font-mono text-neutral-400">AVERAGE MARGIN</span>
                      <p className="font-display text-lg font-bold text-neutral-950">34.6% Avg</p>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === "blinkit_case" && (
                <div>
                  <span className="font-mono text-[9px] bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md uppercase font-bold tracking-wider mb-2 inline-block">
                    ANALYTICAL CASE STUDY
                  </span>
                  <h4 className="font-display text-xl md:text-2xl font-black text-neutral-950 tracking-tight mb-4">
                    Blinkit Sales EDA Case Study
                  </h4>

                  <div className="space-y-4 text-xs md:text-sm text-neutral-600 leading-relaxed font-light">
                    <p>
                      <strong>Executive Summary:</strong> Analyzed raw grocery performance logs from 8,000+ rows of transactional records to map store footprint effectiveness against customer segments.
                    </p>
                    <p>
                      <strong>Hypothesis:</strong> Low-fat items in Tier 3 locations underperform regular alternatives due to regional purchase demographics.
                    </p>
                    <p>
                      <strong>The Data-cleaning Stage:</strong> Standardized structural anomalies. For instance, handled "LF" and "low fat" abbreviations to a singular "Low Fat" string, and resolved missing values in "Item_Weight" via local category means.
                    </p>
                    <p>
                      <strong>Key Business Insights:</strong>
                      <ul className="list-disc pl-5 mt-1.5 space-y-1">
                        <li>Supermarket Type 3 produces maximum revenue with a average margin spike of 24.5%.</li>
                        <li>Fruit & Vegetables and Snack Foods make up more than 30% of total catalog items.</li>
                        <li>High item visibility shows a inverse correlation with immediate sales volumes, advising an layout change on landing pages.</li>
                      </ul>
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
