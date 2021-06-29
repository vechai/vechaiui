import colors from "tailwindcss/colors";
import { ColorScheme } from "@vechaiui/react";
// light theme
export const light: ColorScheme = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: "white",
      fill: colors.gray["100"],
    },
    text: {
      foreground: colors.gray["900"],
      muted: colors.gray["700"],
    },
    primary: colors.teal,
    neutral: colors.gray,
  },
};

// dark theme
export const dark: ColorScheme = {
  id: "dark",
  type: "dark",
  colors: {
    bg: {
      base: colors.gray["800"],
      fill: colors.gray["900"],
    },
    text: {
      foreground: colors.gray["100"],
      muted: colors.gray["300"],
    },
    primary: colors.teal,
    neutral: colors.gray,
  },
};

export const midnight: ColorScheme = {
  id: "midnight",
  type: "dark",
  colors: {
    bg: {
      base: colors.trueGray["900"],
      fill: colors.trueGray["900"],
    },
    text: {
      foreground: colors.trueGray["100"],
      muted: colors.trueGray["300"],
    },
    primary: colors.rose,
    neutral: colors.trueGray,
  },
};

export const pale: ColorScheme = {
  id: "pale",
  type: "dark",
  colors: {
    bg: {
      base: colors.blueGray["800"],
      fill: colors.blueGray["900"],
    },
    text: {
      foreground: colors.blueGray["100"],
      muted: colors.blueGray["300"],
    },
    primary: colors.violet,
    neutral: colors.blueGray,
  },
};

export const dawn: ColorScheme = {
  id: "dawn",
  type: "dark",
  colors: {
    bg: {
      base: "#322937",
      fill: "#0f0a13",
    },
    text: {
      foreground: "#dad3de",
      muted: "#a89ab0",
    },
    primary: colors.pink,
    neutral: {
      50: "#f6eff8",
      100: "#dad3de",
      200: "#c1b7c7",
      300: "#a89ab0",
      400: "#8f7d99",
      500: "#766380",
      600: "#5c4d64",
      700: "#413647",
      800: "#28212c",
      900: "#0f0a13",
    },
  },
};

export const bee: ColorScheme = {
  id: "warm",
  type: "light",
  colors: {
    bg: {
      // base: "white",
      base: colors.warmGray["100"],
      fill: colors.warmGray["100"],
    },
    text: {
      foreground: colors.warmGray["900"],
      muted: colors.warmGray["700"],
    },
    primary: colors.amber,
    neutral: colors.warmGray,
  },
};

export const cool: ColorScheme = {
  id: "cool",
  type: "dark",
  colors: {
    bg: {
      base: colors.coolGray["900"],
      fill: colors.coolGray["900"],
    },
    text: {
      foreground: colors.coolGray["100"],
      muted: colors.coolGray["300"],
    },
    primary: colors.cyan,
    neutral: colors.coolGray,
  },
};