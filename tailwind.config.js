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
      addVariant("theme-cyberpunk", '[data-theme="cyberpunk"] &');
      addVariant("theme-sunset", '[data-theme="sunset"] &');
      addVariant("theme-luxury", '[data-theme="luxury"] &');
      addVariant("theme-lemonade", '[data-theme="lemonade"] &');
      addVariant("theme-aqua", '[data-theme="aqua"] &');
    },
  ],
  daisyui: {
    themes: ["garden", "sunset", "cyberpunk", "luxury", "lemonade", "aqua"],
  },
};
