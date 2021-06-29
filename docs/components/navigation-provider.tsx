import * as React from "react";
import { isBrowser } from "@utils/isBrowser";
import { isMatchMedia, LG } from "@utils/mediaQuery";

export type NavigationContextType = {
  open: boolean;
  slideMode: boolean;
  setOpen: (open: boolean) => void;
};

export const NavigationContext = React.createContext<
  NavigationContextType | undefined
>(undefined);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [largeScreen, setLargeScreen] = React.useState(false);
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    function handleResize(e: any) {
      const large = isMatchMedia(LG);
      const first = !e;
      let open = false;

      if (first) {
        if (large) open = false;
        else open = true;
      } else {
        if (large && !prevOpen.current) {
          open = false;
        } else open = true;
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
    }),
    [open, largeScreen, setOpen]
  );

  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  );
}
