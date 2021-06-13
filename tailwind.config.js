module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./packages/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("./packages/core"),
  ],
}
