import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      mint:{
        '50': '#e9fff6',
        '100': '#cbffe7',
        '200': '#9cfed5',
        '300': '#3ff8b7',
        '400': '#1ceba8',
        '500': '#00d294',
        '600': '#00ac79',
        '700': '#008964',
        '800': '#006c51',
        '900': '#005944',
        '950': '#003227',
      },
      black: "#000000",
      dark: "#1B1B1B",
      medium: "#e0e0e0",
      light: "#F9F9F9",
      white: "#FFFFFF"
    }
  },
  plugins: [],
};
export default config;
