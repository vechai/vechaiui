import * as React from "react";

type ReactRef<T> =
  | React.Ref<T>
  | React.RefObject<T>
  | React.MutableRefObject<T>;

export function setRef<T = any>(ref: ReactRef<T> | undefined, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    // @ts-ignore
    ref.current = value;
  }
}

export function useForkRef<T = any>(
  refA: ReactRef<T> | undefined,
  refB: ReactRef<T> | undefined
) {
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue: T) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
