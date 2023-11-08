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
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001111",
        },
      },
    },
  },
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      "myTheme": {
        extend: "dark",
        colors: {
          background: "#092B79",
          foreground: "#ffffff",
          primary: {
            50: "#F8F4FF",
            100: "#D6F2FE",
            200: "#ADE2FE",
            300: "#84CDFE",
            400: "#65B9FD",
            500: "#3398FD",
            600: "#2576D9",
            700: "#1958B6",
            800: "#103D92",
            900: "#092B79",
            DEFAULT: "#2576D9",
            foreground: "#ffffff",
          },
          focus: "#3398FD",
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    }
  }),]
}

