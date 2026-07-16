import React from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/common/SectionHeading";

const sponsors = [
  {
    name: "Unstop",
    src: "/assets/Sponsors/Unstop.webp",
    role: "Competition Partner",
    href: "https://unstop.com",
  },
  {
    name: "Burger King",
    src: "/assets/Sponsors/burgerking.webp",
    role: "Food Partner",
    href: "https://www.burgerking.in",
  },
  {
    name: "Coca-Cola",
    src: "/assets/Sponsors/cocacola.webp",
    role: "Beverage Partner",
    href: "https://www.coca-cola.com/in/en",
  },
];

export default function Sponsors() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-600 mb-10"
        >
          Trusted Partners & Sponsors — IGNISIA 2025 & JAVA-VERSE 2026
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20">
          {sponsors.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
              className="group flex flex-col items-center gap-3"
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-soft border border-slate-100 dark:border-slate-700 group-hover:shadow-medium group-hover:border-primary-200 dark:group-hover:border-primary-800 transition-all">
                <img
                  src={s.src}
                  alt={s.name}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{s.name}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{s.role}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GFG parent affiliation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-xs text-slate-400 dark:text-slate-600 font-medium">Official Campus Chapter of</p>
          <div className="flex items-center gap-3">
            <img
              src="/assets/Logo/GfG Horizontal Combination Mark (Light Mode)@2x.png"
              alt="GeeksforGeeks"
              className="h-6 w-auto object-contain grayscale opacity-60 dark:invert dark:opacity-40"
              loading="lazy"
            />
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <img
              src="/assets/Logo/srmlogo.webp"
              alt="SRMIST"
              className="h-28 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
