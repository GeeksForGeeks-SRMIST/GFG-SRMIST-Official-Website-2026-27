import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import { events, collaborations, hackathons } from "@/data/events";
import { CalendarDays, MapPin, Users, ExternalLink, ChevronRight, Mic, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";

function EventSection({ event }) {
  return (
    <div id={event.slug} className="scroll-mt-24 border border-slate-100 dark:border-slate-800 rounded-[28px] overflow-hidden shadow-soft hover:shadow-medium transition-all">
      {/* Header */}
      <div className={`relative h-64 bg-gradient-to-br ${event.color} overflow-hidden`}>
        {event.poster && (
          <img src={event.poster} alt={event.name} className="w-full h-full object-cover opacity-80" loading="lazy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className={`inline-block bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>{event.category}</span>
          <h2 className="font-heading font-bold text-4xl text-white">{event.name}</h2>
          <p className="text-white/80 text-lg mt-1">{event.theme}</p>
        </div>
        <a href={event.websiteUrl} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-1.5 hover:bg-white/30 transition-colors">
          Event Site <ExternalLink size={12} />
        </a>
      </div>

      <div className="bg-white dark:bg-slate-900 p-8 space-y-8">
        {/* Meta row */}
        <div className="flex flex-wrap gap-6 text-sm text-slate-500 dark:text-slate-400 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2"><CalendarDays size={16} className="text-primary-500" />{event.date}</div>
          <div className="flex items-center gap-2"><MapPin size={16} className="text-primary-500" />{event.venue}</div>
          <div className="flex items-center gap-2"><Users size={16} className="text-primary-500" />{event.reach}</div>
        </div>

        {/* Overview */}
        <div>
          <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-3">Overview</h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{event.overview}</p>
        </div>

        {/* Speaker(s) */}
        {event.speakers?.length > 0 && (
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-4 flex items-center gap-2">
              <Mic size={18} className="text-primary-500" /> Speaker{event.speakers.length > 1 ? "s" : ""}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {event.speakers.map((sp) => (
                <div key={sp.name} className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                  {sp.image && (
                    <img src={sp.image} alt={sp.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" loading="lazy" />
                  )}
                  <div>
                    <p className="font-heading font-bold text-slate-900 dark:text-white text-sm">{sp.name}</p>
                    <p className="text-primary-600 dark:text-primary-400 text-xs font-semibold mt-0.5">{sp.designation}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{sp.organization}</p>
                    {sp.topic && <p className="text-slate-700 dark:text-slate-300 text-xs mt-2 italic">"{sp.topic}"</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Takeaways */}
        {event.keyTakeaways?.length > 0 && (
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-3 flex items-center gap-2">
              <CheckCircle size={18} className="text-primary-500" /> Key Takeaways
            </h3>
            <ul className="space-y-3">
              {event.keyTakeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <span className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Structure */}
        <div>
          <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-3">Event Structure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {event.structure.map((s, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <ChevronRight size={14} className="text-primary-500 mt-0.5 flex-shrink-0" />{s}
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        {event.challenges?.length > 0 && (
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-3 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-500" /> Challenges Faced
            </h3>
            <ul className="space-y-2">
              {event.challenges.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">⚠</span>{c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Outcomes */}
        <div className={`${event.bgLight} dark:bg-slate-800 rounded-2xl p-6 border ${event.borderColor} dark:border-slate-700`}>
          <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
            <TrendingUp size={18} className={event.accentColor} /> Outcomes
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{event.outcomes}</p>
        </div>

        {/* Gallery strip */}
        {event.gallery?.length > 0 && (
          <div>
            <h3 className="font-heading font-bold text-slate-900 dark:text-white text-lg mb-3">Gallery</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {event.gallery.slice(0, 10).map((src, i) => (
                <img key={i} src={src} alt={`${event.name} ${i + 1}`} className="w-full aspect-square object-cover rounded-xl hover:scale-105 transition-transform cursor-pointer" loading="lazy" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <>
      <SEO
        title="Events"
        description="Explore GFG SRMIST events — IGNISIA 2025 (Placement Prep & DSA) and JAVA-VERSE 2026 (Java Full Stack), plus national hackathon and cross-campus collaboration highlights."
        url="https://gfg-srmist.vercel.app/events"
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Our <span className="gfg-gradient-text">Events</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              A year of learning, building, and growing — through workshops, hackathons, and cross-campus partnerships.
            </motion.p>
            {/* Quick nav */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {events.map((ev) => (
                <a key={ev.id} href={`#${ev.slug}`} className="px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-primary-400 hover:text-primary-600 transition-all">
                  {ev.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1100px] mx-auto px-6 space-y-16">
            {events.map((event, i) => (
              <motion.div key={event.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
                <EventSection event={event} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Hackathon */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[1100px] mx-auto px-6">
            <SectionHeading eyebrow="National Level" title={<>Hackathon <span className="gfg-gradient-text">Participation</span></>} subtitle="Representing SRMIST on the national stage." />
            {hackathons.map((h) => (
              <motion.div key={h.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-soft">
                <div className={`h-2 bg-gradient-to-r ${h.color}`} />
                <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <span className="inline-block bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold px-3 py-1 rounded-full mb-3">{h.level} Level</span>
                    <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-2">{h.event}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-1">{h.organizer}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{h.timeline}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{h.significance}</p>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-slate-900 dark:text-white text-sm mb-3">Team Members</p>
                    <div className="space-y-2">
                      {h.team.map((m) => (
                        <div key={m.name} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                          <div className="w-8 h-8 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {m.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{m.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{m.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Collaboration */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1100px] mx-auto px-6">
            <SectionHeading eyebrow="Cross-Campus" title={<>Collaborations & <span className="gfg-gradient-text">Partnerships</span></>} />
            {collaborations.map((c) => (
              <motion.div key={c.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-slate-900 rounded-[24px] p-8 border border-primary-100 dark:border-primary-900 shadow-soft">
                <div className="flex gap-4 items-start">
                  <div className="text-4xl">🤝</div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-1">{c.event}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-1">{c.partner}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">{c.type}</p>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{c.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
