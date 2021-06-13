var _excluded = ["__cssMap", "__cssVars", "__breakpoints"];

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { pick } from "@vechaiui/utils";
var tokens = ["colors", "cursor"];
export function extractTokens(theme) {
  var _tokens = tokens;
  return pick(theme, _tokens);
}
export function omitVars(rawTheme) {
  var cleanTheme = _objectWithoutPropertiesLoose(rawTheme, _excluded);

  return cleanTheme;
}
//# sourceMappingURL=theme-tokens.js.map