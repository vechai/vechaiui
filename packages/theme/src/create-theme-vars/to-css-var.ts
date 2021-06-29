import type { WithCSSVar, Dict } from "@vechaiui/utils";

import { createThemeVars } from "./create-theme-vars";
import { extractTokens, omitVars } from "./theme-tokens";

export function toCSSVar<T extends Dict>(rawTheme: T) {
  /**
   * In the case the theme has already been converted to css-var (e.g extending the theme),
   * we can omit the computed css vars and recompute it for the extended theme.
   */
  const theme = omitVars(rawTheme);

  // omit components and breakpoints from css variable map
  const tokens = extractTokens(theme);

  const cssVarPrefix = theme.config?.cssVarPrefix || "vc";

  const {
    /**
     * This is more like a dictionary of tokens users will type `green.500`,
     * and their equivalent css variable.
     */
    cssMap,
    /**
     * The extracted css variables will be stored here, and used in
     * the emotion's <Global/> component to attach variables to `:root`
     */
    cssVars,
  } = createThemeVars(tokens, { cssVarPrefix });

  Object.assign(theme, {
    __cssVars: cssVars,
    __cssMap: cssMap,
  });

  return theme as WithCSSVar<T>;
}
