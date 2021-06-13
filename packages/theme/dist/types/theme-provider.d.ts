/// <reference types="react" />
import { WithCSSVar, Dict } from "@vechaiui/utils";
import { VechaiTheme, VechaiThemeOverride } from "./types";
interface DictVechaiTheme extends Dict {
}
export declare const ThemeContext: import("react").Context<{
    theme: WithCSSVar<DictVechaiTheme>;
} | undefined>;
export interface VechaiProviderProps {
    children: React.ReactNode;
    theme: VechaiTheme;
    colorScheme: string;
}
export declare function ThemeProvider({ theme, colorScheme, children, }: VechaiProviderProps): JSX.Element;
export declare function useTheme<T extends object = Dict>(): WithCSSVar<T>;
export declare function extendTheme(themeOverride: VechaiThemeOverride): VechaiTheme;
export {};
