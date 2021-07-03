const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}",
    "../node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            '[class~="lead"]': {
              color: theme("colors.gray.400"),
            },
            blockquote: {
              color: theme("colors.gray.300"),
              borderLeftColor: theme("colors.gray.700"),
            },
            hr: {
              borderTopColor: theme("colors.gray.800"),
            },
            strong: {
              color: theme("colors.white"),
            },
            "figure figcaption": {
              color: theme("colors.gray.500"),
            },
            a: {
              color: theme("colors.white"),
            },
            th: {
              color: theme("colors.white"),
            },
            "h1, h2, h3, h4": {
              color: theme("colors.white"),
            },
            code: {
              color: theme("colors.gray.300"),
            },
            "code:before": {
              color: theme("colors.gray.300"),
            },
            "code:after": {
              color: theme("colors.gray.300"),
            },
            "ol > li:before": {
              color: theme("colors.gray.400"),
            },
            "ul > li:before": {
              backgroundColor: theme("colors.gray.600"),
            },
          },
        },
      }),
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
      fontSize: {
        xss: ["0.6875rem", { lineHeight: "1rem" }],
        smm: ["0.8125rem", { lineHeight: "1rem" }],
      },
      borderColor: {
        inherit: "inherit",
      },
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@vechaiui/core")({
      colors: ["orange", "red", "blue"],
      cssBase: true,
    }),
  ],
};
