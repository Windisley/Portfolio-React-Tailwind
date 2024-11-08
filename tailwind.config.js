/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1f1f1",
        primary: "#f2ca52",
        primaryligth: "#F5D575",
        primarydark: "#EDB816",
        secundary: "#05000d",
        text: "#2E2A20"
      },
      maxWidth:{
        contain: "1500px"
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        "poppins-bold": ["poppins-bold", "sans-serif"],
        "poppins-italic": ["poppins-italic", "sans-serif"],
        "poppins-semibold": ["poppins-semibold", "sans-serif"]


      },
      translate:{
        y5: "-5px"
      }

    },
  },
  plugins: [],
}

