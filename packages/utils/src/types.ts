export type Dict<T = any> = Record<string, T>;

export type CSSMap = Dict<{ value: string; var: string; varRef: string }>;

export type WithCSSVar<T> = T & {
  __cssVars: Dict;
  __cssMap: CSSMap;
};

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
