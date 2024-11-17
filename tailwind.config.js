/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: ["selector", '[data-theme="sunset"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    daisyui,
    function ({ addVariant }) {
      addVariant("state-collapsed", '[data-collapsible="icon"] &'); // Target collapsed
      addVariant("state-expanded", '[data-state="expanded"] &'); // Target expanded
      addVariant("theme-cyberpunk", '[data-theme="cyberpunk"] &');
    },
  ],
  daisyui: {
    themes: ["garden", "sunset", "cyberpunk"],
  },
};
