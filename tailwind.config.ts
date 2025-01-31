import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        trustblue: "var(--trust-blue)",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
