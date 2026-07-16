import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import ReactConfetti from "react-confetti";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import { UserPlus, Code2, Layers, BrainCircuit, Palette, Megaphone, Briefcase, Settings, Send, CheckCircle } from "lucide-react";

const schema = z.object({
  name:           z.string().min(2, "Name must be at least 2 characters"),
  rollNumber:     z.string().min(3, "Please enter your roll number"),
  email:          z.string().email("Please enter a valid email"),
  year:           z.string().min(1, "Please select your year"),
  phone:          z.string().min(10, "Phone must be at least 10 digits").max(15),
  domain:         z.string().min(1, "Please select a domain"),
  whyJoin:        z.string().min(30, "Please write at least 30 characters"),
  skills:         z.string().optional(),
});

const domains = [
  { value: "technical",   label: "Technical",   icon: <Code2 size={16} />,      desc: "DSA, Dev, Hackathons"     },
  { value: "corporate",   label: "Corporate",   icon: <Briefcase size={16} />,  desc: "Sponsorships, PR, Outreach" },
  { value: "management",  label: "Management",  icon: <Settings size={16} />,   desc: "Events, Operations"       },
  { value: "creatives",   label: "Creatives",   icon: <Palette size={16} />,    desc: "Design, Content, Social"  },
];

const years = ["1st Year (2025 Batch)", "2nd Year (2024 Batch)", "3rd Year (2023 Batch)", "4th Year (2022 Batch)"];

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Join Us form data:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <SEO
        title="Join Us"
        description="Apply to become a member of GeeksforGeeks Campus Body SRMIST. Join our Technical, Corporate, Management, or Creatives team and grow with us."
        url="https://gfg-srmist.vercel.app/join"
      />

      {submitted && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={400}
          colors={["#2F8D46", "#4ade80", "#FBBF24", "#60A5FA", "#F472B6"]}
          onConfettiComplete={() => setSubmitted(false)}
        />
      )}

      <main className="pt-24">
        {/* Hero */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Join <span className="gfg-gradient-text">GFG SRMIST</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Become part of SRMIST's fastest-growing tech community. Applications are open for 2026–27.
            </motion.p>
          </div>
        </section>

        {/* Domain Selector Info */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <SectionHeading eyebrow="Choose Your Path" title={<>Pick Your <span className="gfg-gradient-text">Domain</span></>} subtitle="GFG SRMIST has four teams — join the one that matches your passion." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {domains.map((d) => (
                <motion.div key={d.value} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 shadow-soft text-center hover:shadow-medium transition-all">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mx-auto mb-3">{d.icon}</div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm mb-1">{d.label}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{d.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[700px] mx-auto px-6">
            <SectionHeading eyebrow="Apply Now" title={<>Application <span className="gfg-gradient-text">Form</span></>} subtitle="Fill in your details and we'll get back to you soon." />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 bg-primary-50 dark:bg-primary-900/20 rounded-[28px] border border-primary-200 dark:border-primary-800"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <CheckCircle size={40} className="text-primary-500 mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">Application Submitted!</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for applying to GFG SRMIST. We'll review your application and get back to you at your email.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 bg-white dark:bg-slate-900 rounded-[28px] p-8 border border-slate-100 dark:border-slate-800 shadow-soft"
                >
                  {/* Name + Roll */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name *</label>
                      <input {...register("name")} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" placeholder="Your full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Roll Number *</label>
                      <input {...register("rollNumber")} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" placeholder="RA2211003011XXX" />
                      {errors.rollNumber && <p className="text-red-500 text-xs mt-1">{errors.rollNumber.message}</p>}
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                      <input {...register("email")} type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" placeholder="your@srmist.edu.in" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone *</label>
                      <input {...register("phone")} type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" placeholder="+91 XXXXX XXXXX" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Year + Domain */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Year of Study *</label>
                      <select {...register("year")} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all">
                        <option value="">Select year</option>
                        {years.map((y) => <option key={y} value={y}>{y}</option>)}
                      </select>
                      {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Preferred Domain *</label>
                      <select {...register("domain")} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all">
                        <option value="">Select domain</option>
                        {domains.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
                      </select>
                      {errors.domain && <p className="text-red-500 text-xs mt-1">{errors.domain.message}</p>}
                    </div>
                  </div>

                  {/* Why Join */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Why do you want to join GFG SRMIST? *</label>
                    <textarea {...register("whyJoin")} rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all resize-none" placeholder="Tell us about your motivation, what you hope to contribute, and what you want to learn..." />
                    {errors.whyJoin && <p className="text-red-500 text-xs mt-1">{errors.whyJoin.message}</p>}
                  </div>

                  {/* Skills */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Relevant Skills (optional)</label>
                    <input {...register("skills")} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" placeholder="e.g. React, Java, Figma, Content Writing..." />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white py-4 rounded-2xl font-bold shadow-glow hover:shadow-glow transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Submitting...</>
                    ) : (
                      <><Send size={18} /> Submit Application</>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  );
}
