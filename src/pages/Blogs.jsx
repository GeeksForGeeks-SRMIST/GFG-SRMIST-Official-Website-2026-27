import React from "react";
import { motion } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import { events } from "@/data/events";
import { BookOpen, CalendarDays, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Event recap blog posts derived from report.md — no invented content
const blogPosts = [
  {
    id: 1,
    title: "IGNISIA 2025: What 250 Students Learned About Cracking Tech Placements",
    excerpt:
      "From the AI tools reshaping hiring to the real tenacity required behind each placement success — a full recap of GFG SRMIST's flagship DSA and placement workshop held at Tech Park, SRMIST.",
    date: "November 2025",
    readTime: "5 min read",
    category: "Event Recap",
    tags: ["DSA", "Placement", "IGNISIA"],
    color: "from-primary-500 to-emerald-600",
    link: "/events#ignisia-2025",
    internal: true,
  },
  {
    id: 2,
    title: "JAVA-VERSE 2026: Building Enterprise Apps with Spring Boot & React",
    excerpt:
      "450+ registrations, live coding sessions, and an industry expert from DEV Technology Solutions — here's what went down at our most registered event, JAVA-VERSE 2026.",
    date: "February 2026",
    readTime: "6 min read",
    category: "Event Recap",
    tags: ["Java", "Spring Boot", "React", "JAVA-VERSE"],
    color: "from-blue-500 to-indigo-600",
    link: "/events#java-verse-2026",
    internal: true,
  },
  {
    id: 3,
    title: "Representing SRMIST at IIT Madras Road Safety Hackathon 2026",
    excerpt:
      "Five students from GFG SRMIST took on the nation's brightest minds at a prestigious hackathon organized by the Centre of Excellence for Road Safety, IIT Madras. Here's our story.",
    date: "May 2026",
    readTime: "4 min read",
    category: "Hackathon",
    tags: ["IIT Madras", "Hackathon", "National"],
    color: "from-amber-500 to-orange-600",
    link: "/achievements",
    internal: true,
  },
];

export default function Blogs() {
  return (
    <>
      <SEO
        title="Blogs"
        description="Stories from GFG SRMIST — event recaps, technical insights, and community highlights from our workshops and hackathons."
        url="https://gfg-srmist.vercel.app/blogs"
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-4 tracking-tight">
              <span className="gfg-gradient-text">Blog</span> & Stories
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Insights, recaps, and stories from GFG SRMIST's events and community.
            </motion.p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1100px] mx-auto px-6">
            {/* Coming soon banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 p-5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl flex items-start gap-3"
            >
              <span className="text-2xl mt-0.5">✍️</span>
              <div>
                <p className="font-semibold text-amber-800 dark:text-amber-300 text-sm">Blog section coming soon</p>
                <p className="text-amber-700 dark:text-amber-400 text-xs mt-0.5">
                  Full long-form blogs are being written. For now, explore event recaps below — each links to the full event page.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group bg-white dark:bg-slate-900 rounded-[24px] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-hover transition-all duration-300"
                >
                  {/* Color header */}
                  <div className={`h-2 bg-gradient-to-r ${post.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 dark:text-white text-base leading-snug mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((t) => (
                        <span key={t} className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1"><CalendarDays size={11} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                      </div>
                      <Link to={post.link} className="text-xs font-semibold text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:gap-2 transition-all">
                        Read <ArrowRight size={11} />
                      </Link>
                    </div>
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
