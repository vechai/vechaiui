import { useMemo } from "react";

export function createMemoClass(func: (props: any) => string) {
  return function useMemoClass(args?: any) {
    const dependencies =
      typeof args === "object" && args !== null
        ? Object.keys(args)
            .filter((key) => key !== "theme")
            .map((key) => args[key])
        : [];

    return useMemo(() => func(args), dependencies);
  };
}
