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
        primary:"#extend: {
          colors: {
            bg: "#302B2B",
            primary: "#F3D950",
            secondary: "#E7D990",
            tertiary: "#BBA636"
          }
        },"
      }
    },
  },
  plugins: [
    
  ],
}