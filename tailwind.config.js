/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#14c5b9',
        primary2: "#47dcd1"
      }
    },
  },
  plugins: [require("daisyui")],
}

