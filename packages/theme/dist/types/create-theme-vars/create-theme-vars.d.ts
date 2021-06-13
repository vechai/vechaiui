import { Dict } from "@vechaiui/utils";
export interface CreateThemeVarsOptions {
    cssVarPrefix?: string;
}
export interface ThemeVars {
    cssVars: Dict;
    cssMap: Dict;
}
export declare function createThemeVars(target: Dict, options: CreateThemeVarsOptions): ThemeVars;
