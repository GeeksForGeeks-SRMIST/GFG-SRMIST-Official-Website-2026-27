import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { CalendarDays, MapPin, Users, ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { events } from "@/data/events";

export default function FeaturedEvents() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <SectionHeading
            eyebrow="Academic Year 2025–26"
            title={
              <>
                Featured <span className="gfg-gradient-text">Events</span>
              </>
            }
            align="left"
            className="mb-0"
          />
          <Link to="/events" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
            >
              View All Events <ArrowRight size={15} />
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-hover transition-all duration-400 hover:-translate-y-1"
            >
              {/* Event poster / image header */}
              <div className={`relative h-52 bg-gradient-to-br ${event.color} overflow-hidden`}>
                {event.poster ? (
                  <img
                    src={event.poster}
                    alt={event.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading font-bold text-5xl text-white/30">{event.name[0]}</span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-black/30 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                    {event.year}
                  </span>
                </div>

                {/* Event name on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading font-bold text-2xl text-white drop-shadow-lg">{event.name}</h3>
                  <p className="text-white/80 text-sm mt-0.5">{event.theme}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-primary-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary-500" />
                    {event.venue.split(",")[0]}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-primary-500" />
                    {event.reach}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-5">
                  {event.overview}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {event.topics.slice(0, 3).map((t) => (
                    <span key={t} className={`text-xs px-2.5 py-1 rounded-full ${event.bgLight} dark:bg-slate-800 ${event.accentColor} font-medium`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA row */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link to={`/events`} className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1 transition-colors">
                    Learn more <ArrowRight size={13} />
                  </Link>
                  <a
                    href={event.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-semibold ${event.accentColor} flex items-center gap-1 hover:gap-2 transition-all`}
                  >
                    Event Site <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
