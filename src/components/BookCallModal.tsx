import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Video, CheckCircle2, User, Mail, MessageSquare } from "lucide-react";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>("2026-06-29"); // Default Monday
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("interview");
  const [isBooked, setIsBooked] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];
  const dates = [
    { label: "Mon, Jun 29", value: "2026-06-29" },
    { label: "Tue, Jun 30", value: "2026-06-30" },
    { label: "Wed, Jul 01", value: "2026-07-01" },
    { label: "Thu, Jul 02", value: "2026-07-02" },
    { label: "Fri, Jul 03", value: "2026-07-03" },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Your Name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!selectedTime) newErrors.time = "Please pick a preferred time slot.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setIsBooked(true);
    }, 1200);
  };

  const handleClose = () => {
    setIsBooked(false);
    setSelectedTime("");
    setName("");
    setEmail("");
    setTopic("interview");
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="bg-white rounded-3xl w-full max-w-xl p-6 md:p-8 border border-neutral-100 shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close trigger */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-950 p-2 cursor-pointer rounded-full hover:bg-neutral-50"
            >
              <X className="w-4 h-4" />
            </button>

            {!isBooked ? (
              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <span className="font-mono text-[9px] bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md uppercase font-bold tracking-wider mb-2 inline-block">
                    CALENDAR PIPELINE
                  </span>
                  <h3 className="font-display text-2xl font-black text-neutral-950 tracking-tight">
                    Book a Video Call
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 font-light mt-1">
                    Select a date, time-slot, and specify your core metrics objective to schedule a direct Google Meet sync with Kisalay.
                  </p>
                </div>

                {/* 1. Date Selector */}
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold block">
                    1. Select Date
                  </label>
                  <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {dates.map((d) => (
                      <button
                        type="button"
                        key={d.value}
                        onClick={() => setSelectedDate(d.value)}
                        className={`flex-shrink-0 px-3.5 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                          selectedDate === d.value
                            ? "bg-neutral-950 text-white border-neutral-950 shadow-xs"
                            : "bg-[#FAFAFA] text-neutral-600 border-neutral-200/60 hover:border-neutral-300"
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Time Slot Selector */}
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold block">
                    2. Select Time Slot (IST)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => {
                          setSelectedTime(time);
                          if (errors.time) setErrors((prev) => ({ ...prev, time: "" }));
                        }}
                        className={`px-3 py-2 rounded-lg border text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5 ${
                          selectedTime === time
                            ? "bg-neutral-950 text-white border-neutral-950"
                            : "bg-white text-neutral-700 border-neutral-200/60 hover:bg-neutral-50"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 opacity-60" />
                        {time}
                      </button>
                    ))}
                  </div>
                  {errors.time && <span className="text-[10px] font-mono text-red-500 font-bold block">{errors.time}</span>}
                </div>

                {/* 3. Objective topic select */}
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold block">
                    3. What should we discuss?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "interview", label: "Hiring Interview" },
                      { id: "freelance", label: "Consultancy Project" },
                      { id: "chat", label: "General Analytics" },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setTopic(item.id)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-medium cursor-pointer transition-all ${
                          topic === item.id
                            ? "bg-neutral-950 text-white border-neutral-950"
                            : "bg-[#FAFAFA] text-neutral-600 border-neutral-200/60 hover:bg-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-name" className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
                      <input
                        type="text"
                        id="modal-name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        placeholder="Satya Nadella"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-[#FAFAFA] focus:bg-white focus:border-neutral-950 focus:outline-none text-xs md:text-sm font-sans"
                      />
                    </div>
                    {errors.name && <span className="text-[10px] font-mono text-red-500 font-bold">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="modal-email" className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 font-bold">
                      Your Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
                      <input
                        type="email"
                        id="modal-email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        placeholder="satya@microsoft.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 bg-[#FAFAFA] focus:bg-white focus:border-neutral-950 focus:outline-none text-xs md:text-sm font-sans"
                      />
                    </div>
                    {errors.email && <span className="text-[10px] font-mono text-red-500 font-bold">{errors.email}</span>}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isBooking}
                  className="w-full py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs tracking-tight transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {isBooking ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      Confirm Meeting Reservation
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-950 mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-display font-black text-neutral-950 text-2xl tracking-tight mb-2">
                  Meeting Confirmed!
                </h3>
                <p className="font-sans text-xs md:text-sm text-neutral-500 max-w-sm leading-relaxed mb-6 font-light">
                  Your reservation is verified. A calendar event containing the Google Meet video linkage has been simulated and sent to <span className="font-semibold text-neutral-800">{email}</span>.
                </p>

                {/* Meeting details summarized */}
                <div className="bg-[#FAFAFA] border border-neutral-100 p-4 rounded-xl w-full space-y-2 mb-8 text-left text-xs text-neutral-600 font-mono">
                  <div className="flex justify-between">
                    <span>HOST:</span>
                    <span className="font-bold text-neutral-950">Kisalay Kumar Mishra</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DATE:</span>
                    <span className="font-bold text-neutral-950">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TIME:</span>
                    <span className="font-bold text-neutral-950">{selectedTime} (IST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PLATFORM:</span>
                    <span className="font-bold text-neutral-950 flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-neutral-500" />
                      Google Meet (Simulated)
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs cursor-pointer transition-colors"
                >
                  Close Scheduler
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
