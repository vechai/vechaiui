"use strict";

exports.__esModule = true;
exports.toCSSVar = toCSSVar;

var _createThemeVars2 = require("./create-theme-vars");

var _themeTokens = require("./theme-tokens");

function toCSSVar(rawTheme) {
  var _theme$config;

  /**
   * In the case the theme has already been converted to css-var (e.g extending the theme),
   * we can omit the computed css vars and recompute it for the extended theme.
   */
  var theme = (0, _themeTokens.omitVars)(rawTheme); // omit components and breakpoints from css variable map

  var tokens = (0, _themeTokens.extractTokens)(theme);
  var cssVarPrefix = (_theme$config = theme.config) == null ? void 0 : _theme$config.cssVarPrefix;

  var _createThemeVars = (0, _createThemeVars2.createThemeVars)(tokens, {
    cssVarPrefix: cssVarPrefix
  }),
      cssMap = _createThemeVars.cssMap,
      cssVars = _createThemeVars.cssVars;

  Object.assign(theme, {
    __cssVars: cssVars,
    __cssMap: cssMap
  });
  return theme;
}
//# sourceMappingURL=to-css-var.js.map