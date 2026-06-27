import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100 py-16 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Upper footer wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-neutral-100 items-start">
          {/* Brand block (6 Columns) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white font-display font-black text-xs">
                KM
              </div>
              <h3 className="font-display font-black text-neutral-950 text-base tracking-tight">
                Kisalay Kumar Mishra
              </h3>
            </div>
            <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              Helping modern enterprise operations translate complex row schemas and relational databases into responsive growth initiatives.
            </p>
          </div>

          {/* Quick scrolls (3 Columns) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold">Anchors</span>
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-500 font-medium">
              <a href="#home" className="hover:text-neutral-950 transition-colors">Home</a>
              <a href="#about" className="hover:text-neutral-950 transition-colors">About</a>
              <a href="#projects" className="hover:text-neutral-950 transition-colors">Projects</a>
              <a href="#services" className="hover:text-neutral-950 transition-colors">Services</a>
              <a href="#skills" className="hover:text-neutral-950 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-neutral-950 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social connections (3 Columns) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold">Connect</span>
            <div className="flex gap-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-950 hover:text-white border border-neutral-200/50 flex items-center justify-center text-neutral-600 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/kisalay7974854943"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-950 hover:text-white border border-neutral-200/50 flex items-center justify-center text-neutral-600 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:kisalay7974854943@gmail.com"
                className="w-10 h-10 rounded-xl bg-neutral-50 hover:bg-neutral-950 hover:text-white border border-neutral-200/50 flex items-center justify-center text-neutral-600 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Lower footer copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs text-neutral-400">
          <div className="flex flex-col md:flex-row gap-1.5 md:gap-4 items-center">
            <span>© {currentYear} Kisalay Kumar Mishra. All Rights Reserved.</span>
            <span className="hidden md:inline text-neutral-200">|</span>
            <span className="font-mono text-[10px] tracking-wider text-neutral-400 font-semibold uppercase">
              Professional Data Analyst
            </span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-300 transition-all cursor-pointer bg-white text-[11px] font-semibold"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
