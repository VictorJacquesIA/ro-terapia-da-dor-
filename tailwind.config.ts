import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBF7F2",
        cream: "#FBF7F2",
        primary: {
          DEFAULT: "#B65C7A",
          dark: "#7A334C",
          soft: "#F8EAF0",
          muted: "#EDD0DE",
        },
        gold: {
          DEFAULT: "#C8A45D",
          soft: "#F3E5C0",
          light: "#FAF0D7",
        },
        "deep-green": "#26352C",
        dark: "#1F1A17",
        muted: "#6F625C",
        border: "#E8DDD5",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-vietnam)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 20px 0 rgba(31,26,23,0.06)",
        "card-hover": "0 8px 40px 0 rgba(182,92,122,0.14)",
        gold: "0 2px 14px 0 rgba(200,164,93,0.25)",
        soft: "0 1px 8px 0 rgba(31,26,23,0.05)",
        hero: "0 28px 80px rgba(182,92,122,0.22)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
