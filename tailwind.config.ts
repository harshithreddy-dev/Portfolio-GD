import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        neonPurple: "#9b5cff",
        electricBlue: "#1e7bff",
        vibrantPink: "#ff2bd6",
        cyanFlash: "#21f7ff",
        acid: "#dcff2f"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 32px rgba(33, 247, 255, 0.2), 0 0 70px rgba(255, 43, 214, 0.18)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.17) 1px, transparent 0)"
      }
    }
  },
  plugins: []
};

export default config;
