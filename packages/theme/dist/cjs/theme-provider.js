"use strict";

exports.__esModule = true;
exports.ThemeProvider = ThemeProvider;
exports.useTheme = useTheme;
exports.extendTheme = extendTheme;
exports.ThemeContext = void 0;

var _utils = require("@vechaiui/utils");

var _react = require("react");

var _lodash = _interopRequireDefault(require("lodash.set"));

var _defaultTheme = require("./default-theme");

var _createThemeVars = require("./create-theme-vars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ThemeContext = /*#__PURE__*/(0, _react.createContext)(undefined);
exports.ThemeContext = ThemeContext;
ThemeContext.displayName = "ThemeContext";

function ThemeProvider(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? _defaultTheme.defaultTheme : _ref$theme,
      _ref$colorScheme = _ref.colorScheme,
      colorScheme = _ref$colorScheme === void 0 ? "light" : _ref$colorScheme,
      children = _ref.children;
  var computedTheme = (0, _react.useMemo)(function () {
    var omittedTheme = (0, _utils.omit)(theme, ["colorSchemes"]);

    var _ref2 = theme.colorSchemes[colorScheme] || {},
        colors = _ref2.colors,
        type = _ref2.type;

    if (type === "dark") document.documentElement.classList.add("dark");else document.documentElement.classList.remove("dark");
    (0, _utils.walkObject)(colors, function (value, path) {
      if (typeof value !== "string") return;
      var rgb = (0, _utils.toRGB)(value);
      if (rgb) (0, _lodash["default"])(colors, path, rgb.join(","));
    });

    var normalizedTheme = _extends({}, omittedTheme, {
      colors: colors
    });

    return (0, _createThemeVars.toCSSVar)(normalizedTheme);
  }, [theme, colorScheme]);
  (0, _react.useLayoutEffect)(function () {
    updateThemeVariables(computedTheme.__cssVars);
  }, [computedTheme]);
  var value = (0, _react.useMemo)(function () {
    return {
      theme: computedTheme
    };
  }, [computedTheme]);
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
  Object.entries(vars).forEach(function (_ref3) {
    var key = _ref3[0],
        val = _ref3[1];
    updateStyleHelper(key, val);
  });
}

function useTheme() {
  var theme = (0, _react.useContext)(ThemeContext);

  if (!theme) {
    throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ThemeProvider />`");
  }

  return theme;
}

function extendTheme(themeOverride) {
  return (0, _utils.deepmerge)(_defaultTheme.defaultTheme, themeOverride);
}
//# sourceMappingURL=theme-provider.js.map