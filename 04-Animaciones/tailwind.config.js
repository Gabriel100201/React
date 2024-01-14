/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['montserrat', 'sans-serif']
      },
      colors: {
        primary: {
          '50': '#f3f1ff',
          '100': '#ece5ff',
          '200': '#d9ceff',
          '300': '#bfa7ff',
          '400': '#a176ff',
          '500': '#863fff',
          '600': '#7a18ff',
          '700': '#6d07fa',
          '800': '#5b05d2',
          '900': '#4c06ac',
          '950': '#320083',
        },
        secondary: {
          '50': '#fffaeb',
          '100': '#fdefc8',
          '200': '#fbdf8c',
          '300': '#f9c950',
          '400': '#f8b327',
          '500': '#f1920f',
          '600': '#d66d09',
          '700': '#a8470b',
          '800': '#903a10',
          '900': '#763011',
          '950': '#441704',
        },
        alternatyve: {
          '50': '#effef4',
          '100': '#dafee7',
          '200': '#b6fcd0',
          '300': '#7ef7ac',
          '400': '#3fe980',
          '500': '#16d15f',
          '600': '#0ba848',
          '700': '#0d883d',
          '800': '#106b35',
          '900': '#0f582d',
          '950': '#023116',
        }
      }
    },
  },
  plugins: [],
}

