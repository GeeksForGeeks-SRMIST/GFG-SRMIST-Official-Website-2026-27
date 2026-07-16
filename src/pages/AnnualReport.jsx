import React from "react";
import { motion } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import { events } from "@/data/events";
import { impactStats } from "@/data/stats";
import { faculty, coreLeadership } from "@/data/team";
import { Download, BookOpen, Users, CalendarDays, Trophy, Code2, Target, Lightbulb, ChevronRight, ExternalLink } from "lucide-react";

const sections = [
  { id: "executive", label: "Executive Summary", icon: <BookOpen size={15} /> },
  { id: "vision",    label: "Vision & Mission",  icon: <Lightbulb size={15} /> },
  { id: "stats",     label: "Statistics",         icon: <Trophy size={15} /> },
  { id: "events",    label: "Events",             icon: <CalendarDays size={15} /> },
  { id: "future",    label: "Future Plans",        icon: <Target size={15} /> },
  { id: "ack",       label: "Acknowledgements",   icon: <Users size={15} /> },
];

const futurePlans = [
  "Expand to monthly technical sessions covering DSA, system design, and full-stack development",
  "Launch GFG SRMIST Code Challenges — a recurring competitive programming series",
  "Formalize a Placement Preparation Track with structured modules and mock interviews",
  "Deepen industry partnerships for live project exposure and internship referrals",
  "Grow community membership to 1,000+ active students by end of 2026–27",
  "Launch the GFG SRMIST Blog and Newsletter for community-driven content",
  "Strengthen alumni network and mentorship programs for current students",
];

