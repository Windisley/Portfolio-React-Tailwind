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
        text: "#2E2A20",
        gray: "#ccc"
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
        y5: "-5px",
        centralizeXY: "-50%, -50%",
        centralizeEixo: "-50%"
      },
      screens: {
        "moba": "300px",

        "mobalg": "470px",

        'tablet': '600px',
  
        "tablet700":  '700px',

        'desktop': '800px',
  
        'desktopxl': '1160px',

      },
      boxShadow:{
        shadowligth: "0px 0px 12px 0 #F5D575",
        shadowdark: " 0 0 10px 0 #EDB816, 0px 0px 5px 0 #F5D575;"
      },
      dropShadow:{
         shadowligth: "0px 0px 10px 0 #F5D575",
         shadowdark: " 0 0 10px 0 #EDB816, 0px 0px 5px 0 #F5D575;"
      },
      margin:{
        marginceltralize: "0 auto",
      }
    

    },
  },
  plugins: [],
}

