import { useMemo } from "react";
export function createMemoClass(func) {
  return function useMemoClass(args) {
    var dependencies = typeof args === "object" && args !== null ? Object.keys(args).filter(key => key !== "theme").map(key => args[key]) : [];
    return useMemo(() => func(args), dependencies);
  };
}
//# sourceMappingURL=create-memo-class.js.map