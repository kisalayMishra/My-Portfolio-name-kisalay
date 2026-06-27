import { motion } from "motion/react";
import { ArrowDown, Play, FileText, ArrowUpRight, TrendingUp, Award, Clock, Database } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const handleScrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const statistics = [
    { value: "+2", label: "Major Projects", icon: TrendingUp },
    { value: "+10", label: "Technical Skills", icon: Database },
    { value: "2022", label: "Started Journey", icon: Clock },
    { value: "100%", label: "Dedication", icon: Award },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[#FAFAFA]"
    >
      {/* Decorative Top-Right Soft Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] blur-glow pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Content (7 Columns on large screens) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Tagline Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-neutral-900 animate-pulse" />
            <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
              Available for Data Analyst Roles
            </span>
          </motion.div>

          {/* Large HELLO and Mishra details */}
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-display text-[90px] md:text-[140px] font-black leading-none text-neutral-950 tracking-tighter select-none"
            >
              HELLO
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="mt-2 border-l-2 border-neutral-950 pl-4 md:pl-6"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight">
                I'm Kisalay Kumar Mishra
              </h2>
              <p className="font-mono text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-0.5">
                Professional Data Analyst
              </p>
            </motion.div>
          </div>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-sm md:text-base text-neutral-600 leading-relaxed max-w-xl font-sans font-light"
          >
            Helping businesses transform raw data into actionable insights through Data Analysis, Power BI dashboards, Python automation, SQL, and business intelligence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <button
              onClick={handleScrollToProjects}
              className="px-6 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs tracking-tight transition-all shadow-xs flex items-center gap-2 cursor-pointer group"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              View Projects
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-all" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 font-medium text-xs tracking-tight transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-neutral-500" />
              Download Resume
            </button>
          </motion.div>

          {/* Desktop/Tablet Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14 pt-8 border-t border-neutral-100">
            {statistics.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="flex items-center gap-1.5 text-neutral-400 mb-1">
                    <Icon className="w-3.5 h-3.5" />
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-medium">
                      {stat.label}
                    </span>
                  </div>
                  <span className="font-display text-2xl md:text-3xl font-bold text-neutral-950 tracking-tight leading-none">
                    {stat.value}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side Portrait & Floating Cards (5 Columns on large screens) */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[450px] md:h-[550px] lg:h-[600px] w-full">
          {/* Large Background Typography saying DATA ANALYST behind portrait */}
          <div className="absolute inset-0 flex flex-col justify-center items-center select-none pointer-events-none z-0 overflow-hidden opacity-10">
            <h2 className="font-display font-black text-stroke text-[70px] md:text-[100px] leading-none tracking-wider text-center">
              DATA
            </h2>
            <h2 className="font-display font-black text-stroke text-[70px] md:text-[100px] leading-none tracking-wider text-center">
              ANALYST
            </h2>
          </div>

          {/* Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="relative w-[300px] h-[400px] md:w-[360px] md:h-[480px] rounded-2xl overflow-hidden bg-neutral-200 border border-neutral-200/50 shadow-2xl z-10"
          >
            {/* The actual uploaded portrait image */}
            <img
              src="/src/assets/images/professional_portrait_1782458111615.jpg"
              alt="Kisalay Kumar Mishra - Data Analyst Portrait"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant overlay gradient to fade slightly at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Subtle Cards - Python, Power BI, SQL, Excel */}
          {/* Card 1: Python */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-12 left-2 md:-left-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-200/60 shadow-lg flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-md bg-neutral-900 flex items-center justify-center text-white font-mono text-[10px] font-bold">Py</div>
            <span className="font-sans font-medium text-[11px] text-neutral-800">Python</span>
          </motion.div>

          {/* Card 2: Power BI */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/3 -right-2 md:-right-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-200/60 shadow-lg flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-md bg-neutral-900 flex items-center justify-center text-white font-mono text-[10px] font-bold">BI</div>
            <span className="font-sans font-medium text-[11px] text-neutral-800">Power BI</span>
          </motion.div>

          {/* Card 3: SQL */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 left-0 md:-left-8 z-20 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-200/60 shadow-lg flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-md bg-neutral-900 flex items-center justify-center text-white font-mono text-[10px] font-bold">SQL</div>
            <span className="font-sans font-medium text-[11px] text-neutral-800">PostgreSQL / SQL</span>
          </motion.div>

          {/* Card 4: Excel */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-8 right-4 md:-right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-neutral-200/60 shadow-lg flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-md bg-neutral-900 flex items-center justify-center text-white font-mono text-[10px] font-bold">XL</div>
            <span className="font-sans font-medium text-[11px] text-neutral-800">Advanced Excel</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator Mouse Animation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10" onClick={handleScrollToProjects}>
        <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border border-neutral-300 flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-neutral-900"
          />
        </div>
      </div>
    </section>
  );
}
