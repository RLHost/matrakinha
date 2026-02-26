/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          rose: '#f43f5e',
          teal: '#0d9488',
          yellow: '#fbbf24',
          sky: '#bae6fd'
        }
      }
    },
  },
  plugins: [],
}