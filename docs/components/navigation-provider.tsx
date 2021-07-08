import * as React from "react";
import { isBrowser } from "@utils/isBrowser";
import { isMatchMedia, LG } from "@utils/mediaQuery";

export type NavigationContextType = {
  open: boolean;
  slideMode: boolean;
  setOpen: (open: boolean) => void;
  navRef: React.RefObject<HTMLElement | any>;
};

export const NavigationContext = React.createContext<
  NavigationContextType | undefined
>(undefined);

export default function AppProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [largeScreen, setLargeScreen] = React.useState(false);
  const prevOpen = React.useRef(open);
  const navRef = React.useRef<HTMLElement>();

  // close nav on click outside when viewport is less than 1024px
  React.useEffect(() => {
    function handleOutsideClick(e: any) {
      if (window.innerWidth < 1024) {
        if (!navRef.current?.contains(e.target)) {
          if (!open) return;
          setOpen(false);
        }
      }
    }
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [open, navRef]);

  React.useEffect(() => {
    function handleResize(e: any) {
      const large = isMatchMedia(LG);
      const first = !e;
      let open = false;

      if (first) {
        open = !large;
      } else {
        open = !(large && !prevOpen.current);
      }
      setLargeScreen(large);
      setOpen(open);
      prevOpen.current = open;
    }

    if (isBrowser) {
      window.addEventListener("resize", handleResize);
    }

    // Call handler right away so state gets updated with initial window size
    handleResize(null);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    prevOpen.current = open;
  }, [open]);

  const context = React.useMemo(
    () => ({
      open,
      slideMode: open && largeScreen,
      setOpen,
      navRef
    }),
    [open, largeScreen, setOpen]
  );

  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  );
}
