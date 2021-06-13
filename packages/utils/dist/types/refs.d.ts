import * as React from "react";
declare type ReactRef<T> = React.Ref<T> | React.RefObject<T> | React.MutableRefObject<T>;
export declare function setRef<T = any>(ref: ReactRef<T> | undefined, value: T): void;
export declare function useForkRef<T = any>(refA: ReactRef<T> | undefined, refB: ReactRef<T> | undefined): ((refValue: T) => void) | null;
export {};
