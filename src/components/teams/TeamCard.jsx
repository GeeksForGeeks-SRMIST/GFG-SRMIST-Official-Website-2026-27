import React from "react";
import { motion } from "motion/react";
import { domainColors } from "@/data/team";

export default function TeamCard({ member, delay = 0 }) {
  const colors = domainColors[member.domain] || domainColors["Technical"];

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`group bg-white dark:bg-slate-900 rounded-2xl p-5 border ${colors.border} shadow-soft hover:shadow-medium transition-all duration-300`}
    >
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-100 dark:border-slate-800"
              loading="lazy"
            />
          ) : (
            <div className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center font-heading font-bold text-lg border ${colors.border}`}>
              {initials}
            </div>
          )}
          {/* Online dot */}
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-primary-500 border-2 border-white dark:border-slate-900 rounded-full" />
        </div>

        {/* Info */}
        <div className="min-w-0">
          <h3 className="font-heading font-bold text-slate-900 dark:text-white text-sm leading-tight truncate">
            {member.name}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs mt-0.5 leading-tight">
            {member.role}
          </p>
          <span className={`inline-block mt-1.5 text-[11px] font-semibold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
            {member.domain}
          </span>
        </div>
      </div>

      {member.bio && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed line-clamp-2">
          {member.bio}
        </p>
      )}
    </motion.div>
  );
}
