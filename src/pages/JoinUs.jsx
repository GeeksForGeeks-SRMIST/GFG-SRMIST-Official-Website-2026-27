import React, { useState, useCallback, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";
import ReactConfetti from "react-confetti";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";

import { referralList } from "@/data/team";
import {
  User, Mail, Phone, Hash, BookOpen, Calendar, LayoutGrid,
  Linkedin, Instagram, Facebook, Twitter, Github, Code2,
  Link2, FileText, ChevronDown, ChevronUp, Loader2, CheckCircle2,
  AlertCircle, MessageCircle, ArrowRight, Sparkles,  Rocket,
  Zap,
  Palette,
  BriefcaseBusiness,
  Plus,
  Trash2,
} from "lucide-react";

// ─── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_URL =
  import.meta.env.VITE_WHATSAPP_COMMUNITY_URL ||
  "https://chat.whatsapp.com/Bs7EM7GP6VqDBiS2CjIqfP";


const APPLY_DOMAINS = [
  "Technical",
  "Management",
  "Creatives",
  "Corporate",
];

const YEARS = ["1st Year", "2nd Year", "3rd Year"];

// ─── Validation schema ────────────────────────────────────────────────────────
const DRIVE_URL_REGEX = /^https:\/\/(docs\.google\.com|drive\.google\.com)\/.+$/;
const URL_REGEX = /^(https?:\/\/).+\..+/;

const experienceSchema = z.object({
  position: z.string().min(1, "Position is required"),
  organization: z.string().min(1, "Organization is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  description: z.string().min(10, "Please describe your contribution (min 10 chars)")
});

const schema = z.object({
  fullName:           z.string().min(2, "Full name must be at least 2 characters"),
  email:              z.string().email("Enter a valid email address"),
  phone:              z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  registrationNumber: z.string().min(4, "Enter your registration / admission number"),
  department:         z.string().min(1, "Please select your department"),
  year:               z.string().min(1, "Please select your year"),
  section:            z.string().min(1, "Enter your section (e.g., A, B, C)"),
  appliedDomains:     z.array(z.string()).min(1, "Please select at least one domain"),
  // Experience
  hasExperience:      z.enum(["yes", "no"]).default("no"),
  experiences:        z.array(experienceSchema).optional(),
  // Social — some are mandatory
  linkedin:           z.string().regex(URL_REGEX, "Enter a valid URL"),
  instagram:          z.string().regex(URL_REGEX, "Enter a valid URL"),
  facebook:           z.union([z.literal(""), z.string().regex(URL_REGEX, "Enter a valid URL")]).optional(),
  x:                  z.union([z.literal(""), z.string().regex(URL_REGEX, "Enter a valid URL")]).optional(),
  github:             z.string().regex(URL_REGEX, "Enter a valid URL"),
  codingPlatform:     z.union([z.literal(""), z.string().regex(URL_REGEX, "Enter a valid URL")]).optional(),
  otherSocial:        z.union([z.literal(""), z.string().regex(URL_REGEX, "Enter a valid URL")]).optional(),
  // Resume — mandatory, must be Google Drive link
  resumeUrl:          z.string().regex(DRIVE_URL_REGEX, "Must be a public Google Drive link (drive.google.com or docs.google.com)"),
  // Referral
  referred:           z.boolean().default(false),
  referralName:       z.string().optional(),
}).refine(
  (d) => !d.referred || (d.referred && d.referralName && d.referralName.length > 0),
  { message: "Please enter the name of who referred you", path: ["referralName"] }
).refine(
  (d) => d.hasExperience === "no" || (d.experiences && d.experiences.length > 0),
  { message: "Please add at least one experience", path: ["experiences"] }
);

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

function Input({ id, icon: Icon, error, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted dark:text-slate-500 pointer-events-none">
          <Icon size={15} />
        </span>
      )}
      <input
        id={id}
        {...props}
        className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-3 bg-white dark:bg-dark-surface border rounded-xl text-text-headline dark:text-white placeholder:text-text-muted dark:placeholder:text-slate-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 ${
          error
            ? "border-red-400 dark:border-red-600"
            : "border-neutral-border dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700"
        }`}
      />
    </div>
  );
}

function Select({ id, icon: Icon, error, children, ...props }) {
  return (
    <div className="relative">
      {Icon && (
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted dark:text-slate-500 pointer-events-none z-10">
          <Icon size={15} />
        </span>
      )}
      <select
        id={id}
        {...props}
        className={`w-full appearance-none ${Icon ? "pl-10" : "pl-4"} pr-8 py-3 bg-white dark:bg-dark-surface border rounded-xl text-text-headline dark:text-white text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 ${
          error
            ? "border-red-400 dark:border-red-600"
            : "border-neutral-border dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700"
        }`}
      >
        {children}
      </select>
      <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
    </div>
  );
}

// ─── Success State ────────────────────────────────────────────────────────────
function SuccessView({ applicationId }) {
  const [windowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 800,
    height: typeof window !== "undefined" ? window.innerHeight : 600,
  });

  return (
    <>
      <ReactConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={350}
        colors={["#00895e", "#3ab284", "#C3F96E", "#FCFF78", "#7D94F9", "#FF9843"]}
        gravity={0.3}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.7 }}
        className="max-w-lg mx-auto text-center py-16 px-6"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.7 }}
          className="w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 size={48} className="text-primary-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-heading font-bold text-3xl text-text-headline dark:text-white mb-2"
        >
          Application Submitted! 🎉
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-text-body dark:text-slate-400 mb-2 leading-relaxed"
        >
          We've received your application to join GFG SRMIST. Our team will review it and
          reach out to you on the contact details you provided.
        </motion.p>

        {applicationId && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-text-muted dark:text-slate-500 mb-8 font-mono"
          >
            Application ID: {applicationId}
          </motion.p>
        )}

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#25d366]/10 border border-[#25d366]/30 rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageCircle size={20} className="text-[#25d366]" />
            <h3 className="font-heading font-bold text-text-headline dark:text-white text-base">
              Join our WhatsApp Community
            </h3>
          </div>
          <p className="text-xs text-text-body dark:text-slate-400 mb-4 leading-relaxed">
            Stay updated on announcements, events, and recruitment — join the official GFG SRMIST
            WhatsApp community while you wait!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-community-cta"
            className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#22c55e] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            <MessageCircle size={16} />
            Join the Community <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xs text-text-muted dark:text-slate-500"
        >
          Keep an eye on your inbox. We typically respond within 3–5 working days.
        </motion.p>
      </motion.div>
    </>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function JoinUs() {
  const [submitState, setSubmitState] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [applicationId, setApplicationId] = useState(null);
  const [socialOpen, setSocialOpen] = useState(false);
  const submittingRef = useRef(false); // idempotency lock

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { 
      referred: false,
      hasExperience: "no",
      experiences: []
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  const referred = watch("referred");
  const hasExperience = watch("hasExperience");

  const onSubmit = useCallback(async (data) => {
    // Idempotency lock — prevent double submission
    if (submittingRef.current) return;
    submittingRef.current = true;
    setSubmitState("loading");
    setErrorMessage("");

    try {
      const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;
      
      if (!APPS_SCRIPT_URL) {
        throw new Error("Apps Script URL is not configured.");
      }

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...data,
          appliedDomains: data.appliedDomains ? data.appliedDomains.join(", ") : "",
          experienceDetails: data.hasExperience === "yes" && data.experiences ? JSON.stringify(data.experiences) : "",
          timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        }),
      });

      setApplicationId(`APP-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitState("success");
    } catch (_err) {
      setSubmitState("error");
      setErrorMessage("An unexpected error occurred. Please check your connection and try again.");
    } finally {
      submittingRef.current = false;
    }
  }, []);

  if (submitState === "success") {
    return (
      <main className="pt-24 min-h-screen bg-neutral-light dark:bg-dark-bg">
        <SuccessView applicationId={applicationId} />
      </main>
    );
  }

  const isLoading = submitState === "loading";

  return (
    <>
      <SEO
        title="Join Us"
        description="Apply to join GeeksforGeeks Campus Body SRMIST — Technical, Corporate, Management, and Creatives domains open for 2026–27 batch."
        url="https://gfg-srmist.vercel.app/join"
      />

      <main className="pt-24">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.04]" aria-hidden="true" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 shadow-glow-sm mb-6"
            >
              <Sparkles size={14} className="text-primary-500" />
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                Recruitment Open · 2026–27 Batch
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-5xl lg:text-6xl text-text-headline dark:text-white mb-4 tracking-tight"
            >
              Join <span className="gfg-gradient-text">GFG SRMIST</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-body dark:text-slate-400 max-w-xl mx-auto"
            >
              Become part of SRMIST's most active tech community. Apply for Technical,
              Corporate, Management, or Creatives domains.
            </motion.p>
          </div>
        </section>

        {/* ── Domain Cards (context) ────────────────────────────────────────── */}
