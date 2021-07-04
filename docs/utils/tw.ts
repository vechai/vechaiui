export const twFile = {
  name: "tailwind.config.js",
  code: `import colors from "tailwindcss/colors";

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
      }
    }
  },
    // add VechaiUI plugin
  plugins: [
    require("@tailwindcss/forms"),
    require("@vechaiui/core")({
      colors: ["orange"],
    }),
    // ...
  ],
};`,
  readOnly: true,
};
