/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#1182c5",
        secondary: "#2aa6df",
      },
      container:{
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem"
        },
      },
    },
  },
  plugins: [],
}

