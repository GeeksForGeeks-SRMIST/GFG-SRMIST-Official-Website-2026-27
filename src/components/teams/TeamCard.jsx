import React from "react";
import { motion } from "motion/react";
import { Linkedin, Instagram, Github, Globe, ExternalLink } from "lucide-react";
import { domainColors } from "@/data/team";

// ─── Avatar helpers ────────────────────────────────────────────────────────────
function getInitials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ─── Social icon map ───────────────────────────────────────────────────────────
const SOCIAL_ICONS = {
  linkedin:  { Icon: Linkedin,  label: "LinkedIn"  },
  instagram: { Icon: Instagram, label: "Instagram" },
  github:    { Icon: Github,    label: "GitHub"    },
  website:   { Icon: Globe,     label: "Website"   },
  external:  { Icon: ExternalLink, label: "Link"   },
};

// ─── TeamCard ─────────────────────────────────────────────────────────────────
export default function TeamCard({ member, delay = 0, size = "default" }) {
  const colors = domainColors[member.domain] || domainColors["Technical"];
  const isLarge = size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-dark-card rounded-2xl border border-neutral-border dark:border-dark-border shadow-soft hover:shadow-hover transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Avatar area */}
      <div className={`relative ${isLarge ? "h-52" : "h-40"} bg-neutral-light dark:bg-dark-surface overflow-hidden`}>
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className={`w-16 h-16 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center font-heading font-bold text-2xl border-2 ${colors.border}`}>
              {getInitials(member.name)}
            </div>
          </div>
        )}
        {/* Domain badge */}
        {member.domain && (
          <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${colors.badge}`}>
            {member.domain}
          </div>
        )}
      </div>

      {/* Info area */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="font-heading font-bold text-sm text-text-headline dark:text-white leading-snug">
          {member.name}
        </h3>
        <p className="text-primary-500 dark:text-ocean text-xs font-semibold">
          {member.role}
        </p>
        {member.bio && (
          <p className="text-text-muted dark:text-slate-400 text-xs leading-relaxed mt-1 line-clamp-2">
            {member.bio}
          </p>
        )}

        {/* Social links — only if they exist */}
        {member.links && Object.keys(member.links).length > 0 && (
          <div className="flex gap-2 mt-3 pt-2 border-t border-neutral-border dark:border-dark-border">
            {Object.entries(member.links).map(([platform, href]) => {
              const socialDef = SOCIAL_ICONS[platform];
              if (!socialDef || !href) return null;
              const { Icon, label } = socialDef;
              return (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${label}`}
                  className="w-7 h-7 rounded-full bg-neutral-light dark:bg-dark-surface border border-neutral-border dark:border-dark-border flex items-center justify-center text-text-muted dark:text-slate-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-500 dark:hover:text-ocean hover:border-primary-200 dark:hover:border-primary-800 transition-all"
                >
                  <Icon size={13} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
