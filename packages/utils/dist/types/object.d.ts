import type { Dict } from "./types";
export declare function omit<T extends Dict, K extends keyof T>(object: T, keys: K[]): Omit<T, K>;
export declare function pick<T extends Dict, K extends keyof T>(object: T, keys: K[]): { [P in K]: T[P]; };
export declare function deepmerge<T1, T2>(target: Partial<T1>, source: Partial<T2>, options?: {
    clone: boolean;
}): Partial<T1>;
