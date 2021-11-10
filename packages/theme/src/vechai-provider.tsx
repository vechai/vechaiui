import {
  walkObject,
  omit,
  toRGB,
  deepmerge,
  WithCSSVar,
  Dict,
} from "@vechaiui/utils";
import * as React from "react";
import { createContext, useContext, useMemo } from "react";
import set from "lodash.set";
import { Global } from "@emotion/react";

import { defaultTheme } from "./default-theme";
import { toCSSVar } from "./create-theme-vars";
import { isBrowser } from "./utils";
import { VechaiTheme, VechaiThemeOverride } from "./types";

interface DictVechaiTheme extends Dict {}

export const VechaiContext = createContext<
  | {
      theme: WithCSSVar<DictVechaiTheme>;
    }
  | undefined
>(undefined);

VechaiContext.displayName = "VechaiContext";

export interface VechaiProviderProps {
  children: React.ReactNode;
  theme?: VechaiTheme;
  density?: "compact" | "comfortable" | "unset";
  colorScheme?: string;
  cssVarsRoot?: string;
}

export function VechaiProvider({
  theme = defaultTheme,
  colorScheme = "light",
  density = "comfortable",
  cssVarsRoot = ":host, :root",
  children,
}: VechaiProviderProps) {
  const computedTheme = useMemo(() => {
    const omittedTheme = omit(theme, ["colorSchemes", "density"]);
    const { colors, type } = theme.colorSchemes[colorScheme] || {};
    if (isBrowser) {
      if (type === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }

    walkObject(colors, (value, path) => {
      if (typeof value !== "string") return;
      const rgb = toRGB(value);
      if (rgb) set(colors, path, rgb.join(","));
    });

    const normalizedTheme = {
      ...omittedTheme,
      density: theme.density[density],
      colors,
    };

    return toCSSVar(normalizedTheme);
  }, [theme, colorScheme, density]);

  const value = useMemo(
    () => ({
      theme: computedTheme,
    }),
    [computedTheme]
  );

  return (
    <VechaiContext.Provider value={value}>
      {/* FIXME: Emotion alernative */}
      <Global styles={() => ({ [cssVarsRoot]: computedTheme.__cssVars })} />
      {children}
    </VechaiContext.Provider>
  );
}

export function useVechai<T extends object = Dict>() {
  const theme = useContext(
    (VechaiContext as unknown) as React.Context<T | undefined>
  );
  if (!theme) {
    throw Error(
      "useVechai: `theme` is undefined. Seems you forgot to wrap your app in `<VechaiProvider />`"
    );
  }

  return theme as WithCSSVar<T>;
}

export function extendTheme(themeOverride: VechaiThemeOverride): VechaiTheme {
  return deepmerge(defaultTheme, themeOverride, { clone: true }) as VechaiTheme;
}
