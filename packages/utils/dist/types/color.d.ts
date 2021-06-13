import type { Color } from "color-string";
export declare function hsl2rgb(h: number, s: number, l: number): [number, number, number];
export declare function hwb2rgb(h: number, w: number, b: number): [number, number, number];
export declare function toRGBA(color: string): Color | undefined;
export declare function toRGB(color: string): number[] | undefined;
export declare function toColor(colorStr: string): {
    color: string;
    opacity: string;
};
