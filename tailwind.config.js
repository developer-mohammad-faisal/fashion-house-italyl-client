module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EE156A",
        secondary: "#3A3A3A",
      },
    },
  },
  plugins: [require("daisyui")],
};
