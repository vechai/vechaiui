"use strict";

exports.__esModule = true;
exports.defaultTheme = exports.dark = exports.light = void 0;

var _colors = _interopRequireDefault(require("./colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// light theme
var light = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: _colors["default"].white,
      fill: _colors["default"].gray["100"]
    },
    text: {
      base: _colors["default"].gray["900"],
      muted: _colors["default"].gray["700"]
    },
    primary: _colors["default"].indigo,
    neutral: _colors["default"].gray
  }
}; // dark theme

exports.light = light;
var dark = {
  id: "light",
  type: "dark",
  colors: {
    bg: {
      base: _colors["default"].gray["800"],
      fill: _colors["default"].gray["900"]
    },
    text: {
      base: _colors["default"].gray["100"],
      muted: _colors["default"].gray["300"]
    },
    primary: _colors["default"].indigo,
    neutral: _colors["default"].gray
  }
};
exports.dark = dark;
var defaultTheme = {
  cursor: "default",
  colorSchemes: {
    light: light,
    dark: dark
  },
  config: {}
};
exports.defaultTheme = defaultTheme;
//# sourceMappingURL=default-theme.js.map