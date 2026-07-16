// src/components/common/SectionHeading.jsx
import React from "react";
import { motion } from "motion/react";

/**
 * Reusable section heading component.
 * @param {string} eyebrow - Small label above the heading
 * @param {string} title - Main h2 heading (can contain JSX for highlighted spans)
 * @param {string} subtitle - Optional paragraph below heading
 * @param {"center"|"left"} align - Text alignment
 * @param {string} className - Additional classes
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClass = align === "left" ? "text-left" : "text-center mx-auto";

  return (
    <div className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-primary-500 font-semibold tracking-widest uppercase text-xs mb-4"
        >
          <span className="w-6 h-px bg-primary-500 inline-block" />
          {eyebrow}
          <span className="w-6 h-px bg-primary-500 inline-block" />
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white leading-tight tracking-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
