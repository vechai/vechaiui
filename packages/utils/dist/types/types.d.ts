export declare type Dict<T = any> = Record<string, T>;
export declare type CSSMap = Dict<{
    value: string;
    var: string;
    varRef: string;
}>;
export declare type WithCSSVar<T> = T & {
    __cssVars: Dict;
    __cssMap: CSSMap;
};
export declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
