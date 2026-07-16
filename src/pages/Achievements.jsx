import React from "react";
import { motion } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import StatsCard from "@/components/common/StatsCard";
import { impactStats } from "@/data/stats";
import { achievementImages } from "@/data/events";
import { Trophy, ExternalLink, Star } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Road Safety Hackathon — IIT Madras",
    category: "National Hackathon",
    year: 2026,
    icon: "🏆",
    description: "Team GFG SRMIST represented SRMIST at the prestigious Road Safety Hackathon 2026, organized by the Centre of Excellence for Road Safety at IIT Madras. The team applied full-stack development and innovative problem-solving to engineer solutions for real-world road safety challenges.",
    image: "assets/Achivements/iithackathon.webp",
    highlight: true,
    tags: ["National", "IIT Madras", "Full Stack", "Innovation"],
  },
  {
    id: 2,
    title: "Cross-Campus Collaboration — EDGE CASE",
    category: "Community Partnership",
    year: 2026,
    icon: "🤝",
    description: "Partnered with GeeksforGeeks Campus Body SRM Ramapuram as Community Partner for the coding event 'EDGE CASE'. This collaboration extended GFG SRMIST's reach beyond Kattankulathur and fostered inter-campus technical exchange.",
    image: "assets/CommunityPartners/GFGRamapuram.webp", 
    tags: ["Partnership", "SRM Ramapuram", "Community"],
  },
  {
    id: 3,
    title: "IGNISIA 2025 — Flagship Event",
    category: "Technical Workshop",
    year: 2025,
    icon: "🎓",
    description: "Successfully executed IGNISIA 2025 — a multi-day placement and DSA training workshop at Tech Park, SRMIST. The event overcame multiple logistical challenges (weather disruptions, scheduling conflicts) and delivered a high-impact learning experience for 250+ participants.",
    image: "assets/Events/ignisia.webp",
    tags: ["Workshop", "DSA", "250+ Participants", "Tech Park"],
  },
  {
    id: 4,
    title: "JAVA-VERSE 2026 — Enterprise Dev Workshop",
    category: "Technical Workshop",
    year: 2026,
    icon: "💻",
    description: "Organized JAVA-VERSE 2026, an intensive full-stack Java development workshop with 450+ registrations. Built and deployed a dedicated event website handling all registrations, demonstrating the club's capability to deliver end-to-end technical infrastructure.",
    image: "assets/Events/poster.webp",
    tags: ["Workshop", "Java", "Spring Boot", "450+ Registrations"],
  },
  {
    id: 5,
    title: "2 Live Event Websites Deployed",
    category: "Digital Platforms",
    year: 2026,
    icon: "🌐",
    description: "The technical team built and deployed two fully functional event websites from scratch: ignisia25.vercel.app and the JAVA-VERSE 2026 registration portal — showcasing real-world full-stack development skills.",
    image: "assets/Events/combine.webp",
    links: [
      { label: "ignisia25.vercel.app", href: "https://ignisia25.vercel.app" },
      { label: "java-verse.vercel.app", href: "https://java-verse.vercel.app/" }
    ],
    tags: ["Full Stack", "Vercel", "React", "2 Sites"],
  },
  {
    id: 6,
    title: "500+ Students Trained in 2025–26",
    category: "Student Impact",
    year: 2026,
    icon: "👥",
    description: "Across two major workshops, one hackathon, and continuous community engagement, GFG SRMIST trained and mentored over 500 students in DSA, Java Full Stack Development, and Placement Preparation in a single academic year.",
    image: "assets/Gallary/1762873908951.jpeg",
    tags: ["500+ Students", "DSA", "Full Stack", "Placement"],
  },
];

export default function Achievements() {
  return (
    <>
      <SEO
        title="Achievements"
        description="GFG SRMIST achievements — national hackathon at IIT Madras, cross-campus collaboration, IGNISIA 2025, JAVA-VERSE 2026, 2 live websites, and 500+ students trained."
        url="https://gfg-srmist.vercel.app/achievements"
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Our <span className="gfg-gradient-text">Achievements</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              A year of milestones — from national hackathons to 500+ students trained, GFG SRMIST made its mark in 2025–26.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading eyebrow="By the Numbers" title={<>Impact in <span className="gfg-gradient-text">2025–26</span></>} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {impactStats.map((stat, i) => (
                <StatsCard key={stat.id} value={stat.value} suffix={stat.suffix} label={stat.label} sublabel={stat.sublabel} icon={stat.icon} color={stat.color} bg={stat.bg} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Achievement Cards */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading eyebrow="Milestones" title={<>Key <span className="gfg-gradient-text">Accomplishments</span></>} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className={`group bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden border shadow-soft hover:shadow-hover transition-all duration-300 ${
                    ach.highlight ? "border-primary-200 dark:border-primary-800" : "border-slate-100 dark:border-slate-800"
                  }`}
                >
                  {/* Image or emoji */}
                  <div className="relative h-40 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    {ach.image ? (
                      <img src={ach.image} alt={ach.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl">{ach.icon}</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {ach.highlight && (
                      <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> Featured
                      </div>
                    )}
                    <span className="absolute bottom-3 left-3 text-2xl">{ach.icon}</span>
                    <span className="absolute top-3 left-3 bg-black/40 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-full">{ach.year}</span>
                  </div>

                  <div className="p-6">
                    <p className="text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider mb-2">{ach.category}</p>
                    <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base leading-snug mb-3">{ach.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">{ach.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {ach.tags.map((t) => (
                        <span key={t} className="text-[11px] px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full font-medium">{t}</span>
                      ))}
                    </div>

                    {ach.links?.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:gap-2 transition-all">
                        <ExternalLink size={11} /> {l.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
