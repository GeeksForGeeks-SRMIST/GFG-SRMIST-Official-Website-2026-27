import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, CalendarDays, Users, Trophy } from "lucide-react";
import TiltedCard from "@/components/animations/TiltedCard";

const badges = [
  { icon: <CalendarDays size={13} />, label: "2 Major Events" },
  { icon: <Users size={13} />,        label: "500+ Students Trained" },
  { icon: <Trophy size={13} />,       label: "IIT Madras Hackathon" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden gfg-hero-bg">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-primary-100/60 dark:bg-primary-900/20 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-[140px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">

        {/* ——— LEFT COLUMN ——— */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-center gap-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800 shadow-glow-sm w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500" />
            </span>
            <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
              Academic Year 2026–27 · GFG SRMIST
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-bold text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-slate-900 dark:text-white tracking-tight">
            GeeksforGeeks
            <br />
            <span className="shine-text block mt-1">
              <TypeAnimation
                sequence={[
                  "Coding. Learning.",
                  2000,
                  "DSA. Dev. Design.",
                  2000,
                  "Building Futures.",
                  2000,
                  "SRMIST's Finest.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-[1.7] max-w-lg">
            The <strong className="text-slate-900 dark:text-white font-semibold">official student-led chapter</strong> of GeeksforGeeks at SRMIST — empowering students through hands-on workshops, hackathons, and industry mentorship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold shadow-glow hover:shadow-glow transition-all flex items-center gap-2"
              >
                Explore Events <ArrowRight size={18} />
              </motion.button>
            </Link>
            <Link to="/join">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#f1f5f9" }}
                whileTap={{ scale: 0.98 }}
                className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white px-8 py-4 rounded-xl font-bold hover:border-primary-400 transition-all flex items-center gap-2"
              >
                Join Us
              </motion.button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            {badges.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-soft"
              >
                <span className="text-primary-500">{b.icon}</span>
                {b.label}
              </motion.div>
            ))}
          </div>

          {/* Department label */}
          <p className="text-xs text-slate-400 dark:text-slate-600 mt-2">
            Department of Networking and Communications · School of Computing · SRMIST, Kattankulathur
          </p>
        </motion.div>

        {/* ——— RIGHT COLUMN: Tilted Card ——— */}
        <motion.div
          className="lg:col-span-5 flex items-center justify-center relative min-h-[480px]"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Card glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[440px] bg-primary-400/15 dark:bg-primary-500/10 rounded-[30px] rotate-6 blur-2xl" />

          <TiltedCard
            imageSrc="assets/Logo/gfg.png"
            altText="Official Campus Chapter"
            captionText="GFG Campus Body SRMIST"
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="440px"
            imageWidth="320px"
            rotateAmplitude={10}
            scaleOnHover={1.04}
            showTooltip={true}
            overlayContent={
              <div className="h-full w-full p-6 flex flex-col justify-between bg-gradient-to-t from-black/85 via-black/10 to-transparent rounded-[20px]">
                {/* Top: GFG logo badge */}
                <div className="self-end">
                  <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-2 shadow-lg">
                    <img
                      src="/assets/Logo/GFG.webp"
                      alt="GFG"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>

                {/* Bottom: Event info */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 bg-primary-500 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Official Campus Chapter
                  </div>
                  <h3 className="text-white font-heading font-bold text-2xl drop-shadow-md">
                    SRMIST KTR Campus
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                      <p className="text-[10px] text-slate-300 uppercase tracking-wider">Department</p>
                      <p className="text-white text-sm font-bold">NWC</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                      <p className="text-[10px] text-slate-300 uppercase tracking-wider">Location</p>
                      <p className="text-white text-sm font-bold">TP, SRMIST</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" />
      </motion.div>
    </section>
  );
}
