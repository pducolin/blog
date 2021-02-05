const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#fcd5ce",
      secondary: "#d8e2dc",
      frontPrimary: colors.black,
      frontSecondary: "#444054",
      backgroundPrimary: colors.white,
      backgroundSecondary: "#f8edeb",
      red: colors.red,
    },
    extend: {},
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
    extend: {},
  },
  plugins: [],
};
