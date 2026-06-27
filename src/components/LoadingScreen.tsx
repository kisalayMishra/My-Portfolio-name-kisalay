import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200; // ms
    const intervalTime = 12; // ms
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400); // Small pause at 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#FAFAFA] p-8 md:p-16 select-none"
    >
      {/* Top section */}
      <div className="flex justify-between items-center font-mono text-xs text-neutral-400 tracking-wider">
        <span>PORTFOLIO © 2026</span>
        <span>KISALAY KUMAR MISHRA</span>
      </div>

      {/* Middle section */}
      <div className="flex flex-col items-start max-w-xl">
        <span className="font-mono text-xs text-neutral-400 mb-2 uppercase tracking-widest">
          DATA ANALYST PORTFOLIO
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-none">
          Transforming Raw Data Into Smarter Business Decisions
        </h1>
        <div className="w-48 h-[1px] bg-neutral-200 mt-6 relative overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/2 bg-neutral-950"
          />
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col">
          <span className="font-mono text-xs text-neutral-400">INITIALIZING SYSTEMS</span>
          <span className="font-mono text-xs text-neutral-500 font-medium">ESTABLISHING PERSISTENT GRID</span>
        </div>
        <div className="font-display font-light text-7xl md:text-9xl text-neutral-900 leading-none">
          {Math.floor(count).toString().padStart(3, "0")}%
        </div>
      </div>
    </motion.div>
  );
}
