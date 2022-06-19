/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        50: "#ffeff3",
        100: "#ffe0e9",
        200: "#ffc6d9",
        300: "#ff97b9",
        400: "#ff5d95",
        500: "#ff2476",
        600: "#ff0069",
        700: "#d70058",
        800: "#b40053",
        900: "#99024d",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
