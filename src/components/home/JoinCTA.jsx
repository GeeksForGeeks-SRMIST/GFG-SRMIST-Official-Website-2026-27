import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Code2, Zap, Star } from "lucide-react";

const perks = [
  { icon: <Code2 size={16} />, text: "Hands-on technical workshops" },
  { icon: <Zap size={16} />,   text: "Hackathon opportunities" },
  { icon: <Star size={16} />,  text: "Industry mentorship sessions" },
];

export default function JoinCTA() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-50/80 dark:bg-primary-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-primary-500 to-emerald-700 rounded-[32px] p-10 lg:p-16 overflow-hidden text-center shadow-glow"
        >
          {/* Background dot pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Glow blobs */}
          <div className="absolute top-[-20%] left-[-10%] w-60 h-60 bg-white/10 rounded-full blur-[60px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-white/5 rounded-full blur-[80px]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
              Applications Open — 2026–27
            </div>

            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 leading-tight tracking-tight">
              Ready to be part of <br />
              something <span className="text-amber-300">remarkable?</span>
            </h2>

            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join GeeksforGeeks Campus Body SRMIST and become part of a community that codes, builds, and grows together.
            </p>

            {/* Perks */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {perks.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white/15 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
                >
                  <span className="text-amber-300">{p.icon}</span>
                  {p.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/join">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white text-primary-700 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Apply Now <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white/15 backdrop-blur border border-white/30 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all"
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
