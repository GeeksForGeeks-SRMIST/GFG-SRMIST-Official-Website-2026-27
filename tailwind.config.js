/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      colors: {
        // GFG Brand Green
        primary: {
          50:  "#f0faf2",
          100: "#d4f0da",
          200: "#a9e1b6",
          300: "#76ca8c",
          400: "#4aaf65",
          500: "#2F8D46", // Authentic GFG Green
          600: "#297a3d",
          700: "#216130",
          800: "#194c25",
          900: "#10381a",
        },
        // GFG Accent (for highlights)
        accent: {
          100: "#FEF3C7",
          500: "#D97706",
          600: "#B45309",
        },
        // Dark base
        dark: {
          bg:      "#0d1117",
          surface: "#161b22",
          card:    "#1c2128",
          border:  "#30363d",
        },
        // Neutrals
        neutral: {
          background: "#F8FAFC",
          surface:    "#FFFFFF",
          card:       "#F1F5F9",
          border:     "#E2E8F0",
        },
        text: {
          headline: "#0F172A",
          body:     "#334155",
          muted:    "#64748B",
        },
      },
      backgroundImage: {
        "gfg-pattern":
          "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%232F8D46' stroke-width='2' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
      },
      boxShadow: {
        soft:   "0px 2px 8px rgba(0,0,0,0.06)",
        medium: "0px 4px 20px rgba(0,0,0,0.08)",
        hover:  "0px 8px 28px rgba(0,0,0,0.12)",
        glow:   "0px 0px 40px rgba(47, 141, 70, 0.30)",
        "glow-sm": "0px 0px 20px rgba(47, 141, 70, 0.20)",
      },
      animation: {
        shine:    "shine 8s infinite linear",
        float:    "float 6s ease-in-out infinite",
        "count-up": "countUp 2s ease-out forwards",
        "fade-in":  "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        marquee:  "marquee 30s linear infinite",
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
      },
    },
  },
  plugins: [],
};
