import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award, TrendingUp, Sparkles, ChevronRight } from "lucide-react";

export default function About() {
  const timelineData = [
    {
      year: "2022",
      title: "Started B.Tech",
      description: "Began Computer Science B.Tech degree, building a solid foundational core in programming, database structures, and analytical logic.",
      icon: GraduationCap,
    },
    {
      year: "2023",
      title: "Excel & MERN Certification",
      description: "Obtained advanced certifications in Microsoft Excel data modeling and MERN stack systems to blend data pipelines with frontend systems.",
      icon: Award,
    },
    {
      year: "2024",
      title: "Completed Sales Dashboards",
      description: "Engineered robust interactive business intelligence dashboards, delivering clear KPI tracking and sales insights for regional business metrics.",
      icon: TrendingUp,
    },
    {
      year: "2025",
      title: "Advanced Analytics Learning",
      description: "Mastered exploratory data analysis (EDA), statistical modeling, predictive forecasting, and advanced Python scripting with Pandas/NumPy.",
      icon: Sparkles,
    },
    {
      year: "Current",
      title: "Open to Opportunities",
      description: "Actively seeking a professional Data Analyst or Business Intelligence role to deliver immediate, data-driven business impact.",
      icon: Briefcase,
      isCurrent: true,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#FAFAFA] border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-2">
            01 / PROVEN PROFILE
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-neutral-950 mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Premium Custom Graphics (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-display text-xl font-bold text-neutral-900 tracking-tight">
                Transforming raw numbers into highly actionable growth strategies.
              </h3>
              <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                I am a passionate Data Analyst with expertise in Python, SQL, Power BI, Excel, and Data Visualization. I enjoy transforming raw, messy datasets into beautifully organized, meaningful insights that drive smarter, faster business decisions.
              </p>
              <p className="font-sans text-neutral-600 text-sm md:text-base leading-relaxed font-light">
                My technical toolkit spans database queries, automation scripting, statistical modeling, and interactive dashboards. I specialize in looking past the numbers to extract the underlying human and business behaviors.
              </p>
            </div>

            {/* Premium Custom Analytical Visual Vector */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border border-neutral-100 shadow-sm p-4 group">
              <div className="absolute inset-0 bg-neutral-950/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/src/assets/images/dashboard_vector_1782458211882.jpg"
                alt="Minimalist Analytical Graphics & Charts"
                className="w-full h-full object-cover rounded-xl filter grayscale group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md border border-neutral-100 p-3 rounded-lg flex justify-between items-center">
                <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase font-bold">
                  ANALYTICAL PLATFORM LAYOUT
                </span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Professional Timeline (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col pl-2 md:pl-6">
            <h3 className="font-display text-lg font-bold text-neutral-900 mb-8 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
              Professional Journey & Milestones
            </h3>

            {/* Vertical Timeline */}
            <div className="relative border-l border-neutral-200/80 ml-4 pl-8 space-y-10 py-2">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Timeline Node Point */}
                    <div
                      className={`absolute -left-[45px] top-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 z-10 ${
                        item.isCurrent
                          ? "bg-neutral-950 border-neutral-950 text-white scale-110 shadow-md"
                          : "bg-white border-neutral-200 text-neutral-500 group-hover:border-neutral-900 group-hover:text-neutral-900"
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>

                    {/* Timeline Hover Glow Box */}
                    <div className="absolute -inset-x-4 -inset-y-3 bg-neutral-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-0 border border-transparent group-hover:border-neutral-100" />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-0.5 rounded-sm ${
                            item.isCurrent
                              ? "bg-neutral-950 text-white"
                              : "bg-neutral-100 text-neutral-800"
                          }`}
                        >
                          {item.year}
                        </span>
                        <h4 className="font-display font-semibold text-neutral-900 text-sm md:text-base group-hover:text-neutral-950 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light max-w-xl group-hover:text-neutral-600 transition-colors">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
