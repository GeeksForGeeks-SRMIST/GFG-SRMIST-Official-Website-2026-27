import React from "react";
import { motion } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import StatsCard from "@/components/common/StatsCard";
import { impactStats } from "@/data/stats";
import { Trophy, ExternalLink, Star, Users, AlertCircle } from "lucide-react";

// ─── Achievement Data ─────────────────────────────────────────────────────────
// Source of truth: verified events, MoU, plan.md
// Top 30 claim: stated by owner, not confirmed in any supplied document.
// Rendered as pending-verification until owner provides certificate/proof.
const TOP_30_VERIFIED = true; // Set to true once certificate/document is available

const achievements = [
  {
    id: 1,
    title: "Road Safety Hackathon — IIT Madras",
    category: "National Hackathon",
    year: 2026,
    icon: "🏆",
    description:
      "Team GFG SRMIST represented SRMIST at the prestigious Road Safety Hackathon 2026, organized by the Centre of Excellence for Road Safety at IIT Madras. The team applied full-stack development and innovative problem-solving to engineer solutions for real-world road safety challenges.",
    image: "assets/Achivements/iithackathon.webp",
    highlight: true,
    tags: ["National", "IIT Madras", "Full Stack", "Innovation"],
  },
  {
    id: 7,
    title: "GFG × Aaruush '26 — Cognixion 2026",
    category: "Official Collaboration",
    year: 2026,
    icon: "🤝",
    description:
      "GeeksforGeeks SRMIST officially collaborated with Aaruush '26 for Cognixion 2026 (3–6 August 2026) — representing GFG at one of SRMIST's premier inter-college fests. The club showcased projects, participated in competitions, and represented its technical community on the main stage.",
    image: "assets/Achivements/Cognixion.jpeg", // Update with an actual image if available
    highlight: true,
    tags: ["Aaruush '26", "Cognixion", "Official MoU", "August 2026"],
    aaruush: true,
    teamLead: "MD Nayaj Mondal",
    facultyCoordinator: "Dr. Meenakshi K",
  },
  {
    id: 2,
    title: "Cross-Campus Collaboration — EDGE CASE",
    category: "Community Partnership",
    year: 2026,
    icon: "🤝",
    description:
      "Partnered with GeeksforGeeks Campus Body SRM Ramapuram as Community Partner for the coding event 'EDGE CASE'. This collaboration extended GFG SRMIST's reach beyond Kattankulathur and fostered inter-campus technical exchange.",
    image: "assets/CommunityPartners/GFGRamapuram.webp",
    tags: ["Partnership", "SRM Ramapuram", "Community"],
  },
  {
    id: 3,
    title: "IGNISIA 2025 — Flagship Workshop",
    category: "Technical Workshop",
    year: 2025,
    icon: "🎓",
    description:
      "Successfully executed IGNISIA 2025 — a multi-day placement and DSA training workshop at Tech Park, SRMIST. Delivered a high-impact learning experience for 250+ participants despite multiple logistical challenges.",
    image: "assets/Events/ignisia.webp",
    tags: ["Workshop", "DSA", "250+ Participants", "Tech Park"],
  },
  {
    id: 4,
    title: "JAVA-VERSE 2026 — Enterprise Dev Workshop",
    category: "Technical Workshop",
    year: 2026,
    icon: "💻",
    description:
      "Organized JAVA-VERSE 2026, an intensive full-stack Java development workshop with 450+ registrations. Built and deployed a dedicated event website handling all registrations.",
    image: "assets/Events/poster.webp",
    tags: ["Workshop", "Java", "Spring Boot", "450+ Registrations"],
  },
  {
    id: 5,
    title: "2 Live Event Websites Deployed",
    category: "Digital Platforms",
    year: 2026,
    icon: "🌐",
    description:
      "The technical team built and deployed two fully functional event websites from scratch — ignisia25.vercel.app and the JAVA-VERSE 2026 registration portal — showcasing real-world full-stack development skills.",
    image: "assets/Events/combine.webp",
    links: [
      { label: "ignisia25.vercel.app", href: "https://ignisia25.vercel.app" },
      { label: "java-verse.vercel.app", href: "https://java-verse.vercel.app/" },
    ],
    tags: ["Full Stack", "Vercel", "React", "2 Sites"],
  },
  {
    id: 6,
    title: "500+ Students Trained in 2025–26",
    category: "Student Impact",
    year: 2026,
    icon: "👥",
    description:
      "Across two major workshops, one hackathon, and continuous community engagement, GFG SRMIST trained and mentored over 500 students in DSA, Java Full Stack Development, and Placement Preparation in a single academic year.",
    image: "assets/Gallary/1762873908951.jpeg",
    tags: ["500+ Students", "DSA", "Full Stack", "Placement"],
  },
];

