/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/4-screen': '25vw',
        '1/2-screen': '50vw',
        '3/5-screen': '60vw',
        '3/4-screen': '75vw',
      }
    },
  },
  plugins: [],
}

