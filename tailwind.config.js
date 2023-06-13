/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GraphikLight': 'GraphikLight, sans-serif',
        'GraphikRegular': 'GraphikRegular, sans-serif',
        'GraphikMedium': 'GraphikMedium, sans-serif',
        'GraphikSemibold': 'GraphikSemibold, sans-serif',
        'GraphikBold': 'GraphikBold, sans-serif'
      },
      backgroundImage: {
        'principal': "url(src/assets/banner-principal.png)"
      },
      colors: {
        'nubankpurple': '#820AD1'
      }
    },
  },
  plugins: [],
}

