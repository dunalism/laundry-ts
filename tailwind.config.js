/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: ["selector", '[data-theme="sunset"]'],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    daisyui,
  ],
  daisyui: {
    themes: ["garden", "sunset", "cyberpunk"],
  },
};
