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
    extend: {
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        full: "100%",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
    extend: {
      borderOpacity: ["group-focus"],
      height: ["group-hover", "group-focus"],
      backgroundColor: ["group-focus"],
      whitespace: ["group-hover", "group-focus"],
    },
  },
  plugins: [],
};
