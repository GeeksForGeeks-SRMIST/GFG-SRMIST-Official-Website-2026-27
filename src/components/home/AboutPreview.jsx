import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Users, Building2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const pillars = [
  {
    icon: <BookOpen size={28} />,
    title: "Learning Ecosystem",
    desc: "Hands-on workshops, hackathons, and coding contests that turn theory into practice.",
    color: "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-primary-100 dark:border-primary-800",
  },
  {
    icon: <Users size={28} />,
    title: "Community First",
    desc: "A thriving network of 500+ students united by a passion for technology and innovation.",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800",
  },
  {
    icon: <Building2 size={28} />,
    title: "Industry Exposure",
    desc: "Direct mentorship from solution architects, founders, and alumni from top-tier tech firms.",
    color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#0F172A 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 text-primary-500 font-semibold tracking-widest uppercase text-xs">
              <span className="w-6 h-px bg-primary-500" /> About the Club
            </span>

            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight tracking-tight">
              More than a club.{" "}
              <span className="gfg-gradient-text">A movement.</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              GeeksforGeeks Campus Body SRMIST is the <strong className="text-slate-800 dark:text-slate-200">official, student-led chapter</strong> of India's largest computer science community, operating under the Department of Networking and Communications, School of Computing.
            </p>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Rooted in the spirit of learning and collaboration, our chapter empowers students to strengthen their problem-solving, coding, and full-stack development skills through a strategic series of hands-on workshops, hackathons, coding contests, and mentorship sessions.
            </p>

            {/* SRM fact */}
            <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex-shrink-0">
                <img src="/assets/Logo/srmlogo.webp" alt="SRMIST" className="h-10 w-auto object-contain" loading="lazy" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">SRMIST, Kattankulathur</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  250-acre campus · 25,000+ students · 10,000+ in Computer Science · 50+ active clubs
                </p>
              </div>
            </div>

            <Link to="/about" className="w-fit">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all"
              >
                Read our full story <ArrowRight size={16} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: Pillars grid */}
          <div className="grid grid-cols-1 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-medium transition-all"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border ${p.color}`}>
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white mb-1">{p.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
