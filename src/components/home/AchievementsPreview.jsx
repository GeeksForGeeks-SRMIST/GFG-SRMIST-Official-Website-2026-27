import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Trophy, ArrowRight, Star } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { achievementImages } from "@/data/events";

const achievements = [
  {
    id: 1,
    title: "National Hackathon Representation",
    desc: "Team GFG SRMIST, led by MD Nayaj Mondal, represented SRMIST at the prestigious Road Safety Hackathon 2026 organized by the Centre of Excellence for Road Safety, IIT Madras.",
    tags: ["IIT Madras", "National Level", "2026"],
    icon: "🏆",
    image: "assets/Achivements/iithackathon.webp",
    highlight: true,
  },
  {
    id: 2,
    title: "Cross-Campus Collaboration",
    desc: "Partnered with GFG Campus Body SRM Ramapuram as Community Partner for 'EDGE CASE' — expanding our reach and fostering inter-campus technical exchange.",
    tags: ["SRM Ramapuram", "Partnership", "2026"],
    icon: "🤝",
    image: "assets/CommunityPartners/GFGRamapuram.webp",
  },
  {
    id: 3,
    title: "500+ Students Trained",
    desc: "Successfully trained over 500 students across high-demand domains including DSA, Placement Strategy, and Enterprise Full-Stack Development in a single academic year.",
    tags: ["500+ Students", "DSA", "Full Stack", "Placement"],
    icon: "🎓",
    image: "assets/Gallary/1762873908951.jpeg",
  },
];

export default function AchievementsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-emerald-400 to-primary-400" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <SectionHeading
            eyebrow="Milestones"
            title={
              <>
                Our <span className="gfg-gradient-text">Achievements</span>
              </>
            }
            align="left"
            className="mb-0"
          />
          <Link to="/achievements" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
            >
              All Achievements <ArrowRight size={15} />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`group relative bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden border shadow-soft hover:shadow-hover transition-all duration-300 ${
                ach.highlight
                  ? "border-primary-200 dark:border-primary-800"
                  : "border-slate-100 dark:border-slate-800"
              }`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                {ach.image ? (
                  <img
                    src={ach.image}
                    alt={ach.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    {ach.icon}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {ach.highlight && (
                  <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> Featured
                  </div>
                )}

                <div className="absolute bottom-3 left-3 text-3xl">{ach.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-2 leading-tight">
                  {ach.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {ach.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ach.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
