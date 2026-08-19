import React, { useState, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";

import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Mail, User, MessageSquare, Send, Loader2, CheckCircle2,
  AlertCircle, Linkedin, Instagram, Github, MapPin, Clock,
} from "lucide-react";

// ─── EmailJS config (from environment variables) ───────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL_CONFIGURED =
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;

// ─── Validation schema ────────────────────────────────────────────────────────
const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// ─── Contact info blocks ──────────────────────────────────────────────────────
const contactInfo = [
  {
    Icon:    Mail,
    label:   "Email",
    value:   "gfg@srmist.edu.in",
    href:    "mailto:gfg@srmist.edu.in",
    color:   "bg-primary-50 dark:bg-primary-900/20 text-primary-500",
  },
  {
    Icon:    MapPin,
    label:   "Location",
    value:   "Tech Park, SRMIST, Kattankulathur, Chennai — 603203",
    href:    "https://maps.google.com/?q=SRMIST+Kattankulathur",
    color:   "bg-blue-50 dark:bg-blue-900/20 text-blue-500",
  },
  {
    Icon:    Clock,
    label:   "Office Hours",
    value:   "Monday – Saturday · 10 AM – 5 PM",
    color:   "bg-amber-50 dark:bg-amber-900/20 text-amber-500",
  },
];

const socialLinks = [
  { Icon: Linkedin,  label: "LinkedIn",  href: "https://www.linkedin.com/company/gfgsrmist/posts/?feedView=all" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gfgsrmist?igsh=YmNmbjYxZXd2MWdn" },
  { Icon: Github,    label: "GitHub",    href: "https://github.com/GeeksForGeeks-SRMIST" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function FieldError({ error }) {
  if (!error) return null;
  return (
    <p role="alert" className="text-red-500 dark:text-red-400 text-xs mt-1 flex items-center gap-1">
      <AlertCircle size={11} /> {error}
    </p>
  );
}

function Label({ htmlFor, required, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-bold text-text-headline dark:text-white mb-1.5 uppercase tracking-wide">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

function Input({ id, icon: Icon, error, textarea, ...props }) {
  const base = `w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3 bg-white dark:bg-dark-surface border rounded-xl text-text-headline dark:text-white placeholder:text-text-muted dark:placeholder:text-slate-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 ${
    error
      ? "border-red-400 dark:border-red-600"
      : "border-neutral-border dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700"
  }`;
  return (
    <div className="relative">
      {Icon && !textarea && (
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted dark:text-slate-500 pointer-events-none">
          <Icon size={15} />
        </span>
      )}
      {Icon && textarea && (
        <span className="absolute left-3.5 top-3.5 text-text-muted dark:text-slate-500 pointer-events-none">
          <Icon size={15} />
        </span>
      )}
      {textarea ? (
        <textarea id={id} rows={5} className={`${base} resize-none`} {...props} />
      ) : (
        <input id={id} className={base} {...props} />
      )}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [submitState, setSubmitState] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const submittingRef = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = useCallback((data) => {
    // Temporarily using mailto instead of EmailJS
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    // Open default mail client
    window.location.href = `mailto:gfg@srmist.edu.in?subject=${subject}&body=${body}`;
    
    // Set success state
    setSubmitState("success");
    reset();
  }, [reset]);

  const isLoading = submitState === "loading";

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with GeeksforGeeks Campus Body SRMIST — for event queries, collaborations, sponsorships, or general questions."
        url="https://gfg-srmist.vercel.app/contact"
      />

      <main className="pt-24">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.04]" aria-hidden="true" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-primary-500 font-semibold tracking-widest uppercase text-xs mb-4"
            >
              <span className="w-6 h-px bg-primary-500" /> Reach Out
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-5xl lg:text-6xl text-text-headline dark:text-white mb-4 tracking-tight"
            >
              Contact <span className="gfg-gradient-text">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-body dark:text-slate-400 max-w-xl mx-auto"
            >
              Questions, collaborations, sponsorships, or just want to say hello? We'd love to
              hear from you.
            </motion.p>
          </div>
        </section>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <section className="py-20 bg-neutral-light dark:bg-dark-bg">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── Left: info ────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h2 className="font-heading font-bold text-2xl text-text-headline dark:text-white mb-2">
                  Get in touch
                </h2>
                <p className="text-text-body dark:text-slate-400 text-sm leading-relaxed">
                  Whether you're a student, industry professional, or organisation looking to
                  collaborate — drop us a message and we'll get back to you.
                </p>
              </div>

              {/* Contact info cards */}
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start p-4 bg-white dark:bg-dark-card rounded-xl border border-neutral-border dark:border-dark-border">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      <item.Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted dark:text-slate-400 uppercase tracking-wide">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-text-body dark:text-slate-200 mt-0.5 hover:text-primary-500 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-text-body dark:text-slate-200 mt-0.5">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-xs font-bold text-text-muted dark:text-slate-400 uppercase tracking-wide mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-white dark:bg-dark-card border border-neutral-border dark:border-dark-border flex items-center justify-center text-text-muted dark:text-slate-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-500 hover:border-primary-200 transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── Right: form ───────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border p-8 shadow-soft">
            
                <AnimatePresence mode="wait">
                  {submitState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} className="text-primary-500" />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-text-headline dark:text-white mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-text-body dark:text-slate-400 text-sm mb-6">
                        Thanks for reaching out. We'll get back to you within 2–3 working days.
                      </p>
                      <button
                        onClick={() => { setSubmitState("idle"); setErrorMessage(""); }}
                        className="text-sm text-primary-500 hover:text-primary-600 font-semibold underline underline-offset-2"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      noValidate
                      aria-label="Contact form"
                      className="space-y-5"
                    >
                      {/* Global error */}
                      <AnimatePresence>
                        {submitState === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            role="alert"
                            className="flex items-start gap-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl p-3 text-sm"
                          >
                            <AlertCircle size={15} className="flex-shrink-0 mt-0.5" />
                            <span>{errorMessage}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" required>Your Name</Label>
                          <Input
                            id="name"
                            type="text"
                            icon={User}
                            placeholder="Arjun Sharma"
                            error={errors.name}
                            disabled={isLoading}
                            {...register("name")}
                          />
                          <FieldError error={errors.name?.message} />
                        </div>
                        <div>
                          <Label htmlFor="email" required>Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            icon={Mail}
                            placeholder="you@email.com"
                            error={errors.email}
                            disabled={isLoading}
                            {...register("email")}
                          />
                          <FieldError error={errors.email?.message} />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject" required>Subject</Label>
                        <Input
                          id="subject"
                          type="text"
                          icon={MessageSquare}
                          placeholder="Collaboration, Workshop Query, etc."
                          error={errors.subject}
                          disabled={isLoading}
                          {...register("subject")}
                        />
                        <FieldError error={errors.subject?.message} />
                      </div>

                      <div>
                        <Label htmlFor="message" required>Message</Label>
                        <Input
                          id="message"
                          icon={MessageSquare}
                          placeholder="Write your message here..."
                          error={errors.message}
                          disabled={isLoading}
                          textarea
                          {...register("message")}
                        />
                        <FieldError error={errors.message?.message} />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={!isLoading ? { scale: 1.01 } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                        id="contact-submit-btn"
                        className="w-full py-3.5 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg transition-all"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
