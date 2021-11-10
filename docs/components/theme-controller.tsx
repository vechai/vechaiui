import * as React from "react";
import {
  VechaiProvider,
  extendTheme,
  VechaiProviderProps,
} from "@vechaiui/react";

import { light, dark, midnight, pale, dawn, bee, cool } from "@utils/themes";

export type ThemeContextType = {
  colorScheme?: string;
  radius?: string;
  density?: VechaiProviderProps["density"];
  cursorPointer?: boolean;
  setColorScheme: (colorScheme: string) => void;
  setRadius: (radius: string) => void;
  setCursorPointer: (cursorPointer: boolean) => void;
  setDensity: (density: VechaiProviderProps["density"]) => void;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const themes = [
  {
    name: "Light",
    id: "light",
    backgroundColor: light.colors.bg.base,
    primaryColor: light.colors.primary["500"],
  },
  {
    name: "Dark",
    id: "dark",
    backgroundColor: dark.colors.bg.base,
    primaryColor: dark.colors.primary["500"],
  },
  {
    name: "Midnight",
    id: "midnight",
    backgroundColor: midnight.colors.bg.base,
    primaryColor: midnight.colors.primary["500"],
  },
  {
    name: "Pale",
    id: "pale",
    backgroundColor: pale.colors.bg.base,
    primaryColor: pale.colors.primary["500"],
  },
  {
    name: "Dawn",
    id: "dawn",
    backgroundColor: dawn.colors.bg.base,
    primaryColor: dawn.colors.primary["500"],
  },
  {
    name: "Bee",
    id: "bee",
    backgroundColor: bee.colors.bg.base,
    primaryColor: bee.colors.primary["500"],
  },
  {
    name: "Cool",
    id: "cool",
    backgroundColor: cool.colors.bg.base,
    primaryColor: cool.colors.primary["500"],
  },
];

export const radiusItems = [
  {
    name: "none",
    value: "none",
  },
  {
    name: "sm",
    value: "0.125rem",
  },
  {
    name: "md",
    value: "0.375rem",
  },
];

function ThemeController({ children }: { children: React.ReactNode }) {
  const [cursorPointer, setCursorPointer] = React.useState(false);
  const [radius, setRadius] = React.useState(radiusItems[2].value);
  const [colorScheme, setColorScheme] = React.useState(themes[0].id);
  const [density, setDensity] = React.useState<VechaiProviderProps["density"]>("comfortable");

  const theme = React.useMemo(() => {
    return extendTheme({
      cursor: cursorPointer ? "pointer" : "default",
      rounded: radius,
      colorSchemes: {
        light,
        dark,
        midnight,
        pale,
        dawn,
        bee,
        cool,
      },
    });
  }, [cursorPointer, radius]);

  return (
    <ThemeContext.Provider
      value={{
        colorScheme,
        radius,
        cursorPointer,
        density,
        setColorScheme,
        setRadius,
        setCursorPointer,
        setDensity,
      }}
    >
      <VechaiProvider theme={theme} colorScheme={colorScheme} density={density}>
        {children}
      </VechaiProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeContextType => React.useContext(ThemeContext) || {
  colorScheme: "light",
  radius: "0.375rem",
  cursorPointer: false,
  setColorScheme: () => null,
  setRadius: () => null,
  setCursorPointer: () => null,
  setDensity: () => null,
};

export default ThemeController;
