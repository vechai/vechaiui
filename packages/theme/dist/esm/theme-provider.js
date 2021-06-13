function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { walkObject, omit, toRGB, deepmerge } from "@vechaiui/utils";
import { createContext, useContext, useLayoutEffect, useMemo } from "react";
import set from "lodash.set";
import { defaultTheme } from "./default-theme";
import { toCSSVar } from "./create-theme-vars";
export var ThemeContext = /*#__PURE__*/createContext(undefined);
ThemeContext.displayName = "ThemeContext";
export function ThemeProvider(_ref) {
  var {
    theme = defaultTheme,
    colorScheme = "light",
    children
  } = _ref;
  var computedTheme = useMemo(() => {
    var omittedTheme = omit(theme, ["colorSchemes"]);
    var {
      colors,
      type
    } = theme.colorSchemes[colorScheme] || {};
    if (type === "dark") document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");
    walkObject(colors, (value, path) => {
      if (typeof value !== "string") return;
      var rgb = toRGB(value);
      if (rgb) set(colors, path, rgb.join(","));
    });

    var normalizedTheme = _extends({}, omittedTheme, {
      colors
    });

    return toCSSVar(normalizedTheme);
  }, [theme, colorScheme]);
  useLayoutEffect(() => {
    updateThemeVariables(computedTheme.__cssVars);
  }, [computedTheme]);
  var value = useMemo(() => ({
    theme: computedTheme
  }), [computedTheme]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: value
  }, children);
}

function setStyleVariable(name, value) {
  var rootStyle = document.documentElement.style;
  rootStyle.setProperty(name, value);
}

function updateStyleHelper(_themeKey, style) {
  var themeKey = _themeKey.startsWith("--") ? _themeKey : "--" + _themeKey;
  setStyleVariable(themeKey, style);
}

function updateThemeVariables(vars) {
  Object.entries(vars).forEach(_ref2 => {
    var [key, val] = _ref2;
    updateStyleHelper(key, val);
  });
}

export function useTheme() {
  var theme = useContext(ThemeContext);

  if (!theme) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ThemeProvider />`");
  }

  return theme;
}
export function extendTheme(themeOverride) {
  return deepmerge(defaultTheme, themeOverride);
}
//# sourceMappingURL=theme-provider.js.map