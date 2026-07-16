import React from "react";
import { motion } from "motion/react";
import SectionHeading from "@/components/common/SectionHeading";
import StatsCard from "@/components/common/StatsCard";
import { impactStats } from "@/data/stats";

export default function ImpactStats() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Our Impact in 2025–26"
          title={
            <>
              Numbers that{" "}
              <span className="gfg-gradient-text">Speak Louder</span>
            </>
          }
          subtitle="A year of learning, building, and growing — measured in real milestones from our academic tenure."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {impactStats.map((stat, i) => (
            <StatsCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sublabel={stat.sublabel}
              icon={stat.icon}
              color={stat.color}
              bg={stat.bg}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs text-slate-400 dark:text-slate-600 mt-10"
        >
          Statistics sourced from GFG SRMIST Annual Report 2025–2026
        </motion.p>
      </div>
    </section>
  );
}
