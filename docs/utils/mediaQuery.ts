/*
  The breakpoints of responsive grid follow BootStrap 4 media queries rules
  More info: https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints
*/
import { isBrowser } from "./isBrowser";

export const LG = "1024px";

export const isMatchMedia = (breakpoint: string) => {
  if (isBrowser) return window.matchMedia(`(max-width: ${breakpoint})`).matches;
  return false;
};
