/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pmy: "#f5f5f5",
        sdy: "#0071BC"
      }
    },
  },
  plugins: [],
}

