module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#EE156A",

          secondary: "#F7F7F7",
  
          accent: "#ffff",
  
          neutral: "#3D4451",
  
          info: "#000000",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};