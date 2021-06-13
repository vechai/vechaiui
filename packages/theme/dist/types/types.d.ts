import { DeepPartial } from "@vechaiui/utils";
export interface ColorScheme {
    id: string;
    type: "light" | "dark";
    colors: {
        bg: {
            base: string;
            fill: string;
        };
        text: {
            base: string;
            muted: string;
        };
        primary: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        neutral: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
    };
}
export interface VechaiTheme {
    readonly cursor: "default" | "pointer";
    readonly colorSchemes: Record<string, ColorScheme>;
    readonly config: Record<string, unknown>;
}
export interface DefaultProps {
    className?: string;
}
export declare type VechaiThemeOverride = DeepPartial<VechaiTheme>;
