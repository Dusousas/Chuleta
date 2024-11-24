import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pirata: ['"Pirata One"', 'system-ui'],
        Rambla: ['"Rambla"', 'sans-serif'],

      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        RedP: "#991B1F",
        GrayP: "#0a0a0a"
      },
    },
  },
  plugins: [],
};
export default config;
