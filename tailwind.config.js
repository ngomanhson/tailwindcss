/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        gray33: "#333",
        orangefa: "#ffa400",
      },
    },
  },
  plugins: [],
};
