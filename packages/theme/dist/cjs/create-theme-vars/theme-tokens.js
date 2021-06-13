"use strict";

exports.__esModule = true;
exports.extractTokens = extractTokens;
exports.omitVars = omitVars;

var _utils = require("@vechaiui/utils");

var _excluded = ["__cssMap", "__cssVars", "__breakpoints"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var tokens = ["colors", "cursor"];

function extractTokens(theme) {
  var _tokens = tokens;
  return (0, _utils.pick)(theme, _tokens);
}

function omitVars(rawTheme) {
  var __cssMap = rawTheme.__cssMap,
      __cssVars = rawTheme.__cssVars,
      __breakpoints = rawTheme.__breakpoints,
      cleanTheme = _objectWithoutPropertiesLoose(rawTheme, _excluded);

  return cleanTheme;
}
//# sourceMappingURL=theme-tokens.js.map