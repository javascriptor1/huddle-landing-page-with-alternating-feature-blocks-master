/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        sans: "Open sans",
      },
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        VeryPaleCyan: "hsl(193, 100%, 96%)",
        VeryDarkCyan: " hsl(192, 100%, 9%)",
        GrayishBlue: "hsl(208, 11%, 55%)",
      },
    },
  },
  plugins: [],
};
