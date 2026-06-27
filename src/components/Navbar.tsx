import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Calendar, FileText, CheckCircle2, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenBookCall: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenBookCall, onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav
        id="top-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-neutral-100 py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-2 cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-full bg-neutral-900 flex items-center justify-center text-white font-display font-bold text-sm tracking-tighter transition-all group-hover:scale-105 duration-300">
              KM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm leading-tight tracking-tight text-neutral-950">
                Kisalay Mishra
              </span>
              <span className="font-mono text-[10px] text-neutral-400 leading-none">
                DATA ANALYST
              </span>
            </div>
          </button>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-100/60 p-1 rounded-full border border-neutral-200/50">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-300 cursor-pointer ${
                    isActive ? "text-white" : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-neutral-900 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-900 transition-all cursor-pointer shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              Download CV
            </button>
            <button
              onClick={onOpenBookCall}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-medium hover:bg-neutral-800 transition-all cursor-pointer shadow-xs group"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book a Call
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-white border-b border-neutral-100 shadow-lg px-6 py-8 flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-lg font-display font-medium py-1.5 border-b border-neutral-50 flex justify-between items-center ${
                    activeSection === link.id ? "text-neutral-950 font-semibold" : "text-neutral-500"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && <div className="w-1.5 h-1.5 rounded-full bg-neutral-950" />}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-neutral-200 bg-white text-sm font-medium text-neutral-800"
              >
                <FileText className="w-4 h-4" />
                Download CV
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookCall();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-neutral-950 text-white text-sm font-medium"
              >
                <Calendar className="w-4 h-4" />
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
