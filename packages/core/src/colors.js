const withOpacity = require("./with-opacity");

module.exports = {
  primary: {
    50: withOpacity("--vc-colors-primary-50"),
    100: withOpacity("--vc-colors-primary-100"),
    200: withOpacity("--vc-colors-primary-200"),
    300: withOpacity("--vc-colors-primary-300"),
    400: withOpacity("--vc-colors-primary-400"),
    500: withOpacity("--vc-colors-primary-500"),
    600: withOpacity("--vc-colors-primary-600"),
    700: withOpacity("--vc-colors-primary-700"),
    800: withOpacity("--vc-colors-primary-800"),
    900: withOpacity("--vc-colors-primary-900"),
  },

  neutral: {
    50: withOpacity("--vc-colors-neutral-50"),
    100: withOpacity("--vc-colors-neutral-100"),
    200: withOpacity("--vc-colors-neutral-200"),
    300: withOpacity("--vc-colors-neutral-300"),
    400: withOpacity("--vc-colors-neutral-400"),
    500: withOpacity("--vc-colors-neutral-500"),
    600: withOpacity("--vc-colors-neutral-600"),
    700: withOpacity("--vc-colors-neutral-700"),
    800: withOpacity("--vc-colors-neutral-800"),
    900: withOpacity("--vc-colors-neutral-900"),
  },

  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)",
  },

  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)",
  },
};
