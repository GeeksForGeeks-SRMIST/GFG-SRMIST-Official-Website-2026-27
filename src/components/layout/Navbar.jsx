import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import {
  Menu,
  X,
  Home,
  Info,
  Users,
  CalendarDays,
  Image,
  Trophy,
  FileText,
  BookOpen,
  UserPlus,
  Mail,
  ChevronDown,
  Crown,
} from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";

// --- THEME TOGGLE COMPONENT (preserved from original) ---
const ThemeToggle = ({ isDark, toggleTheme }) => (
  <div
    className="daynight-anim transform scale-[0.25] origin-center -ml-8 -mr-8 cursor-pointer"
    onClick={toggleTheme}
  >
    <div className={`wrapper ${isDark ? "active" : ""}`}>
      <div className="sun-circle" />
      <div className="sun-circle sun-circle-two" />
      <div className="sun-circle sun-circle-three" />
      <div className={`sun ${isDark ? "active" : ""}`}>
        <div className="sun-spot" />
        <div className="sun-spot sun-spot-2" />
        <div className="sun-spot sun-spot-3" />
      </div>
      <div className="background-2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{ top: Math.random() * 100, left: Math.random() * 300 }}
          />
        ))}
      </div>
      <div className="background">
        <div className="clouds">
          <div className="cloud-1" />
          <div className="cloud-2" />
          <div className="cloud-3" />
        </div>
      </div>
    </div>
  </div>
);

// --- NAVIGATION DATA ---
const mainLinks = [
  { name: "Home",       to: "/",            icon: <Home size={15} />        },
  { name: "About",      to: "/about",       icon: <Info size={15} />        },
  { name: "Events",     to: "/events",      icon: <CalendarDays size={15} /> },
  { name: "Gallery",    to: "/gallery",     icon: <Image size={15} />       },
];

const moreLinks = [
  { name: "Leadership",    to: "/leadership",    icon: <Crown size={15} />        },
  { name: "Teams",         to: "/teams",         icon: <Users size={15} />        },
  { name: "Achievements",  to: "/achievements",  icon: <Trophy size={15} />       },
  { name: "Annual Report", to: "/annual-report", icon: <FileText size={15} />     },
  { name: "Blogs",         to: "/blogs",         icon: <BookOpen size={15} />     },
  { name: "Join Us",       to: "/join",          icon: <UserPlus size={15} />     },
  { name: "Contact",       to: "/contact",       icon: <Mail size={15} />         },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();
  const themeState = useDarkMode();
  const [isDark, setIsDark] = themeState || [false, () => {}];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${
        isScrolled ? "top-4" : "top-0"
      }`}
    >
      <div
        className={`w-full transition-all duration-500 ${
          isScrolled
            ? "max-w-[1280px] rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-lg py-3 px-6 mx-4"
            : "max-w-[1400px] bg-transparent border-transparent py-5 px-8"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer group flex-shrink-0">
            <img
              src="/assets/Logo/GfG Horizontal Combination Mark (Light Mode)@2x.png"
              alt="GeeksforGeeks SRMIST"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              loading="eager"
            />
          </Link>

          {/* Desktop Main Links */}
          <div className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-1.5
                  ${
                    isActive(link.to)
                      ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }
                `}
              >
                {link.icon}
                {link.name}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-500 rounded-full"
                  />
                )}
              </Link>
            ))}

            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <button
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-1.5 ${
                  isMoreOpen
                    ? "text-primary-600 dark:text-primary-400 bg-slate-50 dark:bg-slate-800"
                    : "text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                More
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-2 w-52 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden p-2"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.to}
                        className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                          isActive(link.to)
                            ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
                            : "text-slate-700 dark:text-slate-200 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-primary-700 dark:hover:text-primary-400"
                        }`}
                        onClick={() => setIsMoreOpen(false)}
                      >
                        <span className="text-slate-400">{link.icon}</span>
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Theme Toggle + Join CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-[80px] h-[40px] flex items-center justify-center overflow-visible">
              <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
            </div>
            <Link to="/join">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-glow transition-all duration-300"
              >
                Join Us
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="w-[60px] h-[30px] flex items-center justify-center overflow-hidden">
              <ThemeToggle isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
            </div>
            <button
              className="text-slate-900 dark:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden lg:hidden"
          >
            <div className="p-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto no-scrollbar">
              {[...mainLinks, ...moreLinks].map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`flex items-center gap-3 text-base font-medium py-3 px-4 rounded-xl transition-all ${
                    isActive(link.to)
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
                      : "text-slate-800 dark:text-slate-200 hover:bg-green-50 dark:hover:bg-slate-800 hover:text-primary-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-slate-400">{link.icon}</span>
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800">
                <Link to="/join" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-bold shadow-lg transition-colors">
                    Join GFG SRMIST
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
