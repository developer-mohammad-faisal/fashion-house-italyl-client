module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#EE156A",
        secondary: "#3A3A3A",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
