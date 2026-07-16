import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import ReactConfetti from "react-confetti";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import { Mail, MapPin, Instagram, Linkedin, Github, Send, CheckCircle, MessageCircle, ExternalLink } from "lucide-react";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

const contactInfo = [
  {
    icon: <Mail size={22} />,
    label: "Email Us",
    value: "gfg@srmist.edu.in",
    link: "mailto:gfg@srmist.edu.in",
    color: "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400",
  },
  {
    icon: <MapPin size={22} />,
    label: "Find Us",
    value: "Tech Park, SRMIST, Kattankulathur, Chennai — 603203",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <MessageCircle size={22} />,
    label: "Department",
    value: "Networking & Communications, School of Computing",
    color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400",
  },
];

const socials = [
  { Icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/company/gfgsrmist/" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gfgsrmist/" },
  { Icon: Github,    label: "GitHub",    href: "https://github.com/GeeksForGeeks-SRMIST" },
];

const eventLinks = [
  { label: "IGNISIA 2025 Website", href: "https://ignisia25.vercel.app" },
  { label: "JAVA-VERSE 2026 Website", href: "https://java-verse-8f5li6ij8-mdnm18s-projects.vercel.app" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [windowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Contact form data:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with GeeksforGeeks Campus Body SRMIST — email us, find us at Tech Park, or connect on social media."
        url="https://gfg-srmist.vercel.app/contact"
      />

      {submitted && (
        <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={300} colors={["#2F8D46", "#4ade80", "#FBBF24"]} onConfettiComplete={() => setSubmitted(false)} />
      )}

      <main className="pt-24">
        {/* Hero */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Get in <span className="gfg-gradient-text">Touch</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Have a question, collaboration idea, or want to sponsor our next event? We'd love to hear from you.
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">Contact Information</h2>

              {contactInfo.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 items-start">
                  <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center flex-shrink-0`}>{c.icon}</div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm">{c.label}</p>
                    {c.link ? (
                      <a href={c.link} className="text-primary-600 dark:text-primary-400 text-sm hover:underline">{c.value}</a>
                    ) : (
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Socials */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white text-sm mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map(({ Icon, label, href }) => (
                    <a key={label} href={href} aria-label={label} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Event links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="font-semibold text-slate-900 dark:text-white text-sm mb-3">Our Event Websites</p>
                <div className="space-y-2">
                  {eventLinks.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:gap-3 transition-all">
                      <ExternalLink size={12} /> {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 bg-primary-50 dark:bg-primary-900/20 rounded-[28px] border border-primary-200 dark:border-primary-800">
                    <div className="text-5xl mb-4">✉️</div>
                    <CheckCircle size={36} className="text-primary-500 mx-auto mb-3" />
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto text-sm">Thank you for reaching out. We'll respond at your email within 2–3 business days.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white dark:bg-slate-900 rounded-[28px] p-8 border border-slate-100 dark:border-slate-800 shadow-soft">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Name *</label>
                        <input {...register("name")} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" placeholder="Your name" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                        <input {...register("email")} type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" placeholder="your@email.com" />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Subject *</label>
                      <input {...register("subject")} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" placeholder="Sponsorship inquiry / Event collaboration / General" />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message *</label>
                      <textarea {...register("message")} rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all resize-none" placeholder="Tell us what's on your mind..." />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>
                    <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white py-4 rounded-2xl font-bold shadow-glow hover:shadow-glow transition-all flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                      ) : (
                        <><Send size={18} /> Send Message</>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
