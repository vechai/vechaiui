import { createThemeVars } from "./create-theme-vars";
import { extractTokens, omitVars } from "./theme-tokens";
export function toCSSVar(rawTheme) {
  var _theme$config;

  /**
   * In the case the theme has already been converted to css-var (e.g extending the theme),
   * we can omit the computed css vars and recompute it for the extended theme.
   */
  var theme = omitVars(rawTheme); // omit components and breakpoints from css variable map

  var tokens = extractTokens(theme);
  var cssVarPrefix = (_theme$config = theme.config) == null ? void 0 : _theme$config.cssVarPrefix;
  var {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,

    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars
  } = createThemeVars(tokens, {
    cssVarPrefix
  });
  Object.assign(theme, {
    __cssVars: cssVars,
    __cssMap: cssMap
  });
  return theme;
}
//# sourceMappingURL=to-css-var.js.map