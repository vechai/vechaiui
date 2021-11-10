import { DeepPartial } from "@vechaiui/utils";

export type RecursiveProperty<Nested = string | number> =
  | RecursiveObject<Nested>
  | Nested
export interface RecursiveObject<Nested = string | number> {
  [property: string]: RecursiveProperty<Nested>
}
export interface ColorHues {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

export type Colors = RecursiveObject<
  Record<string, Partial<ColorHues>> | string
>
export interface ColorScheme {
  id: string;
  type: "light" | "dark";
  colors: {
    bg: {
      base: string;
      fill: string;
    };
    text: {
      foreground: string;
      muted: string;
    };
    primary: ColorHues;
    neutral: ColorHues;
  } & Colors;
}

export interface Destiny {}
export interface VechaiTheme {
  readonly cursor: "default" | "pointer";
  readonly rounded: string;
  readonly colorSchemes: Record<string, ColorScheme>;
  readonly destiny: Record<"compact" | "comfortable" | "unset", Destiny>;
  readonly config: Record<string, unknown>;
}

export interface DefaultProps {
  className?: string;
}

export type VechaiThemeOverride = DeepPartial<VechaiTheme>;
