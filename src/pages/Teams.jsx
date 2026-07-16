import React, { useState } from "react";
import { motion } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import TeamCard from "@/components/teams/TeamCard";
import { directors, associateLeads, members, coreLeadership, domains, domainColors } from "@/data/team";

const allSubTeam = [...directors, ...associateLeads, ...members];
const domainFilters = ["All", ...domains.filter(d => d !== "Leadership")];

export default function Teams() {
  const [activeDomain, setActiveDomain] = useState("All");

  const filtered = allSubTeam.filter(
    (m) => activeDomain === "All" || m.domain === activeDomain
  );

  return (
    <>
      <SEO
        title="Teams"
        description="Meet the complete team behind GFG SRMIST — Directors, Associate Leads, and Members across Technical, Corporate, Management, and Creatives domains."
        url="https://gfg-srmist.vercel.app/teams"
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-4 tracking-tight">
              The <span className="gfg-gradient-text">Team</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              30+ dedicated members across four domains — Technical, Corporate, Management, and Creatives.
            </motion.p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1200px] mx-auto px-6">
            {/* Domain filter */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {domainFilters.map((d) => {
                const colors = domainColors[d] || {};
                const isActive = activeDomain === d;
                return (
                  <motion.button
                    key={d}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setActiveDomain(d)}
                    className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                      isActive
                        ? "bg-primary-500 text-white shadow-glow-sm"
                        : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400"
                    }`}
                  >
                    {d}
                  </motion.button>
                );
              })}
            </div>

            {/* Count */}
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8">
              Showing <strong className="text-slate-800 dark:text-slate-200">{filtered.length}</strong> members
              {activeDomain !== "All" && <> in <strong className="text-primary-600 dark:text-primary-400">{activeDomain}</strong></>}
            </p>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((member, i) => (
                <TeamCard key={`${member.name}-${i}`} member={member} delay={i * 0.04} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