// ─── Aaruush Feature Card ─────────────────────────────────────────────────────
function AaruushFeatureCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="col-span-full bg-white dark:bg-dark-card rounded-3xl border-2 border-primary-200 dark:border-primary-800 shadow-glow overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Left — visual */}
        <div className="lg:col-span-2 p-10 flex flex-col justify-between min-h-[240px] relative overflow-hidden">
          {/* Background Image with Green Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/assets/Achivements/Cognixion.jpeg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-ocean/90 z-0 mix-blend-multiply" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              Official Collaboration
            </div>
            <h3 className="font-heading font-bold text-3xl text-white mb-1">
              GFG × Aaruush '26
            </h3>
            <p className="text-white/80 text-lg font-semibold">Cognixion 2026</p>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-white/70 text-sm mt-6">
              <span className="text-xl">📅</span>
              <span>3–6 August 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm mt-2">
              <span className="text-xl">📍</span>
              <span>SRMIST KTR Campus</span>
            </div>
          </div>
        </div>

        {/* Right — details */}
        <div className="lg:col-span-3 p-8 flex flex-col justify-between gap-6">
          <div>
            <p className="text-primary-500 dark:text-ocean text-xs font-bold uppercase tracking-wider mb-3">
              Official Collaboration
            </p>
            <p className="text-text-body dark:text-slate-300 leading-relaxed text-sm">
              GeeksforGeeks SRMIST entered into an official collaboration with Aaruush '26 for{" "}
              <strong className="text-text-headline dark:text-white">Cognixion 2026</strong> —
              representing GFG at SRMIST's prestigious inter-college techno-cultural fest. The
              club showcased projects, represented its technical community through{" "}
              <strong className="text-text-headline dark:text-white">
                project showcase, club representation, and inter-club competition
              </strong>
              , amplifying its brand at the college level.
            </p>
          </div>

          {/* What was done */}
          <div className="grid grid-cols-3 gap-3">
            {["Project Showcase", "Club Representation", "Inter-Club Competition"].map((item) => (
              <div
                key={item}
                className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-xl p-3 text-center"
              >
                <p className="text-primary-600 dark:text-ocean text-xs font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>

          {/* Team */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-border dark:border-dark-border">
            <div className="flex items-center gap-2">
              <Users size={14} className="text-primary-500" />
              <span className="text-xs text-text-muted dark:text-slate-400">
                Team Lead: <strong className="text-text-headline dark:text-white">MD Nayaj Mondal</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy size={14} className="text-primary-500" />
              <span className="text-xs text-text-muted dark:text-slate-400">
                Faculty Coordinator: <strong className="text-text-headline dark:text-white">Dr. Meenakshi K</strong>
              </span>
            </div>
          </div>

          {/* Top 30 claim — pending verification */}
          {!TOP_30_VERIFIED ? (
            <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3">
              <AlertCircle size={16} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-amber-700 dark:text-amber-300 text-xs leading-relaxed">
                <strong>Achievement pending verification:</strong> A Top 30 club placement at SRMIST KTR Campus
                has been claimed but is not yet confirmed by a certificate or official document in our records.
                This will be updated once verified.
              </p>
            </div>
          ) : (
            <div className="flex items-start gap-3 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-3">
              <Trophy size={16} className="text-primary-500 flex-shrink-0 mt-0.5" />
              <p className="text-primary-700 dark:text-primary-300 text-xs leading-relaxed">
                <strong>Verified Achievement:</strong> GFG SRMIST placed among the Top 30 club teams at
                SRMIST KTR Campus at Aaruush '26 / Cognixion 2026.
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Achievements() {
  const aaruushAchievement = achievements.find((a) => a.aaruush);
  const otherAchievements = achievements.filter((a) => !a.aaruush);

  return (
    <>
      <SEO
        title="Achievements"
        description="GFG SRMIST achievements — national hackathon at IIT Madras, Aaruush '26 collaboration, IGNISIA 2025, JAVA-VERSE 2026, 2 live websites, and 500+ students trained."
        url="https://gfg-srmist.vercel.app/achievements"
      />

      <main className="pt-24">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-[0.04]" aria-hidden="true" />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-primary-500 font-semibold tracking-widest uppercase text-xs mb-4"
            >
              <span className="w-6 h-px bg-primary-500" /> Milestones
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-5xl lg:text-6xl text-text-headline dark:text-white mb-4 tracking-tight"
            >
              Our <span className="gfg-gradient-text">Achievements</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-body dark:text-slate-400 max-w-xl mx-auto"
            >
              A year of milestones — from national hackathons to 500+ students trained,
              and an official collaboration with Aaruush '26.
            </motion.p>
          </div>
        </section>

        {/* ── Stats ───────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white dark:bg-dark-bg">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              eyebrow="By the Numbers"
              title={<>Impact in <span className="gfg-gradient-text">2025–26</span></>}
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
          </div>
        </section>

        {/* ── Aaruush Feature ─────────────────────────────────────────────── */}
        <section className="py-6 bg-neutral-light dark:bg-dark-surface/40">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              eyebrow="Official Collaboration"
              title={<>GFG × <span className="gfg-gradient-text">Aaruush '26</span></>}
              subtitle="An editorial milestone — representing GFG SRMIST at Cognixion 2026."
            />
            <div className="grid grid-cols-1">
              {aaruushAchievement && <AaruushFeatureCard achievement={aaruushAchievement} />}
            </div>
          </div>
        </section>

        {/* ── Achievement Cards ────────────────────────────────────────────── */}
        <section className="py-20 bg-neutral-light dark:bg-dark-surface/40">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              eyebrow="Milestones"
              title={<>Key <span className="gfg-gradient-text">Accomplishments</span></>}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherAchievements.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className={`group bg-white dark:bg-dark-card rounded-3xl overflow-hidden border shadow-soft hover:shadow-hover transition-all duration-300 ${
                    ach.highlight
                      ? "border-primary-200 dark:border-primary-800"
                      : "border-neutral-border dark:border-dark-border"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-40 bg-neutral-light dark:bg-dark-surface overflow-hidden">
                    {ach.image ? (
                      <img
                        src={ach.image}
                        alt={ach.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-6xl">
                        {ach.icon}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    {ach.highlight && (
                      <div className="absolute top-3 right-3 bg-amber-400 text-amber-900 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Star size={10} fill="currentColor" /> Featured
                      </div>
                    )}
                    <span className="absolute bottom-3 left-3 text-2xl">{ach.icon}</span>
                    <span className="absolute top-3 left-3 bg-black/40 backdrop-blur text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {ach.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-primary-500 dark:text-ocean text-xs font-bold uppercase tracking-wider mb-2">
                      {ach.category}
                    </p>
                    <h3 className="font-heading font-bold text-text-headline dark:text-white text-base leading-snug mb-3">
                      {ach.title}
                    </h3>
                    <p className="text-text-body dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {ach.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {ach.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-0.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-ocean rounded-full font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {ach.links?.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-primary-500 dark:text-ocean hover:gap-2 transition-all"
                      >
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
