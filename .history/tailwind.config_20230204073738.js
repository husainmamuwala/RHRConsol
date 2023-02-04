/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish:'Mulish'
      },
      colors:{
        primary:"##FFCA05",
        secondary:"#1C2C5E",
      }
    },
  },
  plugins: [
    
  ],
}