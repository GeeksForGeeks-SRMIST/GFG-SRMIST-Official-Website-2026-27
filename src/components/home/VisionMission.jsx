import React from "react";
import { motion } from "motion/react";
import { Lightbulb, Target } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const cards = [
  {
    type: "Vision",
    icon: <Lightbulb size={32} />,
    iconBg: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800",
    accent: "border-amber-400",
    topBg: "from-amber-500 to-orange-600",
    quote: "To bridge the gap between academic learning and industry-ready skills by fostering a robust culture of coding excellence, practical problem-solving, and continuous innovation.",
    bullets: [
      "Industry-ready graduates from SRMIST",
      "National recognition in competitive coding",
      "A model campus chapter for GeeksforGeeks",
    ],
  },
  {
    type: "Mission",
    icon: <Target size={32} />,
    iconBg: "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 border-primary-100 dark:border-primary-800",
    accent: "border-primary-400",
    topBg: "from-primary-500 to-emerald-600",
    quote: "To empower students to strengthen problem-solving, coding, and full-stack development skills through strategic workshops, hackathons, coding contests, and mentorship sessions.",
    bullets: [
      "Hands-on technical workshops every semester",
      "Hackathon participation at national level",
      "Direct industry mentorship and placement prep",
    ],
  },
];

export default function VisionMission() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          eyebrow="What We Stand For"
          title={
            <>
              Our <span className="gfg-gradient-text">Vision</span> &amp;{" "}
              <span className="text-slate-900 dark:text-white">Mission</span>
            </>
          }
          subtitle="Two north stars that guide every workshop, event, and initiative we undertake."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`group bg-white dark:bg-slate-900 rounded-[28px] overflow-hidden border-2 ${card.accent} shadow-soft hover:shadow-hover transition-all duration-400`}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${card.topBg}`} />

              <div className="p-8 lg:p-10">
                {/* Icon + label */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${card.iconBg} group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                    {card.type}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium mb-8 pl-4 border-l-2 border-current opacity-80">
                  "{card.quote}"
                </blockquote>

                {/* Bullets */}
                <ul className="space-y-3">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
