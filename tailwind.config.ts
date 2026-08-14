import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF8F4",
        surface: {
          DEFAULT: "rgba(33,29,24,0.035)",
          hover: "rgba(33,29,24,0.06)",
        },
        border: {
          DEFAULT: "rgba(33,29,24,0.09)",
          hover: "rgba(33,29,24,0.18)",
        },
        foreground: {
          DEFAULT: "#211D18",
          muted: "#5C564C",
          subtle: "#8A8175",
        },
        accent: {
          DEFAULT: "#9C4A2F",
          deep: "#7A3A24",
          soft: "#D97757",
        },
        error: "#B23A2E",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(90deg, #B85C3E 0%, #7A3A24 100%)",
        "accent-gradient-radial": "radial-gradient(circle, #B85C3E 0%, #7A3A24 100%)",
        "mesh-gradient":
          "radial-gradient(at 20% 10%, rgba(156,74,47,0.07) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(122,58,36,0.08) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(156,74,47,0.05) 0px, transparent 50%), radial-gradient(at 10% 90%, rgba(122,58,36,0.05) 0px, transparent 50%)",
        noise: "url('/noise.svg')",
      },
      boxShadow: {
        glow: "0 14px 30px -10px rgba(122,58,36,0.22)",
        "glow-sm": "0 8px 18px -6px rgba(122,58,36,0.24)",
      },
      dropShadow: {
        glow: "0 4px 10px rgba(122,58,36,0.25)",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        blob: "blob 18s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.08)" },
          "66%": { transform: "translate(-25px, 25px) scale(0.94)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
export default config;
