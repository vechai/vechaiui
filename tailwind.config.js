const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./packages/*/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("./packages/core")({
      colors: ["orange"],
      cssBase: true,
    }),
  ],
};
