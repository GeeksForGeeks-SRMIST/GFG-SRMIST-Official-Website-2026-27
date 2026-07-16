import React from "react";
import { motion } from "motion/react";
import { Code2, Layers, BrainCircuit, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const domains = [
  {
    icon: <Code2 size={36} />,
    title: "Data Structures & Algorithms",
    desc: "Deep-dive sessions on core DSA concepts, competitive programming strategies, and problem-solving techniques essential for top-tier placement interviews.",
    tags: ["Arrays", "Trees", "Graphs", "DP", "Sorting"],
    color: "from-primary-500 to-emerald-600",
    iconBg: "bg-primary-50 dark:bg-primary-900/20",
    iconText: "text-primary-600 dark:text-primary-400",
    border: "hover:border-primary-300 dark:hover:border-primary-700",
    featured: true,
  },
  {
    icon: <Layers size={36} />,
    title: "Full Stack Development",
    desc: "Enterprise-grade web development — from Core Java and Spring Boot microservices on the backend, to React and modern CSS on the frontend.",
    tags: ["Java", "Spring Boot", "React", "REST APIs", "Databases"],
    color: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-50 dark:bg-blue-900/20",
    iconText: "text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-300 dark:hover:border-blue-700",
    featured: false,
  },
  {
    icon: <BrainCircuit size={36} />,
    title: "Placement Preparation",
    desc: "End-to-end interview readiness — resume building, aptitude training, mock interviews, and insider strategies shared by alumni placed at top tech companies.",
    tags: ["Resume", "Aptitude", "Mock Interviews", "HR Prep", "Tech Rounds"],
    color: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-50 dark:bg-amber-900/20",
    iconText: "text-amber-600 dark:text-amber-400",
    border: "hover:border-amber-300 dark:hover:border-amber-700",
    featured: false,
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="Core Domains"
          title={
            <>
              What We <span className="gfg-gradient-text">Do</span>
            </>
          }
          subtitle="Three pillars of technical excellence that define every workshop, event, and initiative we organize."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {domains.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className={`group relative bg-white dark:bg-slate-900 rounded-[24px] p-8 border border-slate-100 dark:border-slate-800 ${d.border} shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden`}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${d.color}`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${d.iconBg} ${d.iconText} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {d.icon}
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3 leading-tight">
                {d.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {d.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full ${d.iconBg} ${d.iconText} font-medium border border-current/20`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className={`flex items-center gap-1 text-xs font-semibold ${d.iconText} opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all`}>
                Explore <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
