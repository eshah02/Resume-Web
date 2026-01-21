import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        blue: "var(--color-blue)",
        card: "var(--color-bg-card)",
        border: "var(--color-border)",
        muted: "var(--color-text-muted)",
      },
    },
  },
  plugins: [],
};

export default config;
