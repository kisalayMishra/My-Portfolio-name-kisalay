import { motion, AnimatePresence } from "motion/react";
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, Calendar, GraduationCap, Briefcase, Award } from "lucide-react";

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 print:p-0 print:static print:inset-auto">
          {/* Overlay background (hidden when printing) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xs print:hidden"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-white rounded-3xl w-full max-w-4xl p-6 md:p-8 border border-neutral-100 shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0 print:border-none print:shadow-none print:rounded-none"
          >
            {/* Header controls (hidden when printing) */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-100 print:hidden">
              <div>
                <span className="font-mono text-[9px] bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md uppercase font-bold tracking-wider">
                  DIGITAL CV TRANSMISSION
                </span>
                <h3 className="font-display text-lg font-black text-neutral-950 tracking-tight mt-1">
                  Kisalay's Resume Viewer
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 text-xs font-semibold cursor-pointer shadow-xs transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print CV
                </button>
                <button
                  onClick={onClose}
                  className="text-neutral-400 hover:text-neutral-950 p-2 cursor-pointer rounded-full hover:bg-neutral-50"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Print Friendly Resume Wrapper */}
            <div id="printable-resume-frame" className="bg-white p-4 md:p-8 font-sans text-neutral-800 leading-relaxed border border-neutral-100 rounded-2xl print:border-none print:p-0">
              
              {/* 1. Resume Header */}
              <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-start border-b-2 border-neutral-950 pb-6 mb-6">
                <div>
                  <h1 className="font-display text-3xl md:text-4xl font-black text-neutral-950 tracking-tighter">
                    Kisalay Kumar Mishra
                  </h1>
                  <p className="font-mono text-xs font-bold text-neutral-500 uppercase tracking-widest mt-1">
                    Professional Data Analyst
                  </p>
                </div>
                
                <div className="flex flex-col items-center md:items-end gap-1 text-[11px] font-mono text-neutral-600 mt-4 md:mt-0 w-full md:w-auto">
                  <div className="flex items-center gap-1.5 justify-center md:justify-end">
                    <Phone className="w-3 h-3" />
                    <span>+91 7974854943</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-end">
                    <Mail className="w-3 h-3" />
                    <span>kisalay7974854943@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-end">
                    <MapPin className="w-3 h-3" />
                    <span>Bhopal, Madhya Pradesh</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center md:justify-end mt-1.5">
                    <span className="bg-neutral-100 text-neutral-800 px-1.5 py-0.5 rounded text-[10px] font-bold">github.com/kisalay7974854943</span>
                  </div>
                </div>
              </div>

              {/* 2. Objective / Summary */}
              <div className="mb-6">
                <h4 className="font-display font-bold text-neutral-950 text-xs md:text-sm uppercase tracking-widest border-b border-neutral-200 pb-1 mb-2.5">
                  Professional Objective
                </h4>
                <p className="text-xs md:text-sm text-neutral-600 font-light leading-relaxed">
                  Analytical and detail-oriented Data Analyst with expertise in Python, SQL, Excel, and Power BI. Skilled in data cleaning, wrangling, statistical analysis, and visualization. Passionate about deriving insights from large datasets to optimize business decisions and uncover growth opportunities.
                </p>
              </div>

              {/* 3. Education Section */}
              <div className="mb-6">
                <h4 className="font-display font-bold text-neutral-950 text-xs md:text-sm uppercase tracking-widest border-b border-neutral-200 pb-1 mb-3">
                  Education History
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start text-xs md:text-sm">
                      <span className="font-bold text-neutral-900">Oriental College of Technology</span>
                      <span className="font-mono text-neutral-500 font-bold">2022 - 2026</span>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-600 font-light mt-0.5">
                      <span>B.Tech in Computer Science & Engineering</span>
                      <span className="font-bold text-neutral-950">CGPA: 6.7 / 10</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-start text-xs md:text-sm">
                      <span className="font-bold text-neutral-900">Vidya Niketan Higher Secondary School</span>
                      <span className="font-mono text-neutral-500 font-bold">2020 - 2021</span>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-600 font-light mt-0.5">
                      <span>Higher Secondary Education (PCM focus)</span>
                      <span className="font-bold text-neutral-950">Aggregate Score: 69.5%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-start text-xs md:text-sm">
                      <span className="font-bold text-neutral-900">St. Francis Co-ed School</span>
                      <span className="font-mono text-neutral-500 font-bold">2018 - 2019</span>
                    </div>
                    <div className="flex justify-between text-xs text-neutral-600 font-light mt-0.5">
                      <span>Secondary School Certification</span>
                      <span className="font-bold text-neutral-950">Aggregate Score: 68.5%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Projects Section */}
              <div className="mb-6">
                <h4 className="font-display font-bold text-neutral-950 text-xs md:text-sm uppercase tracking-widest border-b border-neutral-200 pb-1 mb-3">
                  Technical Project Experience
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start text-xs md:text-sm">
                      <span className="font-bold text-neutral-950">Mobile Sales Analysis Dashboard</span>
                      <span className="font-mono text-[10px] bg-neutral-100 text-neutral-800 px-2 rounded">Python, SQL, Power BI, Excel</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-1.5 font-light leading-relaxed">
                      Developed an interactive Power BI dashboard to analyze regional sales volumes, top-performing mobile brands, pricing trends, and key performance indicators (KPIs). Used Python for data wrangling and PostgreSQL for database aggregation.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-start text-xs md:text-sm">
                      <span className="font-bold text-neutral-950">Blinkit Sales Data Analysis (EDA Study)</span>
                      <span className="font-mono text-[10px] bg-neutral-100 text-neutral-800 px-2">Python, SQL, Matplotlib, Seaborn</span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-1.5 font-light leading-relaxed">
                      Performed exploratory data analysis (EDA) using Python libraries to identify outlet tier performance metrics, sales trends, and customer demand clusters. Written complex relational SQL statements to parse and clean messy grocery transactional items.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. Core Skills Matrix */}
              <div className="mb-6">
                <h4 className="font-display font-bold text-neutral-950 text-xs md:text-sm uppercase tracking-widest border-b border-neutral-200 pb-1 mb-2.5">
                  Core Skills Matrix
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-neutral-600 font-light">
                  <div className="flex gap-2">
                    <span className="font-bold text-neutral-900 w-24">Programming:</span>
                    <span>Python, SQL, Pandas, NumPy, Matplotlib, Seaborn, DBMS</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-neutral-900 w-24">BI & Systems:</span>
                    <span>Power BI, Advanced Excel (Pivots, Power Query), GitHub, Google Analytics</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-neutral-900 w-24">Analytics Core:</span>
                    <span>EDA, Data Cleaning, Data Wrangling, Dashboard Creation, KPI Tracking</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-neutral-900 w-24">Business:</span>
                    <span>Sales Forecasting, Market Trend Analysis, Customer Segmentation</span>
                  </div>
                </div>
              </div>

              {/* 6. Professional Certifications */}
              <div>
                <h4 className="font-display font-bold text-neutral-950 text-xs md:text-sm uppercase tracking-widest border-b border-neutral-200 pb-1 mb-2.5">
                  Acquired Professional Certifications
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-neutral-500" />
                    <div>
                      <span className="font-bold text-neutral-900">Microsoft Excel</span>
                      <span className="text-neutral-500 block text-[10px]">Granted by Coursera Academic Board</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-neutral-500" />
                    <div>
                      <span className="font-bold text-neutral-900">Certified Associate in Full Stack (MERN)</span>
                      <span className="text-neutral-500 block text-[10px]">System Development Academy</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-neutral-500" />
                    <div>
                      <span className="font-bold text-neutral-900">Power BI for Business Analytics</span>
                      <span className="text-neutral-500 block text-[10px]">Business Intelligence Partners</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-neutral-500" />
                    <div>
                      <span className="font-bold text-neutral-900">Python for Data Analysis</span>
                      <span className="text-neutral-500 block text-[10px]">Data Science Institute</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Print instructions banner (hidden when printing) */}
            <div className="mt-6 flex justify-between items-center bg-[#FAFAFA] border border-neutral-100 p-4 rounded-xl text-neutral-500 text-xs print:hidden font-light">
              <span>Ready for offline print submission. Use the controls above to trigger physical page generation.</span>
              <button
                onClick={handlePrint}
                className="flex items-center gap-1 text-neutral-950 font-bold cursor-pointer"
              >
                Print Now
                <Printer className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
