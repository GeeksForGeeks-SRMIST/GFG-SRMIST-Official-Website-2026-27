import React from "react";
import { motion } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import { faculty } from "@/data/team";
import { BookOpen, Target, Lightbulb, Users, GraduationCap, Building } from "lucide-react";

const objectives = [
  "Develop strong foundational DSA and competitive programming skills",
  "Provide hands-on experience in full-stack software development",
  "Bridge academic learning with industry-relevant skills for placement readiness",
  "Cultivate a collaborative, growth-oriented student community",
  "Represent SRMIST at national-level coding events and hackathons",
  "Partner with industry professionals for mentorship and guidance",
];

const srmFacts = [
  { icon: <GraduationCap size={20} />, label: "25,000+ Students", sub: "Across all programs" },
  { icon: <Building size={20} />,      label: "250-Acre Campus",  sub: "Kattankulathur, Chennai" },
  { icon: <Users size={20} />,         label: "10,000+ CS Students", sub: "School of Computing" },
  { icon: <BookOpen size={20} />,      label: "50+ Active Clubs",  sub: "Student-led chapters" },
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about GeeksforGeeks Campus Body SRMIST — our story, vision, mission, objectives, and the faculty who guide us."
        url="https://gfg-srmist.vercel.app/about"
      />

      <main className="pt-24">
        {/* Hero Banner */}
        <section className="gfg-hero-bg py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-primary-600 font-semibold tracking-widest uppercase text-xs mb-4">
              <span className="w-6 h-px bg-primary-500" /> About Us
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-6 tracking-tight">
              About <span className="gfg-gradient-text">GFG SRMIST</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              The official student-led chapter of GeeksforGeeks at SRM Institute of Science and Technology, dedicated to fostering a culture of technical excellence.
            </motion.p>
          </div>
        </section>

        {/* Club Story */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
              <SectionHeading eyebrow="Our Story" title={<>Where it all <span className="gfg-gradient-text">began</span></>} align="left" className="mb-0" />
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                GeeksforGeeks Campus Body SRMIST is an official, student-led chapter of India's largest computer science community. Operating under the <strong className="text-slate-800 dark:text-slate-200">Department of Networking and Communications, School of Computing</strong>, our chapter is dedicated to empowering students through strategic learning initiatives.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Rooted in the belief that academic excellence must be complemented by industry relevance, we organize workshops, hackathons, coding contests, and mentorship programs that directly translate classroom knowledge into career-ready skills.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                In our last tenure of 2025–26, we hosted two major technical workshops — <strong className="text-slate-800 dark:text-slate-200">IGNISIA 2025</strong> and <strong className="text-slate-800 dark:text-slate-200">JAVA-VERSE 2026</strong> — trained 500+ students, and represented SRMIST at the prestigious Road Safety Hackathon at IIT Madras.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid grid-cols-2 gap-4">
              {srmFacts.map((f, i) => (
                <motion.div key={i} whileHover={{ y: -4 }} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-soft hover:shadow-medium transition-all">
                  <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mb-3">{f.icon}</div>
                  <p className="font-heading font-bold text-slate-900 dark:text-white text-sm">{f.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{f.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading eyebrow="What We Stand For" title={<>Vision & <span className="gfg-gradient-text">Mission</span></>} subtitle="Two north stars that guide every initiative we undertake." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  type: "Vision",
                  icon: <Lightbulb size={28} />,
                  color: "border-amber-400 bg-amber-50 dark:bg-amber-900/10",
                  iconColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
                  text: "To bridge the gap between academic learning and industry-ready skills by fostering a robust culture of coding excellence, practical problem-solving, and continuous innovation.",
                },
                {
                  type: "Mission",
                  icon: <Target size={28} />,
                  color: "border-primary-400 bg-primary-50 dark:bg-primary-900/10",
                  iconColor: "bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400",
                  text: "To empower students to strengthen their problem-solving, coding, and full-stack development skills through a strategic series of hands-on workshops, hackathons, coding contests, and mentorship sessions.",
                },
              ].map((v, i) => (
                <motion.div key={v.type} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`${v.color} border-2 rounded-[24px] p-8 shadow-soft`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${v.iconColor}`}>{v.icon}</div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mb-4">{v.type}</h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading eyebrow="What We Aim For" title={<>Our <span className="gfg-gradient-text">Objectives</span></>} subtitle="Concrete goals that shape every event, workshop, and initiative." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {objectives.map((obj, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-3 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                  <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{obj}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Coordinators */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionHeading eyebrow="Our Mentors" title={<>Faculty <span className="gfg-gradient-text">Coordinators</span></>} subtitle="The academic leaders who guide and support GFG SRMIST." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {faculty.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-soft hover:shadow-medium transition-all">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl flex items-center justify-center mb-4 font-heading font-bold text-lg">
                    {f.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm">{f.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 text-xs font-semibold mt-1">{f.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{f.department}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Acknowledgements */}
        <section className="py-16 bg-white dark:bg-slate-950">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <SectionHeading eyebrow="Gratitude" title={<><span className="gfg-gradient-text">Acknowledgements</span></>} subtitle="We extend our heartfelt gratitude to those who made our journey possible." />
            <div className="bg-slate-50 dark:bg-slate-900 rounded-[24px] p-8 border border-slate-100 dark:border-slate-800 text-left space-y-4">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Our deepest thanks to <strong className="text-slate-900 dark:text-white">Dr. M. Lakshmi</strong>, Head of Department, for her continued support and academic leadership.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Special recognition to <strong className="text-slate-900 dark:text-white">Dr. Meenakshi K</strong>, our Faculty Convener, whose mentorship and guidance shaped the vision of GFG SRMIST for 2025–26.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                We are grateful to <strong className="text-slate-900 dark:text-white">Dr. Rathinam Ananthanarayanan</strong>, Director of Alumni Affairs, and to all faculty members who believed in our mission from day one.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                To every student who attended our workshops, participated in our hackathons, and engaged with our community — <strong className="text-primary-600 dark:text-primary-400">thank you</strong>. You are the reason we exist.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
