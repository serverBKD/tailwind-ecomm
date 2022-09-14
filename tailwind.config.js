/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/views/*.{html,js}",
    "./src/controlers/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        copy: "#873CB3",
        bg: "#212139",
        bg0: "#9DB4C0",
        card: "#F7D002",
        blue0: "#2541B2",
        blue1: "#55C1FF",
        bluepantone: "#0D21A1",
        gris: "#948B89",
        wh0: "#F8F8F8",
        turquoise: "#15B097",
        mandarin: "#F4743B",
        gunmetal: "#292F36",
        erieBlack: "#141414",
        pal0: "#2274A5",
      },
      aspectRatio: {
        "4/3": "4/3",
        "9/16": "9/16",
        "3/4": "3/4",
      },
      fontFamily: {
        sans: ["Open Sans", "Ubuntu", "sans-serif"],
      },
      fontSize: {
        xxs: ".5rem",
      },
      maxWidth: {
        "1/2": "50%",
      },
      gridTemplateColumns: {
        // Simple 12 column grid
        12: "repeat(12, minmax(120px, 1fr))",

        // Complex site-specific column configuration
        tienda: "500px minmax(300px, 1fr) 160px",
      },
    },
  },
  plugins: [],
}
