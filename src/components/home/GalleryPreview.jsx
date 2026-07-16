import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Camera, ArrowRight, X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { allGalleryImages } from "@/data/events";

// Show only 8 in the preview
const previewImages = allGalleryImages.slice(0, 8);

// Bento grid spans for visual interest
const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export default function GalleryPreview() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [activeImg, setActiveImg] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900 relative"
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <SectionHeading
            eyebrow="Behind the Scenes"
            title={
              <>
                <span className="gfg-gradient-text">Gallery</span> Preview
              </>
            }
            align="left"
            className="mb-0"
          />
          <Link to="/gallery" className="flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-3 transition-all"
            >
              View Full Gallery <ArrowRight size={15} />
            </motion.button>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px]">
          {previewImages.map((img, i) => (
            <motion.div
              key={img.id}
              className={`relative rounded-2xl overflow-hidden cursor-zoom-in group ${spans[i] || ""}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              onMouseEnter={() => setActiveImg(img.caption)}
              onMouseLeave={() => setActiveImg(null)}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="text-white drop-shadow-lg" size={28} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent md:hidden">
                <p className="text-white text-xs font-medium">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cursor tooltip */}
      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 pointer-events-none hidden md:flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-slate-900 dark:text-white px-3 py-1.5 rounded-full shadow-xl border border-slate-200 dark:border-slate-700 font-medium text-xs whitespace-nowrap"
            style={{ left: cursorPos.x, top: cursorPos.y, transform: "translate(-50%, -130%)" }}
          >
            <Camera size={12} className="text-primary-500" />
            {activeImg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium">{lightbox.caption}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