<section className="py-14 bg-white dark:bg-dark-bg">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        {
          domain: "Technical",
          icon: Rocket,
          desc: "Coding, development, open source",
        },
        {
          domain: "Management",
          icon: Zap,
          desc: "Events, operations, planning",
        },
        {
          domain: "Creatives",
          icon: Palette,
          desc: "Design, content, branding",
        },
        {
          domain: "Corporate",
          icon: BriefcaseBusiness,
          desc: "Partnerships, outreach, PR",
        },
      ].map((d, i) => (
        <motion.div
          key={d.domain}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="text-center p-5 bg-neutral-light dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border"
        >
          <div className="flex justify-center mb-3">
            <d.icon
              size={28}
              strokeWidth={1.8}
              className="text-primary-500 dark:text-ocean"
            />
          </div>

          <h3 className="font-heading font-bold text-sm text-text-headline dark:text-white">
            {d.domain}
          </h3>

          <p className="text-xs text-text-muted dark:text-slate-400 mt-1">
            {d.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* ── Form ─────────────────────────────────────────────────────────── */}
        <section className="pb-24 bg-neutral-light dark:bg-dark-surface/30">
          <div className="max-w-2xl mx-auto px-6">
            <SectionHeading
              eyebrow="Application Form"
              title={<>Tell us about <span className="gfg-gradient-text">yourself</span></>}
              subtitle="Fields marked * are required."
            />

            {/* Global error banner */}
            <AnimatePresence>
              {submitState === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  role="alert"
                  className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl p-4 mb-6 text-sm"
                >
                  <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="GFG SRMIST Recruitment Application"
              className="space-y-6"
            >
              {/* ── SECTION 1: Personal Info ──────────────────────────────── */}
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border p-6 space-y-5">
                <h2 className="font-heading font-bold text-text-headline dark:text-white text-base border-b border-neutral-border dark:border-dark-border pb-3">
                  Personal Information
                </h2>

                <div>
                  <Label htmlFor="fullName" required>Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    icon={User}
                    placeholder="e.g., Arjun Sharma"
                    error={errors.fullName}
                    disabled={isLoading}
                    {...register("fullName")}
                  />
                  <FieldError error={errors.fullName?.message} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" required>Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      icon={Mail}
                      placeholder="your@email.com"
                      error={errors.email}
                      disabled={isLoading}
                      {...register("email")}
                    />
                    <FieldError error={errors.email?.message} />
                  </div>
                  <div>
                    <Label htmlFor="phone" required>Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      icon={Phone}
                      placeholder="9876543210"
                      maxLength={10}
                      error={errors.phone}
                      disabled={isLoading}
                      {...register("phone")}
                    />
                    <FieldError error={errors.phone?.message} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="registrationNumber" required>Registration / Admission Number</Label>
                  <Input
                    id="registrationNumber"
                    type="text"
                    icon={Hash}
                    placeholder="e.g., RA2211003010123"
                    error={errors.registrationNumber}
                    disabled={isLoading}
                    {...register("registrationNumber")}
                  />
                  <FieldError error={errors.registrationNumber?.message} />
                </div>
              </div>

              {/* ── SECTION 2: Academic Info ──────────────────────────────── */}
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border p-6 space-y-5">
                <h2 className="font-heading font-bold text-text-headline dark:text-white text-base border-b border-neutral-border dark:border-dark-border pb-3">
                  Academic Details
                </h2>

                <div>
  <Label htmlFor="department" required>
    Department
  </Label>

  <Input
    id="department"
    icon={BookOpen}
    placeholder="Enter your department"
    error={errors.department}
    disabled={isLoading}
    {...register("department")}
  />

  <FieldError error={errors.department?.message} />
</div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="year" required>Year of Study</Label>
                    <Select
                      id="year"
                      icon={Calendar}
                      error={errors.year}
                      disabled={isLoading}
                      {...register("year")}
                    >
                      <option value="">Select year</option>
                      {YEARS.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </Select>
                    <FieldError error={errors.year?.message} />
                  </div>
                  <div>
                    <Label htmlFor="section" required>Section</Label>
                    <Input
                      id="section"
                      type="text"
                      icon={LayoutGrid}
                      placeholder="e.g., A, B, C"
                      maxLength={3}
                      error={errors.section}
                      disabled={isLoading}
                      {...register("section")}
                    />
                    <FieldError error={errors.section?.message} />
                  </div>
                </div>
              </div>

              {/* ── SECTION 2.5: Domains ────────────────────────────────────── */}
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border p-6 space-y-4">
                <h2 className="font-heading font-bold text-text-headline dark:text-white text-base border-b border-neutral-border dark:border-dark-border pb-3">
                  Domains to Apply
                </h2>
                <div>
                  <Label required>Select Domain(s)</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    {APPLY_DOMAINS.map((domain) => (
                      <label key={domain} className="flex items-center gap-3 p-3 border border-neutral-border dark:border-dark-border rounded-xl cursor-pointer hover:bg-neutral-light dark:hover:bg-dark-surface transition-colors">
                        <input
                          type="checkbox"
                          value={domain}
                          className="w-4 h-4 text-primary-500 rounded border-neutral-border focus:ring-primary-500"
                          {...register("appliedDomains")}
                          disabled={isLoading}
                        />
                        <span className="text-sm text-text-headline dark:text-white font-medium">{domain}</span>
                      </label>
                    ))}
                  </div>
                  <FieldError error={errors.appliedDomains?.message} />
                </div>
              </div>

              {/* ── SECTION 2.6: Experience ───────────────────────────────────── */}
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border p-6 space-y-4">
                <h2 className="font-heading font-bold text-text-headline dark:text-white text-base border-b border-neutral-border dark:border-dark-border pb-3">
                  Prior Experience
                </h2>
                <div>
                  <Label required>Do you have any prior experience?</Label>
                  <Select
                    id="hasExperience"
                    icon={BriefcaseBusiness}
                    disabled={isLoading}
                    {...register("hasExperience")}
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </Select>
                </div>

                {hasExperience === "yes" && (
                  <div className="space-y-4 pt-2">
                    {fields.map((item, index) => (
                      <div key={item.id} className="p-4 border border-neutral-border dark:border-dark-border rounded-xl space-y-4 relative">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-bold text-sm text-text-headline dark:text-white">Experience {index + 1}</h3>
                          <button
                            type="button"
                            onClick={() => remove(index)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                            title="Remove Experience"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`experiences.${index}.position`} required>Position</Label>
                            <Input
                              id={`experiences.${index}.position`}
                              type="text"
                              placeholder="e.g. Web Developer"
                              error={errors.experiences?.[index]?.position}
                              disabled={isLoading}
                              {...register(`experiences.${index}.position`)}
                            />
                            <FieldError error={errors.experiences?.[index]?.position?.message} />
                          </div>
                          <div>
                            <Label htmlFor={`experiences.${index}.organization`} required>Company / Club Name</Label>
                            <Input
                              id={`experiences.${index}.organization`}
                              type="text"
                              placeholder="e.g. SRMIST / GFG"
                              error={errors.experiences?.[index]?.organization}
                              disabled={isLoading}
                              {...register(`experiences.${index}.organization`)}
                            />
                            <FieldError error={errors.experiences?.[index]?.organization?.message} />
                          </div>
                          <div>
                            <Label htmlFor={`experiences.${index}.startDate`} required>Start Date</Label>
                            <Input
                              id={`experiences.${index}.startDate`}
                              type="month"
                              error={errors.experiences?.[index]?.startDate}
                              disabled={isLoading}
                              {...register(`experiences.${index}.startDate`)}
                            />
                            <FieldError error={errors.experiences?.[index]?.startDate?.message} />
                          </div>
                          <div>
                            <Label htmlFor={`experiences.${index}.endDate`} required>End Date</Label>
                            <Input
                              id={`experiences.${index}.endDate`}
                              type="month"
                              error={errors.experiences?.[index]?.endDate}
                              disabled={isLoading}
                              {...register(`experiences.${index}.endDate`)}
                            />
                            <FieldError error={errors.experiences?.[index]?.endDate?.message} />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor={`experiences.${index}.description`} required>What did you contribute?</Label>
                          <textarea
                            id={`experiences.${index}.description`}
                            rows={3}
                            className={`w-full p-4 bg-white dark:bg-dark-surface border rounded-xl text-text-headline dark:text-white placeholder:text-text-muted dark:placeholder:text-slate-500 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500 ${
                              errors.experiences?.[index]?.description
                                ? "border-red-400 dark:border-red-600"
                                : "border-neutral-border dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700"
                            }`}
                            placeholder="Describe your role, projects, and impact..."
                            disabled={isLoading}
                            {...register(`experiences.${index}.description`)}
                          />
                          <FieldError error={errors.experiences?.[index]?.description?.message} />
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => append({ position: "", organization: "", startDate: "", endDate: "", description: "" })}
                      className="flex items-center gap-2 text-sm font-bold text-primary-500 hover:text-primary-600 transition-colors px-2 py-1"
                    >
                      <Plus size={16} /> Add Experience
                    </button>
                    <FieldError error={errors.experiences?.root?.message || errors.experiences?.message} />
                  </div>
                )}
              </div>

              {/* ── SECTION 3: Social Links (collapsible) ─────────────────── */}
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border overflow-hidden">
                <button
                  type="button"
                  onClick={() => setSocialOpen((v) => !v)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-light dark:hover:bg-dark-surface transition-colors"
                >
                  <div>
                    <h2 className="font-heading font-bold text-text-headline dark:text-white text-base">
                      Social Links
                      <span className="ml-2 text-xs text-text-muted dark:text-slate-400 font-normal">(helps us know you better)</span>
                    </h2>
                  </div>
                  {socialOpen ? (
                    <ChevronUp size={18} className="text-text-muted" />
                  ) : (
                    <ChevronDown size={18} className="text-text-muted" />
                  )}
                </button>

                <AnimatePresence>
                  {socialOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-4 border-t border-neutral-border dark:border-dark-border pt-5">
                        {[
                          { id: "linkedin",       label: "LinkedIn Profile",       icon: Linkedin,  placeholder: "https://linkedin.com/in/username", required: true },
                          { id: "instagram",      label: "Instagram",              icon: Instagram, placeholder: "https://instagram.com/username", required: true },
                          { id: "github",         label: "GitHub",                 icon: Github,    placeholder: "https://github.com/username", required: true },
                          { id: "x",              label: "X (Twitter)",            icon: Twitter,   placeholder: "https://x.com/username"            },
                          { id: "facebook",       label: "Facebook",               icon: Facebook,  placeholder: "https://facebook.com/username"     },
                          { id: "codingPlatform", label: "LeetCode / CodeChef / Codeforces", icon: Code2, placeholder: "https://leetcode.com/username" },
                          { id: "otherSocial",    label: "Other Link (Portfolio etc.)", icon: Link2, placeholder: "https://yourportfolio.com"      },
                        ].map((field) => (
                          <div key={field.id}>
                            <Label htmlFor={field.id} required={field.required}>{field.label}</Label>
                            <Input
                              id={field.id}
                              type="url"
                              icon={field.icon}
                              placeholder={field.placeholder}
                              error={errors[field.id]}
                              disabled={isLoading}
                              {...register(field.id)}
                            />
                            <FieldError error={errors[field.id]?.message} />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── SECTION 4: Resume ─────────────────────────────────────── */}
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border p-6 space-y-4">
                <h2 className="font-heading font-bold text-text-headline dark:text-white text-base border-b border-neutral-border dark:border-dark-border pb-3">
                  Resume
                  <span className="ml-2 text-xs text-text-muted dark:text-slate-400 font-normal"></span>
                </h2>
                <div>
                  <Label htmlFor="resumeUrl" required>Google Drive Resume Link</Label>
                  <Input
                    id="resumeUrl"
                    type="url"
                    icon={FileText}
                    placeholder="https://drive.google.com/file/d/..."
                    error={errors.resumeUrl}
                    disabled={isLoading}
                    {...register("resumeUrl")}
                  />
                  <FieldError error={errors.resumeUrl?.message} />
                  <p className="text-xs text-text-muted dark:text-slate-500 mt-1.5 leading-relaxed">
                    Please make sure your Google Drive link is set to <strong>Anyone with the link can view</strong>.
                  </p>
                </div>
              </div>

              {/* ── SECTION 5: Referral ───────────────────────────────────── */}
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border p-6 space-y-4">
                <h2 className="font-heading font-bold text-text-headline dark:text-white text-base border-b border-neutral-border dark:border-dark-border pb-3">
                  Referral
                </h2>

                {/* Toggle */}
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="referred"
                    disabled={isLoading}
                    {...register("referred")}
                    className="w-5 h-5 accent-primary-500 rounded border-neutral-border cursor-pointer"
                  />
                  <label htmlFor="referred" className="text-sm text-text-body dark:text-slate-300 cursor-pointer select-none">
                    I was referred by a GFG SRMIST team member
                  </label>
                </div>

                <AnimatePresence>
                  {referred && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2">
                        <Label htmlFor="referralName" required>Referral Name</Label>
                        <Select
                          id="referralName"
                          error={errors.referralName}
                          disabled={isLoading}
                          {...register("referralName")}
                        >
                          <option value="">Select the member who referred you</option>
                          {referralList.map((name) => (
                            <option key={name} value={name}>{name}</option>
                          ))}
                        </Select>
                        <FieldError error={errors.referralName?.message} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Submit ────────────────────────────────────────────────── */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.01 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                id="join-submit-btn"
                className="w-full py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl flex items-center justify-center gap-3 shadow-glow hover:shadow-glow-lg transition-all"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Submitting your application…
                  </>
                ) : (
                  <>
                    Submit Application <ArrowRight size={18} />
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-text-muted dark:text-slate-500 pb-4">
                By submitting, you agree that your information will be stored securely and used
                only for GFG SRMIST recruitment purposes.
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
