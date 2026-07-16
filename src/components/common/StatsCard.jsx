// src/components/common/StatsCard.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/**
 * Animated counter stat card with intersection observer.
 * Counts up from 0 to `value` when scrolled into view.
 */
export default function StatsCard({
  value,
  suffix = "",
  label,
  sublabel,
  icon,
  color = "text-primary-500",
  bg = "bg-primary-50 dark:bg-primary-900/20",
  delay = 0,
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount(value);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const animateCount = (target) => {
    const duration = 1800;
    const startTime = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      setCount(Math.floor(easedProgress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-medium transition-all duration-300"
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>

      {/* Counter */}
      <div className={`font-heading font-extrabold text-4xl ${color} mb-1 tabular-nums`}>
        {count}{suffix}
      </div>

      {/* Label */}
      <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">{label}</p>

      {/* Sublabel */}
      {sublabel && (
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{sublabel}</p>
      )}

      {/* Bottom accent bar */}
      <div className={`absolute bottom-0 left-6 right-6 h-0.5 ${bg.replace("50", "200").replace("900/20", "700")} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
    </motion.div>
  );
}
