import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  ArrowUp,
  Github,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home",          to: "/"             },
  { name: "About",         to: "/about"        },
  { name: "Leadership",    to: "/leadership"   },
  { name: "Events",        to: "/events"       },
  { name: "Gallery",       to: "/gallery"      },
  { name: "Annual Report", to: "/annual-report"},
  { name: "Blogs",         to: "/blogs"        },
  { name: "Join Us",       to: "/join"         },
];

const gfgResources = [
  { name: "GeeksforGeeks",          href: "https://www.geeksforgeeks.org",           external: true },
  { name: "GFG Practice",           href: "https://practice.geeksforgeeks.org",      external: true },
  { name: "GFG Courses",            href: "https://www.geeksforgeeks.org/courses",   external: true },
  { name: "Competitive Programming",href: "https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/", external: true },
  { name: "Interview Prep",         href: "https://www.geeksforgeeks.org/company-interview-corner/", external: true },
];

const socialLinks = [
  { Icon: Linkedin,  href: "https://www.linkedin.com/company/gfgsrmist/posts/?feedView=all", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/gfgsrmist?igsh=YmNmbjYxZXd2MWdn", label: "Instagram" },
  { Icon: Github,    href: "https://github.com/GeeksForGeeks-SRMIST", label: "GitHub"    },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-slate-950 text-slate-200">
      {/* Top accent stripe — GFG green */}
      <div
        className="absolute top-0 left-0 w-full h-1 z-10"
        style={{ background: "linear-gradient(90deg, #2F8D46 0%, #4ade80 50%, #2F8D46 100%)" }}
      />

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex flex-col gap-4">
              {/* GFG logo */}
              <img
                src="/assets/Logo/GfG Horizontal Combination Mark (Light Mode)@2x.png"
                alt="GeeksforGeeks SRMIST"
                className="h-8 w-auto object-contain brightness-0 invert opacity-90"
                loading="lazy"
              />
              {/* SRM logo */}
              <img
                src="/assets/Logo/srmlogo.webp"
                alt="SRMIST"
                className="h-24 w-auto object-contain"
                loading="lazy"
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              The official student-led chapter of GeeksforGeeks at SRMIST, Kattankulathur.
              Under the Department of Networking and Communications, School of Computing.
            </p>

            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-primary-500 mt-0.5 flex-shrink-0" />
                <span>Tech Park, SRMIST, Kattankulathur, Chennai — 603203</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary-500 flex-shrink-0" />
                <a
                  href="mailto:gfg@srmist.edu.in"
                  className="hover:text-primary-400 transition-colors"
                >
                  gfg@srmist.edu.in
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-primary-500/20 hover:text-primary-400 hover:border-primary-700 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-base mb-6 text-white uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-slate-400 text-sm hover:text-primary-400 transition-colors relative group block w-fit"
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary-400 transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* GFG Resources */}
          <div>
            <h4 className="font-heading font-bold text-base mb-6 text-white uppercase tracking-wider text-xs">
              GFG Resources
            </h4>
            <ul className="space-y-3">
              {gfgResources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-sm hover:text-primary-400 transition-colors flex items-center gap-1 group w-fit"
                  >
                    {link.name}
                    <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Events CTA */}
          <div>
            <h4 className="font-heading font-bold text-base mb-6 text-white uppercase tracking-wider text-xs">
              Our Events
            </h4>
            <div className="space-y-4">
              <a
                href="https://ignisia25.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-primary-700 transition-all group"
              >
                <div className="text-xs text-primary-400 font-semibold mb-1 uppercase tracking-wide">Oct 2025</div>
                <div className="text-sm font-semibold text-white group-hover:text-primary-300 transition-colors flex items-center gap-1">
                  IGNISIA 2025 <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 mt-1">DSA & Placement Prep</div>
              </a>

              <a
                href="https://java-verse.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-700 transition-all group"
              >
                <div className="text-xs text-blue-400 font-semibold mb-1 uppercase tracking-wide">Feb 2026</div>
                <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1">
                  JAVA-VERSE 2026 <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 mt-1">Java Full Stack Dev</div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-xs gap-4">
          <p>
            © 2026–2027 GeeksforGeeks Campus Body SRMIST. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-primary-400 font-bold transition-colors"
            >
              Back to Top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}