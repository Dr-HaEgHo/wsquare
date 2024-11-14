import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#FFBC13",
        yellowShadow: "#FF9523",
        textGrey:"#EBEBEB",
        grey1: "#595448",
        black25: "rgba(0, 0, 0, 0.25)",
        black50: "rgba(0, 0, 0, 0.50)",
        black75: "rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
} satisfies Config;
