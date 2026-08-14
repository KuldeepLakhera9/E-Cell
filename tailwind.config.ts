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
        background: "#0A0908",
        surface: {
          DEFAULT: "rgba(255,255,255,0.035)",
          hover: "rgba(255,255,255,0.06)",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.07)",
          hover: "rgba(255,255,255,0.14)",
        },
        foreground: {
          DEFAULT: "#F2EFEA",
          muted: "#A8A29B",
          subtle: "#78736C",
        },
        accent: {
          DEFAULT: "#D97757",
          deep: "#9C4A2F",
          soft: "#E5A585",
        },
        error: "#E0645A",
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
        "accent-gradient": "linear-gradient(90deg, #E08A63 0%, #B85C3E 100%)",
        "accent-gradient-radial": "radial-gradient(circle, #E08A63 0%, #B85C3E 100%)",
        "mesh-gradient":
          "radial-gradient(at 20% 10%, rgba(217,119,87,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(156,74,47,0.10) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(217,119,87,0.05) 0px, transparent 50%), radial-gradient(at 10% 90%, rgba(156,74,47,0.06) 0px, transparent 50%)",
        noise: "url('/noise.svg')",
      },
      boxShadow: {
        glow: "0 0 32px -10px rgba(217,119,87,0.35)",
        "glow-sm": "0 0 16px -6px rgba(217,119,87,0.4)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(217,119,87,0.4)",
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
