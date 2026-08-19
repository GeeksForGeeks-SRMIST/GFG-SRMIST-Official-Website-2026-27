import React, { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, Globe, Instagram, Github, Users, GraduationCap, Crown } from "lucide-react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import TeamCard from "@/components/teams/TeamCard";
import { faculty, coreLeadership, directors, associateLeads, members, domains } from "@/data/team";

const allSubTeam = [...directors, ...associateLeads, ...members];
const domainFilters = ["All", ...domains.filter((d) => d !== "Leadership")];

const SOCIAL_ICONS = {
  linkedin:  { Icon: Linkedin,  label: "LinkedIn"  },
  instagram: { Icon: Instagram, label: "Instagram" },
  github:    { Icon: Github,    label: "GitHub"    },
  website:   { Icon: Globe,     label: "Website"   },
};

function getInitials(name = "") {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
}

// ─── Faculty card ──────────────────────────────────────────────────────────────
function FacultyCard({ member, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Photo */}
      <div className="h-65 bg-brand-light-green dark:bg-dark-surface overflow-hidden">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-heading font-bold text-2xl">
              {getInitials(member.name)}
            </div>
          </div>
        )}
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col gap-1 flex-1">
        <h3 className="font-heading font-bold text-sm text-text-headline dark:text-white leading-snug">
          {member.name}
        </h3>
        <p className="text-primary-500 dark:text-ocean text-xs font-semibold">{member.role}</p>
        <p className="text-text-muted dark:text-slate-400 text-xs mt-0.5">{member.department}</p>
        {member.links && Object.keys(member.links).length > 0 && (
          <div className="flex gap-2 mt-3 pt-2 border-t border-neutral-border dark:border-dark-border">
            {Object.entries(member.links).map(([platform, href]) => {
              const def = SOCIAL_ICONS[platform];
              if (!def || !href) return null;
              const { Icon, label } = def;
              return (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${label}`}
                  className="w-7 h-7 rounded-full bg-neutral-light dark:bg-dark-surface border border-neutral-border dark:border-dark-border flex items-center justify-center text-text-muted dark:text-slate-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-500 hover:border-primary-200 transition-all"
                >
                  <Icon size={13} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Leadership card (larger, more prominent) ──────────────────────────────────
function LeaderCard({ member, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Photo */}
      <div className="h-64 bg-brand-light-green dark:bg-dark-surface overflow-hidden relative">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center font-heading font-bold text-3xl">
              {getInitials(member.name)}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-1 flex-1">
        <div className="flex items-center gap-1.5 mb-1">
          <Crown size={12} className="text-primary-500" />
          <span className="text-[10px] font-bold text-primary-500 dark:text-ocean uppercase tracking-wider">
            Leadership
          </span>
        </div>
        <h3 className="font-heading font-bold text-base text-text-headline dark:text-white leading-snug">
          {member.name}
        </h3>
        <p className="text-primary-500 dark:text-ocean text-xs font-semibold">{member.role}</p>
        {member.bio && (
          <p className="text-text-muted dark:text-slate-400 text-xs leading-relaxed mt-2 line-clamp-3">
            {member.bio}
          </p>
        )}
        {member.links && Object.keys(member.links).length > 0 && (
          <div className="flex gap-2 mt-3 pt-3 border-t border-neutral-border dark:border-dark-border">
            {Object.entries(member.links).map(([platform, href]) => {
              const def = SOCIAL_ICONS[platform];
              if (!def || !href) return null;
              const { Icon, label } = def;
              return (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${label}`}
                  className="w-8 h-8 rounded-full bg-neutral-light dark:bg-dark-surface border border-neutral-border dark:border-dark-border flex items-center justify-center text-text-muted dark:text-slate-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-500 hover:border-primary-200 transition-all"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Teams page ────────────────────────────────────────────────────────────────
export default function Teams() {
  const [activeDomain, setActiveDomain] = useState("All");

  const filtered = allSubTeam.filter(
    (m) => activeDomain === "All" || m.domain === activeDomain
  );

  return (
    <>
      <SEO
        title="Teams"
        description="Meet the GFG SRMIST team — Faculty Coordinators, Core Leadership, Directors, Associate Leads, and Members across Technical, Corporate, Management, and Creatives domains."
        url="https://gfg-srmist.vercel.app/teams"
      />

      <main className="pt-24">
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 dot-grid opacity-[0.04]"
            aria-hidden="true"
          />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-primary-500 font-semibold tracking-widest uppercase text-xs mb-4"
            >
              <span className="w-6 h-px bg-primary-500" /> 2026–27 Batch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading font-bold text-5xl lg:text-6xl text-text-headline dark:text-white mb-4 tracking-tight"
            >
              The <span className="gfg-gradient-text">Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-text-body dark:text-slate-400 max-w-xl mx-auto"
            >
              Faculty mentors, core leadership, and 30+ dedicated members across four
              domains — all working together to build SRMIST's finest tech community.
            </motion.p>
          </div>
        </section>

        {/* ── Faculty Coordinators ──────────────────────────────────────────── */}
        <section className="py-20 bg-white dark:bg-dark-bg">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              eyebrow="Our Mentors"
              title={<>Faculty <span className="gfg-gradient-text">Coordinators</span></>}
              subtitle="The academic leaders under whose guidance GFG SRMIST operates."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {faculty.map((f, i) => (
                <FacultyCard key={f.name} member={f} delay={i * 0.07} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Leadership ───────────────────────────────────────────────── */}
        <section className="py-20 bg-brand-light-green dark:bg-dark-surface/40">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              eyebrow="Core Leadership"
              title={<>Driving the <span className="gfg-gradient-text">Vision</span></>}
              subtitle="The President, Secretary, and Joint Secretary leading GFG SRMIST in 2026–27."
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {coreLeadership.map((m, i) => (
                <LeaderCard key={m.name} member={m} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Filterable team grid ─────────────────────────────────────────── */}
        <section className="py-20 bg-white dark:bg-dark-bg">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              eyebrow="The Full Team"
              title={<>Directors, Leads <span className="gfg-gradient-text">& Members</span></>}
              subtitle="Filter by domain to explore the talent behind every initiative."
            />

            {/* Domain filter */}
            {/* <div
              role="group"
              aria-label="Filter by domain"
              className="flex flex-wrap gap-3 justify-center mb-10"
            >
              {domainFilters.map((d) => {
                const isActive = activeDomain === d;
                return (
                  <motion.button
                    key={d}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setActiveDomain(d)}
                    aria-pressed={isActive}
                    className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                      isActive
                        ? "bg-primary-500 text-white shadow-glow-sm"
                        : "bg-white dark:bg-dark-card border border-neutral-border dark:border-dark-border text-text-body dark:text-slate-300 hover:border-primary-300 hover:text-primary-500"
                    }`}
                  >
                    {d}
                  </motion.button>
                );
              })}
            </div> */}

            {/* Result count */}
            {/* <p className="text-center text-sm text-text-muted dark:text-slate-400 mb-8">
              Showing <strong className="text-text-headline dark:text-slate-200">{filtered.length}</strong> members
              {activeDomain !== "All" && (
                <> in <strong className="text-primary-500 dark:text-ocean">{activeDomain}</strong></>
              )}
            </p>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((member, i) => (
                <TeamCard
                  key={`${member.name}-${i}`}
                  member={member}
                  delay={i * 0.04}
                />
              ))}
            </div> */}
            <div className="flex flex-col items-center justify-center py-20 text-center">
  <span className="text-sm font-semibold uppercase tracking-widest text-primary-500 dark:text-ocean mb-3">
    Team 2026–27
  </span>

  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-text-headline dark:text-white">
    Announcing Soon
  </h3>

  <p className="mt-3 max-w-md text-sm sm:text-base text-text-muted dark:text-slate-400">
    Our new team is coming soon. Stay tuned for the official announcement.
  </p>
</div>
          </div>
        </section>
      </main>
    </>
  );
}
