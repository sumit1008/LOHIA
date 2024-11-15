/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensures tailwind picks up your HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Ensures tailwind processes all JS/TS/JSX/TSX files
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enables class-based dark mode (uses the 'dark' class to toggle)
  plugins: [],
}
