import React from "react";
import { motion } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import TeamCard from "@/components/teams/TeamCard";
import { coreLeadership, faculty } from "@/data/team";
import { Crown, Users, GraduationCap } from "lucide-react";

export default function Leadership() {
  return (
    <>
      <SEO
        title="Leadership"
        description="Meet the core leadership of GFG SRMIST — President, Secretary, Joint Secretary, and Faculty Coordinators who guide our campus chapter."
        url="https://gfg-srmist.vercel.app/leadership"
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Our <span className="gfg-gradient-text">Leadership</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              The people who lead GFG SRMIST with vision, dedication, and a passion for technology.
            </motion.p>
          </div>
        </section>

        {/* Core Leadership */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              eyebrow="Core Leadership 2025–26"
              title={<>The <span className="gfg-gradient-text">Core Team</span></>}
              subtitle="Three pillars of leadership who drove GFG SRMIST's growth in its inaugural year."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {coreLeadership.map((leader, i) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className={`group bg-white dark:bg-slate-900 rounded-[24px] p-8 text-center border shadow-soft hover:shadow-hover transition-all duration-300 ${
                    i === 0 ? "border-primary-200 dark:border-primary-800 md:scale-105" : "border-slate-100 dark:border-slate-800"
                  }`}
                >
                  {/* Avatar */}
                  <div className="relative mx-auto mb-6 w-fit">
                    {leader.avatar ? (
                      <img
                        src={leader.avatar}
                        alt={leader.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-primary-100 dark:border-primary-900 shadow-lg mx-auto"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-400 to-emerald-600 flex items-center justify-center font-heading font-bold text-3xl text-white shadow-lg mx-auto">
                        {leader.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </div>
                    )}
                    {i === 0 && (
                      <div className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 rounded-full p-1.5 shadow-md">
                        <Crown size={14} />
                      </div>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-xl mb-1">{leader.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-3">{leader.role}</p>
                  {leader.bio && <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{leader.bio}</p>}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Coordinators */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading
              eyebrow="Academic Guidance"
              title={<>Faculty <span className="gfg-gradient-text">Advisors</span></>}
              subtitle="The department faculty whose mentorship empowers our every initiative."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {faculty.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="flex gap-4 items-start p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-medium transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center font-heading font-bold flex-shrink-0">
                    {f.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-slate-900 dark:text-white text-sm">{f.name}</p>
                    <p className="text-primary-600 dark:text-primary-400 text-xs font-semibold mt-0.5">{f.role}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 leading-tight">{f.department}</p>
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
