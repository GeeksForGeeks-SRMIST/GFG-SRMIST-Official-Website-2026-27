import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/common/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Browse moments from GFG SRMIST events — IGNISIA 2025 and JAVA-VERSE 2026 workshops, hackathons, and community gatherings."
        url="https://gfg-srmist.vercel.app/gallery"
      />

      <main className="pt-24">
        {/* Hero */}
        <section className="gfg-hero-bg py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#2F8D46 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
          <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading font-bold text-5xl lg:text-6xl text-slate-900 dark:text-white mb-4 tracking-tight">
              Our <span className="gfg-gradient-text">Gallery</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              28+ captured moments from our workshops, hackathons, and community events in 2025–26.
            </motion.p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-[1400px] mx-auto px-6">
            <GalleryGrid />
          </div>
        </section>
      </main>
    </>
  );
}
