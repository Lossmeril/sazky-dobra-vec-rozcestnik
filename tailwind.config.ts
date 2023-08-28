import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      mint: "#3FF8B7",
      black: "#000000",
      dark: "#1B1B1B",
      medium: "#5e5e5e",
      light: "#F9F9F9",
      white: "#FFFFFF"
    }
  },
  plugins: [],
};
export default config;
