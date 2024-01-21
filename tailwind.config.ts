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
        background: 'rgb(var(--background-start-rgb), <alpha-value>)',
        accent: 'rgb(var(--accent), <alpha-value>)',
        accent2: 'rgb(var(--accent2), <alpha-value>)',
        hover: 'rgb(var(--hover), <alpha-value>)',
        nav: 'rgb(var(--nav), <alpha-value>)',
      } 
    },
  },
  plugins: [],
};
export default config;
