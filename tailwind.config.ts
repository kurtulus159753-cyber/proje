import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#FDFBF7",
        cream: "#FAF9F6",
        sand: "#E8DFD3",
        clay: "#C4B5A0",
        stone: "#8A8178",
        ink: "#2C2A28",
        mist: "#EDE8E0",
        blush: "#E8DDD4",
        sage: "#D4DDD6",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        serif: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 24px rgba(44, 42, 40, 0.06)",
        lift: "0 12px 40px rgba(44, 42, 40, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.75s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
