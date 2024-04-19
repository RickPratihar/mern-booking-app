/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container:{
      padding:{
        sm: "5rem",
        md: "10rem",

  
      }
    },
    // screens: {
    //   sm: '400px',
    //   // => @media (min-width: 576px) { ... }

    //   md: '960px',
    //   // => @media (min-width: 960px) { ... }

    //   lg: '1440px',
    //   // => @media (min-width: 1440px) { ... }
    // },
   
  },
  plugins: [],
}

