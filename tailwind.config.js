/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Controlled substitute for Sofia Pro (commercial font)
        // Plus Jakarta Sans is geometric sans-serif, closest freely-available match
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        // Brand secondary: Source Sans 3 (Google Fonts, matches brand guide)
        sans:    ["'Source Sans 3'", "sans-serif"],
        // Brand tertiary: Nunito (use sparingly)
        display: ["'Nunito'", "sans-serif"],
      },
      colors: {
        // ─── GFG Brand Primary ─────────────────────────────────────────────
        // Source: GeeksforGeeks Brand Guidelines PDF
        primary: {
          50:  "#f0faf6",
          100: "#d1f5e6",
          200: "#a3ebcd",
          300: "#6ddbb0",
          400: "#3dc592",
          500: "#00895e", // GfG Green (official brand color)
          600: "#007551",
          700: "#005f41",
          800: "#004b33",
          900: "#003827",
          950: "#001f15",
        },
        // GfG Ocean — lighter green / dark-mode accent
        ocean: {
          DEFAULT: "#3ab284",
          light:   "#5dc99e",
          dark:    "#2a9070",
        },
        // ─── GFG Brand Secondary ───────────────────────────────────────────
        navy: {
          DEFAULT: "#105d95",
          light:   "#1a7ac0",
          dark:    "#0b4570",
        },
        gfgblue: {
          DEFAULT: "#016ccc",
          light:   "#1a82e2",
          dark:    "#015099",
        },
        // ─── GFG Brand Supporting ──────────────────────────────────────────
        brand: {
          "light-green":  "#f1f8f5",
          "soft-green":   "#d5f6e4",
          "deep-green":   "#265645",
          "dark-green":   "#0e201b",
          "light-blue":   "#bfe0f8",
          "deep-navy":    "#0b3760",
          "darkest-navy": "#002b46",
        },
        // ─── GFG Brand Accent ──────────────────────────────────────────────
        accent: {
          lime:   "#C3F96E",
          orange: "#FF9843",
          yellow: "#FCFF78",
          purple: "#7D94F9",
        },
        // ─── GFG Neutral ───────────────────────────────────────────────────
        neutral: {
          dark:    "#0A0E0F",
          mid:     "#E9E9EA",
          light:   "#F5F5F7",
          // Semantic aliases kept for backward compat
          background: "#F5F5F7",
          surface:    "#FFFFFF",
          card:       "#F1F5F9",
          border:     "#E2E8F0",
        },
        // ─── Semantic text colors (preserve existing references) ───────────
        text: {
          headline: "#0F172A",
          body:     "#334155",
          muted:    "#64748B",
        },
        // ─── Dark mode surface colors ──────────────────────────────────────
        dark: {
          bg:      "#0d1117",
          surface: "#161b22",
          card:    "#1c2128",
          border:  "#30363d",
        },
      },
      // ─── Background Patterns ─────────────────────────────────────────────
      backgroundImage: {
        "gfg-pattern":
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%2300895e' stroke-width='2' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
        "gfg-dot-grid":
          "radial-gradient(#00895e 1px, transparent 1px)",
        "hero-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,137,94,0.15), transparent), linear-gradient(to bottom, #f5f5f7, #ffffff)",
      },
      // ─── Shadows ─────────────────────────────────────────────────────────
      boxShadow: {
        soft:      "0px 2px 8px rgba(0,0,0,0.06)",
        medium:    "0px 4px 20px rgba(0,0,0,0.08)",
        hover:     "0px 8px 28px rgba(0,0,0,0.12)",
        glow:      "0px 0px 40px rgba(0, 137, 94, 0.30)",
        "glow-sm": "0px 0px 20px rgba(0, 137, 94, 0.20)",
        "glow-lg": "0px 0px 60px rgba(0, 137, 94, 0.40)",
        card:      "0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.07)",
      },
      // ─── Animations ──────────────────────────────────────────────────────
      animation: {
        shine:      "shine 8s infinite linear",
        float:      "float 6s ease-in-out infinite",
        "count-up": "countUp 2s ease-out forwards",
        "fade-in":  "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        marquee:    "marquee 30s linear infinite",
        skeleton:   "skeleton 1.8s ease-in-out infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        shine: {
          "0%, 10%":  { backgroundPosition: "-1000px" },
          "30%":      { backgroundPosition: "top left" },
          "70%":      { backgroundPosition: "top right" },
          "100%":     { backgroundPosition: "1000px" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        skeleton: {
          "0%":   { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
      },
      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        "2xl":  "16px",
        "3xl":  "24px",
        "4xl":  "32px",
      },
      // ─── Spacing ──────────────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
};
