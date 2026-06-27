import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Send, Github, Linkedin, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email Address is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message text is required.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API pipeline submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAFAFA] border-t border-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase mb-2">
            07 / GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
            Contact
          </h2>
          <div className="w-16 h-1 bg-neutral-950 mt-4 rounded-full" />
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Details & Map (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-xl font-bold text-neutral-900 tracking-tight">
                Let's construct something meaningful together.
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light">
                Whether you have an interesting dataset, a business bottleneck to solve, or are looking to hire a Data Analyst, my inbox is open.
              </p>
            </div>

            {/* Direct Touchpoints */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold block">PHONE CONTACT</span>
                  <a href="tel:+917974854943" className="font-display font-semibold text-neutral-800 text-sm hover:text-neutral-950">
                    +91 7974854943
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold block">EMAIL PIPELINE</span>
                  <a href="mailto:kisalay7974854943@gmail.com" className="font-display font-semibold text-neutral-800 text-sm hover:text-neutral-950 truncate">
                    kisalay7974854943@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold block">CURRENT POSITION</span>
                  <span className="font-display font-semibold text-neutral-800 text-sm">
                    Bhopal, Madhya Pradesh
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map Embed of Bhopal */}
            <div className="w-full h-[220px] rounded-2xl overflow-hidden border border-neutral-200/60 shadow-sm">
              <iframe
                title="Kisalay Kumar Mishra - Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117282.85966601445!2d77.32439167232231!3d23.25993325603784!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!3f0!3m2!1i1024!2i1024!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Contact Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-neutral-100 rounded-3xl p-6 md:p-8 shadow-xs hover:shadow-md hover:border-neutral-200/60 transition-all duration-300">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h4 className="font-display font-bold text-neutral-950 text-lg mb-2">
                    Send a Secure Message
                  </h4>

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Satya Nadella"
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-xs md:text-sm bg-[#FAFAFA] transition-all focus:outline-none ${
                        errors.name ? "border-red-400 focus:border-red-500" : "border-neutral-200 focus:border-neutral-950 focus:bg-white"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] font-mono text-red-500 font-bold">{errors.name}</span>}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., satya@microsoft.com"
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-xs md:text-sm bg-[#FAFAFA] transition-all focus:outline-none ${
                        errors.email ? "border-red-400 focus:border-red-500" : "border-neutral-200 focus:border-neutral-950 focus:bg-white"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] font-mono text-red-500 font-bold">{errors.email}</span>}
                  </div>

                  {/* Subject Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                      Subject Matter
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="e.g., Collaboration Inquiry"
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-xs md:text-sm bg-[#FAFAFA] transition-all focus:outline-none ${
                        errors.subject ? "border-red-400 focus:border-red-500" : "border-neutral-200 focus:border-neutral-950 focus:bg-white"
                      }`}
                    />
                    {errors.subject && <span className="text-[10px] font-mono text-red-500 font-bold">{errors.subject}</span>}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                      Detailed Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g., Hello Kisalay, we would love to review your SQL and Power BI competencies..."
                      className={`w-full px-4 py-3 rounded-xl border font-sans text-xs md:text-sm bg-[#FAFAFA] transition-all focus:outline-none resize-none ${
                        errors.message ? "border-red-400 focus:border-red-500" : "border-neutral-200 focus:border-neutral-950 focus:bg-white"
                      }`}
                    />
                    {errors.message && <span className="text-[10px] font-mono text-red-500 font-bold">{errors.message}</span>}
                  </div>

                  {/* Send button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs tracking-tight transition-all disabled:opacity-50 cursor-pointer shadow-xs"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Secure Message
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-950 mb-6 border border-neutral-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="font-display font-black text-neutral-950 text-2xl tracking-tight mb-2">
                    Message Delivered
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-neutral-500 max-w-sm leading-relaxed font-light mb-6">
                    Thank you. Your message has bypassed validation and successfully landed inside Kisalay's portfolio inquiry queue.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-full border border-neutral-200 hover:bg-neutral-50 text-neutral-700 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
