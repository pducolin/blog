const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#fac9b8",
      secondary: "#bebbbb",
      frontPrimary: colors.black,
      frontSecondary: "#444054",
    },
    extend: {},
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
    extend: {},
  },
  plugins: [],
};
