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
          50: '#eafff5',
          100: '#cdfee6',
          200: '#a9fbd7',
          300: '#62f3bc',
          400: '#24e3a1',
          500: '#00ca8b',
          600: '#00a472',
          700: '#00845f',
          800: '#00684c',
          900: '#005540',
          950: '#003025',
        },
        secondary: {
          50: '#fef4f2',
          100: '#fee6e2',
          200: '#fdd2cb',
          300: '#fbb4a9',
          400: '#f68573',
          500: '#ed5c46',
          600: '#da4028',
          700: '#b7331e',
          800: '#972d1d',
          900: '#7e2b1e',
          950: '#44130b',
        }
      }
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              50: '#eafff5',
              100: '#cdfee6',
              200: '#a9fbd7',
              300: '#62f3bc',
              400: '#24e3a1',
              500: '#00ca8b',
              600: '#00a472',
              700: '#00845f',
              800: '#00684c',
              900: '#005540',
              950: '#003025',
            },
            secondary: {
              50: '#fef4f2',
              100: '#fee6e2',
              200: '#fdd2cb',
              300: '#fbb4a9',
              400: '#f68573',
              500: '#ed5c46',
              600: '#da4028',
              700: '#b7331e',
              800: '#972d1d',
              900: '#7e2b1e',
              950: '#44130b',
            }
          }
        }
      }
    })],
}

