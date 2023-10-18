const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e9faff',
          100: '#cef4ff',
          200: '#cef4ff',
          300: '#6be7ff',
          400: '#26d4ff',
          500: '#00b0ff',
          600: '#0086ff',
          700: '#006bff',
          800: '#005ce6',
          900: '#0052b3',
          950: '#001d3d',
        },
        secondary: {
          50: '#ffffea',
          100: '#fffcc5',
          200: '#fffa85',
          300: '#fff046',
          400: '#ffe21b',
          500: '#ffc300',
          600: '#e29700',
          700: '#bb6b02',
          800: '#985308',
          900: '#7c430b',
          950: '#482300',
        }
      }
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
}

