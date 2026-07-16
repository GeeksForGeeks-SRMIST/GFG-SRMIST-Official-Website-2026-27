import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { allGalleryImages } from "@/data/events";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "IGNISIA 2025", "JAVA-VERSE 2026"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = allGalleryImages.filter(
    (img) => filter === "All" || img.category === filter
  );

  const openLightbox = (img, idx) => {
    setLightbox(img);
    setLightboxIndex(idx);
  };

  const navigateLightbox = (dir) => {
    const newIdx = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightbox(filtered[newIdx]);
    setLightboxIndex(newIdx);
  };

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileTap={{ scale: 0.96 }}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
              filter === cat
                ? "bg-primary-500 text-white shadow-glow-sm"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary-300 hover:text-primary-600 dark:hover:text-primary-400"
            }`}
          >
            {cat}{" "}
            <span className="ml-1 opacity-60 text-xs">
              ({cat === "All" ? allGalleryImages.length : allGalleryImages.filter((i) => i.category === cat).length})
            </span>
          </motion.button>
        ))}
      </div>

      {/* Masonry grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-zoom-in mb-3"
              onClick={() => openLightbox(img, i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" size={28} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-medium">{img.caption}</p>
                <p className="text-white/60 text-[10px]">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
              />

              {/* Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <p className="text-white/90 text-sm font-medium bg-black/50 px-4 py-1.5 rounded-full inline-block">
                  {lightbox.caption}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X size={18} />
              </button>

              {/* Prev / Next */}
              <button
                onClick={() => navigateLightbox(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors text-lg font-bold"
              >
                ‹
              </button>
              <button
                onClick={() => navigateLightbox(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors text-lg font-bold"
              >
                ›
              </button>

              {/* Counter */}
              <div className="absolute top-3 left-3 bg-black/50 text-white/80 text-xs px-3 py-1 rounded-full">
                {lightboxIndex + 1} / {filtered.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