export default function AnnualReport() {
  return (
    <>
      <SEO
        title="Annual Report 2025–26"
        description="Interactive Annual Report of GeeksforGeeks Campus Body SRMIST for the academic year 2025–26. Read our executive summary, vision, events, statistics, and future plans."
        url="https://gfg-srmist.vercel.app/annual-report"
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-primary-950 to-slate-950">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(#4ade80 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-bold px-4 py-2 rounded-full mb-6">
              <BookOpen size={13} /> Official Document
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-5xl lg:text-6xl text-white mb-4 tracking-tight">
              Annual Report <span className="text-primary-400">2025–26</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-400 max-w-xl mx-auto mb-8">
              GeeksforGeeks Campus Body · SRMIST, Kattankulathur
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-3 justify-center">
                {sections.map((s) => (
                  <a key={s.id} href={`#ar-${s.id}`} className="flex items-center gap-1.5 px-4 py-2 bg-white/10 border border-white/20 text-white text-xs font-semibold rounded-full hover:bg-white/20 transition-colors">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive Summary */}
        <section id="ar-executive" className="scroll-mt-24 py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[900px] mx-auto px-6">
            <SectionHeading eyebrow="Section 1" title={<>Executive <span className="gfg-gradient-text">Summary</span></>} subtitle="A year in review — the milestones, the learning, and the community we built." />
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                The academic year 2025–26 marked the operational beginning of the <strong>GeeksforGeeks Campus Body SRMIST</strong> under the Department of Networking and Communications, School of Computing. This inaugural year was defined by deliberate action — focused on establishing our identity, proving our value, and building a foundation for long-term impact.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We organized two flagship technical workshops — <strong>IGNISIA 2025</strong> (DSA and Placement Preparation) and <strong>JAVA-VERSE 2026</strong> (Java Full-Stack Development) — each earning positive feedback and growing attendance. We represented SRMIST at the <strong>Road Safety Hackathon 2026</strong> organized by the Centre of Excellence for Road Safety, IIT Madras, and collaborated with GFG SRM Ramapuram as a Community Partner for their event, EDGE CASE.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Beyond events, we built two live websites, created active social communities, and directly reached 500+ students. This report documents every achievement, challenge, and lesson from our first year — serving as both a record of our foundation and a blueprint for what comes next.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section id="ar-vision" className="scroll-mt-24 py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[900px] mx-auto px-6">
            <SectionHeading eyebrow="Section 2" title={<>Vision & <span className="gfg-gradient-text">Mission</span></>} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Vision", icon: <Lightbulb size={24} />, color: "border-amber-400 bg-amber-50 dark:bg-amber-900/10", iconColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400", text: "To bridge the gap between academic learning and industry-ready skills by fostering a robust culture of coding excellence, practical problem-solving, and continuous innovation." },
                { label: "Mission", icon: <Target size={24} />, color: "border-primary-400 bg-primary-50 dark:bg-primary-900/10", iconColor: "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400", text: "To empower students to strengthen their problem-solving, coding, and full-stack development skills through a strategic series of hands-on workshops, hackathons, coding contests, and mentorship sessions." },
              ].map((v) => (
                <motion.div key={v.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`${v.color} border-2 rounded-[20px] p-6`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${v.iconColor}`}>{v.icon}</div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3">{v.label}</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section id="ar-stats" className="scroll-mt-24 py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1100px] mx-auto px-6">
            <SectionHeading eyebrow="Section 3" title={<>Year <span className="gfg-gradient-text">Statistics</span></>} subtitle="The numbers behind our inaugural year." />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {impactStats.map((s, i) => (
                <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`${s.bg} rounded-2xl p-5 border border-slate-100 dark:border-slate-800`}>
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <div className={`font-heading font-extrabold text-3xl ${s.color} mb-1`}>{s.value}{s.suffix}</div>
                  <p className="text-slate-800 dark:text-slate-200 text-sm font-semibold">{s.label}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{s.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Summary */}
        <section id="ar-events" className="scroll-mt-24 py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <SectionHeading eyebrow="Section 4" title={<>Events <span className="gfg-gradient-text">Overview</span></>} />
            <div className="space-y-6">
              {events.map((event, i) => (
                <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-slate-900 rounded-[20px] p-6 border border-slate-100 dark:border-slate-800 shadow-soft">
                  <div className={`h-1 bg-gradient-to-r ${event.color} rounded-full mb-5`} />
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">{event.name}</h3>
                      <p className={`font-semibold text-sm mt-0.5 ${event.accentColor}`}>{event.theme}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1"><CalendarDays size={11} />{event.date}</span>
                        <span className="flex items-center gap-1"><Users size={11} />{event.reach}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed line-clamp-2">{event.overview}</p>
                    </div>
                    <a href={event.websiteUrl} target="_blank" rel="noopener noreferrer" className={`flex-shrink-0 text-xs font-bold ${event.accentColor} flex items-center gap-1 hover:gap-2 transition-all`}>
                      Event Site <ExternalLink size={11} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Plans */}
        <section id="ar-future" className="scroll-mt-24 py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[900px] mx-auto px-6">
            <SectionHeading eyebrow="Section 5" title={<>Future <span className="gfg-gradient-text">Plans</span></>} subtitle="Our roadmap for 2026–27 — bigger, bolder, and more impactful." />
            <div className="space-y-3">
              {futurePlans.map((plan, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{plan}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Acknowledgements */}
        <section id="ar-ack" className="scroll-mt-24 py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[900px] mx-auto px-6">
            <SectionHeading eyebrow="Section 6" title={<><span className="gfg-gradient-text">Acknowledgements</span></>} />
            <div className="bg-white dark:bg-slate-900 rounded-[24px] p-8 border border-slate-100 dark:border-slate-800 shadow-soft space-y-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              <p>We express our sincere gratitude to <strong className="text-slate-900 dark:text-white">Dr. M. Lakshmi</strong>, Head of Department, Networking and Communications, for her continued support and encouragement.</p>
              <p>Our heartfelt thanks to <strong className="text-slate-900 dark:text-white">Dr. Meenakshi K</strong>, our Faculty Convener, whose mentorship and guidance shaped every milestone of GFG SRMIST's inaugural year.</p>
              <p>We thank <strong className="text-slate-900 dark:text-white">Dr. Saranya Gangadharan</strong>, <strong className="text-slate-900 dark:text-white">Dr. Safa M</strong>, and <strong className="text-slate-900 dark:text-white">Dr. Parimala G</strong> for their unwavering support as faculty coordinators.</p>
              <p>Special thanks to <strong className="text-slate-900 dark:text-white">Dr. Rathinam Ananthanarayanan</strong>, Professor and Director of Alumni Affairs, for his invaluable guidance in fostering alumni connections.</p>
              <p>To our ex-leadership — <strong className="text-slate-900 dark:text-white">Mudit Khater</strong>, <strong className="text-slate-900 dark:text-white">Punit Joshi</strong>, <strong className="text-slate-900 dark:text-white">Devanshi Karaulia</strong>, <strong className="text-slate-900 dark:text-white">Mridangam Goswami</strong>, and <strong className="text-slate-900 dark:text-white">Plakshi Sharma</strong> — your foundation made our success possible.</p>
              <p>And above all, to every student member, volunteer, and attendee who trusted us — <strong className="text-primary-600 dark:text-primary-400">thank you</strong>.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
