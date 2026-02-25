/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rose: '#f43f5e',
          teal: '#14b8a6',
          soft: '#fff1f2',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}