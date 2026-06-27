/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BookCallModal from "./components/BookCallModal";
import ResumeViewerModal from "./components/ResumeViewerModal";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen bg-[#FAFAFA]"
          >
            {/* Top Navbar */}
            <Navbar
              onOpenBookCall={() => setIsBookCallOpen(true)}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* Main Page Content Sections */}
            <main className="relative">
              {/* Hero Section */}
              <Hero onOpenResume={() => setIsResumeOpen(true)} />

              {/* About Section */}
              <About />

              {/* Projects Section */}
              <Projects />

              {/* Services Section */}
              <Services />

              {/* Skills Section */}
              <Skills />

              {/* Education Section */}
              <Education />

              {/* Certifications Section */}
              <Certifications />

              {/* Contact Section */}
              <Contact />
            </main>

            {/* Sticky Footers & Signature */}
            <Footer />

            {/* Booking Call Modal */}
            <BookCallModal
              isOpen={isBookCallOpen}
              onClose={() => setIsBookCallOpen(false)}
            />

            {/* PDF Resume Viewer Modal */}
            <ResumeViewerModal
              isOpen={isResumeOpen}
              onClose={() => setIsResumeOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
