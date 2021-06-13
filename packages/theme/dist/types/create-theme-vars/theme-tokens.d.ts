import { Dict } from "@vechaiui/utils";
declare const tokens: readonly ["colors", "cursor"];
export declare type ThemeScale = typeof tokens[number] | "transition.duration" | "transition.property" | "transition.easing";
export declare function extractTokens(theme: Dict): {
    [x: string]: any;
};
export declare function omitVars(rawTheme: Dict): {
    [x: string]: any;
};
export {};
