/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Ensure dark mode is enabled
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", "sans-serif"],
        jost: ["Jost", "sans-serif"], // Ensure Jost is correctly defined
      },
    },
  },
  plugins: [require("@tailwindcss/typography")], // Add typography plugin
};
